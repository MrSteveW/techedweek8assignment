import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sliced Bread",
  description: "Is it as good as sliced bread?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full flex justify-between">
          <div className="m-2">Sliced Bread</div>
          <nav className="mr-2">
            <Link href="/">Home .</Link>
            <Link href="/posts">Posts .</Link>
            <Link href="/posts">Add new post .</Link>
          </nav>
        </div>
        {children}
        <footer className="fixed bottom-2">Made by Steve</footer>
      </body>
    </html>
  );
}
