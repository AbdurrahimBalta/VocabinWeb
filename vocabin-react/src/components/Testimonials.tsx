import { testimonials } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kullanıcılarımız Ne Diyor?</h2>
          <p className="section-description">Binlerce mutlu kullanıcıdan bazıları</p>
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
