import React, { useState, createContext } from "react";

export const storeContext = createContext();

export const ContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(
    {
      mail: null,
      password: null,
      id:1,
      token: null,
      connected:false
    }
  );

  

  return (
    <storeContext.Provider value={[currentUser,setCurrentUser]}>
      {props.children}
    </storeContext.Provider>
  );
};
