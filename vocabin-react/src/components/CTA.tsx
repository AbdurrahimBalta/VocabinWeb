import { ChromeIcon } from './Icons';
import { useLanguage } from '../i18n/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-description">{t('cta.description')}</p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-large btn-white"
          >
            <ChromeIcon size={24} />
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
