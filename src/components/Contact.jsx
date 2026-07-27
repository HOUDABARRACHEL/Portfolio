import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Blob, StarField } from './Decorations';

const links = [
  { icon: FaEnvelope, label: 'houdabarrachel@gmail.com', href: 'mailto:houdabarrachel@gmail.com' },
  { icon: FaGithub, label: 'github.com/HOUDABARRACHEL', href: 'https://github.com/HOUDABARRACHEL' },
  { icon: FaLinkedin, label: 'linkedin.com/in/houdabarrachel', href: 'https://www.linkedin.com/in/houdabarrachel' },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <StarField count={14} />
      <Blob className="h-72 w-72 top-0 -right-16" from="#CDB4FF" to="#FFD8B8" />
      <Blob className="h-64 w-64 bottom-0 -left-16" from="#FFC1E3" to="#CDB4FF" delay="1.2s" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-purple-soft">
          {t('contact.eyebrow')}
        </span>
        <h2 className="section-heading mt-3">{t('contact.title')}</h2>
        <p className="mx-auto mt-4 max-w-md font-body text-muted">{t('contact.subtitle')}</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 rounded-4xl glass p-8 shadow-soft sm:p-10"
        >
          <p className="font-accent text-3xl text-gradient">Houda Barrachel</p>
          <p className="mt-1 font-body text-sm text-muted">aka Houida</p>

          <div className="mt-8 flex flex-col gap-3">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-white/70 dark:bg-white/10 px-5 py-3 font-heading text-sm font-medium text-ink dark:text-[#EDE6FF] shadow-sm transition-transform hover:scale-[1.02]"
              >
                <Icon className="text-lavender-dark dark:text-peach" /> {label}
              </a>
            ))}
          </div>

          <a
            href="mailto:houdabarrachel@gmail.com"
            className="mt-8 inline-block rounded-full bg-dreamy-gradient px-8 py-3 font-heading text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
          >
            {t('contact.emailMe')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
