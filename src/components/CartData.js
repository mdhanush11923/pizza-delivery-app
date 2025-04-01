"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([
    {
  orderId: 1,
  items: [
    {
      pizzaId: 1,
      pizzaName: 'Margherita',
      quantity: 2,
      size: 'medium',
      baseId: 'b1',
      cheeseId: 'c1',
      sauceId: 's1',
      veggiesIds: ['v1'],
      totalPrice: 598
    },
    {
      pizzaId: 2,
      pizzaName: 'Pepperoni Heat',
      quantity: 1,
      size: 'large',
      baseId: 'b2',
      cheeseId: 'c1',
      sauceId: 's2',
      totalPrice: 449
    }
  ],
  totalAmount: 1047,
  orderDate: new Date(),
  customerName: 'John Doe',
  status: 'Delivered'
}
  ]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.totalPrice * item.quantity,
    0,
  );

  const addItemToCart = (pizzaItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.pizzaId === pizzaItem.pizzaId && item.size === pizzaItem.size,
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.pizzaId === pizzaItem.pizzaId && item.size === pizzaItem.size
            ? {
                ...item,
                quantity: item.quantity + pizzaItem.quantity,
                totalPrice: pizzaItem.totalPrice,
              }
            : item,
        );
      } else {
        return [...prevItems, pizzaItem];
      }
    });
  };

const removeItemFromCart = (pizzaId, size) => {
  setCartItems(
    (prevItems) =>
      prevItems
        .map((item) =>
          item.pizzaId === pizzaId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
  );
};


  const updateItemQuantity = (pizzaId, size, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.pizzaId === pizzaId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
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

  const clearCart = () => {
    setCartItems([]);
  }

  // Function to add a new order
  const addNewOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartTotal,
        cartItems,
        addItemToCart,
        clearCart,
        removeItemFromCart,
        updateItemQuantity,
        orders,
        addNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
