"use client";
import { useTheme } from "next-themes";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ModeToggle() {
	const [mounted, setMounted] = useState(false); // Avoid the warning
  const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	},[]);

	if (!mounted) {
		return null;
	}

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
