const db = require("../database/connection");

module.exports = {
  listar() {
    return db("transferencias").select("*");
  },

  buscarPorId(id) {
    return db("transferencias").where({ id }).first();
  },

  async criar(data) {
    const [id] = await db("transferencias").insert(data);
    return this.buscarPorId(id);
  },

  async atualizar(id, data) {
    await db("transferencias").where({ id }).update(data);
    return this.buscarPorId(id);
  },

  deletar(id) {
    return db("transferencias").where({ id }).del();
  }
};
