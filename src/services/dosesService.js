const db = require("../database/connection");

module.exports = {
  listar() {
    return db("doses").select("*");
  },

  buscarPorId(id) {
    return db("doses").where({ id }).first();
  },

  async criar(data) {
    const [id] = await db("doses").insert(data);
    return this.buscarPorId(id);
  },

  async atualizar(id, data) {
    await db("doses").where({ id }).update(data);
    return this.buscarPorId(id);
  },

  deletar(id) {
    return db("doses").where({ id }).del();
  }
};
