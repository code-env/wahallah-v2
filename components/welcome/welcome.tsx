"use client";

import Image from "next/image";
import React from "react";
import lightLogo from "@/public/assets/logo_light.svg";
import { Button } from "../ui/button";

const Welcome = ({
  setIndex,
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="center center-col gap-4">
      <Image src={lightLogo} width={100} height={100} alt="Wahallah logo" />
      <div className="center center-col gap-2">
        <h1 className="font-black text-6xl">Welcome to Wahallah</h1>
        <p className="text-2xl text-muted/70">
          let's start improving your Github Communication by settings up your
          account.
        </p>
      </div>
      <Button
        variant="secondary"
        className="mt-8 text-lg"
        onClick={() => setIndex(1)}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Welcome;
