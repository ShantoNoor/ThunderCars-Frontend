import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../utility/useAuth";
import { Spinner } from "@nextui-org/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname, state } = useLocation();

  if (loading) return <div className="w-screen h-screen flex justify-center items-center"><Spinner size='lg' label="Loading ..." color="primary" labelColor="primary" /></div>;
  if (user) return children;
  return <Navigate to="/sign-in" state={{...state, pathname}} />;
};

export default PrivateRoute;
