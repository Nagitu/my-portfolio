"use client";

import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Kiri: Teks */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Halo, Saya Denik 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Saya seorang Frontend Developer yang suka membangun UI yang bersih
            dan interaktif.
          </p>
        </div>

        {/* Kanan: Gambar */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/trans_bg.png"
            alt="Foto Profil"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-5"
          />
        </div>
      </div>
    </section>
  );
}
