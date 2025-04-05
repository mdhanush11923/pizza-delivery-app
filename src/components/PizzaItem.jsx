"use client";
import React, { useState } from "react";
import pizzas, { bases, cheeses, sauces, veggies } from "./pizzaData";
import { useCart } from "./CartData";
import { createCartItem } from "./PizzaInterfaces";
import PizzaDropdown from "./PizzaDropdown";
import PizzaImage from "./PizzaImage";
import PizzaControls from './PizzaControls';
import PizzaDescription from './PizzaDescription';
import PizzaPrizeStock from './PizzaPriceStock';
import { Card } from "@heroui/react";

export default function PizzaItem({ id, color }) {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [pizzaStock, setPizzaStock] = useState(pizzas[id].stock);
  const [pizzaQuantity, setPizzaQuantity] = useState(pizzas[id].quantity);
  const [cartQuantity, setCartQuantity] = useState(0);

  const pizza = pizzas[id];
  const { addItemToCart, removeItemFromCart } = useCart();

  pizza.stock = pizzaStock;
  pizza.quantity = pizzaQuantity;

  const handlePack = () => {
    if (pizzaStock <= 0) return;

    setPizzaStock(pizzaStock - 1);
    setPizzaQuantity(pizzaQuantity + 1);
    setCartQuantity(cartQuantity + 1);

    const cartItem = createCartItem({
      pizzaId: id,
      pizzaName: pizza.name,
      size: selectedSize,
      baseId: pizza.base.id,
      sauceId: pizza.sauce.id,
      cheeseId: pizza.cheese.id,
      veggiesIds: pizza.veggies.map((veg) => veg.id),
      quantity: 1,
      totalPrice: pizza.prices[selectedSize],
    });

    addItemToCart(cartItem);
    updateStock(-1);
  };

  const handleRemoveFromCart = () => {
    if (pizzaQuantity === 0) return;

    setPizzaStock(pizzaStock + 1);
    setPizzaQuantity(pizzaQuantity - 1);
    setCartQuantity(cartQuantity - 1);

    removeItemFromCart(id, selectedSize);
    updateStock(1);
  };

  const updateStock = (quantityChange) => {
    const updateIngredientStock = (items, itemId) => {
      const index = items.findIndex((item) => item.id === itemId);
      if (index !== -1) items[index].availableQuantity += quantityChange;
    };

    updateIngredientStock(bases, pizza.base.id);
    updateIngredientStock(sauces, pizza.sauce.id);
    updateIngredientStock(cheeses, pizza.cheese.id);

    pizza.veggies.forEach((veggie) => {
      updateIngredientStock(veggies, veggie.id);
    });
  };

  return (
    <Card className="w-[280px] flex flex-col justify-evenly bg-charcoalgray dark:bg-[#f5f5f5] pb-4 gap-2 rounded-[5px] shadow-md">
      <Card
        style={{ backgroundColor: color }}
        className={`w-[280px] justify-center self-start text-center rounded-t-none rounded-b-[30px] ${color} p-5 shadow-md`}
      >
        <div className="flex gap-4 flex-col items-center p-5">
          <PizzaImage
            quantity={pizzaQuantity}
            imageSource={pizza.imageSource}
          />
          <div>
            <h1 className="flex items-center scroll-m-20 text-charcoalgray min-h-14 font-poppins text-2xl font-extrabold tracking-tight">
              {pizza.name}
            </h1>
            <PizzaDropdown
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </div>
        </div>
        <PizzaControls handlePack={handlePack} handleRemoveFromCart={handleRemoveFromCart} pizzaQuantity={pizzaQuantity}/>
      </Card>

      <PizzaDescription pizza={pizza}/>

      <PizzaPrizeStock price={pizza.prices[selectedSize].toFixed(1)} stock={pizzaStock} />
    </Card>
  );
}
