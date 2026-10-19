'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-28 md:pt-28 md:pb-36 border-b border-black/[0.06] overflow-hidden">
      {/* Decorative subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Pill Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200/60 border border-neutral-300/80 text-xs text-neutral-800 font-medium mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Multi-disciplinary Creative Studio</span>
          <span className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-neutral-500 font-normal">Jakarta & Remote</span>
        </motion.div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#141413] leading-[1.08]">
              Menyatukan <span className="font-serif italic font-normal">ruang fisik</span>,{' '}
              <span className="font-semibold underline decoration-neutral-300 underline-offset-8">
                identitas visual
              </span>
              , dan presisi <span className="font-mono text-3xl sm:text-5xl md:text-6xl text-neutral-800">&lt;digital/&gt;</span>.
            </h1>
          </motion.div>

          {/* Subtext & Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 lg:pl-6 flex flex-col justify-between h-full"
          >
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-6">
              Kami bertiga bergerak lintas disiplin: <strong>Fadil</strong> merancang ruang dan arsitektur,{' '}
              <strong>Bayu</strong> mengarahkan visual dan brand story, dan <strong>Igo</strong> meracik web interaktif
              yang hidup.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#141413] border-b-2 border-black pb-0.5 hover:opacity-75 transition-opacity"
              >
                Lihat Portfolio
                <ArrowDown className="w-4 h-4" />
              </a>
              <span className="text-neutral-300">|</span>
              <a
                href="#trio"
                className="text-sm text-neutral-600 hover:text-black transition-colors"
              >
                Kenali 3 Spesialis
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillars Quick Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-black/[0.06]">
          <div className="p-6 rounded-2xl bg-white/70 border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-mono font-medium text-emerald-700 uppercase tracking-widest block mb-2">
              01 / Spatial Architecture
            </span>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Fadil</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Desain ruang hunian, kafe, interior komersial, dan instalasi spasial yang memaksimalkan fungsi dan harmoni estetika.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-mono font-medium text-amber-700 uppercase tracking-widest block mb-2">
              02 / Brand & Visual Media
            </span>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Bayu</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Sistem visual identity, fotografi editorial & komersial, creative directing, dan konten video sinematik bernilai tinggi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-mono font-medium text-blue-700 uppercase tracking-widest block mb-2">
              03 / Creative Web Engineering
            </span>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Igo</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Web showcase, custom digital platforms, performa kilat, dan interaksi modern yang siap mengubah visitor jadi leads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
