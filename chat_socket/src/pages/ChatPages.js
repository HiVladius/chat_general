import React, { useContext } from "react";
import "../css/chat.css";
import InboxPeople from "../components/InboxPeople";
import Messages from "../components/Messages";
import ChatSelect from "../components/ChatSelect";

import { ChatContext } from "../chat/ChatContext";

const ChatPages = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />

        {chatState.chatActivo ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};

export default ChatPages;
