import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { Input } from "@nextui-org/react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Suspense, lazy, useEffect, useState } from "react";
import useAuth from "../utility/useAuth";
import Spinner from "../components/Spinner";

const Player = lazy(() =>
  import("@lottiefiles/react-lottie-player").then((module) => {
    return { default: module.Player };
  })
);

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { signIn } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then(() => {
      if (state?.pathname) {
        navigate(state.pathname, {
          state: { title: state.title },
        });
      } else {
        navigate("/");
      }
    });
  };

  const [swidth, setSwidth] = useState(500);
  useEffect(() => {
    setSwidth(window.innerWidth >= 400 ? 300 : 250);
    const handleResize = () => {
      setSwidth(window.innerWidth >= 400 ? 300 : 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col dark:bg-black dark:text-white">
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-3 p-8 rounded-xl">
        <div>
          <Suspense fallback={<Spinner />}>
            <Player
              autoplay
              loop
              src="/sign-in.json"
              style={{ height: swidth, width: swidth }}
            ></Player>
          </Suspense>
        </div>
        <div className="space-y-3 ">
          <form
            noValidate=""
            action=""
            className="space-y-8"
            data-bitwarden-watching="1"
            onSubmit={handleSubmit}
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
              to="/sign-up"
              className="underline dark:text-white"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
