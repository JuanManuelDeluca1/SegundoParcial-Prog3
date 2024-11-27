const express = require("express");
const router = express.Router();
const {traerAutores, traerAutor,crearAutor, borrarAutor, actualizarAutor} = require("../controllers/autorControllers.js");

router.get("/", traerAutores);
router.get("/:id",traerAutor);
router.post("/", crearAutor);
router.put("/:id", actualizarAutor);
router.delete("/:id", borrarAutor);

module.exports = router;