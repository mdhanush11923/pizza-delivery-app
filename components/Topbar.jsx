"use client"

import { useRouter } from "next/navigation";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Tab,
  Tabs,
  Badge,
} from "@nextui-org/react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeSwitch } from "./theme-switch";

export default function Topbar(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const { cartCount } = useCart();
  const router = useRouter();
  const { pathname } = router;
  const menuItems = [
    { title: "Home", path: "/dashboard" },
    { title: "Menu", path: "/dashboard/menu" },
    { title: "Custom", path: "/dashboard/custom" },
    { title: "Orders", path: "/dashboard/orders" },
    { title: "Log Out", path: "/" },
  ];

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(!isMenuOpen); // Close the menu
    router.push(path); // Navigate to the selected path
  };

  return (
    <Navbar
      maxWidth
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarBrand>
        <div className="flex ">
          <p className="font-black text-inherit text-xl">PIZzA</p>
          <p className="font-regular text-inherit">Delivery</p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden max-w-full md:flex" justify="center">
        <Tabs
          selectedKey={pathname}
          color="success"
          size="lg"
          variant="underlined"
          aria-label="Navigation tabs"
        >
          {menuItems.slice(0, 4).map((item) => (
            <Tab key={item.path} href={item.path} title={item.title} />
          ))}
        </Tabs>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Button
            color="danger"
            href="/"
            variant="light"
          >
            Logout
          </Button>
        </NavbarItem>
        <NavbarItem>
          <IconButton aria-label="cart">
            <Badge
              size="lg"
              // content={cartCount === 0 ? "" : cartCount}
              variant="shadow"
              color="success"
            >
              <ShoppingCartIcon color="success" />
            </Badge>
          </IconButton>
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        motionProps={{
          initial: { backgroundColor: "#FFFFFF" }, // Initial color (before menu opens)
          animate: { backgroundColor: props.condition ? "black" : "white" }, // Color after menu opens
          exit: { backgroundColor: "#FFFFFF" }, // Color when menu closes
          transition: { duration: 0.5 }, // Optional: transition duration
        }}
        className="bg-inherit"
        isOpen={isMenuOpen}
      >
        <div>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.title}-${index}`}>
              <Button
                color={index === 4 ? "danger" : "default"}
                className={`text-${props.condition ? "white" : "black"} ${
                  index === 4 && "text-danger"
                } w-full `}
                onClick={() => handleMenuItemClick(item.path)}
                size="lg"
                variant="light"
                radius="none"
              >
                <p> {item.title} </p>
              </Button>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
