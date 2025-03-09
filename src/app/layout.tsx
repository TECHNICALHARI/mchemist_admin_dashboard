import type { Metadata } from "next";
import "../styles/globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
