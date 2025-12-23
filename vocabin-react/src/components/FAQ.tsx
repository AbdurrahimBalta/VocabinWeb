import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

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
  const { t } = useLanguage();

  const faqItems: FAQItem[] = [
    { question: t('faq.1.question'), answer: t('faq.1.answer') },
    { question: t('faq.2.question'), answer: t('faq.2.answer') },
    { question: t('faq.3.question'), answer: t('faq.3.answer') },
    { question: t('faq.4.question'), answer: t('faq.4.answer') },
    { question: t('faq.5.question'), answer: t('faq.5.answer') }
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('faq.title')}</h2>
          <p className="section-description">{t('faq.description')}</p>
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
