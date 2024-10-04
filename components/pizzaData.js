import Pepperoni from "../Images/Pepperoni.png";
import Margherita from "../Images/Margherita.png";
import VeggieDelight from "../Images/VeggieDelight.png";
import BBQChicken from "../Images/BBQChicken.png";
import fourCheese from "../Images/FourCheese.png";
import hawaiian from "../Images/Hawaiian.png";
import buffaloChicken from "../Images/BuffaloChicken.png";
import meatLovers from "../Images/MeatLovers.png";
import pestoVeggie from "../Images/PestoVeggie.png";

const createPizza = (
  id,
  name,
  description,
  price,
  base,
  sauce,
  cheese,
  veggie,
  category,
  image,
  availableQuantity
) => ({
  id,
  name,
  description,
  prices: price,
  base,
  sauce,
  cheese,
  veggies: veggie,
  category,
  image,
  availableQuantity,
});

const pizzas = [
  {
    id: 0,
    name: "Tomato Basil Classic",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: { small: 199, medium: 299, large: 399 },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Bell Peppers",
    category: "Vegetarian",
    image: Margherita,
    availableQuantity: 10,
  },
  {
    id: 1,
    name: "Olive Delight",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: { small: 199, medium: 299, large: 399 },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Olives",
    category: "Vegetarian",
    image: Margherita,
    availableQuantity: 10,
  },
  {
    id: 2,
    name: "Cheese Burst Bliss",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: { small: 249, medium: 349, large: 449 },
    base: "Cheese Burst",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Bell Peppers",
    category: "Vegetarian",
    image: Margherita,
    availableQuantity: 10,
  },
  {
    id: 3,
    name: "Olive Dream",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: { small: 249, medium: 349, large: 449 },
    base: "Cheese Burst",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Olives",
    category: "Vegetarian",
    image: Margherita,
    availableQuantity: 10,
  },
  {
    id: 4,
    name: "Pepperoni Heat",
    description:
      "A favorite with spicy pepperoni, mozzarella, and signature tomato sauce.",
    prices: { small: 249, medium: 399, large: 499 },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: Pepperoni,
    availableQuantity: 10,
  },
  {
    id: 5,
    name: "Mushroom Pepperoni",
    description:
      "A favorite with spicy pepperoni, mozzarella, and signature tomato sauce.",
    prices: { small: 249, medium: 399, large: 499 },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Mushrooms",
    category: "Non-Vegetarian",
    image: Pepperoni,
    availableQuantity: 10,
  },
  {
    id: 6,
    name: "BBQ Pepperoni",
    description:
      "A favorite with spicy pepperoni, cheddar cheese, and BBQ sauce.",
    prices: { small: 269, medium: 419, large: 519 },
    base: "Thin Crust",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: Pepperoni,
    availableQuantity: 10,
  },
  {
    id: 7,
    name: "BBQ Mushroom Pepperoni",
    description:
      "A favorite with spicy pepperoni, cheddar cheese, and BBQ sauce.",
    prices: { small: 269, medium: 419, large: 519 },
    base: "Thin Crust",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Mushrooms",
    category: "Non-Vegetarian",
    image: Pepperoni,
    availableQuantity: 10,
  },
  {
    id: 8,
    name: "Thick Crust Pepperoni",
    description:
      "A favorite with spicy pepperoni, mozzarella, and signature tomato sauce.",
    prices: { small: 259, medium: 409, large: 509 },
    base: "Thick Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: Pepperoni,
    availableQuantity: 10,
  },
  {
    id: 9,
    name: "Mushroom Thick Crust",
    description:
      "A favorite with spicy pepperoni, mozzarella, and signature tomato sauce.",
    prices: { small: 259, medium: 409, large: 509 },
    base: "Thick Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Mushrooms",
    category: "Non-Vegetarian",
    image: Pepperoni,
    availableQuantity: 10,
  },
  {
    id: 10,
    name: "BBQ Thick Crust",
    description:
      "A favorite with spicy pepperoni, cheddar cheese, and BBQ sauce.",
    prices: { small: 279, medium: 429, large: 529 },
    base: "Thick Crust",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: Pepperoni,
    availableQuantity: 10,
  },
  {
    id: 11,
    name: "Mushroom BBQ Crust",
    description:
      "A favorite with spicy pepperoni, cheddar cheese, and BBQ sauce.",
    prices: { small: 279, medium: 429, large: 529 },
    base: "Thick Crust",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Mushrooms",
    category: "Non-Vegetarian",
    image: Pepperoni,
    availableQuantity: 10,
  },
  {
    id: 12,
    name: "Gluten-Free Delight",
    description:
      "Loaded with fresh veggies including bell peppers, onions, olives, and spinach.",
    prices: { small: 299, medium: 449, large: 599 },
    base: "Gluten Free",
    sauce: "White Garlic",
    cheese: "Feta",
    veggies: "Bell Peppers",
    category: "Vegetarian",
    image: VeggieDelight,
    availableQuantity: 10,
  },
  {
    id: 13,
    name: "Olive Gluten-Free",
    description:
      "Loaded with fresh veggies including bell peppers, onions, olives, and spinach.",
    prices: { small: 299, medium: 449, large: 599 },
    base: "Gluten Free",
    sauce: "White Garlic",
    cheese: "Feta",
    veggies: "Olives",
    category: "Vegetarian",
    image: VeggieDelight,
    availableQuantity: 10,
  },
  {
    id: 14,
    name: "Spinach Gluten-Free",
    description:
      "Loaded with fresh veggies including bell peppers, onions, olives, and spinach.",
    prices: { small: 299, medium: 449, large: 599 },
    base: "Gluten Free",
    sauce: "White Garlic",
    cheese: "Feta",
    veggies: "Spinach",
    category: "Vegetarian",
    image: VeggieDelight,
    availableQuantity: 10,
  },
  {
    id: 15,
    name: "Pesto Delight",
    description:
      "Loaded with fresh veggies including bell peppers, onions, olives, and spinach.",
    prices: { small: 319, medium: 469, large: 619 },
    base: "Whole Wheat",
    sauce: "Pesto",
    cheese: "Gouda",
    veggies: "Bell Peppers",
    category: "Vegetarian",
    image: VeggieDelight,
    availableQuantity: 10,
  },

  {
    id: 16,
    name: "Pesto Bell",
    description:
      "Loaded with fresh veggies including bell peppers, onions, olives, and spinach.",
    prices: {
      small: 319,
      medium: 469,
      large: 619,
    },
    base: "Whole Wheat",
    sauce: "Pesto",
    cheese: "Gouda",
    veggies: "Olives",
    category: "Vegetarian",
    image: VeggieDelight,
    availableQuantity: 10,
  },
  {
    id: 17,
    name: "Pesto Leaf",
    description:
      "Loaded with fresh veggies including bell peppers, onions, olives, and spinach.",
    prices: {
      small: 319,
      medium: 469,
      large: 619,
    },
    base: "Whole Wheat",
    sauce: "Pesto",
    cheese: "Gouda",
    veggies: "Spinach",
    category: "Vegetarian",
    image: VeggieDelight,
    availableQuantity: 10,
  },
  {
    id: 18,
    name: "BBQ Onyx",
    description:
      "Grilled chicken with BBQ sauce, onions, and melted cheddar cheese.",
    prices: {
      small: 349,
      medium: 499,
      large: 649,
    },
    base: "Thin Crust",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: BBQChicken,
    availableQuantity: 10,
  },
  {
    id: 19,
    name: "BBQ Shroom",
    description:
      "Grilled chicken with BBQ sauce, onions, and melted cheddar cheese.",
    prices: {
      small: 349,
      medium: 499,
      large: 649,
    },
    base: "Thin Crust",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Mushrooms",
    category: "Non-Vegetarian",
    image: BBQChicken,
    availableQuantity: 10,
  },
  {
    id: 20,
    name: "Wheat Onyx",
    description:
      "Grilled chicken with BBQ sauce, onions, and melted cheddar cheese.",
    prices: {
      small: 369,
      medium: 519,
      large: 669,
    },
    base: "Whole Wheat",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: BBQChicken,
    availableQuantity: 10,
  },
  {
    id: 21,
    name: "Wheat Shroom",
    description:
      "Grilled chicken with BBQ sauce, onions, and melted cheddar cheese.",
    prices: {
      small: 369,
      medium: 519,
      large: 669,
    },
    base: "Whole Wheat",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Mushrooms",
    category: "Non-Vegetarian",
    image: BBQChicken,
    availableQuantity: 10,
  },
  {
    id: 22,
    name: "Quad Spin",
    description: "A blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
    prices: {
      small: 399,
      medium: 549,
      large: 699,
    },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Spinach",
    category: "Vegetarian",
    image: fourCheese,
    availableQuantity: 10,
  },
  {
    id: 23,
    name: "Quad Ring",
    description: "A blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
    prices: {
      small: 399,
      medium: 549,
      large: 699,
    },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Cheddar",
    veggies: "Onions",
    category: "Vegetarian",
    image: fourCheese,
    availableQuantity: 10,
  },
  {
    id: 24,
    name: "Burst Spin",
    description: "A blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
    prices: {
      small: 429,
      medium: 579,
      large: 729,
    },
    base: "Cheese Burst",
    sauce: "White Garlic",
    cheese: "Parmesan",
    veggies: "Spinach",
    category: "Vegetarian",
    image: fourCheese,
    availableQuantity: 10,
  },
  {
    id: 25,
    name: "Burst Ring",
    description: "A blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
    prices: {
      small: 429,
      medium: 579,
      large: 729,
    },
    base: "Cheese Burst",
    sauce: "White Garlic",
    cheese: "Gouda",
    veggies: "Onions",
    category: "Vegetarian",
    image: fourCheese,
    availableQuantity: 10,
  },
  {
    id: 26,
    name: "Hawaiian Thick",
    description:
      "Tropical pizza with ham, pineapple, and melted mozzarella cheese.",
    prices: {
      small: 299,
      medium: 449,
      large: 599,
    },
    base: "Thick Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: hawaiian,
    availableQuantity: 10,
  },
  {
    id: 27,
    name: "Wheat Island",
    description:
      "Tropical pizza with ham, pineapple, and melted mozzarella cheese.",
    prices: {
      small: 319,
      medium: 469,
      large: 619,
    },
    base: "Whole Wheat",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: hawaiian,
    availableQuantity: 10,
  },
  {
    id: 28,
    name: "Buffalo Thin",
    description:
      "Spicy buffalo sauce, grilled chicken, and blue cheese dressing.",
    prices: {
      small: 349,
      medium: 499,
      large: 649,
    },
    base: "Thin Crust",
    sauce: "Spicy Buffalo",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: buffaloChicken,
    availableQuantity: 10,
  },
  {
    id: 29,
    name: "Wheat Buffalo",
    description:
      "Spicy buffalo sauce, grilled chicken, and blue cheese dressing.",
    prices: {
      small: 369,
      medium: 519,
      large: 669,
    },
    base: "Whole Wheat",
    sauce: "Spicy Buffalo",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: buffaloChicken,
    availableQuantity: 10,
  },
  {
    id: 30,
    name: "Meaty Basil",
    description:
      "Packed with pepperoni, sausage, bacon, and mozzarella cheese.",
    prices: {
      small: 399,
      medium: 599,
      large: 799,
    },
    base: "Thick Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: meatLovers,
    availableQuantity: 10,
  },
  {
    id: 31,
    name: "Meaty BBQ",
    description:
      "Packed with pepperoni, sausage, bacon, and mozzarella cheese.",
    prices: {
      small: 419,
      medium: 619,
      large: 819,
    },
    base: "Thick Crust",
    sauce: "Barbeque",
    cheese: "Mozzarella",
    veggies: "Bell Peppers",
    category: "Non-Vegetarian",
    image: meatLovers,
    availableQuantity: 10,
  },
  {
    id: 32,
    name: "Pesto Crisp",
    description:
      "A vibrant mix of fresh pesto, mozzarella, and seasonal vegetables.",
    prices: {
      small: 299,
      medium: 399,
      large: 499,
    },
    base: "Thin Crust",
    sauce: "Pesto",
    cheese: "Mozzarella",
    veggies: "Cherry Tomatoes",
    category: "Vegetarian",
    image: pestoVeggie,
    availableQuantity: 10,
  },
  {
    id: 33,
    name: "Pesto Leaf",
    description:
      "A vibrant mix of fresh pesto, mozzarella, and seasonal vegetables.",
    prices: {
      small: 299,
      medium: 399,
      large: 499,
    },
    base: "Thin Crust",
    sauce: "Pesto",
    cheese: "Mozzarella",
    veggies: "Spinach",
    category: "Vegetarian",
    image: pestoVeggie,
    availableQuantity: 10,
  },
];

