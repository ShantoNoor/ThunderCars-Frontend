import { MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(images.length - 1);
    }
  };

  const onNextClick = () => {
    if (current < images.length - 1) {
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
  }, [current]);

  return (
    <main className="flex flex-col items-center justify-between overflow-x-hidden lg:px-24">
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative max-w-[600px] flex items-center">
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
          {/* List of images */}
          <motion.div
            className="flex gap-4 flex-nowrap"
            animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
          >
            {[...images].map((image, idx) => (
              <motion.img
                key={idx}
                src={image}
                alt={image}
                animate={{
                  opacity: idx === current ? 1 : 0.3,
                  scale: idx === current ? 1 : 0.95,
                }}
                className="object-cover"
              />
            ))}
          </motion.div>
          {/* Controll pill */}
          <div className="absolute bottom-2 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex gap-3 px-3 py-2 bg-gray-400 dark:bg-gray-600 rounded-full opacity-80">
              {[...images].map((_, idx) => (
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
