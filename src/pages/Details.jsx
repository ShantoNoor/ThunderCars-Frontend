import { Link, useLoaderData, useParams } from "react-router-dom";
import { BiStar, BiDollar, BiCartAdd } from "react-icons/bi";
import { Button, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import getUrl from "../utility/getUrl";
import useAuth from "../utility/useAuth";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner"

const Details = () => {
  const [carData, setCarData] = useState({});
  const params = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(getUrl() + "details/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (data) => {
    fetch(getUrl() + "carts/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Car successfully added to Cart.");
        } else {
          toast.error("Something went wrong unable to add car Cart.");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {" "}
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-5 md:p-10 mx-auto dark:bg-black dark:text-white">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <Image src={carData.image} loading={"lazy"} />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 md:-mt-20 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <div className="space-y-2">
                <Link
                  rel="noopener noreferrer"
                  to="/"
                  className="inline-block text-2xl font-semibold sm:text-3xl"
                >
                  {carData.short_description}
                </Link>
                <p className="text-xs dark:text-white">
                  <Link
                    rel="noopener noreferrer"
                    to="/"
                    className="text-xs hover:underline"
                  >
                    {carData.brand_name}
                  </Link>
                </p>
              </div>
              <div className="dark:text-white flex flex-col gap-2 md:flex-row justify-between items-end">
                <p>{carData.name}</p>
                <div className="flex gap-2 items-center text-lg">
                  <span className="flex gap-1 items-center">
                    <BiStar className="text-warning " />
                    {carData.rating}
                  </span>
                  <span className="flex items-center">
                    <BiDollar className="text-danger" />
                    {carData.price}
                  </span>
                </div>
                <Button
                  onClick={() => handleAddToCart(carData)}
                  className="flex items-center bg-primary text-white"
                >
                  <BiCartAdd className="text-danger" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
