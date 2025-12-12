const db = require("../database/connection");

module.exports = {
  listar() {
    return db("agendamentos").select("*");
  },

  buscarPorId(id) {
    return db("agendamentos").where({ id }).first();
  },

  async criar(data) {
    const [id] = await db("agendamentos").insert(data);
    return this.buscarPorId(id);
  },

  async atualizar(id, data) {
    await db("agendamentos").where({ id }).update(data);
    return this.buscarPorId(id);
  },

  deletar(id) {
    return db("agendamentos").where({ id }).del();
  }
};
