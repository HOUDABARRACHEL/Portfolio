import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import { Blob } from './Decorations';

const accentMap = {
  lavender: 'from-lavender to-purple-soft',
  pink: 'from-pink-pastel to-pink-deep',
  peach: 'from-peach to-peach-deep',
};

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'fr';

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <Blob className="h-80 w-80 -left-24 bottom-0" from="#FFD8B8" to="#CDB4FF" delay="0.5s" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft">
            {t('projects.eyebrow')}
          </span>
          <h2 className="section-heading mt-3">{t('projects.title')}</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-4xl glass shadow-soft"
            >
              <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${accentMap[p.accent]}`}>
                <span className="font-accent text-3xl text-white drop-shadow-sm">{p.title}</span>
                <span className="absolute bottom-3 right-4 rounded-full bg-white/25 px-3 py-1 text-[10px] font-heading font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  {t('projects.comingSoon')}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-heading text-lg font-bold text-ink dark:text-[#EDE6FF]">{p.title}</h3>
                <p className="flex-1 font-body text-sm text-muted">{p.description[lang]}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/70 dark:bg-white/10 px-2.5 py-1 text-[11px] font-heading font-medium text-ink dark:text-[#EDE6FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex gap-3">
                  <a
                    href={p.github}
                    className="flex items-center gap-1.5 rounded-full bg-ink/5 dark:bg-white/10 px-4 py-2 text-xs font-heading font-semibold text-ink dark:text-[#EDE6FF] transition-transform hover:scale-105"
                  >
                    <FaGithub size={13} /> {t('projects.code')}
                  </a>
                  <a
                    href={p.demo}
                    className="flex items-center gap-1.5 rounded-full bg-dreamy-gradient px-4 py-2 text-xs font-heading font-semibold text-white transition-transform hover:scale-105"
                  >
                    <FaExternalLinkAlt size={11} /> {t('projects.demo')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
