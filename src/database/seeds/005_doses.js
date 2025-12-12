exports.seed = async function (knex) {
  await knex('doses').del();

  await knex('doses').insert([
    {
      id: 1,
      vacina_id: 1,
      nome_paciente: "João Silva",
      cpf_paciente: "11122233344",
      data_aplicacao: "2025-12-01",
      lote: "L123",
      quantidade: 1,
      profissional_nome: "Maria"
    }
  ]);
};
