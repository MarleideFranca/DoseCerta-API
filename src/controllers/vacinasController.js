const db = require("../data/db");

module.exports = {
  listar(req, res) {
    res.json(db.vacinas);
  },

  buscarPorId(req, res) {
    const id = Number(req.params.id);
    const item = db.vacinas.find(v => v.id === id);

    if (!item) {
      return res.status(404).json({ error: "Vacina não encontrada" });
    }

    res.json(item);
  },

  criar(req, res) {
    const novo = {
      id: db.vacinas.length + 1,
      ...req.body
    };

    db.vacinas.push(novo);
    res.status(201).json(novo);
  },

  atualizar(req, res) {
    const id = Number(req.params.id);
    const index = db.vacinas.findIndex(v => v.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Vacina não encontrada" });
    }

    db.vacinas[index] = { id, ...req.body };
    res.json(db.vacinas[index]);
  },

  deletar(req, res) {
    const id = Number(req.params.id);
    const index = db.vacinas.findIndex(v => v.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Vacina não encontrada" });
    }

    db.vacinas.splice(index, 1);
    res.status(204).send();
  }
};
