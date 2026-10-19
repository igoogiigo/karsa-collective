import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#141413] border-t border-neutral-800 text-neutral-400 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-white tracking-tight">Karsa Collective</span>
            <span className="text-xs text-neutral-400">• Studio Portofolio</span>
          </div>
          <p className="text-xs text-neutral-400">
            Kolaborasi Bayu (Visual), Fadil (Arsitektur), & Igo (Web Dev).
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <a href="#about" className="hover:text-white transition-colors">
            Tentang
          </a>
          <a href="#trio" className="hover:text-white transition-colors">
            Spesialis
          </a>
          <a href="#works" className="hover:text-white transition-colors">
            Karya
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Kontak
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-neutral-900 text-center text-[11px] text-neutral-400">
        © 2026 Karsa Collective. Crafted with Next.js & Modern Web Standards.
      </div>
    </footer>
  );
}