// Separate arrays for bases, sauces, cheeses, and veggies
const bases = [
  { name: "Thin Crust", availableQuantity: 50 },
  { name: "Thick Crust", availableQuantity: 50 },
  { name: "Cheese Burst", availableQuantity: 50 },
  { name: "Gluten Free", availableQuantity: 50 },
  { name: "Whole Wheat", availableQuantity: 50 },
];

const sauces = [
  { name: "Tomato Basil", availableQuantity: 50 },
  { name: "Barbeque", availableQuantity: 50 },
  { name: "White Garlic", availableQuantity: 50 },
  { name: "Pesto", availableQuantity: 50 },
  { name: "Spicy Buffalo", availableQuantity: 50 },
];

const cheeses = [
  { name: "Mozzarella", availableQuantity: 50 },
  { name: "Cheddar", availableQuantity: 50 },
  { name: "Parmesan", availableQuantity: 50 },
  { name: "Gouda", availableQuantity: 50 },
  { name: "Feta", availableQuantity: 50 },
];

const veggies = [
  { name: "Bell Peppers", availableQuantity: 50 },
  { name: "Olives", availableQuantity: 50 },
  { name: "Onions", availableQuantity: 50 },
  { name: "Spinach", availableQuantity: 50 },
  { name: "Mushrooms", availableQuantity: 50 },
  { name: "Cherry Tomatoes", availableQuantity: 50 },
];

const vegetarianPizzas = pizzas.filter(
  (pizza) => pizza.category === "Vegetarian"
);

const nonVegetarianPizzas = pizzas.filter(
  (pizza) => pizza.category === "Non-Vegetarian"
);

export default pizzas;

export {createPizza};

export {
  vegetarianPizzas,
  nonVegetarianPizzas,
  bases,
  sauces,
  cheeses,
  veggies,
};
