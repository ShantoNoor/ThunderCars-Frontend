import { Spinner as Spinner_ } from "@nextui-org/react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Spinner_
        size="lg"
        label="Loading ..."
        color="primary"
        labelColor="primary"
      />
    </div>
  );
};

export default Spinner;
