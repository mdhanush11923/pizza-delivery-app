import { Spinner } from "@nextui-org/react";

export default function LoadingPage() {
  return (
    <div
      className="flex flex-col gap-5 h-screen w-screen justify-center items-center p-10"
      role="status"
      aria-live="polite"
    >
      <Spinner
        className="font-bold text-xl"
        label="Loading..."
        color="success"
        labelColor="success"
      />
      If only we could hurry up the oven!
    </div>
  );
}
