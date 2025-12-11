const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API DoseCerta",
      version: "1.0.0",
      description: "Documentação da API REST do sistema DoseCerta",
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Servidor local",
      },
    ],
  },

  apis: ["./src/routes/*.js"], // <- Aqui o swagger lê as rotas
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log("Swagger disponível em: http://localhost:3001/api-docs");
}

module.exports = swaggerDocs;
