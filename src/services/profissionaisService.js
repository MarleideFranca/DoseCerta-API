const db = require("../database/connection");

module.exports = {
  listar() {
    return db("profissionais").select("*");
  },

  buscarPorId(id) {
    return db("profissionais").where({ id }).first();
  },

 
  async criar(data) {
  console.log("SERVICE RECEBEU:", data);

  const { nome, cpf, cns, cbo, municipio, uf } = data || {};

  if (!nome || !cpf) {
    throw new Error("Campos obrigatórios: nome e cpf");
  }

  const payload = {
    nome,
    cpf,
    cns: cns || null,
    cbo: cbo || null,
    municipio: municipio || null,
    uf: uf || null
  };

  console.log("PAYLOAD FINAL:", payload);

  const [id] = await db("profissionais").insert(payload);
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
