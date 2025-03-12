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
        <Badge key={stack} variant="secondary">
          <span className="font-medium">{stack}</span>
        </Badge>
      ))}
    </>
  );
};
