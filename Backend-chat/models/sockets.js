const { comprobarJWT } = require("../helpers/jwt");
const { usuarioConectado, usuarioDesconectado } = require("../Controllers/sockets");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async ( socket ) => {

          const [valido, uid] = comprobarJWT (socket.handshake.query['x-token'])

            if(!valido) { return socket.disconnect(); }

            await usuarioConectado(uid);          


           //ToDo: Validar el JWT
              //Si el token no es valido, desconectar
                //Si el token es valido, conectarlo
                //Saber que usuario esta activo mediante el UID
                //Emitir todos los usuarios conectados
                //Socket join, uid
                //Escuchar cuando el cliente manda un mensaje
                    //mensaje personal
                //Desconectar
                    //Marcar en la base de datos que el usuario se desconecto
                //Emitir todos los usuarios conectados
                
                socket.on('disconnect', async () => {
                    await usuarioDesconectado(uid);
                });
        
        });
    }


}


module.exports = Sockets;