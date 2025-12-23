import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';

interface Testimonial {
  rating: number;
  text: string;
  avatar: string;
  name: string;
  role: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={`testimonial-card ${isVisible ? 'visible' : ''}`}>
      <div className="testimonial-rating">
        {'⭐'.repeat(testimonial.rating)}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <div className="author-avatar">{testimonial.avatar}</div>
        <div className="author-info">
          <div className="author-name">{testimonial.name}</div>
          <div className="author-role">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      rating: 5,
      text: t('testimonials.1.text'),
      avatar: 'AK',
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role')
    },
    {
      rating: 5,
      text: t('testimonials.2.text'),
      avatar: 'EY',
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role')
    },
    {
      rating: 5,
      text: t('testimonials.3.text'),
      avatar: 'MS',
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role')
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-description">{t('testimonials.description')}</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
