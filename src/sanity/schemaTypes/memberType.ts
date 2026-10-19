import { defineField, defineType } from 'sanity';

export const memberType = defineType({
  name: 'member',
  title: 'Profil Spesialis (Bayu, Fadil, Igo)',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Member Key / ID (PENTING: isi bayu / fadil / igo)',
      type: 'string',
      options: {
        list: [
          { title: 'Bayu', value: 'bayu' },
          { title: 'Fadil', value: 'fadil' },
          { title: 'Igo', value: 'igo' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nama Panggilan / Nama Lengkap',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Jabatan Spesialis',
      type: 'string',
      placeholder: 'misal: Visual & Brand Director',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discipline',
      title: 'Fokus Disiplin',
      type: 'string',
      placeholder: 'misal: Architecture, Interior, Spatial Design',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Kutipan / Headline Singkat',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio Lengkap',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Foto Profil Asli (HD)',
      type: 'image',
      options: {
        hotspot: true, // crop focal point wajah
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsapp',
      title: 'Nomor WhatsApp Asli (Format: 62812xxxx)',
      type: 'string',
      placeholder: '6281234567890',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Daftar Keahlian / Skills Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
