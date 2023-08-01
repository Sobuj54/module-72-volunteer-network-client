import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const ContextAPI = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    register,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextAPI;
