const Usuario = require('../models/usuario');   // Importo el modelo de usuario para poder usarlo en este archivo

const usuarioConectado = async ( uid = '' ) => {

    const usuario = await Usuario.findById( uid );
    usuario.online = true;
    await usuario.save();
    return usuario;

}

const usuarioDesconectado = async ( uid = '' ) => {

    const usuario = await Usuario.findById( uid );
    usuario.online = false;
    await usuario.save();
    return usuario;

}

const getUsuarios = async () => {
    
        const usuarios = await Usuario
            .find()
            .sort('-online');
    
        return usuarios;
    
    }

module.exports = {
    usuarioConectado,
    usuarioDesconectado,
    getUsuarios
}