'use client'
import { Spinner } from "@heroui/react";
import Ripple from "./ui/ripple";

export default function Loading() {
  return (
    <div
      className="relative flex flex-col gap-5 h-screen w-screen justify-center items-center p-10"
      role="status"
      aria-live="polite"
    >
      <Spinner
        className="font-bold text-xl z-10"
        label="Loading..."
        color="primary"
        labelColor="primary"
        size="lg"
      />
      <p className="z-10">If only we could hurry up the oven!</p>

      <Ripple />
    </div>
  );
}
