const db = require("../database/connection");

module.exports = {
  listar() {
    return db("vacinas").select("*");
  },

  buscarPorId(id) {
    return db("vacinas").where({ id }).first();
  },

  async criar(data) {
    const [id] = await db("vacinas").insert(data);
    return this.buscarPorId(id);
  },

  async atualizar(id, data) {
    await db("vacinas").where({ id }).update(data);
    return this.buscarPorId(id);
  },

  deletar(id) {
    return db("vacinas").where({ id }).del();
  }
};
