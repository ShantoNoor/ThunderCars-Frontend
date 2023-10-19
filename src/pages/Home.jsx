import Slider from "../components/Slider";
const images = [
  "/images/img1s.png",
  "/images/img2s.png",
  "/images/img3s.png",
  "/images/img4s.png",
  "/images/img5s.png",
];
const Home = () => {
  return <Slider images={images} />;
};

export default Home;
