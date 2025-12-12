/**
 * @swagger
 * tags:
 *   name: Agendamentos
 *   description: Endpoints de agendamentos de vacinação
 */

const express = require("express");
const controller = require("../controllers/agendamentosController");

const router = express.Router();

/**
 * @swagger
 * /agendamentos:
 *   get:
 *     summary: Lista todos os agendamentos
 *     tags: [Agendamentos]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 */
router.get("/", controller.listar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   get:
 *     summary: Busca um agendamento pelo ID
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Agendamento encontrado
 *       404:
 *         description: Agendamento não encontrado
 */
router.get("/:id", controller.buscarPorId);

/**
 * @swagger
 * /agendamentos:
 *   post:
 *     summary: Cadastra um novo agendamento
 *     tags: [Agendamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Agendamento criado
 */
router.post("/", controller.criar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   put:
 *     summary: Atualiza um agendamento pelo ID
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Agendamento atualizado
 *       404:
 *         description: Agendamento não encontrado
 */
router.put("/:id", controller.atualizar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   delete:
 *     summary: Remove um agendamento pelo ID
 *     tags: [Agendamentos]
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
 *         description: Agendamento não encontrado
 */
router.delete("/:id", controller.deletar);

module.exports = router;
