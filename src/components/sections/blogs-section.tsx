import React from "react";
import { Wrapper } from "../utils/wrapper";
import { Heading } from "../utils/heading";
import { AnimationContainer } from "../utils/animation-container";

export const BlogsSection = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
        <Heading title="Blogs" />
        <AnimationContainer className="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-justify lg:leading-8 text-foreground/80">
            Welcome to my digital notebook! Here I write about the interesting
            problems I&apos;ve solved, share tips and tricks I wish I knew
            earlier, and document my journey through the world of software
            development. No fancy jargon, just honest experiences and helpful
            insights.
          </p>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};
