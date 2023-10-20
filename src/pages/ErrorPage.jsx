import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText, ...data } = useRouteError();
  console.log(status, statusText, data);

  return (
    <section className="flex items-center h-[100vh] p-16 dark:bg-black dark:text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>
            {status}
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            {statusText + "  |  " + data.data}
          </p>
          <p className="text-2xl font-semibold md:text-3xl">
            {JSON.stringify(data)}
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
