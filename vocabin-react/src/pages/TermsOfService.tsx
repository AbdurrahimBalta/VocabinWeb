import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Hizmet Şartları ve Kullanım Koşulları</h1>
          <p className="last-updated">Son Güncelleme: 21 Kasım 2025</p>

          <section>
            <h2>1. Hizmet Şartlarının Kabulü</h2>
            <p>
              Vocabin Chrome Extension ve ilgili web hizmetlerini ("Hizmet") kullanarak, bu Hizmet
              Şartlarını ("Şartlar") kabul etmiş olursunuz. Bu Şartları kabul etmiyorsanız, lütfen
              Hizmeti kullanmayın. Hizmeti kullanmaya devam ederek, bu Şartlara bağlı kalmayı kabul
              edersiniz.
            </p>
          </section>

          <section>
            <h2>2. Hizmet Tanımı</h2>
            <p>
              Vocabin, kullanıcıların web'de gezinirken İngilizce kelimeleri Türkçe'ye çevirmesini,
              kaydetmesini ve kelime dağarcıklarını geliştirmesini sağlayan bir Chrome Extension
              ve web platformudur. Hizmet şunları içerir:
            </p>
            <ul>
              <li>Anında kelime ve cümle çevirisi</li>
              <li>Kişisel kelime listesi oluşturma ve yönetimi</li>
              <li>İlerleme takibi ve istatistikler</li>
              <li>Bulut senkronizasyonu</li>
              <li>Premium abonelik özellikleri</li>
            </ul>
          </section>

          <section>
            <h2>3. Kullanıcı Hesapları</h2>
            <h3>3.1. Hesap Oluşturma</h3>
            <p>
              Hizmeti kullanabilmek için bir hesap oluşturmanız gerekir. Hesap oluştururken:
            </p>
            <ul>
              <li>13 yaşından büyük olmalısınız</li>
              <li>Doğru ve güncel bilgiler sağlamalısınız</li>
              <li>Hesap güvenliğinizden siz sorumlusunuz</li>
              <li>Hesabınızı başkalarıyla paylaşmamalısınız</li>
            </ul>

            <h3>3.2. Hesap Güvenliği</h3>
            <p>
              Şifrenizin gizliliğini korumaktan siz sorumlusunuz. Hesabınızda yetkisiz bir kullanım
              fark ederseniz, derhal bizimle iletişime geçin.
            </p>
          </section>

          <section>
            <h2>4. Kullanım Kuralları</h2>
            <p>Hizmeti kullanırken aşağıdaki kurallara uymalısınız:</p>
            <ul>
              <li>Hizmeti yalnızca yasal amaçlarla kullanın</li>
              <li>Başkalarının haklarını ihlal etmeyin</li>
              <li>Spam veya kötü niyetli içerik oluşturmayın</li>
              <li>Sistemleri hack'lemeye veya kötüye kullanmaya çalışmayın</li>
              <li>Botlar veya otomatik sistemler kullanmayın</li>
              <li>Hizmeti tersine mühendislik yapmayın</li>
              <li>Diğer kullanıcıların deneyimini olumsuz etkilemeyin</li>
            </ul>
          </section>

          <section>
            <h2>5. Fikri Mülkiyet Hakları</h2>
            <h3>5.1. Vocabin'in Hakları</h3>
            <p>
              Hizmet, içeriği, özellikleri, işlevselliği ve tüm ilgili fikri mülkiyet hakları
              Vocabin Technologies'e aittir. Bunlar telif hakkı, ticari marka ve diğer fikri
              mülkiyet yasaları ile korunmaktadır.
            </p>

            <h3>5.2. Kullanıcı Verilerinin Sahipliği</h3>
            <p>
              Kaydettiğiniz kelimeler ve kişisel verileriniz size aittir. Vocabin, bu verileri
              yalnızca Hizmeti sağlamak için kullanır.
            </p>

            <h3>5.3. Lisans</h3>
            <p>
              Size, bu Şartlara uygun olarak Hizmeti kullanmak için sınırlı, kişisel, devredilemez,
              münhasır olmayan bir lisans veriyoruz.
            </p>
          </section>

          <section>
            <h2>6. Ücretlendirme ve Abonelik</h2>
            <h3>6.1. Ücretsiz ve Ücretli Planlar</h3>
            <p>
              Vocabin hem ücretsiz hem de ücretli abonelik planları sunar. Ücretli planlara abone
              olarak ilgili planın özelliklerine erişim sağlarsınız.
            </p>

            <h3>6.2. Ödeme Koşulları</h3>
            <ul>
              <li>Ücretler seçtiğiniz plana göre belirlenir</li>
              <li>Ödemeler aylık veya yıllık olarak otomatik yenilenir</li>
              <li>Kredi kartı bilgileriniz güvenli ödeme sağlayıcıları tarafından işlenir</li>
              <li>Fiyatlar önceden bildirilmek suretiyle değiştirilebilir</li>
            </ul>

            <h3>6.3. İptal ve İade Politikası</h3>
            <ul>
              <li>Aboneliğinizi istediğiniz zaman iptal edebilirsiniz</li>
              <li>İptal sonrası mevcut abonelik dönemi sonuna kadar erişim devam eder</li>
              <li>Kullanılmayan süre için geri ödeme yapılmaz</li>
              <li>14 günlük yasal cayma hakkınız saklıdır (dijital hizmet kullanılmadıysa)</li>
            </ul>
          </section>

          <section>
            <h2>7. Hizmet Kullanılabilirliği</h2>
            <p>
              Hizmeti kesintisiz ve hatasız sunmak için çaba gösteririz ancak:
            </p>
            <ul>
              <li>Hizmet ara sıra bakım için kullanılamayabilir</li>
              <li>Hizmeti önceden bildirmeksizin değiştirebiliriz</li>
              <li>%100 çalışma süresi garantisi vermiyoruz</li>
              <li>Üçüncü taraf servislere (Google Translate API) bağımlılık vardır</li>
            </ul>
          </section>

          <section>
            <h2>8. Sorumluluk Reddi</h2>
            <p>
              Hizmet "olduğu gibi" ve "mevcut olduğu şekilde" sunulur. Vocabin:
            </p>
            <ul>
              <li>Çevirilerin %100 doğruluğunu garanti etmez</li>
              <li>Hizmetin kesintisiz çalışacağını garanti etmez</li>
              <li>Kullanıcı verilerinin kaybolmamasını garanti etmez (yedekleme yapmanız önerilir)</li>
              <li>Üçüncü taraf içeriklerden sorumlu değildir</li>
            </ul>
          </section>

          <section>
            <h2>9. Sorumluluk Sınırlaması</h2>
            <p>
              Yasaların izin verdiği ölçüde, Vocabin aşağıdakilerden sorumlu değildir:
            </p>
            <ul>
              <li>Doğrudan, dolaylı, arızi veya sonuç olarak ortaya çıkan zararlar</li>
              <li>Veri kaybı veya kar kaybı</li>
              <li>İş kesintisi veya bilgisayar arızası</li>
              <li>Hizmetin kullanılamaması sonucu oluşan zararlar</li>
            </ul>
            <p>
              Toplam sorumluluğumuz, son 12 ayda ödediğiniz abonelik ücretiyle sınırlıdır.
            </p>
          </section>

          <section>
            <h2>10. Hesap Askıya Alma ve Sonlandırma</h2>
            <p>
              Vocabin, aşağıdaki durumlarda hesabınızı askıya alma veya sonlandırma hakkını saklı tutar:
            </p>
            <ul>
              <li>Bu Şartları ihlal etmeniz</li>
              <li>Hizmeti kötüye kullanmanız</li>
              <li>Yasadışı faaliyetlerde bulunmanız</li>
              <li>Ödeme yapmamanız</li>
              <li>Uzun süre aktif olmamanız</li>
            </ul>
            <p>
              Hesabınızı istediğiniz zaman kapatabilirsiniz. Hesap kapatıldığında tüm verileriniz silinir.
            </p>
          </section>

          <section>
            <h2>11. Değişiklikler</h2>
            <p>
              Bu Şartları zaman zaman güncelleyebiliriz. Önemli değişiklikler yapıldığında:
            </p>
            <ul>
              <li>Değişiklikler bu sayfada yayınlanır</li>
              <li>E-posta ile bildirim gönderilir</li>
              <li>"Son Güncelleme" tarihi güncellenir</li>
              <li>Değişiklikler yayınlandıktan 30 gün sonra yürürlüğe girer</li>
            </ul>
            <p>
              Değişiklikler sonrası Hizmeti kullanmaya devam ederek, güncel Şartları kabul etmiş olursunuz.
            </p>
          </section>

          <section>
            <h2>12. Uygulanacak Hukuk ve Yargı Yetkisi</h2>
            <p>
              Bu Şartlar Türkiye Cumhuriyeti yasalarına tabidir. Bu Şartlardan doğan uyuşmazlıklar
              İstanbul (Merkez) mahkemeleri ve icra daireleri tarafından çözümlenecektir.
            </p>
          </section>

          <section>
            <h2>13. Genel Hükümler</h2>
            <h3>13.1. Bütünlük</h3>
            <p>
              Bu Şartlar, sizinle Vocabin arasındaki anlaşmanın tamamını oluşturur ve önceki tüm
              anlaşmaların yerini alır.
            </p>

            <h3>13.2. Feragat</h3>
            <p>
              Vocabin'in herhangi bir hakkını kullanmaması, o haktan feragat ettiği anlamına gelmez.
            </p>

            <h3>13.3. Bölünebilirlik</h3>
            <p>
              Bu Şartların herhangi bir hükmü geçersiz sayılırsa, diğer hükümler geçerliliğini korur.
            </p>

            <h3>13.4. Devir</h3>
            <p>
              Bu Şartlardan doğan haklarınızı başkasına devredemezsiniz. Vocabin, haklarını
              istediği zaman devredebilir.
            </p>
          </section>

          <section>
            <h2>14. İletişim</h2>
            <p>
              Bu Şartlar hakkında sorularınız varsa bizimle iletişime geçebilirsiniz:
            </p>
            <ul>
              <li><strong>E-posta:</strong> support@vocabin.com</li>
              <li><strong>Web:</strong> https://vocabin.com</li>
            </ul>
          </section>

          <section>
            <h2>15. Onay</h2>
            <p>
              Hizmeti kullanarak, bu Hizmet Şartlarını okuduğunuzu, anladığınızı ve kabul ettiğinizi
              onaylarsınız.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
