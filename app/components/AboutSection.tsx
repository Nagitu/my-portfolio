"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-tr from-orange-100 via-white to-orange-50 dark:bg-gray-800 px-6 py-20 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Tentang Saya
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Saya adalah seorang developer yang memiliki passion di bidang desain
          UI dan pengembangan web. Berpengalaman menggunakan React, Next.js, dan
          Tailwind CSS untuk membangun aplikasi modern.
        </p>
      </div>
    </section>
  );
}
