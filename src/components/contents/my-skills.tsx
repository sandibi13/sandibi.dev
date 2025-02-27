import React from "react";
import { AnimationContainer } from "../utils/animation-container";

export const MySkills = () => {
  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer
        animation="slide-up"
        delay={0.1}
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Skills & Tools
          </h2>
          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-10">
            A creative problem solver with over 2 years of programming
            experience, I&apos;ve explored diverse programming languages,
            libraries, and technology stacks, honing my skills in both Frontend,
            Backend, and App development.
          </p>
          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-4">
            Eager to learn and adept at adopting new technologies, I thrive on
            expanding my skill set in the ever-evolving tech landscape.
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};
