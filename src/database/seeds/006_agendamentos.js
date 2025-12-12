exports.seed = async function (knex) {
  await knex('agendamentos').del();

  await knex('agendamentos').insert([
    {
      id: 1,
      nome_paciente: "Ana Souza",
      cpf_paciente: "55566677788",
      data: "2025-12-15",
      vacina: "Covid-19"
    }
  ]);
};
