module.exports = {
  profissionais: [
    {
      id: 1,
      nome: "Maria",
      cpf: "12345678900",
      cns: "987654321",
      cbo: "2231",
      municipio: "Recife",
      uf: "PE"
    }
  ],

  unidades: [
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
  ],

  vacinas: [
    {
      id: 1,
      nome_vacina: "Covid-19",
      fabricante: "Pfizer",
      lote: "L123",
      validade: "2025-12-31",
      protecao: "Imunização",
      quantidade: 100,
      data_cadastro: "2025-11-29",
      nome_profissional: "Maria",
      cpf_profissional: "12345678900"
    }
  ],

  transferencias: [
    {
      id: 1,
      vacina_id: 1,
      estabelecimento_origem: 1,
      estabelecimento_destino: 2,
      quantidade_transferida: 20,
      data_transferencia: "2025-11-29",
      nome_profissional: "ERNANI REIS",
      cpf_profissional: "98765432100"
    }
  ]
};
