import { auth, currentUser } from "@clerk/nextjs/server";
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

export default async function RootLayout({ children }) {
  const { isAuthenticated } = await auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fugaz.variable} ${krub.variable} antialiased`}>
          {isAuthenticated && <NavBar />}
          <div className="fixed top-2 right-15 text-center text-white">
            <SignedOut>
              <SignInButton className="bg-sliced-cyan text-black rounded-full text-sm  h-10 sm:h-12 px-3 mr-4 cursor-pointer hover:text-white hover:bg-sliced-purple" />
              <SignUpButton>
                <button className="bg-sliced-cyan text-black rounded-full text-sm  h-10 sm:h-12 px-3 mr-4 cursor-pointer hover:text-white hover:bg-sliced-purple">
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
