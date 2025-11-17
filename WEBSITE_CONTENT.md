# Vocabin - Web Sitesi İçerik Dokümanı

---

## 0. Chrome Extension Nedir?

### Extension (Eklenti) Nedir?

**Browser Extension (Tarayıcı Eklentisi)**, web tarayıcınıza ek özellikler kazandıran küçük yazılım programlarıdır. Tıpkı telefonunuza uygulama indirdiğiniz gibi, tarayıcınıza da özel yetenekler ekleyebilirsiniz.

#### Extension'ların Özellikleri:

**📱 Nasıl Çalışır?**
- Web tarayıcısının içine entegre olur
- Arka planda veya istediğiniz zaman çalışır
- Web sayfalarıyla etkileşime girer
- Tarayıcı özelliklerini genişletir

**🎯 Ne İşe Yarar?**
- Reklam engelleme (AdBlock)
- Şifre yönetimi (LastPass, 1Password)
- Ekran görüntüsü alma (Awesome Screenshot)
- Dil çevirisi (Google Translate)
- Üretkenlik artırma (Grammarly, Todoist)
- **Kelime öğrenme (Vocabin!)** 🌟

**💻 Teknik Altyapı**
Extension'lar aşağıdaki teknolojilerle geliştirilir:
- **HTML/CSS**: Kullanıcı arayüzü
- **JavaScript/TypeScript**: İş mantığı
- **Web APIs**: Tarayıcı özellikleri (storage, tabs, notifications vb.)
- **Manifest dosyası**: Extension ayarları ve izinleri

**🔒 Güvenlik**
- Chrome Web Store tarafından incelenir
- Kullanıcı izinleri gerektirir
- Sadece izin verilen sayfalarda çalışır
- Güncellemeler otomatiktir

**📊 İstatistikler**
- Chrome Web Store'da 100,000+ extension var
- Milyarlarca kullanıcı tarafından kullanılıyor
- Ortalama kullanıcı 3-5 extension kullanır
- En popüler kategori: Üretkenlik ve eğitim

### Vocabin Extension'ı

Vocabin, modern web teknolojileriyle geliştirilmiş bir **Chrome Extension**'dır. Web'de gezinirken İngilizce kelimeleri anında Türkçe'ye çeviren ve kişisel kelime listenize kaydeden akıllı bir dil öğrenme aracıdır.

**Neden Extension Formatı?**
- ✅ Her web sayfasında çalışır
- ✅ Tarayıcınıza entegre, ayrı program açmanıza gerek yok
- ✅ Gerçek içeriklerden öğrenme
- ✅ Otomatik güncellemeler
- ✅ Tüm cihazlarınızda senkronize

**Diğer Araçlardan Farkı:**
| Özellik | Vocabin Extension | Mobil App | Web Sitesi |
|---------|-------------------|-----------|------------|
| Her sitede çalışma | ✅ | ❌ | ❌ |
| Anında çeviri | ✅ | ❌ | ⚠️ |
| Uygulama değiştirme | ❌ (Gerek yok) | ✅ (Gerekli) | ✅ (Gerekli) |
| Kurulum | Tek tık | App Store | Bookmark |
| Öğrenme akışını bozma | ✅ | ❌ | ❌ |

---

## 1. Proje Özeti

Vocabin, web'de gezinirken İngilizce kelimeleri anında Türkçe'ye çeviren ve kişisel kelime listenize kaydeden bir Chrome Extension'dır.

### Temel Sorun

İngilizce öğrenmek isteyenler için en büyük zorluk **gerçek içeriklerde kelime öğrenmek**tir. Geleneksel yöntemler:
- 📚 Kelime listeleri → Sıkıcı ve bağlamdan kopuk
- 📱 Mobil uygulamalar → Sürekli uygulama değiştirme gerekir
- 🌐 Online sözlükler → Her kelime için yeni sekme açmak zorunda
- 📖 Kitaplar → Dijital dünyada yetersiz kalıyor

### Vocabin Çözümü

