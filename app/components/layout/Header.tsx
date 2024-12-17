"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import NavLinks from "@/app/ui/header/nav-links";
import { loggedInLinks, loggedOutLinks } from "@/app/ui/header/nav-config";

interface HeaderProps {
  // Optional prop to override auth state for testing/development
  initialAuthState?: boolean;
}

export default function Header({ initialAuthState }: HeaderProps) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    initialAuthState || true
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Example authentication check - replace with your auth logic
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Replace with your actual auth check
        // const token = localStorage.getItem("accessToken");
        setIsLoggedIn(false);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      // Replace with your logout logic
      localStorage.removeItem("accessToken");
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Herifra
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-blue-600"
            >
              Hjem
            </Link>

            {isLoggedIn ? (
              <>
                {loggedInLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-red-600 hover:bg-red-50"
                >
                  Logg ut
                </button>
              </>
            ) : (
              <>
                {loggedOutLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-sky-100 hover:text-blue-600"
              >
                Hjem
              </Link>

              {isLoggedIn ? (
                <>
                  {loggedInLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-2 rounded-md hover:bg-sky-100 hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50"
                  >
                    Logg ut
                  </button>
                </>
              ) : (
                <>
                  {loggedOutLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-2 rounded-md hover:bg-sky-100 hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
