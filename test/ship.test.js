import Ship from "../src/model/ship";

let ship;

beforeEach(() => {
  ship = Ship("ship1", 2);
});

test("test createShip", () => {
  expect(ship.get()).toEqual({ name: "ship1", length: 2, hit: 0 });
});

test("test ship hit", () => {
  ship.hit();
  expect(ship.get()).toEqual({ name: "ship1", length: 2, hit: 1 });
});

test("test ship isSunk false", () => {
  expect(ship.isSunk()).toBeFalsy();;
});

test("test ship isSunk true", () => {
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
})
