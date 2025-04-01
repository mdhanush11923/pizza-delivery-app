import { create } from "zustand";

interface StockState {
  bases: any[];
  cheeses: any[];
  sauces: any[];
  veggies: any[];
  updateStock: (
    type: "bases" | "cheeses" | "sauces" | "veggies",
    itemId: string,
    quantityChange: number
  ) => void;
}

export const useStockStore = create<StockState>((set) => ({
  bases: [],
  cheeses: [],
  sauces: [],
  veggies: [],

  updateStock: (type, itemId, quantityChange) => {
    set((state) => ({
      [type]: state[type].map((item) =>
        item.id === itemId
          ? {
              ...item,
              availableQuantity: item.availableQuantity + quantityChange,
            }
          : item
      ),
    }));
  },
}));
