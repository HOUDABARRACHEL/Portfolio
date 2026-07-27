import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode, FaDatabase, FaRegFileAlt } from 'react-icons/fa';
import { skillCategories } from '../data/skills';
import { Blob } from './Decorations';

const icons = { code: FaCode, database: FaDatabase, office: FaRegFileAlt };

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <Blob className="h-72 w-72 -left-24 top-1/3" from="#CDB4FF" to="#FFD8B8" delay="1s" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft">
            {t('skills.eyebrow')}
          </span>
          <h2 className="section-heading mt-3">{t('skills.title')}</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const CatIcon = icons[cat.icon];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className="rounded-4xl glass p-6 shadow-soft"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-dreamy-gradient text-white shadow-soft">
                    <CatIcon size={18} />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-ink dark:text-[#EDE6FF]">
                    {t(`skills.categories.${cat.key}`)}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1 + i * 0.03 }}
                        whileHover={{ scale: 1.08, rotate: -2 }}
                        className="flex items-center gap-1.5 rounded-full bg-white/70 dark:bg-white/10 px-3 py-1.5 text-xs font-heading font-medium text-ink dark:text-[#EDE6FF] shadow-sm cursor-default"
                      >
                        <Icon size={13} style={{ color: skill.color }} />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
