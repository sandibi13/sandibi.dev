"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";

export const BuyMeCoffee = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "hidden md:flex items-center justify-center fixed z-[999999] bottom-5 right-5"
        )}
      >
        <Link href="https://buymeacoffee.com/sandibi13" target="_blank">
          <button className="rounded-full bg-blue-500 size-10 flex items-center justify-center p-2 btn-primary relative overflow-hidden transition-all duration-300">
            <Icons.coffee className="size-6" />
            <div className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 ease-in-out group-hover:translate-x-[200%] group-hover:duration-1000" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
