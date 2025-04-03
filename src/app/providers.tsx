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
            <ToastProvider
              toastProps={{
                radius: "md",
                color: "primary",
                variant: "flat",
                timeout: 3000,
                hideIcon: true,
                shouldShowTimeoutProgress: true,
                classNames: {
                  closeButton:
                    "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
                },
              }}
            />
            {children}
          </div>
        </NextThemesProvider>
      </HeroUIProvider>
    </SessionProvider>
  );
}
