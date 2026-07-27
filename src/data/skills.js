import {
  SiJavascript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiPython,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJquery,
  SiFlutter,
  SiJira,
  SiMysql,
  SiMongodb,
  SiWordpress,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaDatabase, FaFileExcel, FaFileWord, FaFilePowerpoint } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

export const skillCategories = [
  {
    key: 'webDevelopment',
    icon: 'code',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F0DB4F' },
      { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
      { name: 'PHP', icon: SiPhp, color: '#8892BF' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF6B81' },
      { name: 'Python', icon: SiPython, color: '#4B8BBE' },
      { name: 'HTML', icon: SiHtml5, color: '#E44D26' },
      { name: 'CSS', icon: SiCss, color: '#2965F1' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#8A6FDF' },
      { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
      { name: 'Flutter', icon: SiFlutter, color: '#54C5F8' },
      { name: 'C#', icon: TbBrandCSharp, color: '#9B4F96' },
      { name: 'JIRA', icon: SiJira, color: '#2C84D3' },
      { name: 'Agile', icon: MdOutlineDesignServices, color: '#F98FC4' },
    ],
  },
  {
    key: 'databases',
    icon: 'database',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'NoSQL', icon: FaDatabase, color: '#B8A1E8' },
    ],
  },
  {
    key: 'cmsOffice',
    icon: 'office',
    skills: [
      { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
      { name: 'Excel', icon: FaFileExcel, color: '#1D6F42' },
      { name: 'Word', icon: FaFileWord, color: '#2B579A' },
      { name: 'PowerPoint', icon: FaFilePowerpoint, color: '#D24726' },
    ],
  },
];

export const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', level: 'B2', percent: 80 },
  { code: 'en', label: 'English', flag: '🇬🇧', level: 'B2', percent: 80 },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', level: 'A2', percent: 45 },
  { code: 'es', label: 'Español', flag: '🇪🇸', level: 'A2', percent: 45 },
];
