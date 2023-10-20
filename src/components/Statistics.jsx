const Statistics = () => {
  return (
    <section className="p-6 dark:bg-black dark:text-white">
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-2">
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leadi lg:text-6xl">5000+</p>
          <p className="text-sm sm:text-base">Clients</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leadi lg:text-6xl">13M</p>
          <p className="text-sm sm:text-base">Followers on social media</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leadi lg:text-6xl">22</p>
          <p className="text-sm sm:text-base">Years of experience</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
          <p className="text-sm sm:text-base">Workshops</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
