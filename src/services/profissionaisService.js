const db = require("../database/connection");

module.exports = {
  listar() {
    return db("profissionais").select("*");
  },

  buscarPorId(id) {
    return db("profissionais").where({ id }).first();
  },

  async criar(data) {
    const [id] = await db("profissionais").insert(data);
    return this.buscarPorId(id);
  },

  async atualizar(id, data) {
    await db("profissionais").where({ id }).update(data);
    return this.buscarPorId(id);
  },

  deletar(id) {
    return db("profissionais").where({ id }).del();
  }
};
