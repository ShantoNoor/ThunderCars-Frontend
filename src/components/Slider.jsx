import { MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Image } from "@nextui-org/react";

const Slider = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(1280);
  const [imageWidth, setImageWidth] = useState(0);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(data.length - 1);
    }
  };

  const onNextClick = () => {
    if (current < data.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  useEffect(() => {
    const sliderInterval = setInterval(onNextClick, 3000);
    return () => {
      clearInterval(sliderInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, data]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (imageWidth && window.innerWidth)
        setWidth(Math.min(1280, imageWidth, window.innerWidth));
    };
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [imageWidth]);

  return (
    <main className="flex flex-col items-center justify-between overflow-x-hidden lg:px-24">
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative flex items-center" style={{ maxWidth: width }}>
          {/* Left/right controls */}
          <motion.div
            className="absolute left-2 right-2 flex justify-between z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="rounded-full text-white dark:text-black bg-gray-600 dark:bg-gray-400  opacity-80 hover:bg-gray-800 dark:hover:bg-gray-200"
              onClick={onPrevClick}
            >
              <FiArrowLeft className="h-8 w-8" />
            </button>
            <button
              className="rounded-full text-white dark:text-black bg-gray-600 dark:bg-gray-400  opacity-80 hover:bg-gray-800 dark:hover:bg-gray-200"
              onClick={onNextClick}
            >
              <FiArrowRight className="h-8 w-8" />
            </button>
          </motion.div>

          <motion.section
            className="flex gap-4 flex-nowrap"
            animate={{
              x: `calc(-${current * width}px - ${current}rem)`,
            }}
          >
            {data && data?.map((item, id) => (
              <motion.div
                key={id}
                animate={{
                  opacity: id === current ? 1 : 0.3,
                  scale: id === current ? 1 : 0.95,
                }}
                className="relative"
              >
                <Image
                  src={item.image}
                  alt={item.image}
                  loading="lazy"
                  onLoad={(e) => {
                    setImageWidth(e.target.width);
                  }}
                  className="object-cover block"
                  style={{
                    maxWidth: width,
                  }}
                />

                <div className="absolute text-center top-5 md:top-10 left-5 md:left-10 z-10">
                  <span className="relative flex-shrink-0 w-3 h-3 rounded-full bg-violet-400">
                    <span className="absolute flex-shrink-0 w-4 h-4 rounded-full -left-1 -top-1 lg:-top-5 animate-ping bg-violet-400"></span>
                  </span>
                  <span className="text-md box-decoration-clone md:text-3xl font-bold bg-danger text-white opacity-75 px-2 py-1 text-center rounded-md">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.section>
          {/* Controll pill */}
          <div className="absolute bottom-2 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex gap-3 px-3 py-2 bg-gray-400 dark:bg-gray-600 rounded-full opacity-80">
              { data &&  data.map((_, idx) => (
                <button key={idx} onClick={() => setCurrent(idx)}>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      idx === current
                        ? "bg-white dark:bg-black"
                        : "bg-gray-600 dark:bg-gray-400"
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </MotionConfig>
    </main>
  );
};

export default Slider;
