import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUrl from "../utility/getUrl";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

const BRANDS = [
  "Tesla",
  "Lamborghini",
  "Bugatti",
  "BMW",
  "Mercedes-Benz",
  "Toyota",
];

const TYPES = [
  "SUV",
  "Sedan",
  "Sports Car",
  "Super Car",
  "Hyper Car",
  "Luxury Car",
  "Luxury Sedan",
  "Electric Car",
  "Electric SUV",
];

const UpdateProduct = () => {
  const params = useParams();

  const [loading, setLoading] = useState(true);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [brand_name, setBrand_name] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [short_description, setShort_description] = useState("");

  useEffect(() => {
    fetch(getUrl() + "details/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setId(data._id);
        setName(data.name);
        setBrand_name(data.brand_name);
        setImage(data.image);
        setPrice(data.price);
        setShort_description(data.short_description);
        setRating(data.rating);
        setType(data.type);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(getUrl() + "products/" + brand_name + "-" + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        brand_name,
        type,
        price,
        rating,
        short_description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          toast.success("Car successfully updated!");
        } else {
          toast.error("Something went wrong unable to update car.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="p-6 dark:bg-black dark:text-white">
          <form
            className="container flex flex-col mx-auto space-y-12"
            onSubmit={handleSubmit}
          >
            <fieldset className="grid grid-cols-4 gap-6 p-12 rounded-md shadow-sm dark:bg-black">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Update Product</p>
                <p className="text-xs">
                  Set all the fields carefully. Before, updating make sure that
                  you set everything correctly
                </p>
              </div>
              <div className="grid grid-cols-6 gap-10 col-span-full lg:col-span-3">
                {/* Name */}
                <div className="col-span-full sm:col-span-3">
                  <Input
                    label="Name"
                    name="name"
                    variant="bordered"
                    labelPlacement="outside"
                    isRequired={true}
                    fullWidth={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/*Image */}
                <div className="col-span-full sm:col-span-3">
                  <Input
                    label="Image"
                    name="image"
                    variant="bordered"
                    labelPlacement="outside"
                    fullWidth={true}
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>

                {/* brand_name */}
                <div className="col-span-full sm:col-span-3">
                  <Select
                    label="Brand Name"
                    className="max-w-xs"
                    labelPlacement={"outside"}
                    name="brand_name"
                    isRequired={true}
                    isDisabled={true}
                    items={BRANDS}
                    defaultSelectedKeys={[brand_name]}
                  >
                    {BRANDS.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                {/* type */}
                <div className="col-span-full sm:col-span-3">
                  <div className="col-span-full">
                    <Select
                      label="Type"
                      className="max-w-xs"
                      labelPlacement={"outside"}
                      name="type"
                      isRequired={true}
                      defaultSelectedKeys={[type]}
                      onSelectionChange={(keys) => {
                        setType(keys.currentKey);
                      }}
                    >
                      {TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
                {/* short_description */}
                <div className="col-span-full">
                  <Input
                    name="short_description"
                    label="Short short_description"
                    variant="bordered"
                    labelPlacement="outside"
                    isRequired={true}
                    fullWidth={true}
                    value={short_description}
                    onChange={(e) => setShort_description(e.target.value)}
                  />
                </div>
                {/* price */}
                <div className="col-span-full sm:col-span-3">
                  <div className="col-span-full">
                    <Input
                      label="Price"
                      name="price"
                      variant="bordered"
                      labelPlacement="outside"
                      isRequired={true}
                      fullWidth={true}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                {/* rating */}
                <div className="col-span-full sm:col-span-3">
                  <div className="col-span-full">
                    <Input
                      label="Rating"
                      name="rating"
                      variant="bordered"
                      labelPlacement="outside"
                      isRequired={true}
                      fullWidth={true}
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <Button
                    type="submit"
                    className="block w-full p-3 text-center rounded-lg text-white bg-primary"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      )}
    </>
  );
};

export default UpdateProduct;