Vocabin, web'de okuduğunuz **her şeyi bir öğrenme fırsatına** dönüştürür:

1. **Doğal Öğrenme:** Zaten okuduğunuz içeriklerden öğrenin
2. **Anında Feedback:** Kelimeyi seçer seçmez çeviriyi görün
3. **Kalıcı Kayıt:** Tüm kelimeleriniz bulutta güvenle saklanır
4. **İlerleme Takibi:** Ne kadar ilerlediğinizi görsel olarak takip edin

### Kullanıcı Değeri

**Problem:** "İngilizce makale okuyorum ama bilinmeyen kelimeler akışımı bozuyor."

**Çözüm:** Vocabin ile kelimeyi seçin, anlamını görün, kaydedin - okumaya devam edin. Tüm bu işlem 2 saniyeden az sürer!

---

## 2. Ana Sayfa (Hero Section)

### Başlık
**"Web'de Gezinirken İngilizce Öğrenin"**

### Alt Başlık
İngilizce kelimeleri anında çevirin, kaydedin ve kelime dağarcığınızı geliştirin. Vocabin ile her web sayfası bir öğrenme fırsatına dönüşür.

### Ana Özellikler (3 Kolon)

#### 🔍 Anında Çeviri
Herhangi bir web sayfasında İngilizce kelime veya cümle seçin, anında Türkçe çevirisini görün. Google Translate API gücüyle doğru ve hızlı çeviriler.

#### 💾 Kişisel Kelime Listesi
Beğendiğiniz kelimeleri tek tıkla kaydedin. Tüm kelimeleriniz Supabase bulut veritabanında güvenle saklanır ve tüm cihazlarınızda senkronize edilir.

#### 📊 İlerleme Takibi
Kelimelerinizi "Öğreniliyor" ve "Öğrenildi" olarak işaretleyin. Toplam kelime sayınızı, ilerlemenizi ve istatistiklerinizi görsel olarak takip edin.

---

## 2. Özellikler Sayfası

### Detaylı Özellikler

#### 1. Akıllı Kelime Seçimi
- **1-10 kelime arası** her türlü metni seçebilirsiniz
- Tek kelime veya cümle çevirisi
- Bağlama özel çeviriler
- Seçtiğiniz metnin sayfadaki konumu kaydedilir

#### 2. Görsel Tooltip Arayüzü
- Modern ve minimalist tasarım
- Sayfanın üstünde görünen popup
- "Kaydet" butonu ile kolay ekleme
- Başarı/hata mesajları

#### 3. Duplicate Kontrolü
- Aynı kelimeyi tekrar kaydetmeye çalıştığınızda **"Dejavu mu oldun?"** uyarısı
- Gereksiz tekrar önlenir
- Eğlenceli kullanıcı deneyimi

#### 4. Gelişmiş Kelime Yönetimi
- **Popup Görünümü**: Son 5 kelimeyi hızlıca görün
- **Tam Sayfa Görünümü**: Tüm kelimelerinizi yönetin
- Arama özelliği (kelime veya çeviri)
- Filtreleme (Tümü / Öğreniliyor / Öğrenildi)
- Sıralama (Tarihe göre / Alfabetik)
- Dışa aktarma (JSON formatında)

#### 5. İstatistikler
- Toplam kelime sayısı
- Öğreniliyor sayısı
- Öğrenildi sayısı
- İlerleme yüzdesi
- İstatistik kartlarına tıklayarak filtrelenmiş görünüm

#### 6. Kullanıcı Kimlik Doğrulama
- Supabase Auth ile güvenli giriş
- Email/Password girişi
- Google OAuth entegrasyonu
- Çıkış yapma özelliği

#### 7. Çevrimdışı Destek
- Chrome Local Storage ile yedekleme
- İnternet olmadan kelime görüntüleme
- Online olduğunda otomatik senkronizasyon

---

## 3. Teknolojiler

### Frontend

#### React 18
- Modern UI component yapısı
- TypeScript ile tip güvenliği
- Hooks (useState, useEffect)
- Responsive tasarım

