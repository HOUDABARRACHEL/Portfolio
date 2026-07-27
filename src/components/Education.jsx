import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { education } from '../data/education';

export default function Education() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'fr';

  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft">
            {t('education.eyebrow')}
          </span>
          <h2 className="section-heading mt-3">{t('education.title')}</h2>
        </div>

        <div className="relative mt-16 border-l-2 border-dashed border-lavender/60 dark:border-lavender-light/25 pl-8 sm:pl-10">
          <div className="flex flex-col gap-10">
            {education.map((ed, i) => (
              <motion.div
                key={ed.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-4xl glass p-6 shadow-soft"
              >
                <span className="absolute -left-[3.05rem] top-6 grid h-9 w-9 place-items-center rounded-full bg-dreamy-gradient text-white shadow-glow sm:-left-[3.55rem]">
                  <HiOutlineAcademicCap size={17} />
                </span>

                <div className="flex items-center gap-4">
                  {ed.logo ? (
                    <a
                      href={ed.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${ed.school} website`}
                      className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-soft transition-transform hover:scale-110"
                    >
                      <img src={ed.logo} alt={`${ed.school} logo`} className="h-10 w-10 object-contain" loading="lazy" />
                    </a>
                  ) : (
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-dreamy-gradient-soft text-2xl">
                      🎓
                    </span>
                  )}

                  <div>
                    <h3 className="font-heading text-base font-bold text-ink dark:text-[#EDE6FF]">
                      {typeof ed.school === 'string' ? ed.school : ed.school[lang]}
                    </h3>
                    <p className="font-body text-sm text-muted">{ed.degree[lang]}</p>
                    <p className="mt-1 font-body text-xs font-medium text-purple-soft">
                      {ed.period} · {ed.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
