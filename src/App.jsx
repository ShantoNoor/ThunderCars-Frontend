import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export default function App() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Thunder Cars";
    } else {
      document.title =
        (pathname[pathname.length - 1] === "/"
          ? pathname.slice(1, -1).toUpperCase()
          : pathname.slice(1).toUpperCase()) +
        " | Thunder Cars";
    }

    if (state) document.title = state.title + " | Thunder Cars";
  }, [pathname, state]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}
