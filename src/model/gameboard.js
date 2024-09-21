const Gameboard = (length = 10) => {
  const _length = length;
  let _ships = [];
  let _attacked = [];

  const placeShip = (ship, points) => {
    const isValid = points.every(point => _validPoint(point));
    if (!isValid) return false;
    const occupied = points.some((point) => _occupied(point, ship));
    if (occupied) return false;
    _ships.push([ship, points]);
    return true;
  };

  const _validPoint = (point) => {
    const [x, y] = point.split("-");
    return x >= 0 && y >= 0 &&  x < _length &&  y < _length;
  };

  const _occupied = (point, ship) => {
    _ships = _ships.filter(list => list[0] !== ship);
    return _ships.some((list) => list[1].includes(point));
  };

  const receiveAttack = (point) => {
    if (!_validPoint(point) || _attacked.includes(point) ) return undefined;
    _attacked.push(point);
    let hit = _ships.find(list => list[1].includes(point));
    if (hit) return hit[0];
    return null;
  };

  const lose = () => {
    return _ships.length && _ships.every(list => list[0].isSunk());
  };

  return { placeShip, receiveAttack, lose };
};

export default Gameboard;
