import Image from "next/image";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export function ProjectCard() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative group">
        <Image
          src="/trans_bg.png"
          alt="Foto Projek"
          width={256}
          height={144}
          className="object-cover w-full h-32"
        />
        <button className="w-10 h-10 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          View
        </button>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Portfolio Website
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1 text-xs">
          Website ini dibuat menggunakan Next.js dan Tailwind CSS. Fokus pada
          dark mode dan performa tinggi.
        </p>
        <div className="flex items-center gap-2 mt-3 text-blue-500 dark:text-blue-400 text-xl">
          <FaReact />
          <FaHtml5 />
          <FaNodeJs />
          <SiTailwindcss />
        </div>
      </div>
    </div>
  );
}
