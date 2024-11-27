const express = require("express");
const router = express.Router();
const {traerJuegos, traerJuego, crearJuego, actualizarJuego, borrarJuego, obtenerJuegosOrdenados, filtrarJuegoTipo, filtrarJuegosPorEstado} = require("../controllers/juegosControllers.js");


router.get("/", traerJuegos);
router.get("/:id",traerJuego);
router.post("/", crearJuego);
router.put("/:id", actualizarJuego)
router.delete("/:id", borrarJuego)
router.get("/ordenados", obtenerJuegosOrdenados);
router.get("/filtrarTipo", filtrarJuegoTipo);
router.get("/filtrarEstado", filtrarJuegosPorEstado);

module.exports = router;