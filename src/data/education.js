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
    period: {
      fr: 'Septembre 2025 — Septembre 2026',
      en: 'September 2025 — September 2026',
    },
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
    period: {
      fr: 'Septembre 2022 — Juillet 2024',
      en: 'September 2022 — July 2024',
    },
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
    period: {
      fr: 'Novembre 2021 — Juin 2022',
      en: 'November 2021 — June 2022',
    },
    location: 'Fès',
  },
];
