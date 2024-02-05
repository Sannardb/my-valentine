import { Shrikhand } from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Will you be my valentine?",
  description: "Valentines request",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={shrikhand.className}>{children}</body>
    </html>
  );
}
