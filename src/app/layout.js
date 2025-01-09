import { Inter } from "next/font/google";
import "./globals.css";
import "./globals_mobile_first.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spex",
  description: "Spex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<Footer/></body>
    </html>
  );
}
