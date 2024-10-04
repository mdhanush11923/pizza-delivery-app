"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      className="h-12 w-full sm:w-40"
      onClick={() => router.back()}
      color="danger"
      variant="flat"
    >
      Go Back
    </Button>
  );
}
