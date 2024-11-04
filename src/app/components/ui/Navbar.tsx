import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <nav className="border-b bg-white dark:bg-gray-900 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">
              Property Deal Share
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
            >
              About
            </Link>
            <SignedIn>
              <Link
                href="/waitlist"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Waitlist Status
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
              <Link
                href="/"
                className="text-2xl font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-2xl font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                onClick={toggleMenu}
              >
                About
              </Link>
              <SignedIn>
                <Link
                  href="/waitlist"
                  className="text-2xl font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Waitlist Status
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button
                    className="w-48 bg-blue-600 hover:bg-blue-700 text-lg"
                    onClick={toggleMenu}
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
