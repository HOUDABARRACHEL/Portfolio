import cnexia from '../assets/logos/cnexia.png';
import upwork from '../assets/logos/upwork.png';
import fiverr from '../assets/logos/fiverr.png';
import freelancer from '../assets/logos/freelancer.png';
import ehc from '../assets/logos/ehc.png';
import geotechinfo from '../assets/logos/geotechinfo.png';
import artiweb from '../assets/logos/artiweb.png';

export const experiences = [
  {
    id: 'cnexia',
    company: 'CNEXIA',
    url: 'https://www.cnexia.com/',
    logo: cnexia,
    title: {
      fr: 'Chargée de Clientèle',
      en: 'Client Relations Officer',
    },
    period: {
      fr: { start: 'Juillet 2025', end: 'présent' },
      en: { start: 'July 2025', end: 'present' },
    },
    responsibilities: {
      fr: ['Gestion de la relation client', 'Facturation', 'Demandes de rétention', 'Support technique', 'Services télévision', 'Services mobilité'],
      en: ['Customer relationship management', 'Billing', 'Retention requests', 'Technical support', 'Television services', 'Mobility services'],
    },
  },
  {
    id: 'upwork',
    company: 'Upwork-Fiver-Freelancer',
    url: 'https://www.upwork.com/',
    logos: [upwork, fiverr, freelancer],
    title: {
      fr: 'Freelance Développeuse Web',
      en: 'Freelance Web Developer',
    },
    period: {
      fr: { start: 'Novembre 2024', end: 'Mai 2025' },
      en: { start: 'November 2024', end: 'May 2025' },
    },
    responsibilities: {
      fr: ['Création de sites e-commerce et landing pages', 'Modifications de projets existants', 'JavaScript', 'HTML', 'CSS'],
      en: ['Creating e-commerce websites and landing pages', 'Modifications to existing projects', 'JavaScript', 'HTML', 'CSS'],
    },
  },
  {
    id: 'ehc',
    company: 'Human Expert Capitals',
    url: 'https://www.expertshumancapital.com/',
    logo: ehc,
    title: {
      fr: 'Développeuse Full Stack',
      en: 'Full Stack Developer',
    },
    period: {
      fr: { start: 'Janvier 2025', end: 'Mars 2025' },
      en: { start: 'January 2025', end: 'March 2025' },
    },
    responsibilities: {
      fr: ['Site web de recrutement', 'Laravel', 'React', 'MySQL', 'Symfony', 'Jira', 'Agile'],
      en: ['Recruitment website', 'Laravel', 'React', 'MySQL', 'Symfony', 'Jira', 'Agile'],
    },
  },
  {
    id: 'geotech',
    company: 'Geo-Tech Info',
    url: 'https://www.linkedin.com/company/geo-tech-info',
    logo: geotechinfo,
    title: {
      fr: 'Développeuse Mobile',
      en: 'Mobile Developer',
    },
    period: {
      fr: { start: 'Décembre 2024', end: 'Février 2025' },
      en: { start: 'December 2024', end: 'February 2025' },
    },
    responsibilities: {
      fr: ['Flutter', "Application météo mobile", 'Application de suivi automobile'],
      en: ['Flutter', 'Mobile Weather App', 'Automobile Tracking App'],
    },
  },
  {
    id: 'artiweb',
    company: 'ArtiWeb',
    url: 'https://artiweb.ma/',
    logo: artiweb,
    title: {
      fr: 'Développeuse Web',
      en: 'Web Developer',
    },
    period: {
      fr: { start: 'Avril 2024', end: 'Mai 2024' },
      en: { start: 'April 2024', end: 'May 2024' },
    },
    responsibilities: {
      fr: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Site E-commerce'],
      en: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'E-commerce Website'],
    },
  },
];
