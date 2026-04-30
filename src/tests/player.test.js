import Player from '../player';
import Gameboard from '../gameboard';

describe('Player', () => {
  test('setiap player memiliki gameboard sendiri', () => {
    const player = new Player('Dery');
    expect(player.gameboard).toBeDefined();
    expect(player.gameboard instanceof Gameboard).toBe(true);
  });

  test('komputer dapat melakukan gerakan acak yang valid', () => {
    const computer = new Player('AI', true);
    const enemyBoard = new Gameboard();
    
    // Lakukan serangan
    computer.makeRandomMove(enemyBoard);
    
    // Total serangan (hit + miss) harus berjumlah 1
    const totalAttacks = enemyBoard.missedAttacks.length + enemyBoard.hits.length;
    expect(totalAttacks).toBe(1);
  });

  test('komputer tidak menyerang koordinat yang sama dua kali', () => {
    const computer = new Player('AI', true);
    const enemyBoard = new Gameboard();
    
    // Kita penuhi papan dengan serangan (contoh kecil 2x2 agar cepat)
    // Untuk tes ini, anggap papan hanya berukuran 2x2
    // Kita buat loop untuk menyerang sebanyak 4 kali
    for(let i = 0; i < 4; i++) {
        computer.makeRandomMove(enemyBoard);
    }
    
    const totalAttacks = enemyBoard.missedAttacks.length + enemyBoard.hits.length;
    expect(totalAttacks).toBe(4);
    
    // Pastikan tidak ada koordinat duplikat di missedAttacks atau hits
    const attacksJson = [...enemyBoard.missedAttacks, ...enemyBoard.hits].map(a => JSON.stringify(a));
    const uniqueAttacks = new Set(attacksJson);
    expect(uniqueAttacks.size).toBe(4);
  });
});