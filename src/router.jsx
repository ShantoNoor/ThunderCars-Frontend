import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import MyCart from "./pages/MyCart";
import Products from "./pages/Products";
import getUrl from "./utility/getUrl";
import Details from "./pages/Details";

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
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
      {
        path: "/products/:id",
        element: <Products />,
        loader: ({ params }) =>
          fetch(getUrl() + "products/" + params.id)
            .then((res) => res.json())
            .catch((err) => console.error(err)),
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
