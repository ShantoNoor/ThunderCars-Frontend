import { Link, useNavigate } from "react-router-dom";
import useAuth from "../utility/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import getUrl from "../utility/getUrl";
import Spinner from "../components/Spinner";

const MyCart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(getUrl() + "carts/" + user.email)
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  }, []);

  const handleDelete = (id) => {
    const complexId = user.email + "-" + id;
    fetch(getUrl() + "carts/" + complexId, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          toast.success("Delete successful.");
          setCartData(cartData.filter((item) => item._id !== id));
        } else {
          toast.error("There is an error unable to delete.");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-gradient-to-r from-pink-500 to-orange-500">
          {cartData.length === 0 ? (
            <>
              <div className="p-6 py-12">
                <div className="container mx-auto">
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracki font-bold">
                      Cart Empty !
                    </h2>
                    <Link
                      to="/"
                      rel="noreferrer noopener"
                      className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
                    >
                      Add Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="container mx-auto flex flex-col w-full p-6 space-y-4 sm:p-10">
              <h2 className="text-xl font-semibold">Your cart</h2>
              <ul className="flex flex-col divide-y divide-gray-700">
                {/*  */}
                {cartData.map((item) => (
                  <li
                    key={item._id}
                    className="flex flex-col py-6 sm:flex-row sm:justify-between"
                  >
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src={item.image}
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">
                              {item.name}
                            </h3>
                            <p className="text-sm dark:text-white">
                              {item.type}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold">
                              {item.price}$
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                            onClick={() => handleDelete(item._id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="space-y-1 text-right">
                <p>
                  Total amount:
                  <span className="font-semibold">
                    {cartData.reduce((acc, cur) => {
                      return (acc += cur.price);
                    }, 0)}
                    $
                  </span>
                </p>
                <p className="text-sm dark:text-white">
                  Not including taxes and shipping costs
                </p>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md dark:border-violet-400"
                  onClick={() => navigate("/")}
                >
                  Back
                  <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                  onClick={() => navigate("/")}
                >
                  <span className="sr-only sm:not-sr-only">Continue to</span>
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyCart;
