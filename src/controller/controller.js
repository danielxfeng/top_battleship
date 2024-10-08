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
  const _user = 0;
  const _computer = 1;
  let _shipList = [];
  let _playerList = [];
  let _attacked = [];
  let _isUserAttackTurn = false;

  const getInitParams = () => {
    return { length: _length, ships: _shipList[0] };
  }

  const _generateShips = (player) => {
    let ships = [];
    for (let i = 0; i < 4; i++) {
      ships.push(Ship(`player-${player}-ship-${i}`, i + 2));
    }
    return ships;
  };

  const init = () => {
    _shipList = [];
    _playerList = [];
    _attacked = [];
    _isUserAttackTurn = false;
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
    uiController.clear();
  };

  const startPlaceShips = () => {
    _playerList.forEach((player) => player.setStage(Stage.Placing));
    _playerList.forEach((player) => _placeShips(player));
    uiController.msg("info", "Choose the ships and the direction, then click on the board to place.");
  };

  const _placeShips = (player) => {
    return player === _playerList[_computer]
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
          uiController.hideShip(player, positions);
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
    if (!shipName || !start) return;
    const player = _playerList[parseInt(playerIdx)];
    if (!player || player === _playerList[_computer])
      return uiController.msg("err", "Illegal player or ship.");
    let ship;
    let res;
    try {
      ship = _shipList[playerIdx].find((ship) => ship.get().name === shipName);
      res = player.placeShip(ship, start, direction);
    } catch {
      return uiController.msg("err", "Illegal ship.");
    }
    if (res) {
      uiController.displayShip(player, res);
      if (player.placed()) _isReadyForAttackingStage();
    }
  };

  const _isReadyForAttackingStage = () => {
    const shipsPlaced = _playerList.every((player) => player.placed());
    if (shipsPlaced) {
      uiController.enableUserCanStartAttack();
      uiController.msg("info", "All ships are placed. Click Start Attack to attack.");
    }
  };

  const startAttack = () => {
    uiController.disableUserPlaceShips(_playerList[_user]);
    _playerList.forEach((player) => player.setStage(Stage.Attacking));
    _isUserAttackTurn = true;
    uiController.enableUserAttacking(_playerList[_user]);
    uiController.msg("info", "Click on the opposite's board to attack.");
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
      uiController.disableUserAttacking(_playerList[_computer]);
      const result = losedPlayer.getIdx() === 0 ? "You Lose!" : "You Win!";
      uiController.setGameOver(result);
      _playerList.forEach((player) => player.setStage(Stage.Over));
      return true;
    }
    return false;
  };

  const _attack = (player, point) => {
    _attacked[player.getIdx()].add(point);
    const ship = player.attack(point);
    if (ship !== undefined) {
      let isHit = false;
      if (ship) {
        ship.hit();
        isHit = true;
      }
      uiController.displayAttacked(player.getOpposite(), point, isHit);
    }
  };

  const attackByUser = (playerIdx, point) => {
    if (playerIdx === null || playerIdx === undefined || !point) return;
    if (!_isUserAttackTurn) return;
    const player = _playerList[parseInt(playerIdx)];
    if (!player || player.getIsAuto())
      return uiController.msg("err", "Illegal player.");
    if (_attacked[player.getIdx()].has(point)) return;
    _attack(player, point);
    if (!_tryGameOver()) {
      _isUserAttackTurn = false;
      _autoAttack(_playerList[_computer]);
    }
  };

  init();

  return { init, getInitParams, startPlaceShips, placeShipByUser, startAttack, attackByUser };
};

const controller = Controller();
export default controller;
