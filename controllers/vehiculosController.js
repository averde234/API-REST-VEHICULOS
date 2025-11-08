const { db } = require("../models/client.js");

// Obtener todos los vehículos
exports.getVehiculos = async (req, res) => {
  try {
    const result = await db.execute("SELECT * FROM vehiculos");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener vehículo por ID
exports.getVehiculoById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.execute({
      sql: "SELECT * FROM vehiculos WHERE id = ?",
      args: [id],
    });

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Vehículo no encontrado" });

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Vehiculos por agencia
exports.getVehiculosByAgenciaCiudad = async (req, res) => {
  const { ciudad } = req.params;

  try {
    const result = await db.execute({
      sql: `
        SELECT v.*
        FROM vehiculos v
        JOIN agencias a ON v.agencia_id = a.id
        WHERE a.ciudad = ?
      `,
      args: [ciudad],
    });

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No se encontraron vehículos en esa ciudad" });
    }

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Vehículos por marca
exports.getVehiculosByMarca = async (req, res) => {
  try {
    const { marca } = req.params;
    const result = await db.execute({
      sql: "SELECT * FROM vehiculos WHERE marca = ?",
      args: [marca],
    });
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Vehículos por precio máximo
exports.getVehiculosByMaxPrecio = async (req, res) => {
  try {
    const { maxprecio } = req.params;
    const result = await db.execute({
      sql: "SELECT * FROM vehiculos WHERE precio >= ?",
      args: [maxprecio],
    });
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Vehículos por precio mínimo
exports.getVehiculosByMinPrecio = async (req, res) => {
  try {
    const { minprecio } = req.params;
    const result = await db.execute({
      sql: "SELECT * FROM vehiculos WHERE precio <= ?",
      args: [minprecio],
    });
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Registrar nuevo vehículo
exports.addVehiculo = async (req, res) => {
  try {
    const { marca, modelo, color, precio, stock, agencia_id } = req.body;
    await db.execute({
      sql: `INSERT INTO vehiculos (marca, modelo, color, precio, stock, agencia_id)
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [marca, modelo, color, precio, stock, agencia_id],
    });
    res.json({ message: "Vehículo agregado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar vehículo
exports.updateVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, modelo, color, precio, stock, agencia_id } = req.body;
    const result = await db.execute({
      sql: `UPDATE vehiculos
            SET marca=?, modelo=?, color=?, precio=?, stock=?, agencia_id=?
            WHERE id=?`,
      args: [marca, modelo, color, precio, stock, agencia_id, id],
    });
    if (result.rowsAffected === 0)
      return res.status(404).json({ message: "Vehículo no encontrado" });
    res.json({ message: "Vehículo actualizado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar vehículo
exports.deleteVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    await db.execute({
      sql: "DELETE FROM vehiculos WHERE id = ?",
      args: [id],
    });
    res.json({ message: "Vehículo eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
