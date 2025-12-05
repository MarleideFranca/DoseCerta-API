/**
 * @swagger
 * tags:
 *   name: Profissionais
 *   description: Endpoints de profissionais de saúde
 */


const express = require("express");
const controller = require("../controllers/profissionaisController");

const router = express.Router();

/**
 * @swagger
 * /profissionais:
 *   get:
 *     summary: Lista todos os profissionais
 *     tags: [Profissionais]
 *     responses:
 *       200:
 *         description: Lista de profissionais
 */
router.get("/", controller.listar);

/**
 * @swagger
 * /profissionais/{id}:
 *   get:
 *     summary: Busca um profissional pelo ID
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Profissional encontrado
 *       404:
 *         description: Profissional não encontrado
 */
router.get("/:id", controller.buscarPorId);

/**
 * @swagger
 * /profissionais:
 *   post:
 *     summary: Cadastra um novo profissional
 *     tags: [Profissionais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Profissional criado
 */
router.post("/", controller.criar);


/**
 * @swagger
 * /profissionais/{id}:
 *   put:
 *     summary: Atualiza um profissional pelo ID
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Profissional atualizado
 *       404:
 *         description: Profissional não encontrado
 */
router.put("/:id", controller.atualizar);

/**
 * @swagger
 * /profissionais/{id}:
 *   delete:
 *     summary: Remove um profissional pelo ID
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Removido com sucesso
 *       404:
 *         description: Profissional não encontrado
 */
router.delete("/:id", controller.deletar);

module.exports = router;
