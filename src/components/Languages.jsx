import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { languages } from '../data/skills';

const R = 42;
const CIRC = 2 * Math.PI * R;

function ProgressRing({ percent, delay }) {
  return (
    <svg width="110" height="110" viewBox="0 0 100 100" className="-rotate-90">
      <circle cx="50" cy="50" r={R} fill="none" stroke="currentColor" strokeWidth="7" className="text-lavender-light/40 dark:text-white/10" />
      <motion.circle
        cx="50"
        cy="50"
        r={R}
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={CIRC}
        initial={{ strokeDashoffset: CIRC }}
        whileInView={{ strokeDashoffset: CIRC - (percent / 100) * CIRC }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
      />
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CDB4FF" />
          <stop offset="55%" stopColor="#F98FC4" />
          <stop offset="100%" stopColor="#FFBE93" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Languages() {
  const { t } = useTranslation();

  return (
    <section id="languages" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft">
            {t('languages.eyebrow')}
          </span>
          <h2 className="section-heading mt-3">{t('languages.title')}</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-4xl glass p-6 shadow-soft"
            >
              <div className="relative grid place-items-center">
                <ProgressRing percent={lang.percent} delay={i * 0.1} />
                <span className="absolute font-heading text-lg font-bold text-ink dark:text-[#EDE6FF]">
                  {lang.level}
                </span>
              </div>
              <p className="font-heading text-sm font-semibold text-ink dark:text-[#EDE6FF]">
                {lang.flag} {lang.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
