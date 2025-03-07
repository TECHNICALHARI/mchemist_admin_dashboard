import type { Metadata } from "next";
import "../styles/globals.css";
import ReduxProvider from "@/redux/ReduxProvider";

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
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
