import { useEffect } from "react";
import useAuth from "../utility/useAuth";
import { Navigate } from "react-router-dom";

const SignOut = () => {
  const { signOut } = useAuth();
  useEffect(() => {
    signOut();
  }, [signOut]);
  return <Navigate to="/" />;
};

export default SignOut;
