import { useState } from 'react';
import { faqItems } from '../data/content';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQItemComponent({ item, isActive, onClick }: { item: FAQItem; isActive: boolean; onClick: () => void }) {
  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="faq-question" onClick={onClick}>
        <h3>{item.question}</h3>
        <span className="faq-toggle">+</span>
      </div>
      <div className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <p className="section-description">Merak ettiğiniz her şey</p>
        </div>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
