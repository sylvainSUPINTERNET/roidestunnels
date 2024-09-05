import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUi } from "./provider";
import { CounterStoreProvider } from "./store/store-provider";
import Header from "./components/header.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nurish | Livraison à domicile",
  description: "Livraison de repas à domicile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    
    style={{
      background: "white",
      backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px), radial-gradient(ellipse at center, #fff 60%, transparent 100%)`,
      backgroundSize: '16px 16px, cover'}}
    >
      <body className={inter.className} style={{zIndex: 3, position:"relative"}}>
        <NextUi>
          <CounterStoreProvider>
            <Header></Header>
            {children}
            {/* <footer className="bg-gray-800 text-white text-center p-4 mt-[2em]">
              <div>
                <p>OK</p>
              </div>
            </footer> */}
          </CounterStoreProvider>
        </NextUi>
      </body>
    </html>
  );
}
