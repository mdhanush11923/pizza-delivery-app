import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Input } from "@heroui/input";
import HeaderAuth from "./header-auth";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Navbar className="shadow mb-6">
        <NavbarBrand className="font-bold">
          <Link href="/">Discuss</Link>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Input />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <HeaderAuth />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
