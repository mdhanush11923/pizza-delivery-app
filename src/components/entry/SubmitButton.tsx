import { Button, Spinner } from "@heroui/react";

interface SubmitButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export default function SubmitButton({
  isLoading,
  children,
}: SubmitButtonProps) {
  return (
    <Button
      fullWidth
      radius="lg"
      className="bg-[#4C5D65] font-semibold hover:font-extrabold hover:bg-[#F27F14] text-white h-16"
      variant="solid"
      size="lg"
      type="submit"
      spinner={<Spinner color="warning" variant="dots" />}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
}
