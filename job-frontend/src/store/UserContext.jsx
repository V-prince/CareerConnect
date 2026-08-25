import { createContext, useContext, useState } from "react";

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({
    id:"user1",
    fullname:"prince Vadher",
    role:"employer"
  });



  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
