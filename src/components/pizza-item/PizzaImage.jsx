import { Badge, Image } from "@heroui/react";

export default function PizzaImage({ imageSource, quantity }) {
  return (
    <Badge
      isInvisible={quantity === 0}
      color="success"
      placement="top-right"
      variant="shadow"
      size="lg"
      content={quantity}
    >
      <Image
        alt="pizza"
        className="w-full object-cover"
        width="100%"
        radius="full"
        src={imageSource}
        isBlurred
      />
    </Badge>
  );
}
