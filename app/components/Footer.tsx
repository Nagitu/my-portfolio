"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <footer className="bg-gradient-to-tr from-orange-100 via-white to-orange-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 shadow-inner border-t dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kiri - Foto + Sosial */}
        <div className="flex flex-col items-start md:items-center md:items-start p-4">
          <Link href="#home">
            {mounted && (
              <Image
                src={
                  theme === "light" ? "/trans_bg.png" : "/white_on_trans.png"
                }
                alt="Foto Profil"
                width={70}
                height={70}
                className="cursor-pointer"
              />
            )}
          </Link>
          <div className="flex flex-col md:flex-row space-x-4 mt-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-orange-500 transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* Tengah - Tautan Navigasi */}
        <div className=" p-4">
          <h2 className="text-lg font-bold mb-2">Tautan</h2>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-500">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Kanan - Tags atau Informasi Tambahan */}
        <div className="border rounded-lg shadow-sm p-4 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              React
            </span>
            <span className="bg-orange-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              Next.js
            </span>
            <span className="bg-orange-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              Tailwind
            </span>
            <span className="bg-orange-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              Frontend
            </span>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-10 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Deni Prayoga. All rights reserved.
      </p>
    </footer>
  );
}
