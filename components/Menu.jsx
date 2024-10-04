import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import PizzaItem from "./PizzaItem";
import pizzas from "./pizzaData";
import { vegetarianPizzas, nonVegetarianPizzas } from "./pizzaData";
import vegIcon from "../Images/veg.png";
import nonVegIcon from "../Images/nonVeg.png";

export default function Menu() {
  const colors = [
    "#98DED9", // Blue-Green
    "#A1D6B2", // Green
    "#B4E380", // Green
    "#CCE0AC", // Light Green
    "#C3FF93", // Pale Green
    "#D5ED9F", // Light Green
    "#F0EAAC", // Light Yellow
    "#FFFF80", // Yellow
    "#C0C78C", // Olive
    "#F4DEB3", // Beige
    "#FFDB5C", // Yellow-Orange
    "#FFEEAD", // Light Orange
    "#FFDBB5", // Peach
    "#fadfa1", // Light Apricot
  ];

  const [selectedKey, setSelectedKey] = React.useState("All items");

  return (
    <div className="flex flex-col h-full items-center p-5 md:p-16 gap-6">
      <div className="flex flex-wrap gap-4 sm:px-10 w-full justify-center sm:justify-between">
        <h1 className="scroll-m-20 font-poppins font-extrabold tracking-tight text-center text-3xl lg:text-4xl">
          {selectedKey}
        </h1>
        <Tabs
          defaultSelectedKey="All items"
          selectedKey={selectedKey}
          onSelectionChange={setSelectedKey}
          classNames={{
            tab: "h-12 p-3 font-semibold",
            tabContent: "w-full group-data-[selected=true]:text-background ",
            cursor: "bg-foreground",
          }}
          radius="lg"
          color="primary"
          aria-label="Tabs sizes"
        >
          <Tab key="All items" title="Both">
            <div className="flex flex-wrap  w-full justify-center items-baseline gap-16">
              {pizzas.map((pizza, index) => (
                <PizzaItem key={index} id={index} color="bg-peachblossom" />
              ))}
            </div>
          </Tab>
          <Tab key="Vegetarian" title={<Image width={30} src={vegIcon} />}>
            <div className="flex flex-wrap  w-full items-center justify-center gap-16">
              {vegetarianPizzas.map((pizza) => (
                <PizzaItem key={pizza.id} id={pizza.id} color="bg-veggreen" />
              ))}
            </div>
          </Tab>
          <Tab
            key="Non Vegetarian"
            title={<Image width={30} src={nonVegIcon} />}
          >
            <div className="flex flex-wrap items-center justify-center gap-16">
              {nonVegetarianPizzas.map((pizza) => (
                <PizzaItem key={pizza.id} id={pizza.id} color="bg-[#A1D6B2]" />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
