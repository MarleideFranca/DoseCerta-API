/**
 * @swagger
 * tags:
 *   name: Doses
 *   description: Endpoints de doses aplicadas
 */

const express = require("express");
const controller = require("../controllers/dosesController");

const router = express.Router();

/**
 * @swagger
 * /doses:
 *   get:
 *     summary: Lista todas as doses
 *     tags: [Doses]
 *     responses:
 *       200:
 *         description: Lista de doses
 */
router.get("/", controller.listar);

/**
 * @swagger
 * /doses/{id}:
 *   get:
 *     summary: Busca uma dose pelo ID
 *     tags: [Doses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dose encontrada
 *       404:
 *         description: Dose não encontrada
 */
router.get("/:id", controller.buscarPorId);

/**
 * @swagger
 * /doses:
 *   post:
 *     summary: Cadastra uma nova dose
 *     tags: [Doses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Dose criada
 */
router.post("/", controller.criar);

/**
 * @swagger
 * /doses/{id}:
 *   put:
 *     summary: Atualiza uma dose pelo ID
 *     tags: [Doses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dose atualizada
 *       404:
 *         description: Dose não encontrada
 */
router.put("/:id", controller.atualizar);

/**
 * @swagger
 * /doses/{id}:
 *   delete:
 *     summary: Remove uma dose pelo ID
 *     tags: [Doses]
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
 *         description: Dose não encontrada
 */
router.delete("/:id", controller.deletar);

module.exports = router;
