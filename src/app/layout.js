import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${fugaz.variable} ${krub.variable} antialiased`}>
          <NavBar />
          <div className="w-full fixed bottom-60 text-center text-white">
            <SignedOut>
              <SignInButton className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer" />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {children}
          <footer className="w-full p-2 fixed bottom-0 bg-sliced-blue text-center text-white">
            Made by Steve
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
