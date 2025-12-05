const db = require("../data/db");

module.exports = {
  listar(req, res) {
    res.json(db.unidades);
  },

  buscarPorId(req, res) {
    const id = Number(req.params.id);
    const item = db.unidades.find(u => u.id === id);

    if (!item) {
      return res.status(404).json({ error: "Unidade não encontrada" });
    }

    res.json(item);
  },

  criar(req, res) {
    const novo = {
      id: db.unidades.length + 1,
      ...req.body
    };

    db.unidades.push(novo);
    res.status(201).json(novo);
  },

  atualizar(req, res) {
    const id = Number(req.params.id);
    const index = db.unidades.findIndex(u => u.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Unidade não encontrada" });
    }

    db.unidades[index] = { id, ...req.body };
    res.json(db.unidades[index]);
  },

  deletar(req, res) {
    const id = Number(req.params.id);
    const index = db.unidades.findIndex(u => u.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Unidade não encontrada" });
    }

    db.unidades.splice(index, 1);
    res.status(204).send();
  }
};
