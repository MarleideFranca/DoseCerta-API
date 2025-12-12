exports.seed = async function (knex) {
  await knex('vacinas').del();

  await knex('vacinas').insert([
    {
      id: 1,
      nome_vacina: "Covid-19",
      fabricante: "Pfizer",
      lote: "L123",
      validade: "2025-12-31",
      protecao: "Imunização contra Covid-19",
      quantidade: 100,
      data_cadastro: "2025-11-29",
      nome_profissional: "Maria",
      cpf_profissional: "12345678900"
    },
    {
      id: 2,
      nome_vacina: "Influenza",
      fabricante: "Butantan",
      lote: "FLU2024",
      validade: "2025-06-30",
      protecao: "Imunização contra gripe",
      quantidade: 50,
      data_cadastro: "2025-11-30",
      nome_profissional: "Ernani Reis",
      cpf_profissional: "98765432100"
    }
  ]);
};
