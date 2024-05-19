'use client';
 
import {NextUIProvider} from "@nextui-org/react";
 
export function NextUi({ children }: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}