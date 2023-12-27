const { comprobarJWT } = require("../helpers/jwt");
const {
  usuarioConectado,
  usuarioDesconectado,
  getUsuarios,
  grabarMensaje,} = require("../Controllers/sockets");

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      const [valido, uid] = comprobarJWT(socket.handshake.query["x-token"]);

      if (!valido) {
        console.log("Socket no identificado");
        return socket.disconnect();
      }


      await usuarioConectado(uid);

      //Unir al usuario a una sala de socket.io
      socket.join(uid); //global, socket.id, uid

      //ToDo: Validar el JWT
      //Si el token no es valido, desconectar
      //Si el token es valido, conectarlo
      //Saber que usuario esta activo mediante el UID
      //Emitir todos los usuarios conectados

      this.io.emit("lista-usuarios", await getUsuarios());

      //Socket join, uid
      //Escuchar cuando el cliente manda un mensaje
      //mensaje personal
      socket.on("mensaje-personal", async (payload) => {
        console.log(payload);
        const mensaje = await grabarMensaje(payload);
        console.log(mensaje);
        this.io.to(payload.para).emit("mensaje-personal", mensaje);
        this.io.to(payload.de).emit("mensaje-personal", mensaje);
      });

      //Desconectar
      //Marcar en la base de datos que el usuario se desconecto
      //Emitir todos los usuarios conectados

      socket.on("disconnect", async () => {
        await usuarioDesconectado(uid);
        this.io.emit("lista-usuarios", await getUsuarios());
      });
    });
  }
}

module.exports = Sockets;
