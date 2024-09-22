import Player from "../src/model/player";
import Ship from "../src/model/ship";
import { Stage, Direction } from "../src/model/enums"

let player1;
let player2;
let ships1;
let ships2;

const createShips = (player) => {
  let ships = [];
  for (let i = 0; i < 3; i++) {
    ships.push(Ship(`player${player}-ship${i}`, i + 1));
  }
  return ships;
};

beforeEach(() => {
  ships1 = createShips(1);
  ships2 = createShips(2);
  player1 = Player(1, ships1);
  player2 = Player(2, ships2);
});

test("getIdx test", () => {
  expect(player1.getIdx()).toBe(1);
})

test("getIsAuto test", () => {
  expect(player1.getIsAuto()).toBeFalsy();
});

test("setStage normal case", () => {
  player1.setStage(Stage.Attacking);
  expect(player1.placeShip(ships1[0], "0-0")).toBeNull();
  expect(() => player1.attack("0-0")).toThrow();
});

test("setStage normal case, outbound stage", () => {
  expect(() => player1.setStage(3)).toThrow();
});

test("setOpposite, normal case", () => {
  player1.setOpposite(player2);
  player1.setStage(Stage.Attacking);
  player2.setStage(Stage.Attacking);
  expect(player1.attack("0-0")).toBeNull();
});

test("placeShip, normal case1", () => {
  player1.setStage(Stage.Placing);
  expect(player1.placeShip(ships1[1], "0-0")).toEqual(["0-0", "0-1"]);
});

test("placeShip, normal case2", () => {
  player1.setStage(Stage.Placing);
  expect(player1.placeShip(ships1[1], "0-0", Direction.Horizontal)).toEqual(["0-0", "1-0"]);
});

test("placeShip, occupied case", () => {
  player1.setStage(Stage.Placing);
  expect(player1.placeShip(ships1[1], "0-0", Direction.Horizontal)).toEqual(["0-0", "1-0"]);
  expect(player1.placeShip(ships1[2], "1-0", Direction.Horizontal)).toBeNull();
});

test("placeShip, outbound case", () => {
  player1.setStage(Stage.Placing);
  expect(player1.placeShip(ships1[1], "9-9", Direction.Horizontal)).toBeNull();
});

test("placeShip, illegal ship", () => {
  player1.setStage(Stage.Placing);
  const ship = Ship("s", 1);
  expect(() => {player1.placeShip(ship, "5-5")}).toThrow();
});

test("placeShip, illegal direction", () => {
  player1.setStage(Stage.Placing);
  expect(() => {player1.placeShip(ships1[1], "0-0", 2)}).toThrow();
});

test("attack and receive attacking, normal case", () => {
  player2.setStage(Stage.Placing);
  expect(player2.placeShip(ships2[1], "0-0", Direction.Horizontal)).toEqual(["0-0", "1-0"]);
  player1.setOpposite(player2);
  player1.setStage(Stage.Attacking);
  player2.setStage(Stage.Attacking);
  expect(player1.attack("0-0")).toEqual(ships2[1]);
});

test("attack and receive attacking, duplicated attack case", () => {
  player2.setStage(Stage.Placing);
  expect(player2.placeShip(ships2[1], "0-0", Direction.Horizontal)).toEqual(["0-0", "1-0"]);
  player1.setOpposite(player2);
  player1.setStage(Stage.Attacking);
  player2.setStage(Stage.Attacking);
  expect(player1.attack("0-0")).toEqual(ships2[1]);
  expect(player1.attack("0-0")).toBeUndefined();
});

test("attack and receive attacking, missed attack case", () => {
  player2.setStage(Stage.Placing);
  expect(player2.placeShip(ships2[1], "0-0", Direction.Horizontal)).toEqual(["0-0", "1-0"]);
  player1.setOpposite(player2);
  player1.setStage(Stage.Attacking);
  player2.setStage(Stage.Attacking);
  expect(player1.attack("2-2")).toBeNull();
});

test("attack and receive attacking, illegal stage", () => {
  expect(player1.attack("2-2")).toBeUndefined();
  expect(player1.receiveAttack("2-2")).toBeUndefined();
});

test("lose, normal case1", () => {
  player2.setStage(Stage.Placing);
  expect(player2.placeShip(ships2[1], "0-0", Direction.Horizontal)).toEqual(["0-0", "1-0"]);
  player1.setOpposite(player2);
  player1.setStage(Stage.Attacking);
  player2.setStage(Stage.Attacking);
  expect(player2.lose()).toBeFalsy();
});

test("lose, normal case2", () => {
  player2.setStage(Stage.Placing);
  expect(player2.placeShip(ships2[0], "0-0")).toEqual(["0-0"]);
  expect(player2.placeShip(ships2[1], "1-0")).toEqual(["1-0", "1-1"]);
  expect(player2.placeShip(ships2[2], "2-0")).toEqual(["2-0", "2-1", "2-2"]);
  player1.setOpposite(player2);
  player1.setStage(Stage.Attacking);
  player2.setStage(Stage.Attacking);
  ships2[0].hit();
  ships2[1].hit();
  ships2[1].hit();
  ships2[2].hit();
  ships2[2].hit();
  ships2[2].hit();
  expect(player2.lose()).toBeTruthy();
});

test("placed normal case", () => {
  player2.setStage(Stage.Placing);
  expect(player2.placeShip(ships2[0], "0-0")).toEqual(["0-0"]);
  expect(player2.placeShip(ships2[1], "1-0")).toEqual(["1-0", "1-1"]);
  expect(player2.placeShip(ships2[2], "2-0")).toEqual(["2-0", "2-1", "2-2"]);
  expect(player2.placed()).toBeTruthy();
})

test("placed false case", () => {
  player2.setStage(Stage.Placing);
  expect(player2.placeShip(ships2[0], "0-0")).toEqual(["0-0"]);
  expect(player2.placeShip(ships2[1], "1-0")).toEqual(["1-0", "1-1"]);
  expect(player2.placed()).toBeFalsy();
})
