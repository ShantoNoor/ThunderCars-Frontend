import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { BiEdit, BiArrowToRight, BiStar, BiDollar } from "react-icons/bi";

const Products = () => {
  const data = useLoaderData();
  const [brandCarData, setBrandCarData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    setBrandCarData(data.filter((item) => item.type !== "ad"));
    setBannerData(data.filter((item) => item.type === "ad"));
  }, []);

  console.log(bannerData, brandCarData);

  return (
    <>
      <Slider data={bannerData} />
      {brandCarData.length !== 0 ? (
        <div className="flex justify-center items-center flex-col md:flex-row gap-3 my-10 flex-wrap container mx-auto">
          {brandCarData.map((item, idx) => {
            return (
              <Card key={idx} className="py-4 h-[350px]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    {item.brand_name}
                  </p>
                  <small className="text-default-500">{item.type}</small>
                  <h4 className="font-bold text-large">{item.name}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-fill rounded-xl"
                    src={item.image}
                    width={270}
                  />
                </CardBody>
                <CardFooter>
                  <div className="flex gap-2 items-center justify-between w-full">
                    <div className="flex gap-2 items-center">
                      <Button
                        size="sm"
                        isIconOnly
                        color="danger"
                        aria-label="Details Button"
                      >
                        <BiArrowToRight />
                      </Button>
                      <Button
                        isIconOnly
                        color="warning"
                        variant="faded"
                        aria-label="Update Button"
                        size="sm"
                      >
                        <BiEdit />
                      </Button>
                    </div>
                    <div className="flex gap-2 items-center text-lg">
                      <span className="flex gap-1 items-center">
                        <BiStar className="text-warning " />
                        {item.rating}
                      </span>
                      <span className="flex items-center">
                        <BiDollar className="text-danger" />
                        {item.price}
                      </span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <section className="flex items-center h-full sm:p-16 dark:bg-black dark:text-white">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-40 h-40 dark:bg-black"
            >
              <path
                fill="currentColor"
                d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
              ></path>
              <rect
                width="176"
                height="32"
                x="168"
                y="320"
                fill="currentColor"
              ></rect>
              <polygon
                fill="currentColor"
                points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
              ></polygon>
              <polygon
                fill="currentColor"
                points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
              ></polygon>
            </svg>
            <p className="text-3xl">
              Looks like there is no car available write now
            </p>
            <Link
              rel="noopener noreferrer"
              to='/'
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Products;
