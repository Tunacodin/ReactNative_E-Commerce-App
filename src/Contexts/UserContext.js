import {createContext, useEffect, useState} from 'react';

export const UserContext = createContext();

export const UserContextProvider = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,

      }}>
      {props.children}
    </UserContext.Provider>
  );
};
