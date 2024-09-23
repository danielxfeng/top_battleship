import { Stage, Direction } from "../model/enums";

const UiController = () => {

  const msg = (type, info) => {
    return;
  };

  const enableUserPlaceShips = player => {
    return;
  };

  const disableUserPlaceShips = () => {
    return;
  };

  const displayShip = (player, positions) => {
    return;
  };

  const enableUserCanStartAttack = () => {
    return;
  };

  const enableUserAttacking = player => {
    return;
  };

  const displayAttacked = point => {
    return;
  };

  const disableUserAttacking = () => {
    return;
  };

  const setGameOver = player => {
    return;
  };

  const placeShip = () => {
    return;
  }

  const attack = () => {
    return;
  }

  return {
    msg,
    enableUserPlaceShips,
    disableUserPlaceShips,
    displayShip,
    enableUserCanStartAttack,
    enableUserAttacking,
    disableUserAttacking,
    displayAttacked,
    setGameOver,
    placeShip,
    attack
  };
};

const uiController = UiController();
export default uiController;
