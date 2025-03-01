"use client";
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Tooltip,
  AccordionItem,
  Accordion,
  Divider,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownCircleSharpIcon from "@mui/icons-material/ArrowDropDownCircleSharp";
import pizzas, { bases, cheeses, sauces, veggies } from "./pizzaData";
import { AddCircleOutline, AddRounded, AddSharp } from "@mui/icons-material";
import { ScrollShadow } from "@nextui-org/react";
import { useCart } from "./CartData";
import { createCartItem } from "./PizzaInterfaces";

export default function PizzaItem({ id, color }) {
  const [selectedSize, setSelectedSize] = React.useState("medium"); // Default size
  const [quantity, setQuantity] = React.useState(0); // State for cart count
  const pizza = pizzas[id];

  const { cartCount, addItemToCart } = useCart();

  const handlePack = () => {
    const cartItem = createCartItem({
      pizzaId: id,
      pizzaName: pizza.name,
      size: selectedSize,
      baseId: pizza.base.id, // Get base ID
      sauceId: pizza.sauce.id, // Get sauce ID
      cheeseId: pizza.cheese.id, // Get cheese ID
      veggiesIds:
        pizza.veggies.length > 0
          ? pizza.veggies.map((vegId) => vegId)
          : undefined, // Add only if veggies are selected
      quantity: 1,
      totalPrice: pizza.prices[selectedSize], // Calculate total price based on the selected options
    });

    console.log("Pizza Customization: ", cartItem);
    addItemToCart(cartItem);
    updateStock(pizza, 1);
  };

  // Update function in the context
  const updateStock = (pizza, quantity) => {
    // Update pizza stock
    pizza.stock -= quantity;
    pizza.quantity += quantity;

    // Update base stock
    const baseIndex = bases.findIndex((b) => b.id === pizza.base.id);
    if (baseIndex !== -1) bases[baseIndex].availableQuantity -= quantity;

    // Update cheese stock
    const cheeseIndex = cheeses.findIndex((c) => c.id === pizza.cheese.id);
    if (cheeseIndex !== -1) cheeses[cheeseIndex].availableQuantity -= quantity;

    // Update sauce stock
    const sauceIndex = sauces.findIndex((s) => s.id === pizza.sauce.id);
    if (sauceIndex !== -1) sauces[sauceIndex].availableQuantity -= quantity;

    // Update veggies stock
    pizza.veggies?.forEach((veggie) => {
      const veggieIndex = veggies.findIndex((v) => v.id === veggie.id);
      if (veggieIndex !== -1)
        veggies[veggieIndex].availableQuantity -= quantity;
    });
  };

  function DemoDropDown() {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            className="capitalize font-poppins text-charcoalgray"
            radius="sm"
            color=""
            size="sm"
            variant="bordered"
          >
            {selectedSize}
            <ArrowDropDownCircleSharpIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={new Set([selectedSize])}
          onSelectionChange={(keys) =>
            setSelectedSize(keys.values().next().value)
          }
        >
          <DropdownItem key="small">Small (8 Inches)</DropdownItem>
          <DropdownItem key="medium">Medium (10 Inches)</DropdownItem>
          <DropdownItem key="large">Large (12 Inches)</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Card className="w-[275px] flex flex-col justify-evenly bg-charcoalgray  dark:bg-[#f5f5f5] pb-4 gap-2 rounded-[5px] shadow-md">
      <Card
        style={{ backgroundColor: color }}
        className={`w-[275px] justify-center self-start text-center rounded-t-none rounded-b-[30px] ${color} p-5 shadow-md`}
      >
        <div className="flex gap-4 flex-col items-center p-5">
          <Image
            alt="pizza"
            className="w-full object-cover"
            width="100%"
            radius="full"
            src={pizza.imageSource}
            isBlurred
          />
          <div>
            <h1 className="flex items-center scroll-m-20 text-charcoalgray min-h-14 font-poppins text-2xl font-extrabold tracking-tight">
              {pizza.name}
            </h1>
            <DemoDropDown />
          </div>
        </div>
        {/* <div className="ml-1 w-full bg-[#41B3A2] dark:bg-warning h-2"></div>
        <div className="ml-1 w-full flex justify-between h-1">
          <div className="w-2 bg-[#41B3A2] dark:bg-warning h-2"></div>
          <div className="w-1 h-2  bg-[#41B3A2] dark:bg-warning"></div>
        </div> */}
        <div className="flex w-full justify-end gap-1 items-top">
          {/* <div className="w-0 bg-[#41B3A2] dark:bg-warning h-5"></div> */}
          <Button
            fullWidth
            className="rounded-t-[0px] rounded-[10px] h-14 bg-[#41B3A2] dark:bg-warning"
            color="primary"
            onClick={handlePack}
          >
            <AddIcon />
          </Button>
          <div className="w-0 bg-[#41B3A2] dark:bg-warning h-5"></div>
        </div>
      </Card>
      <Accordion isCompact variant="splitted">
        <AccordionItem
          classNames={{
            title:
              "font-normal font-semibold text-[#F5F5F5] dark:text-charcoalgray",
            content: "text-background text-left opacity-85",
            base: "bg-charcoalgray dark:bg-[#f5f5f5] shadow-none",
          }}
          key="1"
          aria-label="Accordion 1"
          title="Description"
        >
          <p>{pizza.description}</p>
          <Divider className="my-2 bg-white dark:bg-[black]" />
          <p className="text-sm">
            Base: {pizza.base.name}, Sauce: {pizza.sauce.name}, Cheese:{" "}
            {pizza.cheese.name}, Veggies:{" "}
            {pizza.veggies && pizza.veggies.length > 0
              ? pizza.veggies.map((veggie) => veggie.name).join(", ")
              : "None"}
            , Category: {pizza.category}
          </p>
        </AccordionItem>
      </Accordion>

      <div className="flex w-full px-5 items-center justify-between">
        <h2 className="text-white dark:text-[black] text-lg font-poppins font-extrabold">
          ₹ {pizza.prices[selectedSize].toFixed(0)}
        </h2>
        <div className="flex">
          <h2 className="scroll-m-20 mr-1 text-background font-poppins text-sm opacity-85 tracking-tight first:mt-0">
            In Stock:
          </h2>
          <h2 className="scroll-m-20 text-background font-poppins font-bold text-sm opacity-85 tracking-tight first:mt-0">
            {pizza.stock}
          </h2>
        </div>
        <div>
          <h2 className="scroll-m-20 text-background font-poppins font-bold text-sm opacity-85 tracking-tight first:mt-0">
            {pizza.quantity}
          </h2>
        </div>
      </div>
    </Card>
  );
}
