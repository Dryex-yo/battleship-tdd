import Player from './modules/player.js';
import { renderBoard, updateStatus } from './modules/dom.js';

// 1. Inisialisasi Pemain
const player = new Player('Dery');
const computer = new Player('AI', true);

// 2. Tempatkan kapal (Pre-populated sesuai instruksi tugas)
// Punya Player
player.gameboard.placeShip(4, 0, 0, false); // Carrier
player.gameboard.placeShip(3, 2, 2, true);  // Cruiser
// Punya AI
computer.gameboard.placeShip(4, 5, 5, false);
computer.gameboard.placeShip(3, 1, 7, true);

let gameOver = false;

// 3. Fungsi Utama Game Loop
const gameLoop = (x, y) => {
  if (gameOver) return;

  // --- Giliran Player ---
  const hit = computer.gameboard.receiveAttack(x, y);
  
  if (computer.gameboard.allShipsSunk()) {
    gameOver = true;
    updateUI();
    alert('Selamat! Kamu Menang!');
    return;
  }

  // --- Giliran Komputer (jika game belum berakhir) ---
  if (!gameOver) {
    updateStatus("Komputer sedang berpikir...");
    setTimeout(() => {
      computer.makeRandomMove(player.gameboard);
      
      if (player.gameboard.allShipsSunk()) {
        gameOver = true;
        updateUI();
        alert('Maaf, Komputer Menang!');
      } else {
        updateStatus("Giliranmu!");
        updateUI();
      }
    }, 600); // Delay sedikit biar lebih natural
  }
  
  updateUI();
};

// 4. Update Tampilan
const updateUI = () => {
  renderBoard('player-board', player.gameboard, null, false);
  renderBoard('computer-board', computer.gameboard, gameLoop, true);
};

// Start Game
updateStatus("Game dimulai! Serang papan lawan.");
updateUI();