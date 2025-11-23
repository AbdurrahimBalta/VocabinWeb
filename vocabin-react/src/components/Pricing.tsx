import { pricingPlans } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Herkes İçin Uygun Fiyatlar</h2>
          <p className="section-description">İhtiyaçlarınıza uygun planı seçin</p>
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
