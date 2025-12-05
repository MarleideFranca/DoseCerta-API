const db = require("../data/db");

module.exports = {
  listar(req, res) {
    res.json(db.transferencias);
  },

  buscarPorId(req, res) {
    const id = Number(req.params.id);
    const item = db.transferencias.find(t => t.id === id);

    if (!item) {
      return res.status(404).json({ error: "Transferência não encontrada" });
    }

    res.json(item);
  },

  criar(req, res) {
    const novo = {
      id: db.transferencias.length + 1,
      ...req.body
    };

    db.transferencias.push(novo);
    res.status(201).json(novo);
  },

  atualizar(req, res) {
    const id = Number(req.params.id);
    const index = db.transferencias.findIndex(t => t.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Transferência não encontrada" });
    }

    db.transferencias[index] = { id, ...req.body };
    res.json(db.transferencias[index]);
  },

  deletar(req, res) {
    const id = Number(req.params.id);
    const index = db.transferencias.findIndex(t => t.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Transferência não encontrada" });
    }

    db.transferencias.splice(index, 1);
    res.status(204).send();
  }
};
