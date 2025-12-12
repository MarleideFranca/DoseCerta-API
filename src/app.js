const express = require("express");
const cors = require("cors");

const profissionaisRoutes = require("./routes/profissionaisRoutes");
const unidadesRoutes = require("./routes/unidadesRoutes");
const vacinasRoutes = require("./routes/vacinasRoutes");
const transferenciasRoutes = require("./routes/transferenciasRoutes");
const dosesRoutes = require("./routes/dosesRoutes");
const agendamentosRoutes = require("./routes/agendamentosRoutes");

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
app.use("/doses", dosesRoutes);
app.use("/agendamentos", agendamentosRoutes);

// Rota inicial
app.get("/", (req, res) => {
  res.send("API DoseCerta funcionando!");
});

//swagger
swaggerDocs(app);

module.exports = app;
