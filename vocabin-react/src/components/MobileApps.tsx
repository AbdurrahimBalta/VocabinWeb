import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AppCard({
  store,
  url,
  index
}: {
  store: 'google' | 'apple';
  url: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <div
      ref={ref}
      className={`mobile-app-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="qr-wrapper">
        <QRCodeSVG
          value={url}
          size={200}
          level="H"
          bgColor="#ffffff"
          fgColor="#1f2937"
        />
      </div>
      <span className="qr-label">{t('mobileApps.scanQR')}</span>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="store-badge-link"
      >
        {store === 'google' ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="store-badge-img"
          />
        ) : (
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="store-badge-img"
          />
        )}
      </a>
    </div>
  );
}

export default function MobileApps() {
  const { language, t } = useLanguage();

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.apromania.kermeapp';
  const appStoreUrl = language === 'tr'
    ? 'https://apps.apple.com/tr/app/vocabin-dil-%C3%B6%C4%9Frenme/id6749776346?l=tr'
    : 'https://apps.apple.com/tr/app/vocabin-learn-words-save/id6749776346';

  return (
    <section className="mobile-apps" id="mobile-apps">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('mobileApps.title')}</h2>
          <p className="section-description">{t('mobileApps.description')}</p>
        </div>

        <div className="mobile-apps-grid">
          <AppCard store="google" url={playStoreUrl} index={0} />
          <AppCard store="apple" url={appStoreUrl} index={1} />
        </div>
      </div>
    </section>
  );
}
