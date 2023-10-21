import Spinner from "./components/Spinner";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignOut = lazy(() => import("./pages/SignOut"));
const Home = lazy(() => import("./pages/Home"));
const AddProduct = lazy(() => import("./pages/AddProduct"));
const MyCart = lazy(() => import("./pages/MyCart"));
const Products = lazy(() => import("./pages/Products"));
const Details = lazy(() => import("./pages/Details"));
const UpdateProduct = lazy(() => import("./pages/UpdateProduct"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-out",
        element: <SignOut />,
      },
      {
        path: "/add-product",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/update-product/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <UpdateProduct />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <MyCart />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/details/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
