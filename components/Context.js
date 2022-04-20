import React, { createContext, useState } from 'react';

export const LoaderContext = createContext();

export const LoaderProvider = ({children}) =>{
  const [loader, setLoader] = useState(false);
    
    return (
        <LoaderContext.Provider value={[loader, setLoader]}>
          {children}
        </LoaderContext.Provider>
      )
}

export const ChatMeContext = createContext();

export const ChatMeProvider = ({children}) =>{
  const [openPopup, setOpenPopup] = useState(false);
    
    return (
        <ChatMeContext.Provider value={[openPopup, setOpenPopup]}>
          {children}
        </ChatMeContext.Provider>
      )
}