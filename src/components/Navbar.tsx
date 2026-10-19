import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fbfbfa]/85 border-b border-black/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#141413] flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
            KC
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-[#141413] group-hover:opacity-70 transition-opacity">
              Karsa Collective
            </span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
              Space · Visual · Web
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#about" className="hover:text-black transition-colors">
            Tentang Kami
          </a>
          <a href="#trio" className="hover:text-black transition-colors">
            The Specialists
          </a>
          <a href="#works" className="hover:text-black transition-colors">
            Koleksi Karya
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Hubungi
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[#141413] text-[#fbfbfa] hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
          >
            Mulai Diskusi
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
