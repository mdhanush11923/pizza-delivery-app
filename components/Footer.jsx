import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="flex flex-col home-footer w-full h-40 mt-16 gap-2 p-10 sm:h-60 bg-myhouseblue opacity-85 justify-center text-center items-center">
      <p className="text-white">
        &copy; 2024 PIZzA Delivery. All rights reserved.
      </p>
      <Link color="warning" className="font-poppins" href="/termsandconditions">
        Terms and conditions
      </Link>
    </footer>
  );
}
