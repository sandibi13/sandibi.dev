import React from "react";
import { Wrapper } from "../utils/wrapper";
import { Heading } from "../utils/heading";
import { AnimationContainer } from "../utils/animation-container";

export const ContactsSection = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
        <Heading title="Contacts" />
        <AnimationContainer className="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-justify lg:leading-8 text-foreground/80"></p>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};
