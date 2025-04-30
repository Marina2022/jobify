'use client'

import React from 'react';
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button";

const ThemeToggle = () => {

  const {setTheme, theme} = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Button variant="outline" size="icon" className="cursor-pointer" onClick={toggleTheme}>
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
    </Button>
  );
};

export default ThemeToggle;