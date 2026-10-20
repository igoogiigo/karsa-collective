import { client, urlFor } from '@/sanity/client';
import { MEMBERS as fallbackMembers, Member, PROJECTS as fallbackProjects, Project } from '@/data/portfolio';
import ClientHome from '@/components/ClientHome';
import { Suspense } from 'react';

export const revalidate = 0;


export interface FAQItem {
  _id: string;
  question: string;
  answer: string;
}

const fallbackFAQs: FAQItem[] = [
  {
    _id: 'faq-1',
    question: 'Apakah kami bisa merekrut hanya satu spesialis saja (misal hanya Bayu / Fadil / Igo)?',
    answer:
      'Tentu saja bisa! Kami bekerja secara modular. Anda bebas bekerja sama hanya dengan Bayu untuk urusan branding & visual, dengan Fadil untuk arsitektur/interior, atau dengan Igo untuk pembuatan website.',
  },
  {
    _id: 'faq-2',
    question: 'Bagaimana jika kami butuh ketiganya sekaligus untuk satu proyek terpadu?',
    answer:
      'Ini adalah kekuatan utama Karsa Collective. Kami akan berkolaborasi sebagai satu studio utuh: dari desain bangunan fisik, identitas visual & kampanye foto/video, hingga sistem web terintegrasi tanpa Anda perlu mencari agensi terpisah.',
  },
  {
    _id: 'faq-3',
    question: 'Berapa lama estimasi pengerjaan dan bagaimana sistem pembayarannya?',
    answer:
      'Timeline dan skema disesuaikan dengan scope proyek setelah brief awal didiskusikan. Kami menyediakan konsultasi awal gratis untuk menentukan roadmap, deliverables, serta tahapan termin pembayaran.',
  },
];

async function getInitialData() {
  try {
    // 1. Fetch Members & merge dengan fallback per-personil
    const memberQuery = `*[_type == "member"]{
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
    const sanityMembers = await client.fetch(memberQuery);

    const mergedMembers: Member[] = fallbackMembers.map((fallback) => {
      const found = Array.isArray(sanityMembers)
        ? sanityMembers.find((d: any) => d.id === fallback.id)
        : null;
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

    // 2. Fetch Projects (Kalo ada data di Sanity, pakai data Sanity. Kalo kosong, pake fallback)
    const projectQuery = `*[_type == "project"] | order(_createdAt desc){
      _id,
      title,
      leadMemberId,
      category,
      disciplineLabel,
      client,
      year,
      metrics,
      summary,
      deliverables,
      link,
      thumbnail
    }`;
    const sanityProjects = await client.fetch(projectQuery);

    let finalProjects: Project[] = fallbackProjects;
    if (sanityProjects && sanityProjects.length > 0) {
      finalProjects = sanityProjects.map((item: any) => ({
        id: item._id,
        title: item.title,
        category: item.category,
        disciplineLabel: item.disciplineLabel,
        leadMemberId: item.leadMemberId,
        client: item.client || '-',
        year: item.year || '2026',
        summary: item.summary,
        deliverables: item.deliverables || [],
        thumbnail: item.thumbnail ? urlFor(item.thumbnail).width(1200).url() : fallbackProjects[0].thumbnail,
        metrics: item.metrics,
        link: item.link,
      }));
    }

    // 3. Fetch FAQs (Kalo ada data di Sanity, pakai Sanity. Kalo belum ada, pake default Q&A)
    const faqQuery = `*[_type == "faq"] | order(order asc, _createdAt asc){
      _id,
      question,
      answer
    }`;
    const sanityFaqs = await client.fetch(faqQuery);
    const finalFaqs = sanityFaqs && sanityFaqs.length > 0 ? sanityFaqs : fallbackFAQs;

    return {
      members: mergedMembers,
      projects: finalProjects,
      faqs: finalFaqs,
    };
  } catch (err) {
    console.warn('Server fetch fallback:', err);
    return {
      members: fallbackMembers,
      projects: fallbackProjects,
      faqs: fallbackFAQs,
    };
  }
}

export default async function Page() {
  const data = await getInitialData();
  return <ClientHome initialData={data} />;
}
