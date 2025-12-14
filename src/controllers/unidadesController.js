const service = require("../services/unidadesService");

module.exports = {
  async listar(req, res) {
    try {
      const rows = await service.listar();
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao listar unidades" });
    }
  },

  async buscarPorId(req, res) {
    try {
      const item = await service.buscarPorId(Number(req.params.id));
      if (!item) {
        return res.status(404).json({ error: "Unidade não encontrada" });
      }
      res.json(item);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar unidade" });
    }
  },

  async criar(req, res) {
    try {
      const criado = await service.criar(req.body);
      res.status(201).json(criado);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao criar unidade" });
    }
  },

  async atualizar(req, res) {
    try {
      const id = Number(req.params.id);

      const existe = await service.buscarPorId(id);
      if (!existe) {
        return res.status(404).json({ error: "Unidade não encontrada" });
      }

      // remove id do body para evitar update da PK
      const { id: _, ...dados } = req.body;

      const linhasAfetadas = await service.atualizar(id, dados);

      if (!linhasAfetadas) {
        return res.status(400).json({
          error: "Nenhuma alteração realizada"
        });
      }

      return res.json({
        message: "Unidade atualizada com sucesso"
      });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao atualizar unidade" });
    }
  },

  // Método deletar com tratamento de FK
  async deletar(req, res) {
    try {
      const id = Number(req.params.id);

      const existe = await service.buscarPorId(id);
      if (!existe) {
        return res.status(404).json({ error: "Unidade não encontrada" });
      }

      await service.deletar(id);
      return res.status(204).send();

    } catch (err) {
      // FK: unidade vinculada a transferências
      if (err.code === "ER_ROW_IS_REFERENCED_2") {
        return res.status(409).json({
          error:
            "Não é possível excluir a unidade porque existem transferências vinculadas a ela."
        });
      }

      console.error(err);
      return res.status(500).json({ error: "Erro ao deletar unidade" });
    }
  }
};
