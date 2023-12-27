import React, { useContext } from "react";

import { ChatContext } from "../chat/ChatContext";
import { fetchConToken } from "../helpers/fetch";

import { types } from "../types/types";
import { scrollToBottom } from "../helpers/scrollToBottom";

function SidebarChatItem({ usuario }) {
  const { chatState, dispatch } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const onClick = async () => {
    dispatch({
      type: types.activarChat,
      payload: usuario.uid,
    });

    // Cargar los mensajes del chat
    const resp = await fetchConToken(`mensajes/${usuario.uid}`);
    console.log(resp);
    dispatch({
      type: types.cargarMensajes,
      payload: Array.isArray(resp.mensajes) ? resp.mensajes : [],
    });

    //mover el scroll al final
    scrollToBottom("mensajes");
  };

  return (
    <div
        className={`chat_list ${ (usuario.uid === chatActivo) && 'active_chat' }`}
        onClick={ onClick }
    >
        {/* active_chat */}
        <div className="chat_people">
            <div className="chat_img"> 
                <img src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="sunil" />
            </div>
            <div className="chat_ib">
                <h5> { usuario.nombre } </h5>
                {
                    ( usuario.online )
                        ? <span className="text-success">Online</span>
                        : <span className="text-danger">Offline</span>
                }
               
            </div>
        </div>
    </div>
)
}

export default SidebarChatItem;
