"use client";

import { ProjectCard } from "./Card/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-tr from-orange-100 via-white to-orange-50 dark:bg-gray-900 px-6 py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 text-center">
          Project Terbaru
        </h2>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
