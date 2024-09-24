import { Stage, Direction } from "../model/enums";
import view from "../view/view";
import controller from "./controller";

const UiController = () => {

  let eventHandlersForPlacingShips = {};
  let eventHandlersForAttacking = {};

  const clear = () => {
    const msg = document.getElementById("msg");
    msg.innerHTML = "";
    const cells = document.querySelectorAll(".board_cell");
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("hit");
      cell.classList.remove("miss");
    });
    const ships = document.querySelectorAll('input[name="ship"]');
    ships.forEach((ship) => { ship.disabled = false; });
    const directions = document.querySelectorAll('input[name="direction"]');
    directions.forEach((direction) => { direction.disabled = false; });
    eventHandlersForAttacking = {};
    eventHandlersForPlacingShips = {};
  };

  const msg = (type, info) => {
    const msg = document.getElementById("msg");
    msg.innerHTML = "";
    const msgText = document.createElement("p");
    msgText.textContent = info;
    msgText.classList.add(type);
    msg.appendChild(msgText);
    if (type === "err") {
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);
    }
  };

  const enableUserPlaceShips = (player) => {
    const cells = document.querySelectorAll(`.cell_player_${player.getIdx()}`);
    cells.forEach((cell) => {
      if (!eventHandlersForPlacingShips[cell.id]) {
        eventHandlersForPlacingShips[cell.id] = handlePlacingShipsClick(player.getIdx());
        cell.addEventListener("click", eventHandlersForPlacingShips[cell.id]);
      }
    });
    const attackBtn = document.getElementById("start_attack");
    attackBtn.disabled = true;
    attackBtn.addEventListener("click", () => {controller.startAttack()});
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

  const disableUserPlaceShips = (player) => {
    const cells = document.querySelectorAll(`.cell_player_${player.getIdx()}`);
    cells.forEach((cell) => {
      cell.removeEventListener("click", eventHandlersForPlacingShips[cell.id]);
    });
    const ships = document.querySelectorAll('input[name="ship"]');
    ships.forEach((ship) => { ship.disabled = true; });
    const directions = document.querySelectorAll('input[name="direction"]');
    directions.forEach((direction) => { direction.disabled = true; });
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
    const attackBtn = document.getElementById("start_attack");
    attackBtn.disabled = false;
  };

  const enableUserAttacking = (player) => {
    const cells = document.querySelectorAll(`.cell_player_${player.getOpposite().getIdx()}`);
    cells.forEach((cell) => {
      if (!eventHandlersForAttacking[cell.id]) {
        eventHandlersForAttacking[cell.id] = handleAttackingClick(player.getIdx());
        cell.addEventListener("click", eventHandlersForAttacking[cell.id]);
      }
    });
  };

  const handleAttackingClick = (playerIdx) => (e) => {
    const point = e.target.id.split("_")[1];
    controller.attackByUser(playerIdx, point);
  };

  const displayAttacked = (player, point, isHit) => {
    const cell = document.getElementById(`${player.getIdx()}_${point}`);
    const text = isHit ? "ⓧ" : "✕";
    cell.innerText = text;
    cell.classList.add(isHit ? "hit" : "miss");
  };

  const disableUserAttacking = (player) => {
    const cells = document.querySelectorAll(`.cell_player_${player.getIdx()}`);
    cells.forEach((cell) => {
      cell.removeEventListener("click", eventHandlersForAttacking[cell.id]);
    });
  };

  const setGameOver = (info) => {
    msg("res", info);
  };

  return {
    clear,
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
