import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Blob, StarField } from './Decorations';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <Blob className="h-64 w-64 top-10 -right-20" from="#FFD8B8" to="#FFC1E3" />
      <StarField count={8} />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft"
        >
          {t('about.eyebrow')}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-heading mt-3"
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl rounded-4xl glass p-8 shadow-soft sm:p-10"
        >
          <p className="font-body text-base leading-relaxed text-ink dark:text-[#EDE6FF] sm:text-lg">
            {t('about.p1')}
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg">
            {t('about.p2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
