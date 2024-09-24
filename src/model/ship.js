const Ship = (name, length) => {
  const _name = name;
  const _length = length;
  let _hit = 0;

  const get = () => {
    return { name: _name, length: _length, hit: _hit };
  };
  const hit = () => {
    _hit++;
  };
  const isSunk = () => {
    return _hit >= _length;
  };

  return { get, hit, isSunk };
};

export default Ship;
