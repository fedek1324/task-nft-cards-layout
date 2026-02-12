import type { Metadata } from "next";
import StoreProvider from "./store/StoreProvider";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Funtech Test",
  description: "NFT Auction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
