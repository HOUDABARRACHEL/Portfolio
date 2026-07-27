import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '../data/experience';
import { Blob } from './Decorations';

export default function Experience() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'fr';

  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <Blob className="h-72 w-72 -right-24 top-0" from="#FFC1E3" to="#CDB4FF" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft">
            {t('experience.eyebrow')}
          </span>
          <h2 className="section-heading mt-3">{t('experience.title')}</h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-lavender via-pink-pastel to-peach sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col gap-4 pl-16 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0 ? 'sm:pr-12 sm:text-right sm:self-start sm:items-end' : 'sm:pl-12 sm:self-end sm:items-start'
                }`}
              >
                <span
                  className={`absolute left-4 top-1.5 h-4 w-4 rounded-full bg-dreamy-gradient shadow-glow sm:top-1.5 ${
                    i % 2 === 0 ? 'sm:-right-2 sm:left-auto' : 'sm:-left-2'
                  }`}
                />

                <div className="flex items-center gap-3">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${exp.company} website`}
                    className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-soft transition-transform hover:scale-110"
                  >
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-8 w-8 object-contain" loading="lazy" />
                  </a>
                  <div>
                    <h3 className="font-heading text-base font-bold text-ink dark:text-[#EDE6FF]">
                      {exp.title[lang]}
                    </h3>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading text-sm font-medium text-purple-soft hover:underline"
                    >
                      {exp.company}
                    </a>
                  </div>
                </div>

                <span className="font-body text-xs font-medium text-muted">
                  {exp.period.start} — {exp.period.end === 'present' ? t('experience.present') : exp.period.end}
                </span>

                <ul className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                  {exp.responsibilities[lang].map((r) => (
                    <li
                      key={r}
                      className="rounded-full bg-white/70 dark:bg-white/10 px-3 py-1 text-xs font-body text-ink dark:text-[#EDE6FF] shadow-sm"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
