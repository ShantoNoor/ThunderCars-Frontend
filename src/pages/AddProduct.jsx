import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import getUrl from "../utility/getUrl";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const brand_image = form.brand_image.value;
    const type = form.type.value;
    const short_description = form.short_description.value;
    let price = parseInt(form.price.value);
    let rating = parseFloat(form.rating.value);

    try {
      price = parseInt(form.price.value);
      rating = parseFloat(form.rating.value);
    } catch (err) {
      console.error(err);
    }

    // console.log(name, brand_name, type, brand_image, price, rating, short_description);

    fetch(getUrl() + "products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        brand_name,
        type,
        brand_image,
        price,
        rating,
        short_description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Car successfully added to the database.");
          navigate("/products/" + brand_name, {
            state: {
              title: brand_name,
            },
          });
        } else {
          toast.error("Something went wrong unable to add car the database.");
        }
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
                label="Short short_description"
                name="short_description"
                variant="bordered"
                labelPlacement="outside"
                isRequired={true}
                fullWidth={true}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Select
                label="Brand Name"
                className="max-w-xs"
                labelPlacement={"outside"}
                name="brand_name"
                isRequired={true}
              >
                {[
                  "Tesla",
                  "Lamborghini",
                  "Bugatti",
                  "BMW",
                  "Mercedes-Benz",
                  "Toyota",
                ].map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </Select>
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

export default AddProduct;
