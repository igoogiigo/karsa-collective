import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ (Tanya Jawab Klien)',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Pertanyaan',
      type: 'string',
      placeholder: 'misal: Apakah bisa menyewa hanya salah satu spesialis saja?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Jawaban',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil (Angka: 1, 2, 3...)',
      type: 'number',
      initialValue: 1,
    }),
  ],
});
