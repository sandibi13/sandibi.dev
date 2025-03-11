import React from "react";
import { AnimationContainer } from "../utils/animation-container";

export const AboutMe = () => {
  return (
    <div className="w-full relative pt-10 pb-20 z-40">
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            About Me
          </h2>
        </div>
      </AnimationContainer>
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-base md:text-lg text-justify w-full">
            I am a passionate software developer and designer dedicated to
            crafting exceptional digital experiences. With expertise in both
            development and design, I bring a unique perspective to every
            project, ensuring seamless functionality meets stunning aesthetics.
            My approach combines clean code architecture with intuitive user
            interfaces, creating solutions that not only work flawlessly but
            also delight users. I specialize in building responsive web
            applications with React and creating cross-platform mobile
            experiences using React Native. When I&apos;m not coding,
            you&apos;ll find me designing sleek user interfaces in Figma, always
            striving to bridge the gap between functionality and beautiful
            design. Let&apos;s build something amazing together! ✨
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};
