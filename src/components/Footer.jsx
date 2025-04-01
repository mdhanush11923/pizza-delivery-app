"use client";

import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="flex flex-col home-footer w-full h-40 mt-10 gap-3 p-10 sm:h-60 bg-myhouseblue opacity-85 justify-center text-center items-center">
      <div className="flex flex-wrap justify-center text-white sm:text-lg">
        <p>&copy; 2024</p>
        <p className="font-black text-inherit text-xl ml-2">PIZzA</p>
        <p className="font-regular text-inherit mr-1">Delivery</p>
        <p>. All rights reserved.</p>
      </div>
      <Link
        color="warning"
        className="font-poppins text-md"
        href="/termsandconditions"
      >
        Terms and conditions
      </Link>
    </footer>
  );
}
