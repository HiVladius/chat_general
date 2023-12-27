// path: /api/login

const { Router } = require("express");
const { check } = require("express-validator");

// Controladores
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../Controllers/auth");

const { validarCampos } = require("../middlewares/validar-campos");
const { validarJST } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/new",
  [
    // middLeWares
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  crearUsuario
);

//login
router.post("/",
  [
    // middlewares
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  loginUsuario
);

// Revalidar token

router.get("/renew", validarJST, revalidarToken);

module.exports = router;
