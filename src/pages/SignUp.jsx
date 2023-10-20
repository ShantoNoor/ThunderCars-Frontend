import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { Input } from "@nextui-org/react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animations/sign-up.json";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;


    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) == false) {
      setErrorMessage("Invalid email address");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 charecters!");
      return;
    } else if (/.*[A-Z].*/.test(password) == false) {
      setErrorMessage("Password must contains at least one capital letter!");
      return;
    } else if (/.*[^A-Za-z0-9].*/.test(password) == false) {
      setErrorMessage("Password must contains at least one special character!");
      return;
    }

    // signUp(e.target.name.value, e.target.email.value, password)
    //   .then(() => updateProfile(e.target.name.value, ""))
    //   .then(() => navigate("/"));
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
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-3 p-8 rounded-xl">
        <div>
          <Player
            autoplay
            loop
            src={animation}
            style={{ height: swidth, width: swidth }}
          ></Player>
        </div>
        <div className="space-y-3">
          <form
            noValidate=""
            action=""
            className="space-y-8"
            data-bitwarden-watching="1"
            onSubmit={handleSubmit}
          >
            <div className="space-y-1 text-sm mt-6">
              <Input
                label="Full Name"
                name="name"
                variant="bordered"
                labelPlacement="outside"
                isRequired={true}
                fullWidth={true}
              />
            </div>
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
                error={errorMessage !== ""}
              />
              {errorMessage !== "" && (
                <p className="text-danger text-md max-w-[250px]">
                  {errorMessage}
                </p>
              )}
              <div className="flex justify-end text-xs dark:text-gray-400">
                <Link rel="noopener noreferrer" to="/">
                  Forgot Password&nbsp;?
                </Link>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-lg text-white bg-primary">
              Sign Up
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
            Already have an account?&nbsp;
            <Link
              rel="noopener noreferrer"
              to="/sign-in"
              className="underline dark:text-white"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
