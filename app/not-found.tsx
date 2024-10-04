"use client";

import { BackButton } from "@/components/BackButton";
import { Image } from "@nextui-org/image";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-wrap-reverse items-center justify-center text-center gap-20 p-10">
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
      <div>
        <Image isBlurred={true} width={300} src="/Images/404.png" />
      </div>
    </div>
  );
}
