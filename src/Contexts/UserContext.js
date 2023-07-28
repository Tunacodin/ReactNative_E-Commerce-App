import {createContext, useEffect, useState} from 'react';

export const UserContext = createContext();

export const UserContextProvider = props => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};
