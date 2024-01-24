import CarouselContainer from "@/components/shared/carousel/carousel";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Let's get started by setting up your account",
};

const Welcome = () => {
  return (
    <div className="h-screen center">
      <CarouselContainer />
    </div>
  );
};

export default Welcome;
