import { Button } from "@heroui/react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function PizzaControls({
  handlePack,
  handleRemoveFromCart,
  pizzaQuantity,
}) {
  return (
    <div className="flex w-full justify-end gap-1 items-top">
      <Button
        isDisabled={pizzaQuantity === 0}
        fullWidth
        className="rounded-l-[10px] rounded-r-none h-14 bg-[#41B3A2] dark:bg-warning hover:bg-danger dark:hover:bg-danger"
        onPress={handleRemoveFromCart}
      >
        <RemoveIcon />
      </Button>
      <Button
        fullWidth
        onPress={handlePack}
        className="rounded-r-[10px] rounded-l-none h-14 bg-[#41B3A2] dark:bg-warning hover:bg-success dark:hover:bg-success"
      >
        <AddIcon />
      </Button>
    </div>
  );
}
