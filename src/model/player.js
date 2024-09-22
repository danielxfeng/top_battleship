import Gameboard from "./gameboard";
import { Stage, Direction } from "./enums";

const Player = (idx, ships, isAuto = false, length = 10) => {
  const _idx = idx;
  const _isAuto = isAuto;
  const _length = length;
  const _ships = ships;
  const _gameBoard = Gameboard(_length);
  let _placed = 0;
  let _stage = Stage.Over;
  let _opposite = null;

  const getIdx = () => {
    return _idx;
  };

  const getIsAuto = () => {
    return _isAuto;
  };

  const placed = () => {
    return _placed >= _ships.length;
  };

  const setStage = (stage) => {
    if (!Object.values(Stage).includes(stage))
      throw new Error("Illegal stage value.");
    _stage = stage;
  };

  const setOpposite = (player) => {
    _opposite = player;
  };

  const placeShip = (ship, start, direction = Direction.Vertical) => {
    if (_stage !== Stage.Placing) return null;
    if (!_ships.includes(ship)) throw new Error("Illegal ship.");
    const [x, y] = start.split("-").map(Number);
    let positions = [];
    if (direction === Direction.Vertical) {
      for (let i = 0; i < ship.get().length; i++) {
        positions.push(`${x}-${y + i}`);
      }
    } else if (direction === Direction.Horizontal) {
      for (let i = 0; i < ship.get().length; i++) {
        positions.push(`${x + i}-${y}`);
      }
    } else {
      throw new Error("Illegal direction value.");
    }
    if (_gameBoard.placeShip(ship, positions)) {
      _placed++;
      return positions;
    }
    return null;
  };

  const attack = (point) => {
    if (_stage !== Stage.Attacking) return undefined;
    if (!_opposite) throw new Error("No opposite board.");
    return _opposite.receiveAttack(point);
  };

  const receiveAttack = (point) => {
    if (_stage !== Stage.Attacking) return undefined;
    return _gameBoard.receiveAttack(point);
  };

  const lose = () => {
    return _gameBoard.lose();
  };

  return {
    getIdx,
    getIsAuto,
    placed,
    setStage,
    setOpposite,
    placeShip,
    attack,
    receiveAttack,
    lose,
  };
};

export default Player;
