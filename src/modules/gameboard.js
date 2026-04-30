import Ship from './ship.js';

export default class Gameboard {
  constructor() {
    this.boardSize = 10;
    this.ships = [];
    this.missedAttacks = [];
    this.hits = [];
  }

  placeShip(length, x, y, isVertical = false) {
    const newShip = {
      ship: new Ship(length),
      coordinates: []
    };

    for (let i = 0; i < length; i++) {
      const coord = isVertical ? [x, y + i] : [x + i, y];
      newShip.coordinates.push(coord);
    }
    this.ships.push(newShip);
  }

  receiveAttack(x, y) {
    for (const shipObj of this.ships) {
      for (const coord of shipObj.coordinates) {
        if (coord[0] === x && coord[1] === y) {
          shipObj.ship.hit();
          this.hits.push([x, y]);
          return true; // Hit
        }
      }
    }
    this.missedAttacks.push([x, y]);
    return false; // Miss
  }

  allShipsSunk() {
    return this.ships.every(shipObj => shipObj.ship.isSunk());
  }
}