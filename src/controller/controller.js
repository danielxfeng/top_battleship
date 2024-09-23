import Ship from "../model/ship";
import Player from "../model/player";
import { Stage, Direction } from "../model/enums";
import uiController from "./ui_controller";

const rand = (limit) => {
  return Math.floor(Math.random() * 1000) % limit;
};

const Controller = () => {
  const _length = 10;
  const _players = 2;
  let _shipList = [];
  let _playerList = [];
  let _attacked = [];
  let _isUserAttackTurn = false;

  const _generateShips = (player) => {
    let ships = [];
    for (let i = 0; i < 4; i++) {
      ships.push(Ship(`Player-${player}-ship-${i}`, i + 2));
    }
    return ships;
  };

  const _init = () => {
    for (let i = 0; i < _players; i++) {
      const ships = _generateShips(i);
      const isAuto = i === 1;
      const player = Player(i, ships, isAuto, _length);
      _shipList.push(ships);
      _playerList.push(player);
      _attacked.push(new Set());
    }
    _playerList.forEach((player) =>
      player.setOpposite(_playerList.find((p) => p !== player))
    );
  };

  const startPlaceShips = () => {
    _playerList.forEach((player) => player.setStage(Stage.Placing));
    _playerList.forEach((player) => _placeShips(player));
  };

  const _placeShips = (player) => {
    return player.getIsAuto()
      ? _autoPlaceShips(player)
      : uiController.enableUserPlaceShips(player);
  };

  const _autoPlaceShips = (player) => {
    _shipList[player.getIdx()].forEach((ship) => {
      while (true) {
        const point = `${rand(_length)}-${rand(_length)}`;
        const direction = rand(2);
        const positions = player.placeShip(ship, point, direction);
        if (positions) {
          uiController.displayShip(player, positions);
          break;
        }
      }
    });
    _isReadyForAttackingStage();
  };

  const placeShipByUser = (
    playerIdx,
    shipName,
    start,
    direction = Direction.Vertical
  ) => {
    const player = _playerList[parseInt(playerIdx)];
    if (!player || player.getIsAuto())
      return uiController.msg("err", "Illegal player or ship.");
    let ship;
    let positions;
    try {
      ship = _shipList[playerIdx].find((ship) => ship.get().name === shipName);
      positions = player.placeShip(ship, start, direction);
    } catch {
      return uiController.msg("err", "Illegal ship.");
    }
    if (positions) {
      uiController.displayShip(player, positions);
      if (player.placed()) _isReadyForAttackingStage();
    }
  };

  const _isReadyForAttackingStage = () => {
    const shipsPlaced = _playerList.every((player) => player.placed());
    if (shipsPlaced) {
      uiController.disableUserPlaceShips();
      uiController.enableUserCanStartAttack();
    }
  };

  const startAttack = () => {
    _playerList.forEach((player) => player.setStage(Stage.Attacking));
    _isUserAttackTurn = true;
    uiController.enableUserAttacking(
      _playerList.find((player) => !player.getIsAuto())
    );
  };

  const _autoAttack = (player) => {
    if (_isUserAttackTurn) return;
    let point;
    while (!point || _attacked[player.getIdx()].has(point)) {
      point = `${rand(_length)}-${rand(_length)}`;
    }
    _attack(player, point);
    if (!_tryGameOver()) _isUserAttackTurn = true;
  };

  const _tryGameOver = () => {
    const losedPlayer = _playerList.find((player) => player.lose());
    if (losedPlayer) {
      _isUserAttackTurn = false;
      uiController.disableUserAttacking();
      uiController.setGameOver(losedPlayer);
      _playerList.forEach((player) => player.setStage(Stage.Over));
      return true;
    }
    return false;
  };

  const _attack = (player, point) => {
    _attacked[player.getIdx()].add(point);
    const ship = player.attack(point);
    if (ship !== undefined) {
      if (ship) ship.hit();
      uiController.displayAttacked(point);
    }
  };

  const attackByUser = (playerIdx, point) => {
    if (!_isUserAttackTurn) return;
    const player = _playerList[parseInt(playerIdx)];
    if (!player || player.getIsAuto())
      return uiController.msg("err", "Illegal player.");
    if (_attacked[player.getIdx()].has(point)) return;
    _attack(player, point);
    if (!_tryGameOver()) {
      _isUserAttackTurn = false;
      const autoPlayer = _playerList.find((p) => p.getIsAuto());
      _autoAttack(autoPlayer);
    }
  };

  _init();

  return { startPlaceShips, placeShipByUser, startAttack, attackByUser };
};

const controller = Controller();
export default controller;
