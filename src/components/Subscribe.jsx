import { useTheme } from "next-themes";

const Subscribe = () => {
  const { theme } = useTheme();
  return (
    <div
      className="w-full bg-zinc-700 dark:bg-zinc-300"
      style={{
        backgroundImage: "url(https://source.unsplash.com/random/640x480)",
        backgroundPosition: "center center",
        backgroundBlendMode: theme == "dark" ? "multiply" : "screen",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-white text-black">
          Get Our Updates.
        </h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-white text-black">
          Find out about events and other news
        </p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
