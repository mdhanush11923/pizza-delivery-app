export default function PizzaPriceStock({ price, stock }) {
  return (
    <div className="flex w-full px-5 items-center justify-between">
      <h2 className="text-white dark:text-[black] text-lg font-poppins font-extrabold">
        ₹ {price}
      </h2>
      <div className="flex">
        <h2 className="mr-1 text-background font-poppins text-sm opacity-85 tracking-tight">
          In Stock:
        </h2>
        <h2 className="text-background font-poppins font-bold text-sm opacity-85 tracking-tight">
          {stock}
        </h2>
      </div>
    </div>
  );
}
