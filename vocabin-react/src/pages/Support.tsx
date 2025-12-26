import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Support() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>{t('support.title')}</h1>

          <section>
            <h2>{t('support.needHelp.title')}</h2>
            <p>{t('support.needHelp.text')}</p>
          </section>

          <section>
            <h2>{t('support.contact.title')}</h2>
            <p>{t('support.contact.text')}</p>
            <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
              <a href="mailto:support@kermeapp.com" style={{ color: '#4CAF50', textDecoration: 'none' }}>
                support@kermeapp.com
              </a>
            </p>
          </section>

          <section>
            <h2>{t('support.response.title')}</h2>
            <p>{t('support.response.text')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
