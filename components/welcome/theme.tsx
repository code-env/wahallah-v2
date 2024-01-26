"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonIcon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const Theme = ({
  setIndex,
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  console.log(systemTheme);

  return (
    <div className="center center-col gap-4">
      <div className="center center-col gap-2">
        <h1 className="font-medium text-4xl">Choose your theme</h1>
        <p className="text-xl text-primary/80">
          You can still change it any time in your settings.
        </p>
      </div>

      <div className="border border-muted-foreground/25 flex rounded mt-8 overflow-hidden">
        <div
          className={cn(
            "h-32 w-32 cursor-pointer gap-2 center flex-col border-r border-muted-foreground/25",
            {
              "bg-muted": theme === "light",
            }
          )}
          onClick={() => setTheme("light")}
        >
          <Sun />
          <p>Light</p>
        </div>
        <div
          className={cn("h-32 w-32 cursor-pointer gap-2 center flex-col", {
            "bg-muted text-white": theme === "dark",
          })}
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
          <p>Dark</p>
        </div>
      </div>
      <Button
        variant="secondary"
        className="mt-8 text-lg"
        onClick={() => setIndex(1)}
      >
        Continue
      </Button>
    </div>
  );
};

export default Theme;
