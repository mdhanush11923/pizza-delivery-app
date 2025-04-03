"use client";

import { Button } from "@heroui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-center gap-6 bg-gray-100 p-6">
      <div className="flex flex-col items-center gap-3">
        {/* Error Icon */}
        <span className="text-6xl text-red-500">⚠️</span>

        <h2 className="text-2xl font-semibold text-gray-900">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 max-w-md">
          An unexpected error occurred. Please try again or go back to the home
          page.
        </p>
      </div>

      <div className="flex gap-4">
        {/* Retry Button */}
        <Button
          color="secondary"
          onPress={() => reset()}
          className="px-5 py-3 text-lg"
        >
          Try Again
        </Button>

        {/* Go Home Button */}
        <Button as={Link} color="primary" href="/" className="px-5 py-3 text-lg">
          Go Home
        </Button>
      </div>
    </div>
  );
}
