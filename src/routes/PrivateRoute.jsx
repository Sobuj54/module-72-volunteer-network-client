import { useContext } from "react";
import { AuthContext } from "../Context/ContextAPI";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
