import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { StarField, Blob, GridPattern } from './Decorations';
import profileImage from '../assets/img/mypic.png';

const socials = [
  { icon: FaGithub, href: 'https://github.com/HOUDABARRACHEL', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/houdabarrachel', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:houdabarrachel@gmail.com', label: 'Gmail' },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <GridPattern />
      <StarField count={22} />
      <Blob className="h-72 w-72 -top-10 -left-16" from="#CDB4FF" to="#FFC1E3" />
      <Blob className="h-80 w-80 bottom-0 -right-10" from="#FFD8B8" to="#FFC1E3" delay="2s" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-heading font-semibold tracking-wide text-purple-soft shadow-soft">
            ✦ {t('hero.eyebrow')}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-ink dark:text-[#EDE6FF] sm:text-5xl lg:text-6xl">
            {t('hero.name')}
          </h1>
          <p className="mt-2 font-accent text-3xl text-gradient sm:text-4xl">{t('hero.aka')}</p>

          <p className="mt-6 max-w-md font-body text-base text-muted sm:text-lg">
            {t('hero.description')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full bg-dreamy-gradient px-6 py-3 font-heading text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
            >
              {t('hero.contact')}
            </a>
            <a
              href="/Houda_Barrachel_CV.pdf"
              download
              className="rounded-full glass px-6 py-3 font-heading text-sm font-semibold text-ink dark:text-white shadow-soft transition-transform hover:scale-105"
            >
              {t('hero.cv')}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full glass text-lavender-dark dark:text-peach shadow-soft transition-transform hover:-translate-y-1 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96"
        >
          {/* rotating dashed ring */}
          <div className="absolute inset-0 animate-spinSlow rounded-full border-2 border-dashed border-lavender/60 dark:border-lavender-light/30" />

          {/* soft blobs behind the frame */}
          <Blob className="h-40 w-40 -top-6 -right-4" from="#FFC1E3" to="#CDB4FF" />
          <Blob className="h-32 w-32 -bottom-6 -left-6" from="#FFD8B8" to="#FFC1E3" delay="1.5s" />

          {/* floating stars around the frame */}
          <motion.span
            className="absolute -top-4 left-6 text-2xl"
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            ✨
          </motion.span>
          <motion.span
            className="absolute bottom-2 -right-2 text-2xl"
            animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
          >
            ⭐
          </motion.span>

          {/* the floating glass frame — placeholder for portrait */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="relative flex h-64 w-64 rotate-3 items-center justify-center rounded-[2.5rem] border-4 border-white/70 bg-dreamy-gradient-soft glass shadow-glow sm:h-72 sm:w-72"
          >
          <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] border-4 border-white/60">
            <img
              src={profileImage}
              alt="Houda Barrachel"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>    
            <span className="absolute -top-3 left-8 h-6 w-16 -rotate-6 rounded-sm bg-peach/80 shadow-sm" />
            <span className="absolute -bottom-3 right-8 h-6 w-16 rotate-6 rounded-sm bg-pink-pastel/80 shadow-sm" />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label={t('hero.scroll')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center rounded-full glass text-lavender-dark dark:text-peach shadow-soft"
      >
        <HiOutlineArrowDown size={18} />
      </motion.button>
    </section>
  );
}
