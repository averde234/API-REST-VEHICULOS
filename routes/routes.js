const express = require("express");
const router = express.Router();
const {
  getVehiculos,
  getVehiculoById,
  getVehiculosByAgenciaCiudad,
  getVehiculosByMarca,
  getVehiculosByMaxPrecio,
  getVehiculosByMinPrecio,
  addVehiculo,
  updateVehiculo,
  deleteVehiculo
} = require("../controllers/vehiculosController");

router.get("/vehiculos", getVehiculos);
router.get("/vehiculos/:id", getVehiculoById);
router.get("/vehiculos/agencia/:ciudad", getVehiculosByAgenciaCiudad);
router.get("/vehiculos/marca/:marca", getVehiculosByMarca);
router.get("/vehiculos/precio/max/:maxprecio", getVehiculosByMaxPrecio);
router.get("/vehiculos/precio/min/:minprecio", getVehiculosByMinPrecio);
router.post("/vehiculos", addVehiculo);
router.put("/vehiculos/:id", updateVehiculo);
router.delete("/vehiculos/:id", deleteVehiculo);

module.exports = router;
