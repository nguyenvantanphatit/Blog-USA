"use client";

import React, { ReactElement, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number; // Độ trễ giữa các phần tử (mặc định 10 giây)
}

export const AnimatedList = React.memo(({ className, children, delay = 10000 }: AnimatedListProps) => {
  const [index, setIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (index < childrenArray.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, delay, childrenArray.length]);

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <AnimatePresence mode="wait">
        <AnimatedListItem key={(childrenArray[index] as ReactElement).key}>
          {childrenArray[index]}
        </AnimatedListItem>
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
