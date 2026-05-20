/** @format */

import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-10 flex flex-col gap-6 rounded-[2.5rem] bg-[#3b2519] px-6 py-6 text-[#f4e7dc] shadow-[0_30px_90px_rgba(57,32,20,0.3)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#f2d5c3] text-[#3b2519] shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
          <Coffee className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.35em] text-[#e6cab8]">
            Coffee Lea
          </p>
          <p className="text-lg font-semibold">Brewed to Perfection</p>
        </div>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-[#f1e5da]">
        <a href="#home" className="transition hover:text-[#f9e8dc]">
          Home
        </a>
        <a href="#featured" className="transition hover:text-[#f9e8dc]">
          Menu
        </a>
        <a href="#/about" className="transition hover:text-[#f9e8dc]">
          About
        </a>
        <a href="#/stories" className="transition hover:text-[#f9e8dc]">
          Story
        </a>
        <a href="#contact" className="transition hover:text-[#f9e8dc]">
          Contact
        </a>
        <a
          href="#order"
          className="rounded-full bg-[#f2d5c3] px-5 py-2 text-sm font-semibold text-[#3b2519] transition hover:bg-[#e5c0ad]">
          Order Today
        </a>
      </nav>
    </header>
  );
}
