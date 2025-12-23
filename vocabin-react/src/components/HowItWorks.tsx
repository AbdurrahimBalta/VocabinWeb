import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={`step-card ${isVisible ? 'visible' : ''}`}>
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { number: 1, title: t('howItWorks.1.title'), description: t('howItWorks.1.description') },
    { number: 2, title: t('howItWorks.2.title'), description: t('howItWorks.2.description') },
    { number: 3, title: t('howItWorks.3.title'), description: t('howItWorks.3.description') },
    { number: 4, title: t('howItWorks.4.title'), description: t('howItWorks.4.description') }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('howItWorks.title')}</h2>
          <p className="section-description">{t('howItWorks.description')}</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
