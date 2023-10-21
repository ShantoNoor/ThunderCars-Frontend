import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";
import getUrl from "../utility/getUrl";
import Spinner from "../components/Spinner";

const Products = () => {
  const [brandCarData, setBrandCarData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(getUrl() + "products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setBrandCarData(data.filter((item) => item.type !== "ad"));
        setBannerData(data.filter((item) => item.type === "ad"));
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Slider data={bannerData} />
          {brandCarData.length !== 0 ? (
            <div className="flex justify-center items-center flex-col md:flex-row gap-3 my-10 flex-wrap container mx-auto">
              {brandCarData.map((item, idx) => {
                return (
                  <Card key={idx} className="py-4 ">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <div className="flex items-start w-full justify-between">
                        <div className="flex flex-col justify-start items-start text-lg">
                          <p className="text-tiny uppercase font-bold">
                            {item.brand_name}
                          </p>
                          <small className="text-default-500">
                            {item.type}
                          </small>
                        </div>
                        <div className="flex flex-col justify-end items-end text-lg">
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
                      <h4 className="font-bold text-large">{item.name}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl h-[170px] w-[260px]"
                        src={item.image}
                      />
                    </CardBody>
                    <CardFooter>
                      <div className="w-full">
                        <div className="flex gap-2 items-center">
                          <Button
                            size="sm"
                            color="danger"
                            aria-label="Details Button"
                            onClick={() =>
                              navigate(
                                "/details/" + item.brand_name + "-" + item._id,
                                {
                                  state: { title: item.name },
                                }
                              )
                            }
                          >
                            <BiArrowToRight /> Details
                          </Button>
                          <Button
                            color="warning"
                            variant="faded"
                            aria-label="Update Button"
                            size="sm"
                            onClick={() =>
                              navigate(
                                "/update-product/" +
                                  item.brand_name +
                                  "-" +
                                  item._id,
                                {
                                  state: { title: item.name },
                                }
                              )
                            }
                          >
                            <BiEdit /> Update
                          </Button>
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
                  to="/"
                  className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                >
                  Back to homepage
                </Link>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Products;
