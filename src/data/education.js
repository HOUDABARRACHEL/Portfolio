import supmanagement from '../assets/logos/supmanagement.png';
import ofppt from '../assets/logos/ofppt.png';

export const education = [
  {
    id: 'supmanagement',
    school: "Sup'Management",
    url: 'https://www.supmanagement.ma/',
    logo: supmanagement,
    degree: {
      fr: 'Licence Professionnelle — Génie Informatique',
      en: 'Professional Bachelor — Computer Engineering',
    },
    period: '2025 — Present',
    location: 'Fès',
  },
  {
    id: 'ofppt',
    school: 'OFPPT',
    url: 'https://www.ofppt.ma/',
    logo: ofppt,
    degree: {
      fr: 'Technicien Spécialisé — Développement Digital',
      en: 'Specialized Technician — Digital Development',
    },
    period: '2022 — 2024',
    location: 'Fès',
  },
  {
    id: 'highschool',
    school: { fr: 'Lycée', en: 'High School' },
    url: null,
    logo: null,
    degree: {
      fr: 'Baccalauréat — Sciences Physiques, Option Française',
      en: 'Baccalaureate — Physical Sciences, French Track',
    },
    period: '2021 — 2022',
    location: 'Fès',
  },
];
