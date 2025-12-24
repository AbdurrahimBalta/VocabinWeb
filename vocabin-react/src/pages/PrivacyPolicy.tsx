import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>{t('privacy.title')}</h1>
          <p className="last-updated">{t('privacy.lastUpdated')}</p>

          <section>
            <h2>{t('privacy.1.title')}</h2>
            <p>{t('privacy.1.text')}</p>
          </section>

          <section>
            <h2>{t('privacy.2.title')}</h2>
            <h3>{t('privacy.2.1.title')}</h3>
            <ul>
              <li>{t('privacy.2.1.list.1')}</li>
              <li>{t('privacy.2.1.list.2')}</li>
              <li>{t('privacy.2.1.list.3')}</li>
              <li>{t('privacy.2.1.list.4')}</li>
            </ul>

            <h3>{t('privacy.2.2.title')}</h3>
            <ul>
              <li>{t('privacy.2.2.list.1')}</li>
              <li>{t('privacy.2.2.list.2')}</li>
              <li>{t('privacy.2.2.list.3')}</li>
              <li>{t('privacy.2.2.list.4')}</li>
            </ul>

            <h3>{t('privacy.2.3.title')}</h3>
            <ul>
              <li>{t('privacy.2.3.list.1')}</li>
              <li>{t('privacy.2.3.list.2')}</li>
              <li>{t('privacy.2.3.list.3')}</li>
              <li>{t('privacy.2.3.list.4')}</li>
              <li>{t('privacy.2.3.list.5')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('privacy.3.title')}</h2>
            <p>{t('privacy.3.text')}</p>
            <ul>
              <li>{t('privacy.3.list.1')}</li>
              <li>{t('privacy.3.list.2')}</li>
              <li>{t('privacy.3.list.3')}</li>
              <li>{t('privacy.3.list.4')}</li>
              <li>{t('privacy.3.list.5')}</li>
              <li>{t('privacy.3.list.6')}</li>
              <li>{t('privacy.3.list.7')}</li>
              <li>{t('privacy.3.list.8')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('privacy.4.title')}</h2>
            <p>{t('privacy.4.text')}</p>
            <ul>
              <li>{t('privacy.4.list.1')}</li>
              <li>{t('privacy.4.list.2')}</li>
              <li>{t('privacy.4.list.3')}</li>
              <li>{t('privacy.4.list.4')}</li>
            </ul>
            <p>{t('privacy.4.text2')}</p>
          </section>

          <section>
            <h2>{t('privacy.5.title')}</h2>
            <p>{t('privacy.5.text')}</p>
            <ul>
              <li>{t('privacy.5.list.1')}</li>
              <li>{t('privacy.5.list.2')}</li>
              <li>{t('privacy.5.list.3')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('privacy.6.title')}</h2>
            <p>{t('privacy.6.text')}</p>
            <ul>
              <li><strong>{t('privacy.6.list.1')}</strong></li>
              <li><strong>{t('privacy.6.list.2')}</strong></li>
              <li><strong>{t('privacy.6.list.3')}</strong></li>
            </ul>
          </section>

          <section>
            <h2>{t('privacy.7.title')}</h2>
            <p>{t('privacy.7.text')}</p>
            <ul>
              <li>{t('privacy.7.list.1')}</li>
              <li>{t('privacy.7.list.2')}</li>
              <li>{t('privacy.7.list.3')}</li>
              <li>{t('privacy.7.list.4')}</li>
              <li>{t('privacy.7.list.5')}</li>
              <li>{t('privacy.7.list.6')}</li>
            </ul>
            <p>{t('privacy.7.text2')}</p>
          </section>

          <section>
            <h2>{t('privacy.8.title')}</h2>
            <p>{t('privacy.8.text')}</p>
          </section>

          <section>
            <h2>{t('privacy.9.title')}</h2>
            <p>{t('privacy.9.text')}</p>
          </section>

          <section>
            <h2>{t('privacy.10.title')}</h2>
            <p>{t('privacy.10.text')}</p>
          </section>

          <section>
            <h2>{t('privacy.11.title')}</h2>
            <p>{t('privacy.11.text')}</p>
            <ul>
              <li><strong>{t('privacy.11.email')}</strong> support@vocabin.com</li>
              <li><strong>{t('privacy.11.web')}</strong> https://vocabin.com</li>
            </ul>
          </section>

          <section>
            <h2>{t('privacy.12.title')}</h2>
            <p>{t('privacy.12.text')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
