import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router";
import AuthProvider from "./AuthProvider";

const Providers = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
