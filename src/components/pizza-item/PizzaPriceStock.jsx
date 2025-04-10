export default function PizzaPriceStock({ price, stock }) {
  let color = "bg-green-500";
  let label = "In Stock";

  if (stock < 20) {
    color = "bg-red-500";
    label = `${stock} left`;
  } else if (stock < 30) {
    color = "bg-yellow-400";
    label = "Limited";
  }

  return (
    <div className="flex w-full px-5 items-center justify-between">
      <h2 className="text-white dark:text-[black] text-lg font-poppins font-extrabold">
        ₹ {price}
      </h2>
      <div className="flex items-center">
        <div className={`w-2.5 h-2.5 rounded-full m-1 ${color}`}></div>
        <span className="text-xs italic text-white dark:text-black">
          {label}
        </span>
      </div>
    </div>
  );
}

// export default function PizzaPriceStock({ price, stock }) {
//   let badgeColor = "bg-green-100 text-green-700";
//   let label = "In Stock";

//   if (stock < 20) {
//     badgeColor = "bg-red-100 text-red-700";
//     label = `${stock} left`;
//   } else if (stock < 30) {
//     badgeColor = "bg-yellow-100 text-yellow-800";
//     label = "Limited";
//   }

//   return (
//     <div className="flex w-full px-5 items-center justify-between">
//       <h2 className="text-white dark:text-[black] text-lg font-poppins font-extrabold">
//         ₹ {price}
//       </h2>
//       <span
//         className={`text-xs font-semibold px-2 py-1 rounded-md ${badgeColor}`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// }
