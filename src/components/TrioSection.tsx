'use client';

import { useState, useEffect } from 'react';
import { MEMBERS as fallbackMembers, Member } from '@/data/portfolio';
import { client, urlFor } from '@/sanity/client';
import { MessageSquare, ArrowUpRight, Compass, Camera, Code } from 'lucide-react';

interface TrioProps {
  onSelectLeadFor: (memberId: 'bayu' | 'fadil' | 'igo') => void;
}

export default function TrioSection({ onSelectLeadFor }: TrioProps) {
  const [members, setMembers] = useState<Member[]>(fallbackMembers);

  useEffect(() => {
    async function loadMembersFromSanity() {
      try {
        const query = `*[_type == "member"]{
          id,
          name,
          role,
          discipline,
          headline,
          bio,
          skills,
          whatsapp,
          avatar
        }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          // Merge with fallback to keep colors
          const merged = fallbackMembers.map((fallback) => {
            const found = data.find((d: any) => d.id === fallback.id);
            if (found) {
              return {
                ...fallback,
                name: found.name || fallback.name,
                role: found.role || fallback.role,
                discipline: found.discipline || fallback.discipline,
                headline: found.headline || fallback.headline,
                bio: found.bio || fallback.bio,
                skills: found.skills && found.skills.length > 0 ? found.skills : fallback.skills,
                whatsapp: found.whatsapp || fallback.whatsapp,
                avatar: found.avatar ? urlFor(found.avatar).width(800).url() : fallback.avatar,
              };
            }
            return fallback;
          });
          setMembers(merged);
        }
      } catch (err) {
        console.warn('Member fetch fallback:', err);
      }
    }

    loadMembersFromSanity();
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case 'bayu':
        return <Camera className="w-4 h-4 text-amber-600" />;
      case 'fadil':
        return <Compass className="w-4 h-4 text-emerald-600" />;
      case 'igo':
        return <Code className="w-4 h-4 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="trio" className="py-24 border-b border-black/[0.06] bg-[#f7f6f2]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium block mb-3">
            [ 01 / Three Minds, One Circle ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#141413]">
            Kenali <span className="font-semibold">Spesialis</span> di Balik Setiap Karya
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Kalian bisa berkolaborasi dengan salah satu dari kami secara independen, atau merekrut kami sebagai satu tim
            utuh untuk proyek berskala penuh.
          </p>
        </div>

        {/* Members Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-20 h-20 rounded-2xl object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-white shadow-md border border-black/[0.05]">
                      {getIcon(member.id)}
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-mono px-3 py-1 rounded-full font-medium ${member.color.bgBadge} ${member.color.textBadge} border ${member.color.border}`}
                  >
                    {member.role.split(' ')[0]}
                  </span>
                </div>

                {/* Name & Headline */}
                <h3 className="text-2xl font-semibold text-[#141413] tracking-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-4">
                  {member.discipline}
                </p>

                <p className="text-sm font-medium text-neutral-800 leading-snug mb-3">
                  &ldquo;{member.headline}&rdquo;
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-normal">
                  {member.bio}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-normal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Direct WA + Quick Lead Form Trigger */}
              <div className="pt-6 border-t border-black/[0.06] flex items-center gap-2">
                <button
                  onClick={() => onSelectLeadFor(member.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#141413] text-white hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Kirim Brief ke {member.name.split(' ')[0]}
                </button>
                <a
                  href={`https://wa.me/${member.whatsapp}?text=Halo%20${encodeURIComponent(
                    member.name
                  )},%20gw%20lihat%20portfolio%20lu%20di%20Karsa%20Collective%20dan%20tertarik%20mau%20diskusi%20project%20nih!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Direct WhatsApp"
                  className="p-2.5 rounded-xl border border-black/[0.1] text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
