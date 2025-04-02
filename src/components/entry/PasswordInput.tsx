import {  Input } from "@heroui/react";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface PasswordInputProps {
  name: string;
  label: string;
  error?: string[]; // Optional error message
  defaultValue?: string; // Optional default value
}

export default function PasswordInput({
  name,
  label,
  defaultValue = "",
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Input
      name={name}
      label={label}
      defaultValue={defaultValue}
      endContent={
        <button
          type="button"
          className="focus:outline-none"
          onClick={() => setIsVisible(!isVisible)}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      // type="password"
    />
  );
}
