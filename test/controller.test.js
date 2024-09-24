import controller from "../src/controller/controller";
import uiController from "../src/controller/ui_controller";

jest.mock("../src/controller/ui_controller", () => ({
  msg: jest.fn(),
  enableUserPlaceShips: jest.fn(),
  disableUserPlaceShips: jest.fn(),
  displayShip: jest.fn(),
  enableUserCanStartAttack: jest.fn(),
  enableUserAttacking: jest.fn(),
  disableUserAttacking: jest.fn(),
  displayAttacked: jest.fn(),
  setGameOver: jest.fn(),
  clearBoard: jest.fn(),
}));

let computerShips;

beforeEach(() => {
  uiController.displayShip.mockClear();
  uiController.msg.mockClear();
});

test("startPlaceShips and auto placing logic", () => {
  controller.startPlaceShips();
  expect(uiController.enableUserPlaceShips).toHaveBeenCalled();
  expect(uiController.displayShip.mock.calls.length).toBe(4);
  expect(uiController.enableUserPlaceShips.mock.calls.length).toBe(1);
  let allPositions = new Set();
  for (let i = 0; i < 4; i++) {
    const positions = uiController.displayShip.mock.calls[i][1][0];
    expect(positions.length).toBe(i + 2);
    positions.forEach((position) => allPositions.add(position));
  }
  expect(allPositions.size).toBe(14);
  expect(uiController.enableUserPlaceShips).toHaveBeenCalledTimes(1);
  computerShips = allPositions;
});

test("place ships by user, invalid placement", () => {
  controller.placeShipByUser("1", "player-1-ship-0", "0-0", 0);
  controller.placeShipByUser("2", "player-0-ship-0", "0-0", 0);
  controller.placeShipByUser("0", "player-0-ship-5", "0-0", 0);
  expect(uiController.msg).toHaveBeenCalledTimes(3);
});

test("place ships by user, normal case", () => {
  controller.placeShipByUser("0", "player-0-ship-0", "0-0", 0);
  controller.placeShipByUser("0", "player-0-ship-1", "1-0", 0);
  controller.placeShipByUser("0", "player-0-ship-2", "2-0", 0);
  controller.placeShipByUser("0", "player-0-ship-3", "3-0", 0);
  controller.placeShipByUser("0", "player-0-ship-3", "2-0", 0);
  expect(uiController.displayShip.mock.calls.length).toBe(4);
  let allPositions = new Set();
  for (let i = 0; i < 4; i++) {
    const positions = uiController.displayShip.mock.calls[i][1][0];
    expect(positions.length).toBe(i + 2);
    positions.forEach((position) => allPositions.add(position));
  }
  expect(allPositions.size).toBe(14);
  expect(uiController.enableUserCanStartAttack.mock.calls.length).toBe(1);
  expect(uiController.disableUserPlaceShips).toHaveBeenCalledTimes(1);
  expect(uiController.enableUserCanStartAttack).toHaveBeenCalledTimes(1);
});

test("startAttack", () => {
  controller.startAttack();
  expect(uiController.enableUserAttacking).toHaveBeenCalledTimes(1);
});

test("startAttack invalid attack", () => {
  controller.attackByUser("2", "0-0");
  controller.attackByUser("1", "0-0");
  expect(uiController.msg).toHaveBeenCalledTimes(2);
});

test("startAttack, user attack", () => {
  const rand = () => {
    return Math.floor(Math.random() * 1000) % 10;
  };

  let p1;
  while (true) {
    p1 = `${rand()}-${rand()}`;
    if (!computerShips.has(p1)) break;
  }
  controller.attackByUser("0", p1);

  computerShips.forEach((point) => {controller.attackByUser("0", point)});

  let p2;
  while (true) {
    p2 = `${rand()}-${rand()}`;
    if (!computerShips.has(p2) && p1 !== p2) break;
  }
  controller.attackByUser("0", p2);
  controller.attackByUser("0", p2);
  expect(uiController.displayAttacked.mock.calls.length).toBeGreaterThanOrEqual(16);
  expect(uiController.disableUserAttacking).toHaveBeenCalledTimes(1);
  expect(uiController.setGameOver).toHaveBeenCalledTimes(1);
});

test("attackByUser", () => {});
