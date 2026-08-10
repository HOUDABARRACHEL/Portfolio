import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { certifications } from '../data/certifications';
import { Blob } from './Decorations';

export default function Certifications() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'fr';

  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <Blob className="h-72 w-72 -left-24 bottom-0" from="#FFBE93" to="#F98FC4" delay="0.5s" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft">
            {t('certifications.eyebrow')}
          </span>
          <h2 className="section-heading mt-3">{t('certifications.title')}</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center gap-4 rounded-4xl glass p-6 text-center shadow-soft transition-shadow hover:shadow-glow"
            >
              <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-3xl bg-white shadow-soft transition-transform group-hover:scale-105">
                <img src={cert.badge} alt={`${cert.name} badge`} className="h-20 w-20 object-contain" loading="lazy" />
              </div>

              <div>
                <h3 className="font-heading text-sm font-bold text-ink dark:text-[#EDE6FF]">
                  {cert.name}
                </h3>
                <p className="mt-1 font-body text-xs font-medium text-purple-soft">
                  {cert.issuer} · {cert.date[lang]}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5">
                {cert.skills[lang].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/70 dark:bg-white/10 px-2.5 py-1 text-[11px] font-heading font-medium text-ink dark:text-[#EDE6FF] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <span className="mt-1 flex items-center gap-1 font-heading text-xs font-semibold text-purple-soft opacity-0 transition-opacity group-hover:opacity-100">
                {t('certifications.view')}
                <HiOutlineExternalLink size={13} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
