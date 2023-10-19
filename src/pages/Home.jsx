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
const Home = () => {
  return (
    <>
      <Slider images={imagesl} />
      <Slider images={imagess} />
    </>
  );
};

export default Home;
