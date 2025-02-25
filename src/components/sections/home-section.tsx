import React from "react";
import { Wrapper } from "../utils/wrapper";

export const HomeSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Wrapper className="lg:max-w-screen-lg">
        <h1>Hero</h1>
      </Wrapper>
      <Wrapper>
        <h1>About Me</h1>
      </Wrapper>
      <Wrapper>
        <h1>Experience</h1>
      </Wrapper>
      <Wrapper>
        <h1>Projects & Blogs</h1>
      </Wrapper>
      <Wrapper>
        <h1>My Skills</h1>
      </Wrapper>
      <Wrapper>
        <h1>Reviews</h1>
      </Wrapper>
      <Wrapper>
        <h1>CTA</h1>
      </Wrapper>
    </div>
  );
};
