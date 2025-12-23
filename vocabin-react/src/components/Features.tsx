import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';

function FeatureCard({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`feature-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: "🔍", title: t('features.1.title'), description: t('features.1.description') },
    { icon: "💾", title: t('features.2.title'), description: t('features.2.description') },
    { icon: "📊", title: t('features.3.title'), description: t('features.3.description') },
    { icon: "🎯", title: t('features.4.title'), description: t('features.4.description') },
    { icon: "🔐", title: t('features.5.title'), description: t('features.5.description') },
    { icon: "⚡", title: t('features.6.title'), description: t('features.6.description') }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-description">{t('features.description')}</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
