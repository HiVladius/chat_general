const { response } = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {

  try {

    const { email, password } = req.body;
    
    // Verificar si el email existe
    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }

    const usuario = new Usuario(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync(); // el salt es un valor aleatorio que se le agrega a la contraseña para que sea mas dificil de descifrar
    usuario.password = bcrypt.hashSync(password, salt);

    // Guardar usuario

    await usuario.save();

    // Generar el JWT
    const token = await generarJWT(usuario.id);

    res.json({
      usuario,
      token,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe
    const usuariDB = await Usuario.findOne({ email });
    if (!usuariDB) {
      return res.status(404).json({
        ok: false,
        msg: "Email no encontrado",
      });
    }
    // Verificar si el password es correcto
    const validPassword = bcrypt.compareSync(password, usuariDB.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "La contraseña no es valida",
      });
    }

    // Generar el JWT
    const token = await generarJWT(usuariDB.id);

    res.json({
      ok: true,
      usuario: usuariDB,
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const revalidarToken = async (req, res = response) => {
  const uid = req.uid;

  //Gerar un JWT
  const token = await generarJWT(uid);

  // Obtener el usuario por el UID
  const usuario = await Usuario.findById(uid);

  res.json({
    ok: true,
    token,
    usuario,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
