const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

// Buat table kalau belum ada
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS siswa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    height REAL,
    weight REAL,
    birthdate TEXT,
    married INTEGER
  )`);
});

module.exports = db;