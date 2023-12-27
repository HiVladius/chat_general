import React, { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";

export const ChatContext = createContext();

const inicialState = {
  uid: '',
  chatActivo: null, // UID del usuario al que yo quiero enviar mensajes
  usuarios: [], // Todos los usuarios de la BD
  mensajes: [], // El chat seleccionado
};

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, inicialState); 
  

  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
