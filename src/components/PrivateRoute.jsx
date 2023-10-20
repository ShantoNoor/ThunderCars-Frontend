import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "./Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname, state } = useLocation();

  if (loading) return <Spinner />;
  if (user) return children;
  return <Navigate to="/sign-in" state={{...state, pathname}} />;
};

export default PrivateRoute;
