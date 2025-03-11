import React from "react";
import { cn } from "@/lib/utils";

export const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn("w-11/12 lg:max-w-screen-md mx-auto h-full", className)}
    >
      {children}
    </section>
  );
};
