const service = require("../services/transferenciasService");

module.exports = {
  async listar(req, res) {
    try {
      const rows = await service.listar();
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao listar transferências" });
    }
  },

  async buscarPorId(req, res) {
    try {
      const item = await service.buscarPorId(req.params.id);
      if (!item) return res.status(404).json({ error: "Transferência não encontrada" });
      res.json(item);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar transferência" });
    }
  },

  async criar(req, res) {
    try {
      const criado = await service.criar(req.body);
      res.status(201).json(criado);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao criar transferência" });
    }
  },

  async atualizar(req, res) {
    try {
      const existe = await service.buscarPorId(req.params.id);
      if (!existe) return res.status(404).json({ error: "Transferência não encontrada" });

      const atualizado = await service.atualizar(req.params.id, req.body);
      res.json(atualizado);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao atualizar transferência" });
    }
  },

  async deletar(req, res) {
    try {
      const existe = await service.buscarPorId(req.params.id);
      if (!existe) return res.status(404).json({ error: "Transferência não encontrada" });

      await service.deletar(req.params.id);
      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao deletar transferência" });
    }
  }
};
