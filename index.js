const express = require("express");
const bodyParser = require("body-parser");
const { crearTablas } = require("./models/client.js");
const router = require("./routes/routes.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
  await crearTablas();
  console.log("✅ Tablas creadas o ya existentes.");
})();

app.use("/", router);

app.listen(port, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${port}`);
});
