"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { SessionProvider } from "next-auth/react";
import { ToastProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children}: ProvidersProps) {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <div className="transition-colors duration-500 select-none">
            <ToastProvider />
            {children}
          </div>
        </NextThemesProvider>
      </HeroUIProvider>
    </SessionProvider>
  );
}
