import Gameboard from '../modules/gameboard';

describe('Gameboard', () => {
  let board;

  beforeEach(() => {
    board = new Gameboard();
  });

  test('dapat menempatkan kapal pada koordinat tertentu', () => {
    board.placeShip(3, 0, 0, false); // Panjang 3, Horisontal di 0,0
    // Kita cek apakah koordinat tersebut terisi (logika internal)
    expect(board.ships.length).toBe(1);
  });

  test('receiveAttack mengirimkan sinyal hit ke kapal yang tepat', () => {
    board.placeShip(2, 2, 2, false); // Kapal di [2,2] dan [3,2]
    expect(board.receiveAttack(2, 2)).toBe(true); // Hit
    expect(board.ships[0].ship.hits).toBe(1);
  });

  test('receiveAttack mencatat koordinat serangan yang meleset (miss)', () => {
    board.placeShip(2, 0, 0, false);
    board.receiveAttack(5, 5); // Serang koordinat kosong
    expect(board.missedAttacks).toContainEqual([5, 5]);
  });

  test('allShipsSunk melaporkan true jika semua kapal tenggelam', () => {
    board.placeShip(1, 0, 0, false);
    board.receiveAttack(0, 0);
    expect(board.allShipsSunk()).toBe(true);
  });

  test('allShipsSunk melaporkan false jika ada kapal yang masih bertahan', () => {
    board.placeShip(1, 0, 0, false);
    board.placeShip(1, 5, 5, false);
    board.receiveAttack(0, 0);
    expect(board.allShipsSunk()).toBe(false);
  });
});