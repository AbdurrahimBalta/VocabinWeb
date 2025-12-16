import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks } from '../data/content';
import { useHeaderScroll, useActiveSection } from '../hooks/useScrollAnimation';
import { ChromeIcon } from './Icons';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasScrolled = useHeaderScroll();
  const activeSection = useActiveSection(['features', 'how-it-works', 'pricing', 'testimonials', 'faq']);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();

      // Eğer ana sayfada değilsek, önce ana sayfaya git
      if (location.pathname !== '/') {
        navigate('/');
        // Ana sayfaya gittikten sonra scroll için kısa bir gecikme
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // Ana sayfadaysak normal scroll yap
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${hasScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="nav-brand" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <span className="logo">🌱</span>
          <span className="brand-name">Vocabin</span>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="https://chromewebstore.google.com/detail/vocabin-%C3%A7eviri-belle%C4%9Fi/jfkpilejngclplpgcdicdmpbabmagjlf?hl=tr" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <ChromeIcon />
            <span className="btn-text">Chrome'a Ekle</span>
            <span className="btn-text-mobile">Ekle</span>
          </a>
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
