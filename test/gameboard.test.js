import Gameboard from "../src/model/gameboard";
import Ship from "../src/model/ship"

let gameboard;

beforeEach(() => {
    gameboard = Gameboard();
});

test("Add a new ship", () => {
    expect(gameboard.placeShip("ship", ["0-0", "0-1"])).toBeTruthy();
});

test("Add a new ship, outbound test", () => {
    expect(gameboard.placeShip("ship", ["0-10"])).toBeFalsy();
});

test("Add new ships", () => {
    expect(gameboard.placeShip("ship", ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.placeShip("ship2", ["2-0", "2-1"])).toBeTruthy();
});

test("Add new ships, occupied test", () => {
    expect(gameboard.placeShip("ship", ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.placeShip("ship2", ["2-0", "2-1"])).toBeTruthy();
})

test("Add new ships, duplicated ship test", () => {
    expect(gameboard.placeShip("ship", ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.placeShip("ship", ["2-0", "2-1"])).toBeTruthy();
})

test("Add new ships, add ships test, occupied test", () => {
    expect(gameboard.placeShip("ship", ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.placeShip("ship2", ["0-0", "2-1"])).toBeFalsy();
})

test("Add new ships, duplicated ship test, occupied test", () => {
    expect(gameboard.placeShip("ship", ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.placeShip("ship", ["2-0", "2-1"])).toBeTruthy();
    expect(gameboard.placeShip("ship2", ["0-0"])).toBeTruthy();
    expect(gameboard.placeShip("ship3", ["2-1"])).toBeFalsy();
})

test("Receive attack test, missed test", () => {
    expect(gameboard.placeShip("ship", ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.receiveAttack("0-2")).toBeNull();
})

test("Receive attack test, outbound test", () => {
    expect(gameboard.receiveAttack("0-11")).toBeUndefined();
})

test("Receive attack test, success attack test", () => {
    const ship1 = Ship("ship1", 2);
    expect(gameboard.placeShip(ship1, ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.receiveAttack("0-0")).toEqual(ship1);
})

test("Receive attack test, duplicated attack test", () => {
    const ship1 = Ship("ship1", 2);
    expect(gameboard.placeShip(ship1, ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.receiveAttack("0-0")).toEqual(ship1);
    expect(gameboard.receiveAttack("0-0")).toBeUndefined();
})

test("Lose test, losed test", () => {
    const ship1 = Ship("ship1", 2);
    const ship2 = Ship("ship2", 2);
    expect(gameboard.placeShip(ship1, ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.placeShip(ship2, ["1-0", "1-1"])).toBeTruthy();
    expect(gameboard.receiveAttack("0-0")).toEqual(ship1);
    ship1.hit();
    expect(gameboard.receiveAttack("0-1")).toEqual(ship1);
    ship1.hit();
    expect(gameboard.receiveAttack("1-0")).toEqual(ship2);
    ship2.hit();
    expect(gameboard.receiveAttack("1-1")).toEqual(ship2);
    ship2.hit();
    expect(gameboard.lose()).toBeTruthy();
})

test("Lose test, init test", () => {
    expect(gameboard.lose()).toBeFalsy();
})

test("Lose test, not lose test", () => {
    const ship1 = Ship("ship1", 2);
    const ship2 = Ship("ship2", 2);
    expect(gameboard.placeShip(ship1, ["0-0", "0-1"])).toBeTruthy();
    expect(gameboard.placeShip(ship2, ["1-0", "1-1"])).toBeTruthy();
    expect(gameboard.receiveAttack("0-0")).toEqual(ship1);
    ship1.hit();
    expect(gameboard.receiveAttack("0-1")).toEqual(ship1);
    ship1.hit();
    expect(gameboard.receiveAttack("1-1")).toEqual(ship2);
    ship2.hit();
    expect(gameboard.lose()).toBeFalsy();
})