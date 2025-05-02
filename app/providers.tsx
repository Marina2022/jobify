'use client'
import React, {PropsWithChildren, useState} from 'react';
import {ThemeProvider} from "@/components/ThemeProvider";
import {Toaster} from "@/components/ui/sonner"
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const Providers = ({children}: PropsWithChildren) => {

  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000 * 5  // 5 минут
        }
      }
    })
  })

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </div>
  );
};

export default Providers;