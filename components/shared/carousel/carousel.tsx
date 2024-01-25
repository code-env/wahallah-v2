"use client";

import Welcome from "@/components/welcome/welcome";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index: number) => {};

  return (
    <div className="h-screen center">
      <div className="center">{index === 0 && <Welcome />}</div>
      <div className="absolute bottom-14  left-0 right-0 mx-auto w-fit center-row gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleChangeIndex(i)}
            className={cn(
              "w-3 h-3 rounded-full bg-muted-foreground/50 cursor-pointer hover:bg-muted-foreground slowmo",
              {
                "bg-muted-foreground": i === index,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
