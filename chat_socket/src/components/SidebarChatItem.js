import React from "react";
import { useContext } from "react";
import { ChatContext } from "../chat/ChatContext";
import { types } from "../types/types";

function SidebarChatItem({ usuario }) {
  const {chatState, dispatch } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const activarChat = () => {
    dispatch({
      type: types.activarChat,
      payload: usuario.uid,
    });
  };

  return (
    <div 
      className={`chat_list ${usuario.uid === chatActivo && "active_chat"}`} 
        onClick={activarChat}>
      {/* active_chat */}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>

        <div className="chat_ib">
          <h5>{usuario.nombre}</h5>
          {usuario.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarChatItem;
