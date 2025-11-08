const { createClient } = require("@libsql/client");
require("dotenv").config();

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function crearTablas() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS agencias (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      ciudad TEXT NOT NULL
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS vehiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      marca TEXT NOT NULL,
      modelo TEXT NOT NULL,
      color TEXT NOT NULL,
      precio REAL NOT NULL,
      stock INTEGER NOT NULL,
      agencia_id INTEGER,
      FOREIGN KEY (agencia_id) REFERENCES agencias(id)
    );
  `);
}

module.exports = { db, crearTablas };
