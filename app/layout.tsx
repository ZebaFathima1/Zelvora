import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zelvora Technologies | AI Innovations",
  description: "Premium AI solutions, courses, and workshops by Zelvora Technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
