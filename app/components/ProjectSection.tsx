"use client";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-tr from-orange-100 via-white to-orange-50 dark:bg-gray-900 px-6 py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 text-center">
          Project Terbaru
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Portfolio Website
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Website ini dibuat menggunakan Next.js dan Tailwind CSS. Fokus
              pada dark mode dan performa tinggi.
            </p>
          </div>

          {/* Bisa tambah project lainnya */}
        </div>
      </div>
    </section>
  );
}
