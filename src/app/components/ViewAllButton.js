// ViewAllButton.js
import Link from "next/link";

export default function ViewAllButton({ buttonText, linkUrl }) {
  return (
    <div className="flex justify-center mt-8">
      <Link
        href={linkUrl}
        className="relative inline-block px-8 py-4 font-bold text-white bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        <span className="relative">{buttonText}</span>
        <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out group-hover:border-white" />
      </Link>
    </div>
  );
}
