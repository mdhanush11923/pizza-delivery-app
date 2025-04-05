"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image, Tab, Tabs } from "@heroui/react";
import { Button } from "@heroui/react";
import PizzaItem from "./PizzaItem";
import pizzas from "./pizzaData";
import { vegetarianPizzas, nonVegetarianPizzas } from "./pizzaData";
import BlurFade from "./ui/blur-fade";
import { ChevronDown } from "lucide-react";

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

  const [selectedKey, setSelectedKey] = React.useState("All Items");

  return (
    <div className="flex flex-col h-full items-center gap-6">
      <div className="flex flex-wrap  items-center gap-3 w-full justify-center sm:justify-between">
        <div className="flex flex-col justify-center sm:justify-start gap-3 mb-5">
          <h1 className="font-poppins text-4xl font-extrabold tracking-tight text-center sm:text-left">
            {selectedKey === "All Items"
              ? "Explore Our Full Pizza Menu"
              : selectedKey === "Vegetarian"
              ? "Fresh & Green: Veggie Delights"
              : "Meaty Goodness: Non-Veg Faves"}
          </h1>
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            {selectedKey === "All Items"
              ? "From cheesy classics to spicy experiments — we’ve got your cravings covered."
              : selectedKey === "Vegetarian"
              ? "Loaded with fresh veggies and flavor-packed sauces. 100% meat-free."
              : "Packed with bold spices and savory toppings for the meat lovers out there."}
          </p>
        </div>

        <Tabs
          defaultSelectedKey="All Items"
          selectedKey={selectedKey}
          onSelectionChange={setSelectedKey}
          classNames={{
            tab: "h-12 p-3",
            tabContent: "w-full group-data-[selected=true]:text-background ",
            cursor: "bg-foreground",
            panel: "w-full",
          }}
          radius="lg"
          color="primary"
          aria-label="Tabs sizes"
        >
          <Tab key="All Items" title="Both">
            <div className="grid justify-items-center place-items-start content-evenly gap-5 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
              {pizzas.map((pizza, index) => (
                <div
                  key={pizza.id}
                  className="w-full flex-grow flex justify-center"
                >
                  <BlurFade delay={0.25} inView>
                    <PizzaItem id={index} color="bg-peachblossom" />
                  </BlurFade>
                </div>
              ))}
            </div>
          </Tab>
          <Tab
            key="Vegetarian"
            title={
              <Image width={40} src="/Images/veg.png" alt="veg pizza image" />
            }
          >
            <div className="grid justify-items-center place-items-start content-evenly gap-5 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
              {vegetarianPizzas.map((pizza) => (
                <div key={pizza.pizzaId} className="w-full flex justify-center">
                  <BlurFade delay={0.25} inView>
                    <PizzaItem id={pizza.pizzaId} color="bg-veggreen" />
                  </BlurFade>
                </div>
              ))}
            </div>
          </Tab>
          <Tab
            key="Non Vegetarian"
            title={
              <Image
                width={40}
                src="/Images/nonVeg.png"
                alt="veg pizza image"
              />
            }
          >
            <div className="grid justify-items-center place-items-start content-evenly gap-5 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
              {nonVegetarianPizzas.map((pizza) => (
                <div key={pizza.pizzaId} className="w-full flex justify-center">
                  <BlurFade delay={0.25} inView>
                    <PizzaItem id={pizza.pizzaId} color="bg-[#A1D6B2]" />
                  </BlurFade>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
