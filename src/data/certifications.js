import pythonEssentials1 from '../assets/certifications/python-essentials-1.png';
import pythonEssentials2 from '../assets/certifications/python-essentials-2.png';
import introCybersecurity from '../assets/certifications/introduction-to-cybersecurity.png';
import javascriptEssentials1 from '../assets/certifications/javascript-essentials-1.png';

export const certifications = [
  {
    id: 'python-essentials-1',
    name: 'Python Essentials 1',
    issuer: 'Cisco',
    date: { fr: 'Émise le juin 2024', en: 'Issued Jun 2024' },
    skills: { fr: ['Python'], en: ['Python'] },
    badge: pythonEssentials1,
    url: 'https://www.credly.com/badges/7cec8348-314b-47e2-a809-165aef726861/linked_in_profile',
  },
  {
    id: 'python-essentials-2',
    name: 'Python Essentials 2',
    issuer: 'Cisco',
    date: { fr: 'Émise le juin 2024', en: 'Issued Jun 2024' },
    skills: { fr: ['Python'], en: ['Python'] },
    badge: pythonEssentials2,
    url: 'https://www.credly.com/badges/dbd019b0-4e25-4aac-aadf-c2f8ec851d4a/linked_in_profile',
  },
  {
    id: 'introduction-to-cybersecurity',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: { fr: 'Émise le juil. 2024', en: 'Issued Jul 2024' },
    skills: { fr: ['Analyse des données', 'Cybersécurité'], en: ['Data Analysis', 'Cybersecurity'] },
    badge: introCybersecurity,
    url: 'https://www.credly.com/badges/51c59f6a-d2c1-437b-84f1-5977e71a23ee/linked_in_profile',
  },
  {
    id: 'javascript-essentials-1',
    name: 'JavaScript Essentials 1',
    issuer: 'Cisco',
    date: { fr: 'Émise le juin 2024', en: 'Issued Jun 2024' },
    skills: { fr: ['JavaScript'], en: ['JavaScript'] },
    badge: javascriptEssentials1,
    url: 'https://www.credly.com/badges/37a597ee-2b52-4507-b237-9f2b27960450/linked_in_profile',
  },
];
