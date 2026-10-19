import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Karya / Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Project',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leadMemberId',
      title: 'Lead Specialist (Pemilik Karya)',
      type: 'string',
      options: {
        list: [
          { title: 'Bayu (Visual & Brand)', value: 'bayu' },
          { title: 'Fadil (Arsitektur & Interior)', value: 'fadil' },
          { title: 'Igo (Web & Digital)', value: 'igo' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori Disiplin',
      type: 'string',
      options: {
        list: [
          { title: 'Visual & Brand (Bayu)', value: 'visual' },
          { title: 'Spatial / Architecture (Fadil)', value: 'spatial' },
          { title: 'Web & Digital (Igo)', value: 'web' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'disciplineLabel',
      title: 'Discipline Label (Badge)',
      type: 'string',
      placeholder: 'misal: Brand Identity & Packaging, Commercial Interior, Next.js Web',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Nama Klien',
      type: 'string',
      placeholder: 'misal: Sora Coffee, Private Residence',
    }),
    defineField({
      name: 'year',
      title: 'Tahun Pembuatan',
      type: 'string',
      initialValue: '2026',
    }),
    defineField({
      name: 'metrics',
      title: 'Highlight / Metric (Opsional)',
      type: 'string',
      placeholder: 'misal: +140% Engagement, 320 m² Land Area',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Foto / Cover Utama (High-Res)',
      type: 'image',
      options: {
        hotspot: true, // Biar Bayu & Fadil bisa tentuin focal point saat crop
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Ringkasan Project',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables & Lingkup Pekerjaan',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'link',
      title: 'Link Live Demo / Video (Opsional)',
      type: 'url',
    }),
  ],
});
