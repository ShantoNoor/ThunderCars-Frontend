import Slider from "../components/Slider";
const imagess = [
  "/images/img1s.png",
  "/images/img2s.png",
  "/images/img3s.png",
  "/images/img4s.png",
  "/images/img5s.png",
];

const imagesl = [
  "/images/img1l.png",
  "/images/img2l.png",
  "/images/img3l.png",
  "/images/img4l.png",
  "/images/img5l.png",
];

const texts = [
  "Speed, Luxury, Style: Drive Exclusivity Home.",
  "Unleash Performance with Our Supercars.",
  "Elevate Your Ride with Supercar Excellence.",
  "Discover Pure Thrills Behind the Wheel.",
  "Supercars Await Your Command Here.",
];

const texts2 = [
  "Unleash your need for speed at our supercar haven.",
  "Elevate your driving experience with our fleet of dream machines.",
  "Discover the pinnacle of automotive performance in our showroom.",
  "Precision engineering meets breathtaking design in every supercar we offer.",
  "Experience the future of motoring at our supercar emporium.",
];

const Home = () => {
  return (
    <>
      <Slider images={imagesl} texts={texts2} />
      <Slider images={imagess} texts={texts2} />
    </>
  );
};

export default Home;