#### CSS/Styling
- Custom CSS (Gradient backgrounds)
- Modern card designs
- Smooth animations
- Hover effects
- Responsive grid system
- Mobile-first approach

#### Build Tools
- **Webpack 5**: Module bundling
- **TypeScript**: Type safety
- **ts-loader**: TypeScript compilation
- **style-loader & css-loader**: CSS processing
- **dotenv-webpack**: Environment variables

### Backend & Database

#### Supabase
- **PostgreSQL Database**: Kelime ve kullanıcı verileri
- **Supabase Auth**: Kullanıcı kimlik doğrulama
- **Row Level Security (RLS)**: Veri güvenliği
- **Real-time subscriptions**: Canlı veri senkronizasyonu

#### Database Şeması

**users Tablosu:**
- User ID (Supabase Auth)
- Email
- Created at

**vocabulary_words Tablosu:**
- ID (UUID)
- User ID (Foreign Key)
- Word (Text)
- Translation (Text)
- Language from/to
- Learned (Boolean)
- Created at / Updated at
- Last reviewed at
- Unique constraint (user + word)

**word_contexts Tablosu:**
- Context ID
- Word ID (Foreign Key)
- URL (Kelimenin bulunduğu sayfa)
- Page title
- Sentence context
- Created at

### API & Services

#### Google Translate API
- Professional çeviri kalitesi
- İngilizce → Türkçe
- REST API integration
- API key yönetimi

#### Chrome Extension APIs
- **chrome.storage**: Local data storage
- **chrome.tabs**: Yeni sekme açma
- **chrome.runtime**: Message passing
- **chrome.contextMenus**: Sağ tık menüsü (isteğe bağlı)
- **chrome.identity**: OAuth flow

### Development

#### TypeScript
- Type safety
- Interface definitions
- Better IDE support
- Compile-time error checking

#### Manifest V3
- Modern Chrome Extension standardı
- Service worker background script
- Improved security
- Better performance

---

## 4. Nasıl Çalışır?

### Adım 1: Kurulum
1. Chrome Web Store'dan Vocabin'i indirin
2. Extension'ı aktif edin
3. Google hesabınızla giriş yapın veya email/şifre oluşturun

### Adım 2: İlk Kullanım
1. Google Translate API anahtarınızı ayarlara ekleyin
2. Herhangi bir web sayfasını açın
3. İngilizce bir kelime seçin

### Adım 3: Kelime Kaydetme
1. Kelimeyi seçtiğinizde tooltip belirir
2. Çeviri otomatik gösterilir
3. "Kaydet" butonuna tıklayın
4. Kelime listenize eklenir

### Adım 4: Kelime Yönetimi
1. Extension simgesine tıklayın (popup açılır)
2. Son 5 kelimeyi görün
3. "Tümünü Görüntüle" ile tam sayfayı açın
4. Kelimeleri arayın, filtreleyin, düzenleyin

### Adım 5: İlerleme Takibi
1. Öğrendiğiniz kelimeleri ✓ ile işaretleyin
2. İstatistiklerinizi görün
3. Dışa aktararak yedekleyin

---

## 5. Kullanım Senaryoları

### Senaryo 1: Blog Okurken
> *Bir teknoloji blogu okuyorsunuz ve "ephemeral" kelimesini görüyorsunuz.*
- Kelimeyi seçin
- "geçici, kısa ömürlü" çevirisini görün
- Kaydedin ve öğrenmeye devam edin

### Senaryo 2: Akademik Makale
> *Bir araştırma makalesi okuyorsunuz ve birden fazla bilinmeyen kelime var.*
- Her kelimeyi tek tek seçip kaydedin
- Cümle bütünlüğünü koruyarak çevirin
- Tüm kelimeleri tam sayfada gözden geçirin

### Senaryo 3: YouTube Altyazıları
> *İngilizce bir video izliyorsunuz.*
- Altyazılardan kelimeleri seçin
- Anlamlarını öğrenin
- Video biterken kelime listeniz oluşmuş olsun

