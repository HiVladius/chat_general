import React from "react";
import "../css/chat.css";
import InboxPeople from "../components/InboxPeople";
import Messages from "../components/Messages";
import ChatSelect from "../components/ChatSelect";

const ChatPages = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {
          (!true) ? <Messages /> : <ChatSelect />

        }
        {/* <ChatSelect /> */}
        {/* <Messages /> */}
      </div>
    </div>
  );
};

export default ChatPages;
