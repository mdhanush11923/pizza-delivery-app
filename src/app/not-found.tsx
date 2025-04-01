"use client";

import { BackButton } from "@/components/BackButton";
import { Image } from "@heroui/image";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-wrap-reverse items-center justify-center text-center p-5 sm:gap-10">
      <div className="flex flex-col items-end text-right w-64">
        <h1 className="text-4xl font-bold mb-4">
          404 - Oops! There&apos;s no pizza here!
        </h1>
        <p className="text-lg mb-4">
          Looks like this pizza delivery got lost! Let&apos;s get you back on
          track.
        </p>
        <BackButton />
      </div>
      <div className="select-none pointer-events-none">
        <Image isBlurred={true} width={300} src="/Images/404.png" alt="not found" />
      </div>
    </div>
  );
}
