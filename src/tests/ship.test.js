import Ship from '../modules/ship';

test('isSunk() returns false initially', () => {
  const ship = new Ship(3);
  expect(ship.isSunk()).toBe(false);
});

test('hit() increases hit count', () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('isSunk() returns true when hits equal length', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});