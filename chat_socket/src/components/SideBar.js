import React from "react";
import SidebarChatItem from "./SidebarChatItem";

function SideBar() {
    const chats =[
        {
            uid: 1,
            name: 'Test 1',
            message: 'Test 1',
            online: true
        },
        {
            uid: 2,
            name: 'Test 2',
            message: 'Test 2',
            online: true
        },
        {
            uid: 3,
            name: 'Test 3',
            message: 'Test 3',
            online: false
        },
        {
            uid: 4,
            name: 'Test 4',
            message: 'Test 4',
            online: false
        },
    ]

  return (
    <div className="inbox_chat">
        {
            chats.map(chat => (
                <SidebarChatItem key={chat.uid} {...chat} />
            ))
        }

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
}
export default SideBar;
