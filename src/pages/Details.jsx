import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getUrl from "../utility/getUrl";
import { BiStar, BiDollar, BiCartAdd } from "react-icons/bi";
import { Button } from "@nextui-org/react";

const Details = () => {
  const { id } = useParams();
  const [cname, _id] = id.split("-");

  const [carData, setCarData] = useState({});

  useEffect(() => {
    fetch(getUrl() + "products/" + cname)
      .then((res) => res.json())
      .then((data) => {
        setCarData(data.find((item) => item._id === _id));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={carData.image}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white dark:bg-gray-900">
          <div className="space-y-2">
            <Link
              rel="noopener noreferrer"
              to="/"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {carData.short_description}
            </Link>
            <p className="text-xs dark:text-gray-400">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="text-xs hover:underline"
              >
                {carData.brand_name}
              </Link>
            </p>
          </div>
          <div className="dark:text-gray-100 flex flex-col gap-2 md:flex-row justify-between items-end">
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
            <Button className="flex items-center">
              <BiCartAdd className="text-danger" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
