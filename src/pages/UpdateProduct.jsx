import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getUrl from "../utility/getUrl";

const UpdateProduct = () => {
  const ref = useRef({});
  const [carData, setCarData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(getUrl() + "details/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
        ref.current = data;
        console.log(ref)
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(carData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_image = form.brand_image.value;
    const type = form.type.value;
    const price = parseInt(form.price.value);
    const rating = parseFloat(form.rating.value);
    const short_description = form.short_description.value;

    // console.log(name, brand_name, type, brand_image, price, rating, short_description);

    fetch(getUrl() + "products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        type,
        brand_image,
        price,
        rating,
        short_description,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="p-6 dark:bg-black dark:text-white">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-black">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Add Product</p>
            <p className="text-xs">
              Set all the fields carefully. Before, adding make sure that you
              set everything correctly
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 space-y-7">
            <div className="col-span-full">
              <Input
                label="Name"
                name="name"
                variant="bordered"
                labelPlacement="outside"
                isRequired={true}
                fullWidth={true}
              />
            </div>
            <div className="col-span-full">
              <Input
                // label="Short short_description"
                name="short_description"
                variant="bordered"
                // labelPlacement="outside"
                // isRequired={true}
                fullWidth={true}
                defaultValuevalue={`${carData.short_description}`}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Input
                label="Brand Name"
                className="max-w-xs"
                labelPlacement={"outside"}
                name="brand_name"
                isRequired={true}
                isDisabled={true}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Input
                label="Brand Image"
                name="brand_image"
                variant="bordered"
                labelPlacement="outside"
                fullWidth={true}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <div className="col-span-full">
                <Select
                  label="Type"
                  className="max-w-xs"
                  labelPlacement={"outside"}
                  name="type"
                  isRequired={true}
                >
                  {[
                    "SUV",
                    "Sedan",
                    "Sports Car",
                    "Super Car",
                    "Hyper Car",
                    "Luxury Car",
                    "Luxury Sedan",
                    "Electric Car",
                    "Electric SUV",
                  ].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <div className="col-span-full">
                <Input
                  label="Price"
                  name="price"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired={true}
                  fullWidth={true}
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <div className="col-span-full">
                <Input
                  label="Rating"
                  name="rating"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired={true}
                  fullWidth={true}
                />
              </div>
            </div>

            <div className="col-span-full">
              <Button
                type="submit"
                className="block w-full p-3 text-center rounded-lg text-white bg-primary"
              >
                Add
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default UpdateProduct;
