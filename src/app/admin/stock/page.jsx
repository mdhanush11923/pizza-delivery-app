"use client";
import pizzas from "@/components/pizzaData";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Tooltip,
} from "@heroui/react";
import { DeleteIcon, EditIcon, EyeIcon } from "lucide-react";

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

const columns = [
  { key: "name", label: "NAME" },
  { key: "price", label: "PRICE (₹)" },
  { key: "availableQuantity", label: "STOCK" },
];

const IngredientTable = ({ title, data }) => (
  <div className="p-4 shadow-md">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <Table
      aria-label={`${title} Table`}
      color="secondary"
      selectionMode="single"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
);

const pizzaColumns = [
  { key: "name", label: "NAME" },
  { key: "category", label: "CATEGORY" },
  { key: "smallPrice", label: "SMALL PRICE (₹)" },
  { key: "mediumPrice", label: "MEDIUM PRICE (₹)" },
  { key: "largePrice", label: "LARGE PRICE (₹)" },
  { key: "base", label: "BASE" },
  { key: "cheese", label: "CHEESE" },
  { key: "sauce", label: "SAUCE" },
  { key: "veggies", label: "VEGGIES" },
  { key: "actions", label: "ACTIONS" },
];

const PizzaTable = () => {
    const renderCell = (pizza, columnKey) => {
      const cellValue = pizza[columnKey];
      switch (columnKey) {
        case "smallPrice":
          return pizza.prices.small;
        case "mediumPrice":
          return pizza.prices.medium;
        case "largePrice":
          return pizza.prices.large;
        case "veggies":
          return pizza.veggies.length > 0
            ? pizza.veggies.map((v) => v.name).join(", ")
            : "None";
        case "base":
        case "cheese":
        case "sauce":
          return cellValue && typeof cellValue === "object"
            ? cellValue.name
            : "N/A";
        case "actions":
          return (
            <div className="flex items-center gap-3">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit Pizza">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete Pizza">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    };

  return (
    <div className="p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Pizzas</h2>
      <Table aria-label="Pizza Table" color="secondary" selectionMode="single">
        <TableHeader columns={pizzaColumns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={pizzas}>
          {(pizza) => (
            <TableRow key={pizza.pizzaId}>
              {pizzaColumns.map((col) => (
                <TableCell key={col.key}>{renderCell(pizza, col.key)}</TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default function AdminDashboard() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 p-5 w-full">
      <IngredientTable title="Bases" data={bases} />
      <IngredientTable title="Sauces" data={sauces} />
      <IngredientTable title="Cheeses" data={cheeses} />
      <IngredientTable title="Veggies" data={veggies} />
      <div className="md:col-span-2">
        <PizzaTable />
      </div>
    </div>
  );
}
