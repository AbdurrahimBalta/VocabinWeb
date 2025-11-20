import { features } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Güçlü Özellikler</h2>
          <p className="section-description">
            Vocabin ile İngilizce öğrenmeyi günlük rutininizin bir parçası haline getirin
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
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
