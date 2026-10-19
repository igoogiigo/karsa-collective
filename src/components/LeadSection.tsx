'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MEMBERS } from '@/data/portfolio';

interface LeadProps {
  selectedTarget: 'all' | 'bayu' | 'fadil' | 'igo';
  setSelectedTarget: (target: 'all' | 'bayu' | 'fadil' | 'igo') => void;
}

export default function LeadSection({ selectedTarget, setSelectedTarget }: LeadProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const targetMember = MEMBERS.find((m) => m.id === selectedTarget);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      setErrorMsg('Nama dan kontak wajib diisi ya bro!');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          interest: selectedTarget,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gagal mengirim pesan');
      }

      setSubmitted(true);
      setResponseMsg(data.message);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch (err: unknown) {
      const errorText = err instanceof Error ? err.message : 'Terjadi kendala jaringan';
      setErrorMsg(errorText);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#141413] text-[#fbfbfa] relative overflow-hidden">
      {/* Subtle glow / grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct WA Shortcuts & Explanation */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-medium block mb-3">
              [ 03 / Start a Project ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight mb-6">
              Punya ide yang ingin <span className="font-serif italic font-normal text-neutral-300">diwujudkan</span>?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Pilih siapa yang ingin lu hubungi secara spesifik, atau ajak kami bertiga berkolaborasi untuk proyek terpadu.
              Kami siap mendiskusikan konsep, scope, dan eksekusi terbaik.
            </p>

            {/* Quick WA direct cards */}
            <div className="space-y-3 pt-6 border-t border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                Atau langsung WhatsApp ke spesialis:
              </span>

              {MEMBERS.map((m) => (
                <a
                  key={m.id}
                  href={`https://wa.me/${m.whatsapp}?text=Halo%20${encodeURIComponent(
                    m.name
                  )},%20gw%20lihat%20web%20Karsa%20Collective%20dan%20mau%20ngobrolin%20project!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-600 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="w-9 h-9 rounded-full object-cover grayscale group-hover:grayscale-0"
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                        {m.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400">{m.discipline.split(',')[0]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-neutral-400 group-hover:text-white transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat WA</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Smart Guided Form */}
          <div className="lg:col-span-7 bg-neutral-900/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                <h3 className="text-2xl font-semibold text-white mb-2">Pesan Berhasil Terkirim!</h3>
                <p className="text-neutral-400 text-sm max-w-md mb-6">{responseMsg}</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', contact: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Target Selector */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                    1. Siapa yang ingin lu ajak diskusi?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'all', label: 'Semua (Trio)' },
                      { id: 'fadil', label: 'Fadil (Arsitek)' },
                      { id: 'bayu', label: 'Bayu (Visual)' },
                      { id: 'igo', label: 'Igo (Web Dev)' },
                    ].map((target) => (
                      <button
                        key={target.id}
                        type="button"
                        onClick={() => setSelectedTarget(target.id as any)}
                        className={`px-3 py-3 rounded-xl text-xs font-medium text-center transition-all border ${
                          selectedTarget === target.id
                            ? 'bg-white text-black border-white shadow-md font-semibold'
                            : 'bg-neutral-800/60 text-neutral-300 border-neutral-700/60 hover:bg-neutral-800 hover:text-white'
                        }`}
                      >
                        {target.label}
                      </button>
                    ))}
                  </div>
                  {targetMember && (
                    <p className="text-[11px] text-neutral-400 mt-2">
                      💡 Leads ini akan dialokasikan langsung ke <strong>{targetMember.name}</strong> ({targetMember.role}).
                    </p>
                  )}
                  {selectedTarget === 'all' && (
                    <p className="text-[11px] text-neutral-400 mt-2">
                      💡 Project skala penuh — notifikasi akan masuk ke seluruh tim Karsa Collective.
                    </p>
                  )}
                </div>

                {/* Step 2: Name & Contact info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      2. Nama Lengkap / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dimas / Sora Coffee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      3. WhatsApp / Email Aktif
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 0812xxxx atau email@brand.com"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Step 3: Message / Brief */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                    4. Ceritain Singkat Rencana Project Lu
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ceritain jenis project, estimasi waktu, lokasi, atau referensi yang lu suka..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/60 border border-red-800 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    'Mengirim brief...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Brief Sekarang
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
