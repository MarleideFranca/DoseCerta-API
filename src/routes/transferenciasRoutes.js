/**
 * @swagger
 * tags:
 *   name: Transferencias
 *   description: Endpoints de transferências de vacinas entre unidades
 */

const express = require("express");
const controller = require("../controllers/transferenciasController");

const router = express.Router();

/**
 * @swagger
 * /transferencias:
 *   get:
 *     summary: Lista todas as transferências
 *     tags: [Transferencias]
 *     responses:
 *       200:
 *         description: Lista de transferências
 */
router.get("/", controller.listar);


/**
 * @swagger
 * /transferencias/{id}:
 *   get:
 *     summary: Busca uma transferência pelo ID
 *     tags: [Transferencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Transferência encontrada
 *       404:
 *         description: Transferência não encontrada
 */
router.get("/:id", controller.buscarPorId);


/**
 * @swagger
 * /transferencias:
 *   post:
 *     summary: Registra uma nova transferência
 *     tags: [Transferencias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Transferência registrada
 */
router.post("/", controller.criar);


/**
 * @swagger
 * /transferencias/{id}:
 *   put:
 *     summary: Atualiza uma transferência pelo ID
 *     tags: [Transferencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Transferência atualizada com sucesso
 *       404:
 *         description: Transferência não encontrada
 */
router.put("/:id", controller.atualizar);

/**
 * @swagger
 * /transferencias/{id}:
 *   delete:
 *     summary: Remove uma transferência pelo ID
 *     tags: [Transferencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Transferência removida com sucesso
 *       404:
 *         description: Transferência não encontrada
 */
router.delete("/:id", controller.deletar);

module.exports = router;
