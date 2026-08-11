import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineSun, HiOutlineMoon, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const sections = ['home', 'about', 'skills', 'experience', 'education', 'certifications', 'projects', 'contact'];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const switchLang = (lng) => i18n.changeLanguage(lng);

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 sm:px-6 transition-all duration-300 glass shadow-soft ${
          scrolled ? 'py-2' : 'py-3'
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-accent text-2xl text-ink dark:text-[#EDE6FF]"
        >
          Houida <span aria-hidden>✦</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 font-heading text-sm font-medium">
          {sections.map((id) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`relative px-3 py-2 rounded-full transition-colors ${
                  active === id
                    ? 'text-ink dark:text-white'
                    : 'text-muted hover:text-ink dark:hover:text-white'
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-dreamy-gradient-soft -z-10"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
                {t(`nav.${id}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center rounded-full bg-white/60 dark:bg-white/10 p-1 text-xs font-heading font-semibold">
            <button
              onClick={() => switchLang('fr')}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                i18n.language === 'fr' ? 'bg-white text-ink shadow-sm dark:bg-lavender-dark dark:text-white' : 'text-muted'
              }`}
              aria-label="Français"
            >
              🇫🇷 FR
            </button>
            <button
              onClick={() => switchLang('en')}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                i18n.language === 'en' ? 'bg-white text-ink shadow-sm dark:bg-lavender-dark dark:text-white' : 'text-muted'
              }`}
              aria-label="English"
            >
              🇬🇧 EN
            </button>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/60 dark:bg-white/10 text-lavender-dark dark:text-peach hover:scale-110 transition-transform"
          >
            {theme === 'dark' ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden grid h-9 w-9 place-items-center rounded-full bg-white/60 dark:bg-white/10 text-ink dark:text-white"
          >
            {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl glass shadow-soft lg:hidden"
          >
            <ul className="flex flex-col p-3 font-heading text-sm font-medium">
              {sections.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl ${
                      active === id ? 'bg-dreamy-gradient-soft text-ink' : 'text-muted'
                    }`}
                  >
                    {t(`nav.${id}`)}
                  </button>
                </li>
              ))}
              <li className="flex gap-2 px-4 pt-2">
                <button
                  onClick={() => switchLang('fr')}
                  className={`flex-1 px-2.5 py-2 rounded-full text-xs font-semibold ${
                    i18n.language === 'fr' ? 'bg-dreamy-gradient text-white' : 'bg-white/60 text-muted'
                  }`}
                >
                  🇫🇷 FR
                </button>
                <button
                  onClick={() => switchLang('en')}
                  className={`flex-1 px-2.5 py-2 rounded-full text-xs font-semibold ${
                    i18n.language === 'en' ? 'bg-dreamy-gradient text-white' : 'bg-white/60 text-muted'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
