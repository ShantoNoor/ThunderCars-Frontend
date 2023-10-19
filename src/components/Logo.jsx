import { Image } from "@nextui-org/react";

const Logo = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image src="/logo.png" width={40} />
      <p className="font-bold text-inherit hidden lg:block">
        <span className="text-primary border-black dark:border-white border-t-1 py-1">THUNDER</span>{" "}
        <span className="font-light border-primary border-b-1 py-1">CARS</span>
      </p>
    </div>
  );
};

export default Logo;
