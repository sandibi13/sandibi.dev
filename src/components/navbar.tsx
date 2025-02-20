"use client";

import React from "react";
import Link from "next/link";
import { AnimationContainer } from "./utils/animation-container";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Dock, DockIcon } from "./ui/dock";
import { primaryLinks, secondaryLinks } from "@/constants/links";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./utils/mode-toggle";

const DATA = {
  primary: primaryLinks,
  secondary: secondaryLinks,
};

export const Navbar = () => {
  return (
    <nav className="z-[999] flex justify-center items-center w-full fixed bottom-6 inset-x-0 cursor-none">
      <div className="w-full h-16 bg-gradient-to-t from-background absolute -bottom-8 inset-x-0 -z-10" />
      <AnimationContainer animation="slide-up" delay={0.5}>
        <TooltipProvider delayDuration={0}>
          <Dock direction="middle" className="relative">
            {DATA.primary.map((item) => (
              <DockIcon key={item.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-11 rounded-xl"
                      )}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={10} className="px-2 py-1 text-sm">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            {DATA.secondary.map((item) => (
              <DockIcon key={item.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-11 rounded-xl"
                      )}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={10} className="px-2 py-1 text-sm">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            <DockIcon>
              <ModeToggle />
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </AnimationContainer>
    </nav>
  );
};
