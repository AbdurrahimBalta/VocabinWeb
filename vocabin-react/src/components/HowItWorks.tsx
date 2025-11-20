import { steps } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nasıl Çalışır?</h2>
          <p className="section-description">4 basit adımda İngilizce öğrenmeye başlayın</p>
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
