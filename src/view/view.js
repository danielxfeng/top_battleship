import { Direction } from "../model/enums";
import controller from "../controller/controller";

const View = () => {
  const init = (params) => {
    const { length, ships } = params;
    const msg = document.getElementById("msg");
    msg.innerHTML = "";
    const battleZone = document.getElementById("battle_zone");
    battleZone.innerHTML = "";
    for (let i = 0; i < 2; i++) {
      const board = document.createElement("div");
      board.id = `board-${i}`;
      board.classList.add("board");
      for (let j = 0; j < length; j++) {
        const row = document.createElement("div");
        row.classList.add("board_row");
        for (let k = 0; k < length; k++) {
          const cell = document.createElement("div");
          cell.classList.add("board_cell");
          cell.classList.add(`cell_player_${i}`);
          cell.id = `${i}_${j}-${k}`;
          row.appendChild(cell);
        }
        board.appendChild(row);
      }
      battleZone.appendChild(board);
    }

    const shipList = document.getElementById("ships");
    const lable = document.createElement("label");
    lable.for = "ship";
    lable.textContent = "Select a ship:";
    shipList.appendChild(lable);
    for (let i = 0; i < ships.length; i++) {
      const shipLabel = document.createElement("label");
      const shipInput = document.createElement("input");
      shipInput.type = "radio";
      shipInput.name = "ship";
      shipInput.value = ships[i].get().name;
      shipInput.id = ships[i].get().name;
      shipLabel.appendChild(shipInput);
      shipLabel.appendChild(
        document.createTextNode(" " + "●".repeat(ships[i].get().length))
      );
      shipList.appendChild(shipLabel);
    }

    const newGame = document.getElementById("start_new_game");
    newGame.addEventListener("click", () => {
        controller.init();
        controller.startPlaceShips();
    });
  };

  return {
    init,
  };
};

const view = View();
export default view;
