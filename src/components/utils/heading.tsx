"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="w-full mx-auto mb-8">
      <motion.h2 className="text-balance mb-8 text-4xl md:text-5xl tracking-wide text-black dark:text-white !leading-[1.5] text-center font-semibold capitalize">
        {title.split(" ").map((word, index) => (
          <motion.span
            initial={{
              filter: "blur(10px)",
              opacity: 0,
              y: 10,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="inline-block whitespace-nowrap"
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};
