import { Stage, Direction } from "../model/enums";
import view from "../view/view";
import controller from "./controller";

const UiController = () => {
  const eventHandlers = {};

  const clearBoard = () => {
    const cells = document.querySelectorAll(".board_cell");
    cells.forEach((cell) => {
      cell.textContent = "";
    });
  };

  const msg = (type, info) => {
    const msg = document.getElementById("msg");
    msg.innerHTML = "";
    const msgText = document.createElement("p");
    msgText.textContent = info;
    msgText.classList.add(type);
    msg.appendChild(msgText);
    if (msg.type !== "res") {
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);
    }
  };

  const enableUserPlaceShips = (player) => {
    const cells = document.querySelectorAll(`.cell_player_${player.getIdx()}`);
    cells.forEach((cell) => {
      if (!eventHandlers[cell.id]) {
        eventHandlers[cell.id] = handlePlacingShipsClick(player.getIdx());
        cell.addEventListener("click", eventHandlers[cell.id]);
      }
    });
    const attackBtn = document.getElementById("start_attack");
    attackBtn.disabled = true;
    return;
  };

  const handlePlacingShipsClick = (playerIdx) => (e) => {
    const start = e.target.id.split("_")[1];
    let shipName;
    let direction;
    try {
      shipName = document.querySelector('input[name="ship"]:checked').value;
      direction = parseInt(document.querySelector(
        'input[name="direction"]:checked'
      ).value);
    } catch {
      return;
    }
    if (!shipName) return;
    controller.placeShipByUser(playerIdx, shipName, start, direction);
  };

  const disableUserPlaceShips = () => {
    return;
  };

  const displayShip = (player, positions) => {
    const [curr, previous] = positions;
    previous.forEach((point) => {
      const id = `${player.getIdx()}_${point}`;
      const cell = document.getElementById(id);
      cell.textContent = "";
    });
    curr.forEach((point) => {
      const id = `${player.getIdx()}_${point}`;
      const cell = document.getElementById(id);
      cell.textContent = "●";
    });
  };

  const enableUserCanStartAttack = () => {
    return;
  };

  const enableUserAttacking = (player) => {
    return;
  };

  const displayAttacked = (point) => {
    return;
  };

  const disableUserAttacking = () => {
    return;
  };

  const setGameOver = (player) => {
    return;
  };

  return {
    clearBoard,
    msg,
    enableUserPlaceShips,
    handlePlacingShipsClick,
    disableUserPlaceShips,
    displayShip,
    enableUserCanStartAttack,
    enableUserAttacking,
    disableUserAttacking,
    displayAttacked,
    setGameOver,
  };
};

const uiController = UiController();
export default uiController;
