"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Tab,
  Tabs,
  Badge,
} from "@heroui/react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";
import NextLink from "next/link";
import { useCart } from "./CartData";
import { useModalStore } from "@/store/useModalStore";
import { bases, veggies } from "./pizzaData";
import { signOut } from "@/actions";

export default function Topbar(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { cartCount } = useCart();
  const { isOpen, openModal } = useModalStore();
  const router = useRouter();
  const pathname = usePathname();
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

  const handleTabClick = (path) => {
    // console.log(path);
    router.push(path);
  };

  const handleLogout = async () => {
    toast.success("Logged out successfully! 👋");
    await signOut(); // your action function
    router.push("/");
  };

  return (
    <Navbar
      maxWidth="lg"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarBrand className="flex">
        <p className="font-black text-inherit text-lg">PIZzA</p>
        <p className="font-regular text-inherit text-sm">Delivery</p>
      </NavbarBrand>
      <NavbarContent className="hidden ml-3 w-full md:flex" justify="start">
        {menuItems.slice(0, 4).map((item) => (
          <NavbarItem
            className=" data-[active=true]:font-bold data-[active=true]:text-limefros p-1"
            isActive={item.path === pathname}
            key={item.path}
          >
            <NextLink
              className="foreground data-[active=true]:font-bold"
              href={item.path}
            >
              {item.title}
            </NextLink>
          </NavbarItem>
        ))}
        <NavbarItem className="hidden md:flex ">
          <form action={signOut}>
            <Button className="text-danger" variant="light" type="submit">
              Logout
            </Button>
          </form>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* {veggies.map((base)=> (<NavbarItem key={base.id}>{base.availableQuantity}</NavbarItem>))} */}
        <NavbarItem>
          <IconButton aria-label="cart" onClick={openModal}>
            <Badge
              size="lg"
              content={cartCount === 0 ? "" : cartCount}
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
      <NavbarMenu className="bg-background" isOpen={isMenuOpen}>
        <div>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.title}-${index}`}>
              <Button
                color={index === 4 ? "danger" : "default"}
                className={`text-${props.condition ? "white" : "black"} ${
                  index === 4 && "text-danger"
                } w-full `}
                onPress={() => handleMenuItemClick(item.path)}
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
