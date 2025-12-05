/**
 * @swagger
 * tags:
 *   name: Unidades
 *   description: Endpoints de unidades de saúde
 */

const express = require("express");
const controller = require("../controllers/unidadesController");

const router = express.Router();

/**
 * @swagger
 * /unidades:
 *   get:
 *     summary: Lista todas as unidades
 *     tags: [Unidades]
 *     responses:
 *       200:
 *         description: Lista de unidades
 */
router.get("/", controller.listar);

/**
 * @swagger
 * /unidades/{id}:
 *   get:
 *     summary: Busca uma unidade pelo ID
 *     tags: [Unidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Unidade encontrada
 *       404:
 *         description: Unidade não encontrada
 */
router.get("/:id", controller.buscarPorId);


/**
 * @swagger
 * /unidades:
 *   post:
 *     summary: Cadastra uma nova unidade
 *     tags: [Unidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Unidade criada
 */
router.post("/", controller.criar);

/**
 * @swagger
 * /unidades/{id}:
 *   put:
 *     summary: Atualiza uma unidade pelo ID
 *     tags: [Unidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Unidade atualizada
 *       404:
 *         description: Unidade não encontrada
 */
router.put("/:id", controller.atualizar);


/**
 * @swagger
 * /unidades/{id}:
 *   delete:
 *     summary: Remove uma unidade pelo ID
 *     tags: [Unidades]
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
 *         description: Unidade não encontrada
 */
router.delete("/:id", controller.deletar);

module.exports = router;
