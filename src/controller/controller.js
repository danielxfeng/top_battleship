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
  let _intervalId = null;
  let _shipList = [];
  let _playerList = [];

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
      _playerList.forEach((player) => player.setOpposite(_playerList.find(p => p !== player)));
    }
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
    const ship = _shipList[playerIdx].find((ship) => ship.get().name === shipName);
    if (!player || !ship) return uiController.msg("err", "Illegal player or ship.");
    const positions = player.placeShip(ship, start, direction);
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
    _playerList.forEach((player) => _setAttack(player));
  };

  const _setAttack = (player) => {
    return player.getIsAuto()
      ? (_intervalId = _autoAttack(player))
      : uiController.enableUserAttacking(player);
  };

  const _autoAttack = (player) => {
    return setInterval(() => {
      const point = `${rand(_length)}-${rand(_length)}`;
      const ship = player.attack(point);
      if (ship !== undefined) {
        if (ship) ship.hit();
        uiController.displayAttacked(point)
      };
      const losedPlayer = _playerList.find((player) => player.lose());
      if (losedPlayer) _setGameOver(losedPlayer);
    }, 500);
  };

  const _setGameOver = (losedPlayer) => {
    clearInterval(_intervalId);
    uiController.disableUserAttacking();
    uiController.setGameOver(losedPlayer);
  };

  const attackByUser = (playerIdx, point) => {
    const player = _playerList[parseInt(playerIdx)];
    if (!player || player.getIsAuto()) return uiController.msg("err", "Illegal player.");
    const ship = player.attack(point);
    if (ship !== undefined) {
      if (ship) ship.hit();
      uiController.displayAttacked(point);
    }
  };

  _init();

  return { startPlaceShips, placeShipByUser, startAttack, attackByUser };
};

const controller = Controller();
export default controller;
