import { footerLinks } from '../data/content';
import { TwitterIcon, InstagramIcon, GitHubIcon, DiscordIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#') {
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
            <p className="footer-description">
              Web'de gezinmeyi bir öğrenme deneyimine dönüştürerek,
              milyonlarca insanın kelime dağarcığını geliştirmesine yardımcı oluyoruz.
            </p>
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
            <h4 className="footer-title">Ürün</h4>
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
            <h4 className="footer-title">Kaynaklar</h4>
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
            <h4 className="footer-title">Şirket</h4>
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
          <p>&copy; {currentYear} Vocabin Technologies. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
