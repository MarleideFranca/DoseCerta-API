const db = require("../database/connection");

module.exports = {
  listar() {
    return db("unidades").select("*");
  },

  buscarPorId(id) {
    return db("unidades").where({ id }).first();
  },

  async criar(data) {
    const [id] = await db("unidades").insert(data);
    return this.buscarPorId(id);
  },

  async atualizar(id, data) {
    await db("unidades").where({ id }).update(data);
    return this.buscarPorId(id);
  },

  deletar(id) {
    return db("unidades").where({ id }).del();
  }
};
