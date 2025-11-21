import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Gizlilik Politikası</h1>
          <p className="last-updated">Son Güncelleme: 21 Kasım 2025</p>

          <section>
            <h2>1. Genel Bilgiler</h2>
            <p>
              Vocabin ("biz", "bizim" veya "Vocabin") olarak, kullanıcılarımızın gizliliğine saygı duyuyor
              ve kişisel verilerinizi korumak için gerekli tüm önlemleri alıyoruz. Bu Gizlilik Politikası,
              Vocabin Chrome Extension ve web hizmetlerini kullandığınızda kişisel verilerinizin nasıl
              toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2>2. Toplanan Bilgiler</h2>
            <h3>2.1. Hesap Bilgileri</h3>
            <ul>
              <li>E-posta adresi</li>
              <li>Google hesap bilgileri (Google ile giriş yapıldığında)</li>
              <li>Şifre (şifreli olarak saklanır)</li>
              <li>Hesap oluşturma tarihi</li>
            </ul>

            <h3>2.2. Kullanım Verileri</h3>
            <ul>
              <li>Kaydedilen kelimeler ve çevirileri</li>
              <li>Kelime öğrenme durumları ve ilerleme istatistikleri</li>
              <li>Extension kullanım istatistikleri</li>
              <li>Cihaz ve tarayıcı bilgileri</li>
            </ul>

            <h3>2.3. Otomatik Olarak Toplanan Bilgiler</h3>
            <ul>
              <li>IP adresi</li>
              <li>Tarayıcı türü ve versiyonu</li>
              <li>İşletim sistemi</li>
              <li>Erişim tarihleri ve saatleri</li>
              <li>Kullanım süresi ve sıklığı</li>
            </ul>
          </section>

          <section>
            <h2>3. Bilgilerin Kullanım Amaçları</h2>
            <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:</p>
            <ul>
              <li>Hizmetlerimizi sağlamak ve sürdürmek</li>
              <li>Kullanıcı hesaplarını yönetmek ve güvenliğini sağlamak</li>
              <li>Kelime çeviri ve kaydetme hizmetlerini sunmak</li>
              <li>Kullanıcı deneyimini geliştirmek ve kişiselleştirmek</li>
              <li>Teknik destek sağlamak</li>
              <li>Kullanım istatistikleri ve analizler oluşturmak</li>
              <li>Hizmet güncellemeleri ve yeni özellikler hakkında bilgilendirme yapmak</li>
              <li>Dolandırıcılık ve kötüye kullanımı önlemek</li>
            </ul>
          </section>

          <section>
            <h2>4. Veri Saklama ve Güvenlik</h2>
            <p>
              Verileriniz Supabase'in güvenli bulut altyapısında saklanır. Tüm veriler:
            </p>
            <ul>
              <li>SSL/TLS şifreleme ile korunur</li>
              <li>Düzenli olarak yedeklenir</li>
              <li>Sektör standardı güvenlik önlemleri ile saklanır</li>
              <li>Yetkisiz erişime karşı korunur</li>
            </ul>
            <p>
              Şifreleriniz bcrypt veya benzeri güçlü algoritma ile hashlenerek saklanır ve hiçbir şekilde
              düz metin olarak saklanmaz.
            </p>
          </section>

          <section>
            <h2>5. Veri Paylaşımı</h2>
            <p>
              Kişisel verilerinizi üçüncü taraflarla paylaşmıyoruz. Verileriniz yalnızca aşağıdaki
              durumlarda paylaşılabilir:
            </p>
            <ul>
              <li>Yasal zorunluluklar gereği (mahkeme kararı, yasal süreç)</li>
              <li>Kullanıcının açık rızası ile</li>
              <li>Hizmet sağlayıcılarımız ile (Supabase, Google Cloud) - bu firmalar verilerinizi
                sadece hizmet sağlamak için kullanır</li>
            </ul>
          </section>

          <section>
            <h2>6. Çerezler (Cookies)</h2>
            <p>
              Vocabin, hizmetlerin işleyişini sağlamak ve kullanıcı deneyimini geliştirmek için
              çerezler kullanır:
            </p>
            <ul>
              <li><strong>Zorunlu Çerezler:</strong> Oturum yönetimi ve güvenlik için gereklidir</li>
              <li><strong>İşlevsel Çerezler:</strong> Tercihlerinizi hatırlamak için kullanılır</li>
              <li><strong>Analitik Çerezler:</strong> Hizmet kullanımını analiz etmek için kullanılır</li>
            </ul>
          </section>

          <section>
            <h2>7. Kullanıcı Hakları</h2>
            <p>GDPR ve KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Verilerinize erişim hakkı</li>
              <li>Verilerin düzeltilmesini talep etme hakkı</li>
              <li>Verilerin silinmesini talep etme hakkı ("unutulma hakkı")</li>
              <li>Veri işlemenin kısıtlanmasını talep etme hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
              <li>İtiraz etme hakkı</li>
            </ul>
            <p>
              Bu haklarınızı kullanmak için support@vocabin.com adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </section>

          <section>
            <h2>8. Çocukların Gizliliği</h2>
            <p>
              Hizmetlerimiz 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşın altındaki
              çocuklardan kişisel veri toplamıyoruz. Eğer 13 yaşın altında bir çocuğun verilerini
              topladığımızı fark ederseniz, lütfen bizimle iletişime geçin.
            </p>
          </section>

          <section>
            <h2>9. Üçüncü Taraf Bağlantıları</h2>
            <p>
              Hizmetlerimiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu web sitelerinin
              gizlilik uygulamalarından sorumlu değiliz. Bu siteleri ziyaret ettiğinizde kendi
              gizlilik politikalarını incelemenizi öneririz.
            </p>
          </section>

          <section>
            <h2>10. Politika Değişiklikleri</h2>
            <p>
              Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler yapıldığında
              kullanıcılarımızı e-posta yoluyla bilgilendireceğiz. Politika değişiklikleri bu sayfada
              yayınlanır ve "Son Güncelleme" tarihi güncellenir.
            </p>
          </section>

          <section>
            <h2>11. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız varsa veya verilerinizle ilgili haklarınızı
              kullanmak istiyorsanız bizimle iletişime geçebilirsiniz:
            </p>
            <ul>
              <li><strong>E-posta:</strong> support@vocabin.com</li>
              <li><strong>Web:</strong> https://vocabin.com</li>
            </ul>
          </section>

          <section>
            <h2>12. KVKK Uyumu</h2>
            <p>
              Vocabin olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu'na ("KVKK") tam uyum
              sağlıyoruz. Kişisel verileriniz KVKK'nın 4. ve 5. maddelerinde belirtilen şartlara
              uygun olarak işlenir. Veri sorumlusu olarak yükümlülüklerimizi yerine getiriyoruz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
