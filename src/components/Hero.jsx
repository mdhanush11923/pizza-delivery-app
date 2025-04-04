"use client";

import React from "react";
import { Divider, Image, Button } from "@heroui/react";
import PizzaItem from "./PizzaItem";
import { title } from "./primitives";
import TextRevealByWord from "./ui/text-reveal";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 pt-5">
      <section className="flex flex-wrap items-center justify-center gap-10 px-10 select-none">
        <div className="max-w-lg gap-4">
          <h1 className="scroll-m-20 mb-10 font-black tracking-tight text-3xl lg:text-5xl">
            Delicious Pizza Delivered Right to Your Doorstep
          </h1>
          <h2 className="scroll-m-20 pb-2 text-lg tracking-tight mt-6 lg:text-xl">
            Craving pizza? We&apos;ve got you covered!{" "}
            <span
              className={`${title({
                color: "yellow",
                size: "vs",
              })} whitespace-nowrap`}
            >
              🔥Hot
            </span>
            {", "}
            <span
              className={`${title({
                color: "blue",
                size: "vs",
              })}  whitespace-nowrap`}
            >
              🍃fresh
            </span>{" "}
            <span className={``}>and delivered</span>
            <span
              className={`${title({
                color: "green",
                size: "vs",
              })} whitespace-nowrap`}
            >
              ⚡fast!
            </span>
          </h2>
          <div className="flex flex-col gap-4 mt-10">
            <Button
              className="h-14 sm:w-72 bg-foreground text-background"
              color="success"
              radius="sm"
              size="lg"
              href="/dashboard/menu"
              as={Link}
            >
              Explore Menu
            </Button>
            <Button
              className="h-14 sm:w-72"
              color="warning"
              variant="ghost"
              radius="sm"
              size="lg"
              href="/dashboard/custom"
              as={Link}
            >
              Custom Pizza
            </Button>
          </div>
        </div>
        <div className={`max-md:w-full pointer-events-none`}>
          <Image
            isBlurred
            src="/Images/circlePizza.png"
            alt="pizza image"
            width={650}
          />
        </div>
      </section>
      <Divider className="my-16" />

      <TextRevealByWord text="Our Featured Pizzas: Handpicked Favorites You’ll Love" />
      <h1 className="m-8 text-4xl font-poppins font-extrabold tracking-tight text-center lg:text-4xl xl:text-5xl">
        Featured Pizzas
      </h1>
      <div className="flex flex-wrap gap-20 justify-center mb-20 items-center">
        <PizzaItem key={0} color="bg-limefrost" id={0} />
        <PizzaItem key={4} color="bg-lemonburst" id={4} />
        <PizzaItem key={5} color="bg-limefrost" id={5} />
      </div>
    </div>
  );
}