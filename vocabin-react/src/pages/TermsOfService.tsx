import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function TermsOfService() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>{t('terms.title')}</h1>
          <p className="last-updated">{t('terms.lastUpdated')}</p>

          <section>
            <h2>{t('terms.1.title')}</h2>
            <p>{t('terms.1.text')}</p>
          </section>

          <section>
            <h2>{t('terms.2.title')}</h2>
            <p>{t('terms.2.text')}</p>
            <ul>
              <li>{t('terms.2.list.1')}</li>
              <li>{t('terms.2.list.2')}</li>
              <li>{t('terms.2.list.3')}</li>
              <li>{t('terms.2.list.4')}</li>
              <li>{t('terms.2.list.5')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('terms.3.title')}</h2>
            <h3>{t('terms.3.1.title')}</h3>
            <p>{t('terms.3.1.text')}</p>
            <ul>
              <li>{t('terms.3.1.list.1')}</li>
              <li>{t('terms.3.1.list.2')}</li>
              <li>{t('terms.3.1.list.3')}</li>
              <li>{t('terms.3.1.list.4')}</li>
            </ul>

            <h3>{t('terms.3.2.title')}</h3>
            <p>{t('terms.3.2.text')}</p>
          </section>

          <section>
            <h2>{t('terms.4.title')}</h2>
            <p>{t('terms.4.text')}</p>
            <ul>
              <li>{t('terms.4.list.1')}</li>
              <li>{t('terms.4.list.2')}</li>
              <li>{t('terms.4.list.3')}</li>
              <li>{t('terms.4.list.4')}</li>
              <li>{t('terms.4.list.5')}</li>
              <li>{t('terms.4.list.6')}</li>
              <li>{t('terms.4.list.7')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('terms.5.title')}</h2>
            <h3>{t('terms.5.1.title')}</h3>
            <p>{t('terms.5.1.text')}</p>

            <h3>{t('terms.5.2.title')}</h3>
            <p>{t('terms.5.2.text')}</p>

            <h3>{t('terms.5.3.title')}</h3>
            <p>{t('terms.5.3.text')}</p>
          </section>

          <section>
            <h2>{t('terms.6.title')}</h2>
            <h3>{t('terms.6.1.title')}</h3>
            <p>{t('terms.6.1.text')}</p>

            <h3>{t('terms.6.2.title')}</h3>
            <ul>
              <li>{t('terms.6.2.list.1')}</li>
              <li>{t('terms.6.2.list.2')}</li>
              <li>{t('terms.6.2.list.3')}</li>
              <li>{t('terms.6.2.list.4')}</li>
            </ul>

            <h3>{t('terms.6.3.title')}</h3>
            <ul>
              <li>{t('terms.6.3.list.1')}</li>
              <li>{t('terms.6.3.list.2')}</li>
              <li>{t('terms.6.3.list.3')}</li>
              <li>{t('terms.6.3.list.4')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('terms.7.title')}</h2>
            <p>{t('terms.7.text')}</p>
            <ul>
              <li>{t('terms.7.list.1')}</li>
              <li>{t('terms.7.list.2')}</li>
              <li>{t('terms.7.list.3')}</li>
              <li>{t('terms.7.list.4')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('terms.8.title')}</h2>
            <p>{t('terms.8.text')}</p>
            <ul>
              <li>{t('terms.8.list.1')}</li>
              <li>{t('terms.8.list.2')}</li>
              <li>{t('terms.8.list.3')}</li>
              <li>{t('terms.8.list.4')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('terms.9.title')}</h2>
            <p>{t('terms.9.text')}</p>
            <ul>
              <li>{t('terms.9.list.1')}</li>
              <li>{t('terms.9.list.2')}</li>
              <li>{t('terms.9.list.3')}</li>
              <li>{t('terms.9.list.4')}</li>
            </ul>
            <p>{t('terms.9.text2')}</p>
          </section>

          <section>
            <h2>{t('terms.10.title')}</h2>
            <p>{t('terms.10.text')}</p>
            <ul>
              <li>{t('terms.10.list.1')}</li>
              <li>{t('terms.10.list.2')}</li>
              <li>{t('terms.10.list.3')}</li>
              <li>{t('terms.10.list.4')}</li>
              <li>{t('terms.10.list.5')}</li>
            </ul>
            <p>{t('terms.10.text2')}</p>
          </section>

          <section>
            <h2>{t('terms.11.title')}</h2>
            <p>{t('terms.11.text')}</p>
            <ul>
              <li>{t('terms.11.list.1')}</li>
              <li>{t('terms.11.list.2')}</li>
              <li>{t('terms.11.list.3')}</li>
              <li>{t('terms.11.list.4')}</li>
            </ul>
            <p>{t('terms.11.text2')}</p>
          </section>

          <section>
            <h2>{t('terms.12.title')}</h2>
            <p>{t('terms.12.text')}</p>
          </section>

          <section>
            <h2>{t('terms.13.title')}</h2>
            <h3>{t('terms.13.1.title')}</h3>
            <p>{t('terms.13.1.text')}</p>

            <h3>{t('terms.13.2.title')}</h3>
            <p>{t('terms.13.2.text')}</p>

            <h3>{t('terms.13.3.title')}</h3>
            <p>{t('terms.13.3.text')}</p>

            <h3>{t('terms.13.4.title')}</h3>
            <p>{t('terms.13.4.text')}</p>
          </section>

          <section>
            <h2>{t('terms.14.title')}</h2>
            <p>{t('terms.14.text')}</p>
            <ul>
              <li><strong>{t('terms.14.email')}</strong> support@vocabin.com</li>
              <li><strong>{t('terms.14.web')}</strong> https://vocabin.com</li>
            </ul>
          </section>

          <section>
            <h2>{t('terms.15.title')}</h2>
            <p>{t('terms.15.text')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
