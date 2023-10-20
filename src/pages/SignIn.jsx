import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { Input } from "@nextui-org/react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-md p-8 space-y-3 rounded-xl dark:bg-black dark:text-white">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <form
          noValidate=""
          action=""
          className="space-y-8"
          data-bitwarden-watching="1"
          onSubmit={handleSignIn}
        >
          <div className="space-y-1 text-sm mt-6">
            <Input
              label="Email"
              name="email"
              variant="bordered"
              labelPlacement="outside"
              isRequired={true}
              fullWidth={true}
            />
          </div>
          <div className="space-y-1 text-sm">
            <Input
              label="Password"
              name="password"
              required
              variant="bordered"
              labelPlacement="outside"
              isRequired={true}
              fullWidth={true}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <Link rel="noopener noreferrer" to="/">
                Forgot Password&nbsp;?
              </Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-lg text-white bg-primary">
            Sign In
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-black dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-black dark:bg-gray-700"></div>
        </div>
        <SocialLogin />
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?&nbsp;
          <Link
            rel="noopener noreferrer"
            to="/"
            className="underline dark:text-white"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
