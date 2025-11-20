import { ChromeIcon } from './Icons';

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Bugün 50 Yeni Kelime Öğrenin!</h2>
          <p className="cta-description">
            10,000+ kullanıcının tercihi. 4.8⭐ ortalama değerlendirme.
            Hemen başlayın ve kelime dağarcığınızı geliştirin.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-large btn-white"
          >
            <ChromeIcon size={24} />
            Ücretsiz Chrome'a Ekle
          </a>
        </div>
      </div>
    </section>
  );
}
