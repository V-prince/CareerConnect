import { createContext, useContext, useEffect, useState } from "react";
import { GetUserData } from "../Services/authService";
import toast from "react-hot-toast";

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [loading, SetLoading] = useState(false)

  const userDataFetch = async () => {
    try {
      SetLoading(true);

      const data = await GetUserData();
        console.log(data)
      if (!data.success) {
        return toast.error(data.message);
      }

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
