import React from "react";
import { timeMonth } from "../helpers/timeMonth";

function IncomingMSG({ msg }) {
  const timer = timeMonth(msg.createdAt);

  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{msg.mensaje}</p>
          <span className="time_date">{timer}</span>
        </div>
      </div>
    </div>
  );
}

export default IncomingMSG;
