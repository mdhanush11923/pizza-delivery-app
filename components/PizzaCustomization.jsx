import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Button, Checkbox, CheckboxGroup, Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import customPizzaImg from "../Images/customPizza.png";
import { useCart } from "./Cart";
import { bases as pizzaBases, sauces, cheeses, veggies as veggiesOptions } from "./pizzaData";

const PizzaCustomization = () => {
  const [base, setBase] = useState(new Set([]));
  const [sauce, setSauce] = useState(new Set([]));
  const [cheese, setCheese] = useState(new Set([]));
  const [veggies, setVeggies] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart();

  const handleVeggiesChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setVeggies([...veggies, value]);
    } else {
      setVeggies(veggies.filter((v) => v !== value));
    }
  };

  const handleSubmit = () => {
    const itemId = `${Date.now()}`; // Unique ID based on timestamp
    const itemName = `Custom Pizza with ${[...base].join(", ")}, ${[
      ...sauce,
    ].join(", ")}, ${[...cheese].join(", ")}, and ${veggies.join(", ")}`;
    const itemPrice = 500*quantity; // Implement your own logic to calculate price

    const orderData = {
      itemId,
      itemName,
      itemPrice,
      quantity: quantity,
    };

    console.log(orderData);
    addItemToCart(orderData);
  };

  return (
    <div className="flex flex-col items-center h-full p-10 pt-4">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-wrap justify-center items-center gap-10">
          <h1 className="scroll-m-20 sm:mb-4 text-4xl text-center font-poppins font-extrabold tracking-tight lg:text-5xl">
            Create Your Own Pizza
          </h1>
          <Image width={230} isBlurred src={customPizzaImg} />
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-8 w-full">
          <Select
            variant="faded"
            label="Choose Pizza Base"
            selectedKeys={base}
            onSelectionChange={setBase}
          >
            {pizzaBases.map((item) => (
              <SelectItem key={item.name}>{item.name}</SelectItem>
            ))}
          </Select>

          <Select
            variant="faded"
            label="Choose Sauce"
            selectedKeys={sauce}
            onSelectionChange={setSauce}
          >
            {sauces.map((item) => (
              <SelectItem key={item.name}>{item.name}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-8 w-full">
          <Select
            variant="faded"
            label="Choose Cheese"
            selectedKeys={cheese}
            onSelectionChange={setCheese}
          >
            {cheeses.map((item) => (
              <SelectItem key={item.name}>{item.name}</SelectItem>
            ))}
          </Select>
        </div>

        <CheckboxGroup
          classNames={{ label: "text-center" }}
          color="warning"
          label="Choose Veggies"
          orientation="horizontal"
        >
          {veggiesOptions.map((item) => (
            <Checkbox
              key={item.name}
              value={item.name}
              onChange={handleVeggiesChange}
            >
              {item.name}
            </Checkbox>
          ))}
        </CheckboxGroup>

        <Button
          className="w-44 h-14 reddanger"
          color="danger"
          size="lg"
          radius="sm"
          onClick={handleSubmit}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default PizzaCustomization;
