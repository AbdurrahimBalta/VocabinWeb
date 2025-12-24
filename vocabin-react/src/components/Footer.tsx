import { useNavigate } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, GitHubIcon, DiscordIcon } from './Icons';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { label: t('footer.features'), href: '#features' },
      { label: t('footer.howItWorks'), href: '#how-it-works' },
      { label: t('footer.pricing'), href: '#pricing' },
      { label: t('footer.roadmap'), href: '#' },
      { label: t('footer.changelog'), href: '#' }
    ],
    resources: [
      { label: t('footer.documentation'), href: '#' },
      { label: t('footer.api'), href: '#' },
      { label: t('footer.support'), href: '#' },
      { label: t('footer.blog'), href: '#' },
      { label: t('footer.community'), href: '#' }
    ],
    company: [
      { label: t('footer.about'), href: '#' },
      { label: t('footer.contact'), href: '#' },
      { label: t('footer.privacy'), href: '/privacy' },
      { label: t('footer.terms'), href: '/terms' },
      { label: t('footer.kvkk'), href: '#' }
    ]
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
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
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="logo">🌱</span>
              <span className="brand-name">Vocabin</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <DiscordIcon />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">{t('footer.product')}</h4>
            <ul className="footer-links">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">{t('footer.resources')}</h4>
            <ul className="footer-links">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">{t('footer.company')}</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
