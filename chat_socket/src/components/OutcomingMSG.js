import React from "react";
import { timeMonth } from "../helpers/timeMonth";

function OutcomingMSG({ msg }) {
  
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{msg.mensaje}</p>
        <span className="time_date"> {timeMonth(msg.createdAt)} </span>
      </div>
    </div>
  );
}

export default OutcomingMSG;
