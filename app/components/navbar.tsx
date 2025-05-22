"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

export function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white/30 md:bg-white md:backdrop-blur-none  dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="#home">
          {mounted && (
            <Image
              src={theme === "light" ? "/trans_bg.png" : "/white_on_trans.png"}
              alt="Foto Profil"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          )}
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#home"
            className="text-gray-700 dark:text-gray-300 hover:bg-orange-100 px-4 py-2 rounded-full"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:bg-orange-100 px-4 py-2 rounded-full"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:bg-orange-100 px-4 py-2 rounded-full"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:bg-orange-100 px-4 py-2 rounded-full"
          >
            Contact Me
          </Link>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-2xl text-gray-700 dark:text-gray-300"
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? <IoSunny /> : <IoMoon />}
            </button>
          )}
        </div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-2xl text-gray-700 dark:text-gray-300"
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? <IoSunny /> : <IoMoon />}
            </button>
          )}
          <button
            onClick={toggleMenu}
            className="text-3xl text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm shadow-inner px-6 py-4 space-y-2 transition-all duration-300 rounded-b-xl">
          <Link
            href="#home"
            className="block text-gray-700 dark:text-gray-300 hover:bg-orange-100 px-4 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-gray-700 dark:text-gray-300 hover:bg-orange-100 px-4 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block text-gray-700 dark:text-gray-300 hover:bg-orange-100 px-4 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
