"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="h-16 w-full overflow-hidden rounded-md p-[18px] bg-background outline outline-1 outline-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: "foreground" }}
          >
            {"Signed Up ✓"}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="bg-[#4C5D65] font-semibold hover:font-extrabold hover:bg-[#F27F14] text-white h-16 w-full rounded-xl"
          onPress={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="h-full flex items-center justify-center font-semibold  hover:font-extrabold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {"Sign Up"}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
