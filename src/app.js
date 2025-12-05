const express = require("express");
const cors = require("cors");

const profissionaisRoutes = require("./routes/profissionaisRoutes");
const unidadesRoutes = require("./routes/unidadesRoutes");
const vacinasRoutes = require("./routes/vacinasRoutes");
const transferenciasRoutes = require("./routes/transferenciasRoutes");

// Implementando a documentação do BackEnd
const swaggerDocs = require("./config/swagger");

const app = express();
app.use(cors());
app.use(express.json());

// Rotas oficiais da API DoseCerta
app.use("/profissionais", profissionaisRoutes);
app.use("/unidades", unidadesRoutes);
app.use("/vacinas", vacinasRoutes);
app.use("/transferencias", transferenciasRoutes);

// Rota inicial
app.get("/", (req, res) => {
  res.send("API DoseCerta funcionando!");
});

//swagger
swaggerDocs(app);

module.exports = app;
