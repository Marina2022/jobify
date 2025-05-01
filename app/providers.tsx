'use client'
import React, {PropsWithChildren} from 'react';
import {ThemeProvider} from "@/components/ThemeProvider";

const Providers = ({children}: PropsWithChildren) => {
  
  
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Providers;