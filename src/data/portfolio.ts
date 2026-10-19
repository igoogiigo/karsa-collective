export interface Member {
  id: 'bayu' | 'fadil' | 'igo';
  name: string;
  role: string;
  discipline: string;
  headline: string;
  bio: string;
  skills: string[];
  avatar: string;
  whatsapp: string;
  color: {
    accent: string;
    bgBadge: string;
    textBadge: string;
    border: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: 'visual' | 'spatial' | 'web';
  disciplineLabel: string;
  leadMemberId: 'bayu' | 'fadil' | 'igo';
  client: string;
  year: string;
  summary: string;
  deliverables: string[];
  thumbnail: string;
  metrics?: string;
  link?: string;
}

export const MEMBERS: Member[] = [
  {
    id: 'bayu',
    name: 'Bayu',
    role: 'Visual & Brand Director',
    discipline: 'Visual Identity, Photography, Motion',
    headline: 'Membentuk persepsi brand melalui visual berkarakter, sinematografi tajam, dan estetika timeless.',
    bio: 'Fokus pada narrative brand building. Berpengalaman menangani visual campaign, commercial photography, editorial shoots, dan identitas visual bisnis F&B hingga tech product.',
    skills: ['Brand Identity', 'Commercial Photography', 'Motion Design', 'Color Grading', 'Art Direction'],
    // Stylish male creative director photo
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    whatsapp: '6281234567890', // placeholder
    color: {
      accent: '#D97706',
      bgBadge: 'bg-amber-50',
      textBadge: 'text-amber-800',
      border: 'border-amber-200',
    },
  },
  {
    id: 'fadil',
    name: 'Fadil',
    role: 'Principal Spatial & Architect',
    discipline: 'Architecture, Interior, Spatial Design',
    headline: 'Mendesain ruang yang bernapas — menyatukan fungsi, material organik, dan kenyamanan visual.',
    bio: 'Menekuni arsitektur kontemporer dan interior fungsional. Biasa menangani kafe komersial, boutique residential, ruang kerja kreatif, hingga renovasi spasial modern.',
    skills: ['Architectural Design', 'Interior Styling', '3D Visualization', 'Space Planning', 'Material Curation'],
    // Male architect photo
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    whatsapp: '6281234567891', // placeholder
    color: {
      accent: '#059669',
      bgBadge: 'bg-emerald-50',
      textBadge: 'text-emerald-800',
      border: 'border-emerald-200',
    },
  },
  {
    id: 'igo',
    name: 'Igo',
    role: 'Creative Web Engineer & Tech Lead',
    discipline: 'Creative Development, Frontend Engineering, Web Apps',
    headline: 'Mengubah konsep desain dan interaksi kompleks menjadi pengalaman web interaktif yang cepat, elegan, dan scalable.',
    bio: 'Menjembatani estetika desain visual dengan rekayasa teknologi modern. Berfokus pada micro-interactions halus, performa tinggi, arsitektur frontend modular, dan integrasi digital yang seamless.',
    skills: ['Next.js / React', 'Tailwind CSS', 'Interactive Micro-UI', 'Fullstack API Integration', 'Web Performance'],
    // Male engineer photo
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    whatsapp: '6281234567892', // placeholder
    color: {
      accent: '#2563EB',
      bgBadge: 'bg-blue-50',
      textBadge: 'text-blue-800',
      border: 'border-blue-200',
    },
  },
];

export const PROJECTS: Project[] = [
  // Bayu Projects
  {
    id: 'project-bayu-1',
    title: 'SORA Coffee & Roastery',
    category: 'visual',
    disciplineLabel: 'Brand Identity & Visual Story',
    leadMemberId: 'bayu',
    client: 'Sora Roastery',
    year: '2025',
    summary: 'Pengembangan visual identity lengkap mulai dari logo system, packaging beans ramah lingkungan, sampai kampanye fotografi peluncuran cabang utama.',
    deliverables: ['Brand Guidelines', 'Packaging System', 'Commercial Photo Reel', 'Social Media Assets'],
    thumbnail: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200',
    metrics: '+140% Brand Engagement',
  },
  {
    id: 'project-bayu-2',
    title: 'Nara Apparel Lookbook',
    category: 'visual',
    disciplineLabel: 'Editorial Direction & Film',
    leadMemberId: 'bayu',
    client: 'Nara Studio Jakarta',
    year: '2024',
    summary: 'Editorial photography dan teaser video pendek bergaya sinematik analog untuk koleksi Fall/Winter bertema earth tone minimalis.',
    deliverables: ['Editorial Stills (35mm aesthetic)', 'Video Lookbook 60s', 'E-commerce Assets'],
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200',
  },

  // Fadil Projects
  {
    id: 'project-fadil-1',
    title: 'Rumah Semesta Pavilion',
    category: 'spatial',
    disciplineLabel: 'Architecture & Passive Cooling',
    leadMemberId: 'fadil',
    client: 'Private Residence',
    year: '2025',
    summary: 'Hunian kompak tropis dengan pencahayaan alami maksimal dan sirkulasi udara silang, memadukan bata ekspos lokal dan elemen kayu jati daur ulang.',
    deliverables: ['Schematic Architecture', '3D Photoreal Render', 'Interior Construction Drawings'],
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    metrics: '320 m² Land Area',
  },
  {
    id: 'project-fadil-2',
    title: 'Kala Communal Workspace & Cafe',
    category: 'spatial',
    disciplineLabel: 'Commercial Interior Experience',
    leadMemberId: 'fadil',
    client: 'Kala Space',
    year: '2024',
    summary: 'Transformasi ruko tua 3 lantai menjadi creative hub yang hangat, fleksibel, dengan akustik teredam untuk remote worker dan penikmat kopi artisan.',
    deliverables: ['Space Zoning Layout', 'Custom Furniture Design', 'Lighting Mood Blueprint'],
    thumbnail: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
  },

  // Igo Projects
  {
    id: 'project-igo-1',
    title: 'Arttrea Design Experience Platform',
    category: 'web',
    disciplineLabel: 'Next.js Web Experience',
    leadMemberId: 'igo',
    client: 'Arttrea Interior',
    year: '2025',
    summary: 'Platform web showcase interaktif arsitektur dengan dynamic project gallery, performa 99+ Lighthouse score, dan transisi halaman halus tanpa lag.',
    deliverables: ['Custom Next.js Frontend', 'Dynamic Image Optimization', 'Lead Capture Integration'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    metrics: '0.4s First Contentful Paint',
    link: 'https://example.com',
  },
  {
    id: 'project-igo-2',
    title: 'Venture & Foundry Landing Engine',
    category: 'web',
    disciplineLabel: 'Creative Dev & Micro-interactions',
    leadMemberId: 'igo',
    client: 'Foundry Collective',
    year: '2024',
    summary: 'High-conversion interactive landing page dengan interactive canvas, dark/light theme switcher, dan form quotation otomatis.',
    deliverables: ['Tailwind & Framer Motion UI', 'Custom Form Validation', 'Serverless Lead Webhook'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    metrics: '3.2x Lead Conversion Rate',
  },
];
