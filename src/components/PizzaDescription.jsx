import { Accordion, AccordionItem, Divider } from "@heroui/react";

export default function PizzaDescription({ pizza }) {
  return (
    <Accordion isCompact variant="splitted">
      <AccordionItem
        classNames={{
          title:
            "font-normal font-semibold text-[#F5F5F5] dark:text-charcoalgray",
          content: "text-background text-left opacity-85",
          base: "bg-charcoalgray dark:bg-[#f5f5f5] shadow-none",
        }}
        key="1"
        title="Description"
      >
        <p>{pizza.description}</p>
        <Divider className="my-2 bg-white dark:bg-[black]" />
        <p className="text-sm">
          Base: {pizza.base.name}, Sauce: {pizza.sauce.name}, Cheese:{" "}
          {pizza.cheese.name}, Veggies:{" "}
          {pizza.veggies.length > 0
            ? pizza.veggies.map((v) => v.name).join(", ")
            : "None"}
          , Category: {pizza.category}
        </p>
      </AccordionItem>
    </Accordion>
  );
}
