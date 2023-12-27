import React, { useContext } from "react";
import SendMessages from "./SendMessages";
import IncomingMSG from "./IncomingMSG";
import OutcomingMSG from "./OutcomingMSG";
import { ChatContext } from "../chat/ChatContext";
import { AuthContext } from "../auth/AuthContext";

function Messages() {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div
    id="mensajes" 
    className="mesgs">
      <div 
      id="mensajes"
      className="msg_history">
        {
        chatState.mensajes.map((msg, index) =>
          msg.para === auth.uid 
          ? (<IncomingMSG key={msg._id + index} msg={msg} />) 
          : (<OutcomingMSG key={msg._id + index} msg={msg} />)
        )}
      </div>

      <SendMessages />
    </div>
  );
}

export default Messages;
