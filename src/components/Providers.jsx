import { Suspense, useEffect, useState, lazy } from "react";
import Spinner from "./Spinner";

import router from "../router";
const AuthProvider = lazy(() => import("./AuthProvider"));

const NextUIProvider = lazy(() =>
  import("@nextui-org/react").then((module) => {
    return { default: module.NextUIProvider };
  })
);

const NextThemesProvider = lazy(() =>
  import("next-themes").then((module) => {
    return { default: module.ThemeProvider };
  })
);

const RouterProvider = lazy(() =>
  import("react-router-dom").then((module) => {
    return { default: module.RouterProvider };
  })
);

const Providers = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={<Spinner />}>
      <NextUIProvider>
        <Suspense fallback={<Spinner />}>
          <NextThemesProvider attribute="class" defaultTheme="system">
            <Suspense fallback={<Spinner />}>
              <AuthProvider>
                <Suspense fallback={<Spinner />}>
                  <RouterProvider router={router} />
                </Suspense>
              </AuthProvider>
            </Suspense>
          </NextThemesProvider>
        </Suspense>
      </NextUIProvider>
    </Suspense>
  );
};

export default Providers;
