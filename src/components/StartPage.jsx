'use client'

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
      <section className="flex flex-wrap items-center justify-center gap-10 px-10 py-8 md:py-20 select-none">
        <div className="max-w-lg gap-4">
          <div className="flex gap-10">
            <div className="flex select-none">
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
            <span
              className={`${title({ color: "yellow", size: "vs" })} whitespace-nowrap`}
            >
              🔥Hot
            </span>
            {", "}
            <span
              className={`${title({ color: "blue", size: "vs" })}  whitespace-nowrap`}
            >
              🍃fresh
            </span>{" "}
            <span className={``}>and delivered</span>
            <span
              className={`${title({ color: "green", size: "vs" })} whitespace-nowrap`}
            >
              ⚡fast!
            </span>
          </h2>

          <div className="flex flex-wrap gap-3 mt-14">
            <div className="relative overflow-hidden w-full sm:w-44 rounded-lg">
              <Button
                className="h-16 w-full sm:w-44 font-bold border-3 border-foreground text-foreground rounded-lg hover:font-extrabold"
                size="lg"
                href="/login"
                as={Link}
                variant="ghost"
              >
                Login
              </Button>
              <BorderBeam
                size={500}
                duration={5}
                borderWidth={3}
                // colorFrom="#006BFF"
                // colorTo="#FF9400"
              />
            </div>

            <RainbowButton onClick={() => router.push("/signup")}>
              <p className=" text-background">Sign up</p>
            </RainbowButton>
          </div>
        </div>
        <div className={`max-md:w-full flex-shrink pointer-events-none`}>
          <Image
            isBlurred
            src="/Images/circlePizza.png"
            alt="pizza image"
            width={650}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
