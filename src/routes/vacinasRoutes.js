/**
 * @swagger
 * tags:
 *   name: Vacinas
 *   description: Endpoints de vacinas
 */

const express = require("express");
const controller = require("../controllers/vacinasController");

const router = express.Router();

/**
 * @swagger
 * /vacinas:
 *   get:
 *     summary: Lista todas as vacinas
 *     tags: [Vacinas]
 *     responses:
 *       200:
 *         description: Lista de vacinas
 */
router.get("/", controller.listar);

/**
 * @swagger
 * /vacinas/{id}:
 *   get:
 *     summary: Busca uma vacina pelo ID
 *     tags: [Vacinas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vacina encontrada
 *       404:
 *         description: Vacina não encontrada
 */
router.get("/:id", controller.buscarPorId);

/**
 * @swagger
 * /vacinas:
 *   post:
 *     summary: Cadastra uma nova vacina
 *     tags: [Vacinas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Vacina cadastrada
 */
router.post("/", controller.criar);


/**
 * @swagger
 * /vacinas/{id}:
 *   put:
 *     summary: Atualiza uma vacina pelo ID
 *     tags: [Vacinas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vacina atualizada
 *       404:
 *         description: Vacina não encontrada
 */
router.put("/:id", controller.atualizar);

/**
 * @swagger
 * /vacinas/{id}:
 *   delete:
 *     summary: Remove uma vacina pelo ID
 *     tags: [Vacinas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Removida com sucesso
 *       404:
 *         description: Vacina não encontrada
 */
router.delete("/:id", controller.deletar);

module.exports = router;
