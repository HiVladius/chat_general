import React from "react";
import SendMessages from "./SendMessages";
import IncomingMSG from "./IncomingMSG";
import OutcomingMSG from "./OutcomingMSG";

function Messages() {

    const messages = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
        {
            messages.map( (msg) => (
                (msg % 2) ? <IncomingMSG key={msg} /> : <OutcomingMSG key={msg} />
            ))
        }

        {/* <IncomingMSG />
        <OutcomingMSG /> */}
      </div>
      {/* <!-- Historia Fin --> */}

      <SendMessages />
    </div>
  );
}

export default Messages;
