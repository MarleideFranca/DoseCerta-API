const db = require("../data/db");

module.exports = {
  listar(req, res) {
    res.json(db.profissionais);
  },

  buscarPorId(req, res) {
    const id = Number(req.params.id);
    const item = db.profissionais.find(p => p.id === id);

    if (!item) {
      return res.status(404).json({ error: "Profissional não encontrado" });
    }

    res.json(item);
  },

  criar(req, res) {
    const novo = {
      id: db.profissionais.length + 1,
      ...req.body
    };

    db.profissionais.push(novo);
    res.status(201).json(novo);
  },

  atualizar(req, res) {
    const id = Number(req.params.id);
    const index = db.profissionais.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Profissional não encontrado" });
    }

    db.profissionais[index] = { id, ...req.body };
    res.json(db.profissionais[index]);
  },

  deletar(req, res) {
    const id = Number(req.params.id);
    const index = db.profissionais.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Profissional não encontrado" });
    }

    db.profissionais.splice(index, 1);
    res.status(204).send();
  }
};
