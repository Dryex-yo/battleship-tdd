import Gameboard from './gameboard.js';

export default class Player {
  constructor(name, isComputer = false) {
    this.name = name;
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
  }

  // Khusus untuk AI: memilih koordinat acak yang belum diserang
  makeRandomMove(enemyBoard) {
    let x, y;
    let alreadyAttacked = true;

    while (alreadyAttacked) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      
      const allAttacks = [...enemyBoard.missedAttacks, ...enemyBoard.hits];
      alreadyAttacked = allAttacks.some(a => a[0] === x && a[1] === y);
    }
    return enemyBoard.receiveAttack(x, y);
  }
}