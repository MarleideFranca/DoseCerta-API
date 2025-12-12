exports.seed = async function (knex) {
  await knex('unidades').del();

  await knex('unidades').insert([
    {
      id: 1,
      cnes: "1234567",
      nome_fantasia: "Unidade Central",
      nome_empresarial: "Unidade de Saúde Central LTDA",
      tipo_estabelecimento: "Hospital",
      subtipo: "Geral",
      municipio: "Jaboatão",
      uf: "PE"
    },
    {
      id: 2,
      cnes: "7654321",
      nome_fantasia: "UBS Centro",
      nome_empresarial: "Unidade Básica de Saúde Centro",
      tipo_estabelecimento: "UBS",
      subtipo: "Básico",
      municipio: "Recife",
      uf: "PE"
    }
  ]);
};
