import React from "react";
import { AnimatedGrid } from "../ui/animated-grid";

export const GradientBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full relative min-h-screen">
      <div className="h-screen absolute z-0 w-full">
        <AnimatedGrid
          numSquares={15}
          maxOpacity={0.1}
          duration={6}
          className="inset-x-0 h-3/4 z-10"
        />
        <div className="bg-gradient-to-t from-background z-20 h-3/4 w-full absolute inset-x-0" />
      </div>
      <div className="aspect-square size-[280px] lg:size-[565px] absolute left-1/2 -translate-x-1/2 top-0 lg:top-[-200px] light-gradient dark:dark-gradient rounded-full blur-[4rem] lg:blur-[14rem] z-10" />
      {children}
    </div>
  );
};