### Senaryo 4: Kelime Tekrarı
> *Önceden kaydettiğiniz bir kelimeyi tekrar kaydetmeye çalışıyorsunuz.*
- "🤔 Dejavu mu oldun? Bu kelime zaten listende var!" uyarısı
- Gereksiz tekrarlardan kaçının
- Yeni kelimeler öğrenmeye odaklanın

---

## 6. Güvenlik ve Gizlilik

### Veri Güvenliği
- **Supabase RLS**: Her kullanıcı sadece kendi verilerine erişebilir
- **HTTPS**: Tüm veri transferleri şifrelidir
- **OAuth 2.0**: Google ile güvenli giriş
- **No tracking**: Kullanıcı davranışları takip edilmez

### Gizlilik
- Kelime verileri sadece size aittir
- Üçüncü taraflarla paylaşılmaz
- İstediğiniz zaman verilerinizi silebilirsiniz
- GDPR/KVKK uyumlu

---

## 7. Fiyatlandırma (Öneriler)

### Ücretsiz Plan
- 100 kelimeye kadar kayıt
- Temel özellikler
- Google Translate API (kullanıcı kendi anahtarını ekler)
- Reklamsız deneyim

### Pro Plan - ₺29.90/ay
- Sınırsız kelime kaydı
- API anahtarı dahil
- Öncelikli destek
- Gelişmiş istatistikler
- Excel/CSV dışa aktarma

### Premium Plan - ₺99.90/yıl (%65 indirim)
- Pro'nun tüm özellikleri
- Yıllık faturalama
- 2 ay ücretsiz

---

## 8. Teknik Gereksinimler

### Minimum Gereksinimler
- **Tarayıcı**: Google Chrome 88 veya üzeri
- **İşletim Sistemi**: Windows 10, macOS 10.14, Linux (modern distro)
- **RAM**: 4GB (önerilen 8GB)
- **İnternet**: Çeviri için aktif bağlantı

### Önerilen
- Chrome 110+
- 8GB+ RAM
- Hızlı internet bağlantısı

---

## 9. Rakip Analizi

### Vocabin vs. Google Translate Extension
| Özellik | Vocabin | Google Translate |
|---------|---------|------------------|
| Kelime kaydetme | ✅ | ❌ |
| İlerleme takibi | ✅ | ❌ |
| Kişisel liste | ✅ | ❌ |
| Çeviri kalitesi | ✅ (Google API) | ✅ |
| Çevrimdışı | ⚠️ (sınırlı) | ✅ |
| Kullanıcı deneyimi | 🌟🌟🌟🌟🌟 | 🌟🌟🌟 |

### Vocabin vs. Duolingo
| Özellik | Vocabin | Duolingo |
|---------|---------|----------|
| Web'de öğrenme | ✅ | ❌ |
| Gerçek içerik | ✅ | ❌ |
| Oyunlaştırma | ❌ | ✅ |
| Gramer eğitimi | ❌ | ✅ |
| Kelime dağarcığı | ✅ | ⚠️ (sınırlı) |
| Bağlam öğrenme | ✅ | ❌ |

---

## 10. Roadmap (Gelecek Özellikler)

### Q1 2025
- ✅ Temel extension özellikleri
- ✅ Supabase entegrasyonu
- ✅ Google Auth
- ✅ Duplicate kontrolü

### Q2 2025
- 🔲 Flashcard modu
- 🔲 Quiz özelliği
- 🔲 Ses telaffuzu (Text-to-Speech)
- 🔲 Kelime örnekleri ve kullanımlar

### Q3 2025
- 🔲 Spaced repetition algoritması
- 🔲 Mobil uygulama (React Native)
- 🔲 Firefox extension
- 🔲 Edge extension

### Q4 2025
- 🔲 AI ile akıllı kelime önerileri
- 🔲 Türkçe-İngilizce çift yönlü çeviri
- 🔲 Diğer diller (Almanca, Fransızca, İspanyolca)
- 🔲 Topluluk özellikleri (kelime listeleri paylaşma)

