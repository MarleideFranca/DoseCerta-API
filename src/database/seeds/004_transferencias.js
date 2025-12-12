exports.seed = async function (knex) {
  await knex('transferencias').del();

  await knex('transferencias').insert([
    {
      id: 1,
      vacina_id: 1,
      estabelecimento_origem: 1,
      estabelecimento_destino: 2,
      quantidade_transferida: 20,
      data_transferencia: "2025-11-29",
      nome_profissional: "Ernani Reis",
      cpf_profissional: "98765432100"
    }
  ]);
};
