const service = require("../services/transferenciasService");

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
      res.status(500).json({ error: "Erro ao listar transferências" });
    }
  },

  async buscarPorId(req, res) {
    try {
      const item = await service.buscarPorId(Number(req.params.id));
      if (!item) {
        return res.status(404).json({ error: "Transferência não encontrada" });
      }
      res.json(item);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar transferência" });
    }
  },

  async criar(req, res) {
    try {
      const dados = { ...req.body };

      dados.data_transferencia = formatarDataParaMySQL(
        dados.data_transferencia
      );

      const criado = await service.criar(dados);
      res.status(201).json(criado);

    } catch (err) {
      if (err.code === "ER_TRUNCATED_WRONG_VALUE") {
        return res.status(400).json({
          error: "Formato de data inválido"
        });
      }

      console.error(err);
      res.status(500).json({ error: "Erro ao criar transferência" });
    }
  },

  async atualizar(req, res) {
    try {
      const id = Number(req.params.id);

      const existe = await service.buscarPorId(id);
      if (!existe) {
        return res.status(404).json({ error: "Transferência não encontrada" });
      }

      // remove id do body
      const { id: _, ...dados } = req.body;

      // formata data
      dados.data_transferencia = formatarDataParaMySQL(
        dados.data_transferencia
      );

      const linhasAfetadas = await service.atualizar(id, dados);

      if (!linhasAfetadas) {
        return res.status(400).json({
          error: "Nenhuma alteração realizada"
        });
      }

      return res.json({
        message: "Transferência atualizada com sucesso"
      });

    } catch (err) {
      if (err.code === "ER_TRUNCATED_WRONG_VALUE") {
        return res.status(400).json({
          error: "Formato de data inválido"
        });
      }

      console.error(err);
      res.status(500).json({ error: "Erro ao atualizar transferência" });
    }
  },

  async deletar(req, res) {
    try {
      const id = Number(req.params.id);

      const existe = await service.buscarPorId(id);
      if (!existe) {
        return res.status(404).json({ error: "Transferência não encontrada" });
      }

      await service.deletar(id);
      res.status(204).send();

    } catch (err) {
      if (err.code === "ER_ROW_IS_REFERENCED_2") {
        return res.status(409).json({
          error:
            "Não é possível excluir a transferência pois existem vínculos relacionados"
        });
      }

      console.error(err);
      res.status(500).json({ error: "Erro ao deletar transferência" });
    }
  }
};
