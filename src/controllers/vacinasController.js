const service = require("../services/vacinasService");

function formatarDataParaMySQL(data) {
  if (!data) return null;
  return new Date(data).toISOString().split("T")[0];
}

module.exports = {
  async listar(req, res) {
    try {
      const rows = await service.listar();
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao listar vacinas" });
    }
  },

  async buscarPorId(req, res) {
    try {
      const item = await service.buscarPorId(req.params.id);
      if (!item) {
        return res.status(404).json({ error: "Vacina não encontrada" });
      }
      res.json(item);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar vacina" });
    }
  },

  async criar(req, res) {
    try {
      const dados = { ...req.body };

      dados.validade = formatarDataParaMySQL(dados.validade);
      dados.data_cadastro = formatarDataParaMySQL(dados.data_cadastro);

      const criado = await service.criar(dados);
      res.status(201).json(criado);

    } catch (err) {
      if (err.code === "ER_TRUNCATED_WRONG_VALUE") {
        return res.status(400).json({
          error: "Formato de data inválido"
        });
      }

      console.error(err);
      res.status(500).json({ error: "Erro ao criar vacina" });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const existe = await service.buscarPorId(id);

      if (!existe) {
        return res.status(404).json({ error: "Vacina não encontrada" });
      }

      // remove id do body para evitar update indevido
      const { id: _, ...dados } = req.body;

      dados.validade = formatarDataParaMySQL(dados.validade);
      dados.data_cadastro = formatarDataParaMySQL(dados.data_cadastro);

      const atualizado = await service.atualizar(id, dados);
      res.json(atualizado);

    } catch (err) {
      if (err.code === "ER_TRUNCATED_WRONG_VALUE") {
        return res.status(400).json({
          error: "Formato de data inválido"
        });
      }

      console.error(err);
      res.status(500).json({ error: "Erro ao atualizar vacina" });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const existe = await service.buscarPorId(id);

      if (!existe) {
        return res.status(404).json({ error: "Vacina não encontrada" });
      }

      await service.deletar(id);
      res.status(204).send();

    } catch (err) {
      if (err.code === "ER_ROW_IS_REFERENCED_2") {
        return res.status(409).json({
          error: "Vacina não pode ser excluída pois possui vínculos"
        });
      }

      console.error(err);
      res.status(500).json({ error: "Erro ao deletar vacina" });
    }
  }
};