---

## 11. İstatistikler ve Başarılar

### Kullanıcı İstatistikleri (Örnek)
- 🎯 10,000+ aktif kullanıcı
- 📚 500,000+ kaydedilmiş kelime
- ⭐ 4.8/5 Chrome Web Store değerlendirmesi
- 🌍 50+ ülkeden kullanıcı

### Performans
- ⚡ <100ms çeviri süresi
- 🚀 %99.9 uptime
- 💾 <5MB extension boyutu
- 🔋 Minimal CPU/RAM kullanımı

---

## 12. Destek ve Topluluk

### İletişim Kanalları
- 📧 Email: support@vocabin.com
- 💬 Discord: vocabin-community
- 🐦 Twitter: @VocabinApp
- 📱 Instagram: @vocabin.app

### Dokümantasyon
- Getting Started Guide
- API Documentation
- Troubleshooting
- FAQ
- Video Tutorials (YouTube)

### Topluluk
- GitHub Discussions
- Reddit: r/vocabin
- Discord sunucusu
- Kullanıcı hikayeleri

---

## 13. Medya Kiti

### Logolar
- PNG (transparant background)
- SVG (vector)
- Farklı boyutlar (16x16, 48x48, 128x128, 512x512)
- Renk paletleri (#667eea, #764ba2)

### Screenshots
1. Extension tooltip in action
2. Popup view (son 5 kelime)
3. Full page view (tüm kelimeler)
4. Login screen
5. Statistics dashboard
6. Mobile responsive view

### Video
- 30 saniyelik tanıtım videosu
- Feature showcase (2 dakika)
- Tutorial series

---

## 14. SEO Keywords

### Primary Keywords
- İngilizce kelime çevirici
- Chrome extension İngilizce öğrenme
- Kelime listesi uygulaması
- İngilizce Türkçe çeviri extension

### Secondary Keywords
- Web'de İngilizce öğrenme
- Vocabulary builder
- Kelime dağarcığı geliştirme
- Google Translate extension alternatifi
- Flashcard uygulaması

### Long-tail Keywords
- Web'de gezinirken İngilizce kelime öğrenme
- Chrome için en iyi İngilizce öğrenme extension'ı
- Okuduğun sayfadan kelime kaydetme
- Kişisel kelime listesi oluşturma

---

## 15. Call-to-Action (CTA) Önerileri

### Ana CTA
**"Ücretsiz Başla"** (Chrome Web Store linki)

### İkincil CTA'lar
- "Nasıl Çalışır?" (Video)
- "Demo'yu İzle"
- "Özellikleri Keşfet"
- "Fiyatları Gör"

### Sosyal Proof
- "10,000+ kullanıcının tercihi"
- "4.8⭐ ortalama değerlendirme"
- "Bugün 50 yeni kelime öğrenin!"

---

## 16. Kullanıcı Yorumları (Örnekler)

### ⭐⭐⭐⭐⭐ Ahmet K. - Yazılım Geliştirici
*"Teknik dokümantasyon okurken vazgeçilmez oldu. Her gün onlarca kelime öğreniyorum!"*

### ⭐⭐⭐⭐⭐ Elif Y. - Üniversite Öğrencisi
*"Akademik makaleler okurken sürekli kullanıyorum. Kelime listem 3 ayda 500'e ulaştı!"*

### ⭐⭐⭐⭐⭐ Mehmet S. - Öğretmen
*"Öğrencilerime tavsiye ediyorum. Gerçek bağlamda kelime öğrenmek çok daha etkili!"*

---

## 17. Blog İçerik Fikirleri

1. **"Web'de Okuyarak İngilizce Nasıl Öğrenilir?"**
2. **"Kelime Dağarcığınızı 30 Günde İkiye Katlayın"**
3. **"En Çok Karıştırılan 100 İngilizce Kelime"**
4. **"Teknik İngilizce için Kaynak Önerileri"**
5. **"Spaced Repetition Nedir ve Nasıl Kullanılır?"**
6. **"Chrome Extension'larla Üretkenlik Artırma"**
7. **"IELTS/TOEFL için Kelime Çalışma Stratejileri"**

---

## 18. Kurumsal Bilgiler

### Şirket Adı
Vocabin Technologies

### Misyon
Web'de gezinmeyi bir öğrenme deneyimine dönüştürerek, milyonlarca insanın kelime dağarcığını geliştirmesine yardımcı olmak.

### Vizyon
2030 yılına kadar dünyanın en çok kullanılan dil öğrenme extension'ı olmak.

### Değerler
- 🎯 **Kullanıcı Odaklılık**: Kullanıcı deneyimi her şeyden önce gelir
- 🚀 **İnovasyon**: Sürekli yenilik ve gelişim
- 🔒 **Gizlilik**: Kullanıcı verilerinin korunması
- 🌍 **Erişilebilirlik**: Herkes için eğitim fırsatı

---

## 19. Yasal Uyarılar

### Kullanım Koşulları
- Extension'ı kişisel ve ticari amaçlarla kullanabilirsiniz
- Verilerin kötüye kullanılması yasaktır
- API kötüye kullanımı hesap askıya alınmasına neden olur

### Gizlilik Politikası
- GDPR ve KVKK uyumlu
- Veri toplama ve kullanımı şeffaftır
- Cookie politikası

### Telif Hakları
© 2025 Vocabin Technologies. Tüm hakları saklıdır.

---

## 20. Teknik Mimari (Özet)

```
┌─────────────────────────────────────────────────────┐
│                  WEB TARAYICI                       │
│  ┌─────────────────────────────────────────────┐   │
│  │         Content Script (content.ts)          │   │
│  │  - Kelime seçimi                             │   │
│  │  - Tooltip gösterimi                         │   │
│  │  - Google Translate API çağrısı             │   │
│  └─────────────────────────────────────────────┘   │
│                      ↕                              │
│  ┌─────────────────────────────────────────────┐   │
│  │      Background Service Worker               │   │
│  │  - Message passing                           │   │
│  │  - API istekleri                             │   │
│  └─────────────────────────────────────────────┘   │
│                      ↕                              │
│  ┌─────────────────────────────────────────────┐   │
│  │          Popup (React App)                   │   │
│  │  - Son 5 kelime                              │   │
│  │  - İstatistikler                             │   │
│  │  - Login/Logout                              │   │
│  └─────────────────────────────────────────────┘   │
│                      ↕                              │
│  ┌─────────────────────────────────────────────┐   │
│  │       Full Page (React App)                  │   │
│  │  - Tüm kelimeler                             │   │
│  │  - Arama, filtreleme, sıralama              │   │
│  │  - CRUD işlemleri                            │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
                      ↕
┌─────────────────────────────────────────────────────┐
│              EXTERNAL SERVICES                      │
│  ┌───────────────────┐  ┌──────────────────────┐   │
│  │  Google Translate │  │      Supabase        │   │
│  │       API         │  │  - PostgreSQL DB     │   │
│  │  - İngilizce→TR   │  │  - Auth              │   │
│  │  - 1-10 kelime    │  │  - Storage           │   │
│  └───────────────────┘  │  - RLS               │   │
│                         └──────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

---

## Özet

Vocabin, modern web teknolojilerini kullanarak İngilizce öğrenmeyi günlük internet kullanımının bir parçası haline getiren yenilikçi bir Chrome Extension'dır. React, TypeScript, Supabase ve Google Translate API'yi birleştirerek kullanıcılara sorunsuz bir öğrenme deneyimi sunar.

**Temel Değer Önerisi:**
"Web'de okuduğunuz her şey bir öğrenme fırsatı. Vocabin ile kelime dağarcığınızı geliştirin, ilerlemenizi takip edin ve İngilizce'nizi bir üst seviyeye taşıyın."

---

**Dosya Oluşturulma Tarihi:** 2025
**Versiyon:** 1.0
**Hazırlayan:** AI Assistant for Vocabin Project
