import { useTranslation } from 'react-i18next';
import { StarField } from './Decorations';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-t border-lavender/20 py-8">
      <StarField count={6} />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 text-center">
        <p className="font-accent text-lg text-gradient">{t('footer.rights')}</p>
        <p className="font-body text-xs text-muted">{t('footer.made')}</p>
      </div>
    </footer>
  );
}
