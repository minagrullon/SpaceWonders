import { useContext, createContext, useState, useEffect } from "react";

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

function Provider({ children }) {
  const [user, setUser] = useState({
    id: null,
    username: "",
    email: "",
    password: "",
  });

  return (
    <ContextData.Provider value={{ user, setUser }}>
      {children}
    </ContextData.Provider>
  );
}

export default Provider;
