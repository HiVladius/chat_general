const { comprobarJWT } = require("../helpers/jwt");
const {
  usuarioConectado,
  usuarioDesconectado,
  getUsuarios,
} = require("../Controllers/sockets");

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

      console.log("Cliente conectado", uid);

      await usuarioConectado(uid);

      //ToDo: Validar el JWT
      //Si el token no es valido, desconectar
      //Si el token es valido, conectarlo
      //Saber que usuario esta activo mediante el UID
      //Emitir todos los usuarios conectados

      this.io.emit("lista-usuarios", await getUsuarios());

      //Socket join, uid
      //Escuchar cuando el cliente manda un mensaje
      //mensaje personal
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
