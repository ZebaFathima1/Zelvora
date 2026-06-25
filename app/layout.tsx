import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zelvora Technologies | Engineering Tomorrow with AI",
  description: "Zelvora Technologies is a premium AI startup building adaptive learning tools for students, custom software configurations, and enterprise integrations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

