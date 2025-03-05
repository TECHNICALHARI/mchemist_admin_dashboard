import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "mChemist",
  description: "Dashboard & Login System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
