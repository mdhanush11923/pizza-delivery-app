'use client'

import { Button, Image, Link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";

import Footer from "@/components/Footer";

export default function StartPage() {
  return (
    <div>
      <section className="flex flex-wrap items-center justify-center gap-10 px-10 py-8 md:py-20">
        <div className="max-w-lg gap-4">
          <div className="flex gap-10">
            <div className="flex ">
              <p className="font-black text-inherit text-2xl">PIZzA</p>
              <p className="font-regular text-inherit">Delivery</p>
            </div>
            <div className="">
              <ThemeSwitch />
            </div>
          </div>
          <h1 className="scroll-m-20 mb-10 mt-10 font-black tracking-tight text-3xl lg:text-5xl">
            Delicious Pizza Delivered Right to Your Doorstep
          </h1>
          <h2 className="scroll-m-20 pb-2 text-lg tracking-tight mt-6 lg:text-xl">
            Craving pizza? We&apos;ve got you covered!{" "}
            <span className={`${title({ color: "yellow", size: "vs" })}`}>
              🔥Hot&nbsp;
            </span>
            {", "}
            <span className={`${title({ color: "green", size: "vs" })}`}>
              🍃fresh&nbsp;
            </span>
            {" and "} 
            <span className={`${title({ color: "blue", size: "vs" })}`}>
              ⚡delivered&nbsp;
            </span>
            fast!
          </h2>
          <div className="flex flex-wrap gap-3 mt-14">
            <Button
              className="h-16 w-full sm:w-44"
              color="primary"
              radius="sm"
              size="lg"
              href="/login"
              as={Link}
              variant="ghost"
            >
              Login
            </Button>
            <Button
              className="h-16 w-full sm:w-44 hover:bg-[#0000a1]"
              color="primary"
              radius="sm"
              size="lg"
              href="/signup"
              as={Link}
            >
              Sign up
            </Button>
          </div>
        </div>
        <div className={`max-md:w-full`}>
          <Image isBlurred src="/Images/circlePizza.png" width={650} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
