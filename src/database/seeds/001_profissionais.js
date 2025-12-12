exports.seed = async function (knex) {
  await knex('profissionais').del();

  await knex('profissionais').insert([
    {
      id: 1,
      nome: "Maria",
      cpf: "12345678900",
      cns: "987654321",
      cbo: "2231",
      municipio: "Recife",
      uf: "PE"
    },
    {
      id: 2,
      nome: "Ernani Reis",
      cpf: "98765432100",
      cns: "111222333",
      cbo: "2235",
      municipio: "Jaboatão",
      uf: "PE"
    }
  ]);
};
