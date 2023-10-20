import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Subscribe from "../components/Subscribe";
import Cards from "../components/Cards";
import getUrl from "../utility/getUrl";

const Home = () => {
  const [width, setWidth] = useState(0);
  const [brandData, setBrandData] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  const url = getUrl();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBrandData(data.filter((brand) => brand.type === "brand"));
        setBannerData(data.find((item) => item.size === "large").ads);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Slider data={bannerData} />
      <Cards data={brandData} />
      <Features />
      <Statistics />
      <Subscribe />
    </>
  );
};

export default Home;
