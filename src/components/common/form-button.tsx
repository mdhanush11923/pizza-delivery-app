import { Button } from "@heroui/button";
import React from "react";

interface FormButtonProps {
  children: React.ReactNode;
  isPending?: boolean;
}

export default function FormButton({ children }: FormButtonProps) {
  return (
    <Button
      className="bg-black dark:bg-white"
      color="primary"
      type="submit"
      radius="sm"
    >
      {children}
    </Button>
  );
}
