/*
    Path: /api/mensajes
*/
const { Router } = require("express");
const { validarJST } = require("../middlewares/validar-jwt");
const { obtenerChat } = require("../Controllers/obtenerChat");

const router = Router();

router.get("/:de", validarJST, obtenerChat);


module.exports = router;
