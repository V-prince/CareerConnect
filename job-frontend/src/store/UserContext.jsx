import { createContext, useContext, useEffect, useState } from "react";
import { GetUserData } from "../Services/authService";
import toast from "react-hot-toast";

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [loading, SetLoading] = useState(true)

  const userDataFetch = async () => {
    try {
      const data = await GetUserData();
      setUser(data.user);

      SetIsLoggedIn(true);

    } catch (error) {
      setUser(null);
      SetIsLoggedIn(false);
    }
    finally {
      SetLoading(false);
    }
  }

  useEffect(() => {
    userDataFetch();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, SetIsLoggedIn, loading, SetLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
