import React from "react";
import { AnimationContainer } from "../utils/animation-container";

export const Reviews = () => {
  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer animation="slide-up" delay={0.1} className="">
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Reviews
          </h2>
        </div>
      </AnimationContainer>
    </div>
  );
};
