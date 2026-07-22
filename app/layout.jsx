import "./globals.css";
import { Cormorant_Garamond, Nunito, Dancing_Script } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const hand = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata = {
  title: "For Karina — a little goodbye",
  description:
    "Two days, and the whole sky remembered you. A farewell, and every good wish for the road ahead.",
};

export const viewport = {
  themeColor: "#17101c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
