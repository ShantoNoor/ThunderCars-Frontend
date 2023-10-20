const thunderCarsDescriptions = [
  [
    "Thunder Cars - Where Performance Meets Elegance",
    "Discover a world of high-performance and luxurious supercars that redefine speed, style, and prestige.",
  ],
  [
    "Unleash Your Inner Speed Demon",
    "Explore our collection of handpicked supercars, each designed for adrenaline-pumping thrills on the open road.",
  ],
  [
    "The Epitome of Automotive Excellence",
    "Thunder Cars brings you a curated selection of the world's most iconic and exclusive supercars, setting the standard for excellence.",
  ],
  [
    "Luxury Beyond Limits",
    "Step into a realm of automotive opulence where every supercar is a masterpiece of design, power, and precision.",
  ],
  [
    "Your Journey, Your Supercar",
    "At Thunder Cars, we're dedicated to helping you find the supercar that matches your personality and passion for speed.",
  ],
  [
    "Experience Supercar Perfection",
    "Immerse yourself in the world of unparalleled craftsmanship and cutting-edge technology with Thunder Cars' supercar offerings.",
  ],
  [
    "Thunder Cars - Your Gateway to Supercar Dreams",
    "Whether you're a collector or an enthusiast, our supercars are a testament to your pursuit of automotive perfection.",
  ],
  [
    "Drive the Future Today",
    "Thunder Cars presents a lineup of supercars that push the boundaries of speed, innovation, and luxury.",
  ],
];

const Features = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            All the features you want.
          </h2>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {thunderCarsDescriptions.map((features, idx) => {
            return (
              <div key={idx} className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">{features[0]}</dt>
                  <dd className="mt-2 dark:text-gray-400">{features[1]}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
};

export default Features;
