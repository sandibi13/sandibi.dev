import React from "react";
import { Wrapper } from "../utils/wrapper";
import { Hero } from "../contents/hero";
import { AboutMe } from "../contents/about-me";
import { Experiences } from "../contents/experiences";
import { Featured } from "../contents/featured";
import { MySkills } from "../contents/my-skills";
import { Reviews } from "../contents/reviews";

export const HomeSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Wrapper className="lg:max-w-screen-lg">
        <Hero />
      </Wrapper>
      <Wrapper>
        <AboutMe />
      </Wrapper>
      <Wrapper>
        <Experiences />
      </Wrapper>
      <Wrapper>
        <Featured />
      </Wrapper>
      <Wrapper>
        <MySkills />
      </Wrapper>
      <Wrapper>
        <Reviews />
      </Wrapper>
      <Wrapper>
        <h1>CTA</h1>
      </Wrapper>
    </div>
  );
};
