"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Button,
} from "@heroui/react";
import { AddCircle, Delete, Edit } from "@mui/icons-material";

// You can move these to a separate file later
const bases = [
  { id: "0", name: "Thick Crust", price: 250, availableQuantity: 50 },
  { id: "1", name: "Thin Crust", price: 200, availableQuantity: 50 },
  { id: "2", name: "Cheese Burst", price: 300, availableQuantity: 50 },
  { id: "3", name: "Gluten Free", price: 350, availableQuantity: 50 },
  { id: "4", name: "Whole Wheat", price: 220, availableQuantity: 50 },
];

const sauces = [
  { id: "0", name: "Tomato Basil", price: 50, availableQuantity: 50 },
  { id: "1", name: "Barbeque", price: 60, availableQuantity: 50 },
  { id: "2", name: "White Garlic", price: 70, availableQuantity: 50 },
  { id: "3", name: "Pesto", price: 80, availableQuantity: 50 },
  { id: "4", name: "Spicy Buffalo", price: 90, availableQuantity: 50 },
];

const cheeses = [
  { id: "0", name: "Cheddar", price: 120, availableQuantity: 50 },
  { id: "1", name: "Mozzarella", price: 100, availableQuantity: 50 },
  { id: "2", name: "Parmesan", price: 140, availableQuantity: 50 },
  { id: "3", name: "Gouda", price: 160, availableQuantity: 50 },
  { id: "4", name: "Feta", price: 180, availableQuantity: 50 },
];

const veggies = [
  { id: "0", name: "Olives", price: 30, availableQuantity: 50 },
  { id: "1", name: "Bell Peppers", price: 20, availableQuantity: 50 },
  { id: "2", name: "Onions", price: 25, availableQuantity: 50 },
  { id: "3", name: "Spinach", price: 35, availableQuantity: 50 },
  { id: "4", name: "Mushrooms", price: 40, availableQuantity: 50 },
  { id: "5", name: "Cherry Tomatoes", price: 30, availableQuantity: 50 },
  { id: "6", name: "Jalapenos", price: 20, availableQuantity: 50 },
  { id: "7", name: "Sweet Corn", price: 25, availableQuantity: 50 },
];
export default function IngredientAccordion() {
  const categories = {
    Bases: bases,
    Sauces: sauces,
    Cheeses: cheeses,
    Veggies: veggies,
  };

  return (
    <div className="w-full">
      <Accordion
        fullWidth
        variant="splitted"
        defaultExpandedKeys={["Bases", "Sauces", "Cheeses", "Veggies"]}
        selectionMode="multiple"
      >
        {Object.entries(categories).map(([categoryName, items]) => (
          <AccordionItem
            key={categoryName}
            title={categoryName}
            aria-label={categoryName}

          >
            <div className="grid grid-cols-1 sm:md:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
              {items.map((item) => (
                <Card
                  key={item.id}
                  shadow="sm"
                  className="dark:border border-zinc-600 dark:bg-zinc-800"
                >
                  <CardBody>
                    <div className="flex justify-between items-center gap-3 p-2">
                      <div>
                        <h4 className="font-semibold mb-3">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Price ₹{item.price}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Stock - {item.availableQuantity}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" color="warning" variant="flat">
                          Edit <Edit />
                        </Button>
                        <Button size="sm" color="danger" variant="flat">
                          Delete <Delete />
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
              <Card
                isPressable
                shadow="sm"
                className="flex justify-center items-center border h-28 dark:border-zinc-600 dark:bg-zinc-800"
              >
                <AddCircle fontSize="large" />
              </Card>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}