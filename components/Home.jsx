import React from "react";
import { Link } from "@nextui-org/react";
import Menu from "./Menu";
import PizzaImg from "../Images/circlePizza.png";
import { Divider, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import PizzaItem from "./PizzaItem";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 py-10 sm:p-16">
      <div>
        <div
          className={`items-center justify-center h-2/6 flex max-md:flex-wrap px-16 gap-8 lg:px-24`}
        >
          <div className="max-w-lg gap-4">
            <h1 className="scroll-m-20 mb-4 font-black tracking-tight text-3xl lg:text-5xl">
              Delicious Pizza Delivered Right to Your Doorstep
            </h1>
            <h2 className="scroll-m-20 pb-2 text-xl font-medium tracking-tight mt-6">
              Craving pizza? We’ve got you covered! 🔥Hot, 🍃fresh and
              ⏩delivered fast!
            </h2>
            <div className="flex flex-col gap-4 mt-10">
              {/* <Button
                className="h-14 w-32"
                color="primary"
                radius="sm"
                size="lg"
                href="/pizza-delivery/login"
                as={Link}
                variant="ghost"
              >
                Login
              </Button>
              <Button
                className="h-14 w-32 hover:bg-[#0000a1]"
                color="primary"
                radius="sm"
                size="lg"
                href="/pizza-delivery/signup"
                as={Link}
              >
                Sign up
              </Button> */}

              <Button
                fullWidth
                className="h-14 w-72 bg-foreground text-background"
                color="success"
                radius="sm"
                size="lg"
                href="/pizza-delivery/dashboard/menu"
                as={Link}
              >
                Explore Menu
              </Button>
              <Button
                fullWidth
                className="h-14 w-72"
                color="warning"
                variant="ghost"
                radius="sm"
                size="lg"
                href="/pizza-delivery/dashboard/custom"
                as={Link}
              >
                Custom Pizza
              </Button>
            </div>
          </div>
          <div className={`max-md:w-full`}>
            <Image isBlurred src={PizzaImg} />
          </div>
        </div>
        <Divider className="my-8" />
      </div>
      <h1 className="scroll-m-20 text-4xl font-poppins font-extrabold tracking-tight text-center lg:text-4xl">
        Featured Pizzas
      </h1>
      <div className="flex flex-wrap gap-20 justify-center items-center">
        <PizzaItem color="bg-limefrost" id={0} />
        <PizzaItem color="bg-lemonburst" id={11} />
        <PizzaItem color="bg-limefrost" id={20} />
      </div>
    </div>
  );
}
