import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  badge?: string;
  secondaryBadge?: string;
  badgeType?: 'discount';
  featured?: boolean;
  features: { text: string; included: boolean }[];
  buttonText: string;
  buttonVariant: 'primary' | 'outline';
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={`pricing-card ${plan.featured ? 'featured' : ''} ${isVisible ? 'visible' : ''}`}>
      {(plan.badge || plan.secondaryBadge) && (
        <div className="pricing-badges">
          {plan.badge && (
            <div className={`pricing-badge ${plan.badgeType === 'discount' ? 'discount' : ''}`}>
              {plan.badge}
            </div>
          )}
          {plan.secondaryBadge && (
            <div className="pricing-badge popular">
              {plan.secondaryBadge}
            </div>
          )}
        </div>
      )}
      <div className="pricing-header">
        <h3 className="pricing-plan">{plan.name}</h3>
        <div className="pricing-price">
          <span className="price-amount">{plan.price}</span>
          <span className="price-period">{plan.period}</span>
        </div>
      </div>
      <ul className="pricing-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            {feature.included ? '✅' : '⚠️'} {feature.text}
          </li>
        ))}
      </ul>
      <a
        href="https://chrome.google.com/webstore"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-${plan.buttonVariant} btn-full`}
      >
        {plan.buttonText}
      </a>
    </div>
  );
}

export default function Pricing() {
  const { t, language } = useLanguage();

  const pricingPlans: PricingPlan[] = [
    {
      name: t('pricing.free'),
      price: language === 'en' ? '$0' : '₺0',
      period: t('pricing.perMonth'),
      features: [
        { text: t('pricing.free.1'), included: true },
        { text: t('pricing.free.2'), included: true },
        { text: t('pricing.free.3'), included: true },
        { text: t('pricing.free.4'), included: true },
        { text: t('pricing.free.5'), included: true },
        { text: t('pricing.free.6'), included: false }
      ],
      buttonText: t('pricing.startFree'),
      buttonVariant: 'outline'
    },
    {
      name: t('pricing.monthly'),
      price: language === 'en' ? '$9.99' : '₺150',
      period: t('pricing.perMonth'),
      features: [
        { text: t('pricing.monthly.1'), included: true },
        { text: t('pricing.monthly.2'), included: true },
        { text: t('pricing.monthly.3'), included: true },
        { text: t('pricing.monthly.4'), included: true },
        { text: t('pricing.monthly.5'), included: true },
        { text: t('pricing.monthly.6'), included: true }
      ],
      buttonText: t('pricing.monthlyPlan'),
      buttonVariant: 'outline'
    },
    {
      name: t('pricing.yearly'),
      price: language === 'en' ? '$59.99' : '₺1000',
      period: t('pricing.perYear'),
      badge: t('pricing.discount'),
      secondaryBadge: t('pricing.popular'),
      featured: true,
      badgeType: 'discount',
      features: [
        { text: t('pricing.yearly.1'), included: true },
        { text: t('pricing.yearly.2'), included: true },
        { text: t('pricing.yearly.3'), included: true },
        { text: t('pricing.yearly.4'), included: true },
        { text: t('pricing.yearly.5'), included: true }
      ],
      buttonText: t('pricing.yearlyPlan'),
      buttonVariant: 'primary'
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-description">{t('pricing.description')}</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
