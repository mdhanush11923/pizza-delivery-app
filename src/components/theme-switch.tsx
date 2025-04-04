"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonFilledIcon, SunFilledIcon } from "./icons";
import { motion } from "motion/react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setMounted(true); // Set mounted to true when the component is mounted
  }, []);

  useEffect(() => {
    if (theme) setIsDark(theme === "dark");
  }, [theme]);

  const onChange = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  // Don't render anything until mounted is true
  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer border-2 flex items-center dark:border-white
                   transition-all hover:border-blue-500 hover:shadow-[0px_0px_10px_2px]
                   hover:shadow-blue-500 dark:hover:shadow-blue-300"
      style={{
        width: 50,
        height: 28,
        borderRadius: 40,
        padding: 4,
      }}
      onClick={onChange}
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        className="bg-myhouseblue text-white flex items-center justify-center p-1"
        style={{
          width: 19,
          height: 19,
          borderRadius: "50%",
        }}
        layout
        transition={{
          type: "spring",
          duration: 0.25,
          bounce: 0.3,
        }}
        animate={{
          x: isDark ? 20 : 0,
        }}
      >
        {isDark ? (
          <SunFilledIcon width={14} height={14} />
        ) : (
          <MoonFilledIcon width={14} height={14} />
        )}
      </motion.div>
    </button>
  );
};

// return (
//   <Switch
//     classNames={{
//       base: cn(
//         "inline-flex flex-row-reverse h-8 max-w-md items-center justify-between",
//         "bg-[#cacaca53] hover:bg-content2 cursor-pointer rounded-lg gap-2 p-2 border-transparent",
//         className, // Allow for custom classes
//       ),
//       wrapper: cn(
//         "p-0 h-4 overflow-visible bg-[black]",
//         "group-data-[selected=true]:bg-success",
//       ),
//       thumb: cn(
//         "w-6 h-6 shadow-lg text-[black]",
//         "group-data-[hover=true]:text-success",
//         "group-data-[selected=true]:ml-[24px]",
//         "group-data-[selected=true]:text-warn",
//         "group-data-[pressed=true]:w-6 group-data-[selected]:group-data-[pressed]:ml-5", // Pressed state with slight expansion
//       ),
//     }}
//     isSelected={isDark}
//     onChange={onChange}
//     thumbIcon={
//       isDark ? (
//         <svg
//           aria-hidden="true"
//           focusable="false"
//           height="18"
//           role="presentation"
//           viewBox="0 0 24 24"
//           width="18"
//           className="text-black"
//         >
//           <g fill="currentColor">
//             <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z"></path>
//             <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"></path>
//           </g>
//         </svg>
//       ) : (
//         <svg
//           aria-hidden="true"
//           focusable="false"
//           height="18"
//           role="presentation"
//           viewBox="0 0 24 24"
//           width="18"
//           className="text-black"
//         >
//           <path
//             d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
//             fill="currentColor"
//           ></path>
//         </svg>
//       )
//     }
//   />
// );
