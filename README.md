# Battleship - Test Driven Development (TDD)

Proyek ini adalah implementasi game klasik **Battleship** yang dibangun menggunakan prinsip **Test Driven Development (TDD)**. Seluruh logika inti permainan (Ship, Gameboard, Player) diuji secara menyeluruh menggunakan **Jest** sebelum mengimplementasikan antarmuka pengguna (UI).

## 🚀 Fitur Utama

- **Logika Teruji (TDD)**: Memastikan fungsionalitas publik `Ship`, `Gameboard`, dan `Player` bekerja 100% sesuai spesifikasi melalui unit testing.
- **Manajemen Gameboard**: Penempatan kapal secara vertikal/horizontal, pelacakan serangan (hit/miss), dan deteksi status kekalahan (all ships sunk).
- **Artificial Intelligence (AI)**: Player komputer mampu melakukan gerakan acak yang valid dan tidak menyerang koordinat yang sama dua kali.
- **Modular JavaScript**: Menggunakan ES6 Modules untuk kode yang bersih dan terorganisir.

## 🛠️ Tech Stack

- **Language**: JavaScript (ES6+)
- **Testing Framework**: [Jest](https://jestjs.io/)
- **Compiler**: [Babel](https://babeljs.io/) (untuk dukungan ESM di Jest)
- **Environment**: Node.js

## 🧪 Hasil Pengujian (Current Status)

Semua komponen logika inti telah lulus uji:
```text
 PASS  src/tests/ship.test.js
 PASS  src/tests/gameboard.test.js
 PASS  src/tests/player.test.js

Test Suites: 3 passed, 3 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        9.193 s

```
## 📦 Instalasi & Setup

1. Inisialisasi Project:
    '''text
    Bash
    npm init -y
    ```

2. Instal Dependensi:
    '''text
    Bash
    npm install --save-dev jest babel-jest @babel/core @babel/preset-env
    ```

3. Jalankan Pengujian:
    '''text
    Bash
    npm test
    ```

## 📁 Struktur Proyek

- `src/` : Berisi file logika utama (`ship.js`, `gameboard.js`, `player.js`).
- `src/tests/` : Berisi kumpulan file pengujian unit (`ship.test.js`, `gameboard.test.js`, `player.test.js`).
- `babel.config.json` : Konfigurasi transpiler untuk mendukung sintaks ES6 di Jest.
- `.gitignore` : Mengabaikan `node_modules` dan file sampah lainnya.

## 📝 Konfigurasi Babel (`babel.config.json`)

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```
## Dibuat oleh Dery Supriyadi sebagai bagian dari kurikulum The Odin Project.

