import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../chat/ChatContext";
import { Send } from "@mui/icons-material";

function SendMessages() {
  const [mensaje, setMensaje] = useState("");
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const onChange = ({ target }) => {
    setMensaje(target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (mensaje.length === 0) {
      return;
    }
    setMensaje("");

    socket.emit("mensaje-personal", {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
            value={mensaje}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="icon-button mt-2" type="submit">
            <Send className="custom-icon" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SendMessages;
