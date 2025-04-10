import { db } from "@/db";

export const getIngredients = async () => {
  const [bases, sauces, cheeses, veggies] = await Promise.all([
    db.base.findMany(),
    db.sauce.findMany(),
    db.cheese.findMany(),
    db.veggie.findMany(),
  ]);

  return {
    Bases: bases,
    Sauces: sauces,
    Cheeses: cheeses,
    Veggies: veggies,
  };
};

export async function deleteIngredient(
  id: string,
  category: "base" | "sauce" | "cheese" | "veggie"
) {
  switch (category) {
    case "base":
      return db.base.delete({ where: { id } });
    case "sauce":
      return db.sauce.delete({ where: { id } });
    case "cheese":
      return db.cheese.delete({ where: { id } });
    case "veggie":
      return db.veggie.delete({ where: { id } });
    default:
      throw new Error("Unknown category");
  }
}

export async function updateIngredient(
  id: string,
  category: "base" | "sauce" | "cheese" | "veggie",
  data: { name?: string; price?: number; availableQuantity?: number }
) {
  switch (category) {
    case "base":
      return db.base.update({ where: { id }, data });
    case "sauce":
      return db.sauce.update({ where: { id }, data });
    case "cheese":
      return db.cheese.update({ where: { id }, data });
    case "veggie":
      return db.veggie.update({ where: { id }, data });
    default:
      throw new Error("Unknown category");
  }
}

export async function createIngredient(
  category: "base" | "sauce" | "cheese" | "veggie",
  data: { name: string; price: number; availableQuantity: number }
) {
  switch (category) {
    case "base":
      return db.base.create({ data });
    case "sauce":
      return db.sauce.create({ data });
    case "cheese":
      return db.cheese.create({ data });
    case "veggie":
      return db.veggie.create({ data });
    default:
      throw new Error("Unknown category");
  }
}
