import { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  useEffect(() => {
    // Extension'dan ?scrollTo=pricing gibi parametrelerle gelenleri yakala
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTarget = urlParams.get('scrollTo');

    if (scrollTarget) {
      // Sayfa tam yüklendikten sonra scroll yap
      const timer = setTimeout(() => {
        const targetElement = document.getElementById(scrollTarget);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // URL'den parametreyi temizle
          const cleanUrl = window.location.pathname + window.location.hash;
          window.history.replaceState({}, document.title, cleanUrl);
        }
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
