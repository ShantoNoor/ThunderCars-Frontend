import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router";

const Providers = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        <RouterProvider router={router} />
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
