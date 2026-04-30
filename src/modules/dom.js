export const renderBoard = (containerId, gameboard, handleAttack, isEnemy = false) => {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Bersihkan papan sebelum render ulang

  // Kita asumsikan papan 10x10 sesuai standar Battleship
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      
      // Tandai koordinat untuk memudahkan debugging/event
      cell.dataset.x = x;
      cell.dataset.y = y;

      // Logic menampilkan kapal milik pemain sendiri (bukan lawan)
      if (!isEnemy) {
        const hasShip = gameboard.ships.some(shipObj => 
          shipObj.coordinates.some(coord => coord[0] === x && coord[1] === y)
        );
        if (hasShip) cell.classList.add('ship');
      }

      // Tandai serangan yang kena (Hit)
      const isHit = gameboard.hits.some(h => h[0] === x && h[1] === y);
      if (isHit) cell.classList.add('hit');

      // Tandai serangan yang meleset (Miss)
      const isMiss = gameboard.missedAttacks.some(m => m[0] === x && m[1] === y);
      if (isMiss) cell.classList.add('miss');

      // Tambahkan event listener hanya pada papan musuh untuk menyerang
      if (isEnemy && !isHit && !isMiss && handleAttack) {
        cell.addEventListener('click', () => handleAttack(x, y));
      }

      container.appendChild(cell);
    }
  }
};

export const updateStatus = (message) => {
  const statusEl = document.getElementById('status-message');
  if (statusEl) statusEl.textContent = message;
};