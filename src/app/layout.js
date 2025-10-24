import NavBar from "../components/NavBar";

import { Fugaz_One } from "next/font/google";
import { Krub } from "next/font/google";
import "./globals.css";

const fugaz = Fugaz_One({
  variable: "--font-fugaz",
  weight: "400",
  subsets: ["latin"],
});

const krub = Krub({
  variable: "--font-krub",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sliced Bread",
  description: "Is it as good as sliced bread?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fugaz.variable} ${krub.variable} antialiased`}>
        <NavBar />
        {children}
        <footer className="w-full p-2 fixed bottom-0 bg-sliced-blue text-center">
          Made by Steve
        </footer>
      </body>
    </html>
  );
}
