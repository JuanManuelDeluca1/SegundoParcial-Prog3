const express = require("express");
const router = express.Router();
const juego = require("./juegosRoutes.js");
const autor = require("./autoresRoutes.js");

router.use("/juegos", juego);
router.use("/autores", autor);

module.exports = router;