import { Card, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const navigate = useNavigate();

  return (
    <section className="p-6 dark:bg-dark dark:text-white">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">Trusted by the industry leaders.</h2>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center w-full p-6 align-middle md:w-1/2 xl:w-1/3"
              onClick={() => navigate("/products/" + item.name)}
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:cursor-pointer hover:-translate-y-2 shadow-md hover:shadow-lg duration-300 transition-all"
              >
                <div className="">
                  <Image
                    className="p-10 h-[300px] w-[300px] object-contain"
                    src={item.image}
                    loading="lazy"
                  />
                  <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-3xl text-white/80">{item.name}</p>
                  </CardFooter>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
