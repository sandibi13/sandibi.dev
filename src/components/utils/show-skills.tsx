"use client";

import React from "react";
import { Badge } from "../ui/badge";

interface ShowSkillsProps {
  stacks: string[];
}

export const ShowSkills = ({ stacks }: ShowSkillsProps) => {
  return (
    <>
      {stacks.map((stack) => (
        <Badge
          key={stack}
          className="bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-colors duration-300 ease-in-out"
        >
          <span className="font-medium text-black dark:text-white">
            {stack}
          </span>
        </Badge>
      ))}
    </>
  );
};
