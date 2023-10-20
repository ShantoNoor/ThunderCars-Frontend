import { useEffect, useState } from "react";
import Slider from "../components/Slider";

const cars = [
  "https://images.pexels.com/photos/18509922/pexels-photo-18509922/free-photo-of-lady-in-blue-can-you-guess-the-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/17632045/pexels-photo-17632045/free-photo-of-orange-lamborghini-huracan-sports-car-standing-on-pads.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/9814981/pexels-photo-9814981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const uis = [
  "https://i.ibb.co/Ss3vQLD/img1s.png",
  "https://i.ibb.co/3sYM0wX/img2s.png",
  "https://i.ibb.co/kh9gtxC/img3s.png",
  "https://i.ibb.co/Z1PjjXC/img4s.png",
  "https://i.ibb.co/tmVydb6/img5s.png",
];

const uil = [
  "https://i.ibb.co/wLnB3QR/img1l.png",
  "https://i.ibb.co/bvfGyMY/img2l.png",
  "https://i.ibb.co/d7GWwb2/img3l.png",
  "https://i.ibb.co/M78GhXT/img4l.png",
  "https://i.ibb.co/xfXBSkH/img5l.png",
];

const texts = [
  "Unleash your need for speed at our supercar haven.",
  "Elevate your driving experience with our fleet of dream machines.",
  "Discover the pinnacle of automotive performance in our showroom.",
  "Precision engineering meets breathtaking design in every supercar we offer.",
  "Experience the future of motoring at our supercar emporium.",
];

const Home = () => {
  const [width, setWidth] = useState(0);

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
      <Slider images={width > 640 ? uil : uis} texts={texts} />
    </>
  );
};

export default Home;
