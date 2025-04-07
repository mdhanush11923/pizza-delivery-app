"use client";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import ArrowDropDownCircleSharpIcon from "@mui/icons-material/ArrowDropDownCircleSharp";

export default function PizzaDropdown({ selectedSize, setSelectedSize }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="capitalize border-black font-poppins text-charcoalgray"
          radius="sm"
          size="sm"
          variant="bordered"
        >
          {selectedSize}
          <ArrowDropDownCircleSharpIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={new Set([selectedSize])}
        onSelectionChange={(keys) =>
          setSelectedSize(keys.values().next().value)
        }
      >
        <DropdownItem key="small">Small (8 Inches)</DropdownItem>
        <DropdownItem key="medium">Medium (10 Inches)</DropdownItem>
        <DropdownItem key="large">Large (12 Inches)</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
