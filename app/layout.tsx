import type { Metadata } from "next";
import "./globals.css";
import { WalletContextProvider } from "@/components/WalletProvider";

export const metadata: Metadata = {
  title: "SeeknSwap — Swap on Solana",
  description:
    "The fastest Solana swap on Seeker. Best prices via Jupiter, mobile-first, transparent fees.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SeeknSwap",
    description: "Swap Solana tokens in seconds. Native Seeker experience.",
    siteName: "SeeknSwap",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise">
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  );
}
