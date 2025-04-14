"use client";

import { Button, Image } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/ui/primitives";
import { ThemeSwitch } from "@/components/layout/theme-switch";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";

export default function StartPage() {
  const router = useRouter();

  return (
    <div>
      <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 py-10 lg:py-24 select-none relative">
        {/* === TEXT === */}
        <div className="w-full lg:w-2/5 z-10 mt-[-15rem] lg:mt-0">
          <div className="absolute inset-0 bg-white/60 dark:bg-black/60  backdrop-blur-md rounded-xl -z-10 lg:hidden" />
          <div className="flex gap-10 items-center">
            <div className="select-none flex">
              <p className="font-black text-inherit text-2xl">PIZzA</p>
              <p className="font-regular text-inherit">Delivery</p>
            </div>
            <ThemeSwitch />
          </div>

          <h1 className="scroll-m-20 mb-10 mt-10 font-black tracking-tight text-3xl lg:text-5xl">
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
            and delivered{" "}
            <span
              className={`${title({
                color: "green",
                size: "vs",
              })} whitespace-nowrap`}
            >
              ⚡fast!
            </span>
          </h2>

          <div className="flex flex-wrap gap-3 mt-14 ">
            <div className="relative overflow-hidden w-full xm:w-44 max-w-80 rounded-lg">
              <Button
                className="h-16 w-full xm:w-44 font-bold border-3 border-foreground text-foreground rounded-lg hover:font-extrabold"
                size="lg"
                href="/login"
                as={Link}
                variant="ghost"
              >
                Login
              </Button>
              <BorderBeam size={500} duration={5} borderWidth={3} />
            </div>

            <RainbowButton onClick={() => router.push("/signup")}>
              <p className="text-background">Sign up</p>
            </RainbowButton>
          </div>
        </div>

        {/* === IMAGE === */}
        <div className="flex justify-center w-full max-w-[400px] lg:max-w-full lg:w-3/5 pointer-events-none relative z-0">
          <Image
            isBlurred
            src="/Images/circlePizza.png"
            alt="pizza image"
            width={650}
            className="w-full h-auto mx-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
