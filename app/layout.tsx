import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phant9m | Portfolio",
  description:
    "Portfolio of Prince Malonga (Phant9m) – game dev, cybersecurity & AI projects.",
  icons: {
    icon: "/phant9m-logo.svg",
    shortcut: "/phant9m-logo.svg",
    apple: "/phant9m-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
