import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Users',
    'nav.faq': 'FAQ',
    'nav.addToChrome': 'Add to Chrome',
    'nav.add': 'Add',

    // Hero Section
    'hero.badge': '10,000+ active users',
    'hero.title': 'See on the Web, Remember with Mobile, Learn with Vocabin',
    'hero.description': 'No more repeated translations. Transfer words in the language you want to learn to your permanent memory with Vocabin. Save words and let Vocabin remind you. Catch progress with permanent learning.',
    'hero.startFree': 'Start Free',
    'hero.watchDemo': 'Watch Demo',
    'hero.statRating': 'User Rating',
    'hero.statWords': 'Words Saved',
    'hero.statCountries': 'Countries',

    // Floating Cards
    'hero.translation1': 'temporary, short-lived',
    'hero.translation2': 'lucky coincidence',
    'hero.translation3': 'unclear, vague',
    'hero.save': 'Save',

    // Features Section
    'features.title': 'Features',
    'features.description': 'Make learning a foreign language part of your daily routine with Vocabin.',
    'features.1.title': 'Instant Translation',
    'features.1.description': 'Select a word or sentence on any web page, instantly save the translation.',
    'features.2.title': 'Vocabin Smart Notebook',
    'features.2.description': 'With Vocabin smart notebook. Every translation is a note, every note is permanent learning. Save new translations with one click. Access anytime synced from your iOS & Android device.',
    'features.3.title': 'Progress Tracking',
    'features.3.description': 'Makes your word learning process visible. Displays your progress statistically. Takes you on a journey to permanently learn foreign languages.',
    'features.4.title': 'Article Generator',
    'features.4.description': 'With the article generator, creates meaningful texts according to your level with word groups you learned and reinforces with quizzes from these texts.',
    'features.5.title': 'Platform Independent',
    'features.5.description': 'Access Vocabin from iOS, Android marketplaces and web. Track your permanent learning process.',
    'features.6.title': 'Fast and Lightweight',
    'features.6.description': 'Translation time under 100ms. Extension size less than 5MB. Seamless experience with minimal CPU/RAM usage.',

    // How It Works Section
    'howItWorks.title': 'How It Works?',
    'howItWorks.description': 'Start learning English in 4 simple steps',
    'howItWorks.1.title': 'Install',
    'howItWorks.1.description': 'Download Vocabin from Chrome Web Store and activate it. Sign in with your Google account or create an email/password.',
    'howItWorks.2.title': 'Select Word',
    'howItWorks.2.description': 'Select any English word or sentence on any web page. The tooltip appears automatically.',
    'howItWorks.3.title': 'See Translation',
    'howItWorks.3.description': 'The word is translated instantly and displayed on screen. If you like it, click the "Save" button.',
    'howItWorks.4.title': 'Track Progress',
    'howItWorks.4.description': 'View your word list, mark the words you\'ve learned, and track your statistics.',

    // Pricing Section
    'pricing.title': 'Affordable Prices for Everyone',
    'pricing.description': 'Choose the plan that suits your needs',
    'pricing.discount': '44% Off',
    'pricing.popular': 'Most Popular',
    'pricing.free': 'Free',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.perMonth': '/month',
    'pricing.perYear': '/year',
    'pricing.startFree': 'Start Free',
    'pricing.monthlyPlan': 'Monthly Plan',
    'pricing.yearlyPlan': 'Yearly Plan',
    'pricing.free.1': 'Up to 100 words saved',
    'pricing.free.2': 'Basic features',
    'pricing.free.3': 'Instant translation',
    'pricing.free.4': 'Progress tracking',
    'pricing.free.5': 'Ad-free experience',
    'pricing.free.6': 'Your own API key required',
    'pricing.monthly.1': 'Unlimited word saving',
    'pricing.monthly.2': 'API key included',
    'pricing.monthly.3': 'Priority support',
    'pricing.monthly.4': 'Advanced statistics',
    'pricing.monthly.5': 'Excel/CSV export',
    'pricing.monthly.6': 'Flashcard mode (coming soon)',
    'pricing.yearly.1': 'All Monthly plan features',
    'pricing.yearly.2': 'Annual billing',
    'pricing.yearly.3': 'VIP support',
    'pricing.yearly.4': 'Beta features access',
    'pricing.yearly.5': 'Exclusive training materials',

    // Testimonials Section
    'testimonials.title': 'What Our Users Say',
    'testimonials.description': 'Some of our thousands of happy users',
    'testimonials.1.text': 'It became indispensable while reading technical documentation. I learn dozens of words every day! No need for Google Translate anymore.',
    'testimonials.1.name': 'Ahmet K.',
    'testimonials.1.role': 'Software Developer',
    'testimonials.2.text': 'I use it constantly while reading academic papers. My word list reached 500 in 3 months! Very helpful for my thesis.',
    'testimonials.2.name': 'Elif Y.',
    'testimonials.2.role': 'University Student',
    'testimonials.3.text': 'I recommend it to my students. Learning words in real context is much more effective! Usage rate in my class reached 80%.',
    'testimonials.3.name': 'Mehmet S.',
    'testimonials.3.role': 'English Teacher',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Everything you\'re curious about',
    'faq.1.question': 'What is Vocabin and how does it work?',
    'faq.1.answer': 'Vocabin is a Chrome Extension that instantly translates English words while browsing the web and saves them to your personal word list. When you select a word on any web page, it automatically translates and you can save it. You can transfer words you want to learn to your permanent memory with Vocabin mobile apps.',
    'faq.2.question': 'Is the free plan enough?',
    'faq.2.answer': 'The free plan is a trial version where you can access and test all Vocabin features with up to 100 words. Pro plan is recommended for long-term benefit.',
    'faq.3.question': 'Is my data safe?',
    'faq.3.answer': 'Yes! All your data is protected with encrypted connections and stored in Supabase\'s secure infrastructure. We are GDPR and KVKK compliant. Your word data belongs only to you and is not shared with third parties.',
    'faq.4.question': 'Which browsers does it work on?',
    'faq.4.answer': 'Currently, Vocabin only works on Google Chrome. Firefox and Edge support will come in Q3 2025. Mobile app will also be available soon.',
    'faq.5.question': 'Can I use it without internet connection?',
    'faq.5.answer': 'You can view your saved words when offline. However, internet connection is required for new word translations. Your data is automatically synced when you\'re online.',

    // CTA Section
    'cta.title': 'Learn 50 New Words Today!',
    'cta.description': 'Preferred by 10,000+ users. 4.8 average rating. Start now and expand your vocabulary.',
    'cta.button': 'Add to Chrome Free',

    // Footer
    'footer.description': 'We help millions of people expand their vocabulary by turning web browsing into a learning experience.',
    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
    'footer.features': 'Features',
    'footer.howItWorks': 'How It Works?',
    'footer.pricing': 'Pricing',
    'footer.roadmap': 'Roadmap',
    'footer.changelog': 'Changelog',
    'footer.documentation': 'Documentation',
    'footer.api': 'API',
    'footer.support': 'Support',
    'footer.blog': 'Blog',
    'footer.community': 'Community',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.kvkk': 'GDPR',
    'footer.copyright': 'Vocabin Technologies. All rights reserved.',
  },
  tr: {
    // Navigation
    'nav.features': 'Özellikler',
    'nav.howItWorks': 'Nasıl Çalışır?',
    'nav.pricing': 'Fiyatlandırma',
    'nav.testimonials': 'Kullanıcılar',
    'nav.faq': 'SSS',
    'nav.addToChrome': "Chrome'a Ekle",
    'nav.add': 'Ekle',

    // Hero Section
    'hero.badge': '10,000+ aktif kullanıcı',
    'hero.title': "Web'de gör, Mobille hatırla, Vocabin'le öğren",
    'hero.description': 'Tekrar tekrar çeviriye son. Vocabin ile öğrenmek istediğiniz dildeki kelimeleri kalıcı hafızanıza geçirin. Kelimeleri kaydedin, Vocabin sizin için hatırlatsın. Kalıcı öğrenmeyle ilerlemeyi yakalayın.',
    'hero.startFree': 'Ücretsiz Başla',
    'hero.watchDemo': "Demo'yu İzle",
    'hero.statRating': 'Kullanıcı Puanı',
    'hero.statWords': 'Kaydedilen Kelime',
    'hero.statCountries': 'Ülkeden Kullanıcı',

    // Floating Cards
    'hero.translation1': 'geçici, kısa ömürlü',
    'hero.translation2': 'talihli rastlantı',
    'hero.translation3': 'belirsiz, muğlak',
    'hero.save': 'Kaydet',

    // Features Section
    'features.title': 'Özellikler',
    'features.description': 'Vocabin ile yabancı dil öğrenmeyi günlük rutininizin bir parçası haline getirin.',
    'features.1.title': 'Anında Çeviri',
    'features.1.description': 'Herhangi bir web sayfasında kelime veya cümle seçin, anında çeviriyi kaydedin.',
    'features.2.title': 'Vocabin Akıllı Defter',
    'features.2.description': 'Vocabin akıllı defterle. Her çeviri bir not, her not kalıcı bir öğrenme. Yeni gördüğünüz çevirileri tek tıkla kaydedin. iOS & Android cihazınızdan senkronize bir şekilde istediğiniz zaman erişim sağlayın.',
    'features.3.title': 'İlerleme Takibi',
    'features.3.description': 'Kelimeleri öğrenme sürecinizi görünür hale getirir. İlerlemenizi istatistiksel olarak görüntüler. Yabancı dilleri kalıcı bir şekilde öğrenme yolculuğuna çıkartır.',
    'features.4.title': 'Makale Oluşturucu',
    'features.4.description': 'Makale oluşturucuyla, öğrendiğiniz kelime gruplarıyla, seviyenize göre anlamlı metinler oluşturur ve bu metinlerden oluşturduğu quizlerle pekiştirmenizi sağlar.',
    'features.5.title': 'Platform Bağımsız',
    'features.5.description': 'Vocabin\'e iOS, Android marketlerden ve web\'den erişebilirsiniz. Kalıcı öğrenme sürecinizi takip edebilirsiniz.',
    'features.6.title': 'Hızlı ve Hafif',
    'features.6.description': "100ms altında çeviri süresi. 5MB'dan az extension boyutu. Minimal CPU/RAM kullanımı ile sorunsuz deneyim.",

    // How It Works Section
    'howItWorks.title': 'Nasıl Çalışır?',
    'howItWorks.description': '4 basit adımda İngilizce öğrenmeye başlayın',
    'howItWorks.1.title': 'Kurulum',
    'howItWorks.1.description': "Chrome Web Store'dan Vocabin'i indirin ve aktif edin. Google hesabınızla giriş yapın veya email/şifre oluşturun.",
    'howItWorks.2.title': 'Kelime Seç',
    'howItWorks.2.description': 'Herhangi bir web sayfasında İngilizce kelime veya cümle seçin. Tooltip otomatik olarak belirir.',
    'howItWorks.3.title': 'Çeviri Gör',
    'howItWorks.3.description': 'Kelime anında çevrilir ve ekranda gösterilir. Beğenirseniz "Kaydet" butonuna tıklayın.',
    'howItWorks.4.title': 'İlerlemeyi Takip Et',
    'howItWorks.4.description': 'Kelime listenizi görüntüleyin, öğrendiğiniz kelimeleri işaretleyin ve istatistiklerinizi takip edin.',

    // Pricing Section
    'pricing.title': 'Herkes İçin Uygun Fiyatlar',
    'pricing.description': 'İhtiyaçlarınıza uygun planı seçin',
    'pricing.discount': '%44 İndirim',
    'pricing.popular': 'En Popüler',
    'pricing.free': 'Ücretsiz',
    'pricing.monthly': 'Aylık',
    'pricing.yearly': 'Yıllık',
    'pricing.perMonth': '/ay',
    'pricing.perYear': '/yıl',
    'pricing.startFree': 'Ücretsiz Başla',
    'pricing.monthlyPlan': 'Aylık Plan',
    'pricing.yearlyPlan': 'Yıllık Plan',
    'pricing.free.1': '100 kelimeye kadar kayıt',
    'pricing.free.2': 'Temel özellikler',
    'pricing.free.3': 'Anında çeviri',
    'pricing.free.4': 'İlerleme takibi',
    'pricing.free.5': 'Reklamsız deneyim',
    'pricing.free.6': 'Kendi API anahtarınız gerekli',
    'pricing.monthly.1': 'Sınırsız kelime kaydı',
    'pricing.monthly.2': 'API anahtarı dahil',
    'pricing.monthly.3': 'Öncelikli destek',
    'pricing.monthly.4': 'Gelişmiş istatistikler',
    'pricing.monthly.5': 'Excel/CSV dışa aktarma',
    'pricing.monthly.6': 'Flashcard modu (yakında)',
    'pricing.yearly.1': 'Aylık planın tüm özellikleri',
    'pricing.yearly.2': 'Yıllık faturalama',
    'pricing.yearly.3': 'VIP destek',
    'pricing.yearly.4': 'Beta özelliklerine erişim',
    'pricing.yearly.5': 'Özel eğitim materyalleri',

    // Testimonials Section
    'testimonials.title': 'Kullanıcılarımız Ne Diyor?',
    'testimonials.description': 'Binlerce mutlu kullanıcıdan bazıları',
    'testimonials.1.text': "Teknik dokümantasyon okurken vazgeçilmez oldu. Her gün onlarca kelime öğreniyorum! Artık Google Translate'e gerek kalmadı.",
    'testimonials.1.name': 'Ahmet K.',
    'testimonials.1.role': 'Yazılım Geliştirici',
    'testimonials.2.text': "Akademik makaleler okurken sürekli kullanıyorum. Kelime listem 3 ayda 500'e ulaştı! Tez yazarken çok işime yarıyor.",
    'testimonials.2.name': 'Elif Y.',
    'testimonials.2.role': 'Üniversite Öğrencisi',
    'testimonials.3.text': "Öğrencilerime tavsiye ediyorum. Gerçek bağlamda kelime öğrenmek çok daha etkili! Sınıfımda kullanım oranı %80'e ulaştı.",
    'testimonials.3.name': 'Mehmet S.',
    'testimonials.3.role': 'İngilizce Öğretmeni',

    // FAQ Section
    'faq.title': 'Sık Sorulan Sorular',
    'faq.description': 'Merak ettiğiniz her şey',
    'faq.1.question': 'Vocabin nedir ve nasıl çalışır?',
    'faq.1.answer': "Vocabin, web'de gezinirken İngilizce kelimeleri anında Türkçe'ye çeviren ve kişisel kelime listenize kaydeden bir Chrome Extension'dır. Herhangi bir web sayfasında kelime seçtiğinizde otomatik olarak çeviri yapılır ve kaydedebilirsiniz. Öğrenmek istediğiniz kelimeleri Vocabin mobil uygulamalarıyla kalıcı hafızanıza taşıyabilirsiniz.",
    'faq.2.question': 'Ücretsiz plan yeterli mi?',
    'faq.2.answer': 'Ücretsiz plan 100 kadar kelimeyle Vocabin\'in tüm özelliklerine erişebileceğiniz ve test edebileceğiniz bir deneme sürümüdür. Uzun vadeli fayda için Pro plan önerilir.',
    'faq.3.question': 'Verilerim güvende mi?',
    'faq.3.answer': "Evet! Tüm verileriniz şifrelenmiş bağlantılarla korunur ve Supabase'in güvenli altyapısında saklanır. GDPR ve KVKK uyumluyuz. Kelime verileriniz sadece size aittir ve üçüncü taraflarla paylaşılmaz.",
    'faq.4.question': 'Hangi tarayıcılarda çalışır?',
    'faq.4.answer': "Şu anda Vocabin sadece Google Chrome'da çalışmaktadır. Firefox ve Edge desteği 2025'in 3. çeyreğinde gelecektir. Ayrıca mobil uygulama da yakında kullanıma sunulacak.",
    'faq.5.question': 'İnternet bağlantısı olmadan kullanabilir miyim?',
    'faq.5.answer': 'Çevrimdışıyken kaydettiğiniz kelimeleri görüntüleyebilirsiniz. Ancak yeni kelime çevirisi için internet bağlantısı gereklidir. Online olduğunuzda verileriniz otomatik olarak senkronize edilir.',

    // CTA Section
    'cta.title': 'Bugün 50 Yeni Kelime Öğrenin!',
    'cta.description': '10,000+ kullanıcının tercihi. 4.8 ortalama değerlendirme. Hemen başlayın ve kelime dağarcığınızı geliştirin.',
    'cta.button': "Ücretsiz Chrome'a Ekle",

    // Footer
    'footer.description': "Web'de gezinmeyi bir öğrenme deneyimine dönüştürerek, milyonlarca insanın kelime dağarcığını geliştirmesine yardımcı oluyoruz.",
    'footer.product': 'Ürün',
    'footer.resources': 'Kaynaklar',
    'footer.company': 'Şirket',
    'footer.features': 'Özellikler',
    'footer.howItWorks': 'Nasıl Çalışır?',
    'footer.pricing': 'Fiyatlandırma',
    'footer.roadmap': 'Roadmap',
    'footer.changelog': 'Changelog',
    'footer.documentation': 'Dokümantasyon',
    'footer.api': 'API',
    'footer.support': 'Destek',
    'footer.blog': 'Blog',
    'footer.community': 'Topluluk',
    'footer.about': 'Hakkımızda',
    'footer.contact': 'İletişim',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Koşulları',
    'footer.kvkk': 'KVKK',
    'footer.copyright': 'Vocabin Technologies. Tüm hakları saklıdır.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      // 1. Önce localStorage'da kayıtlı dil var mı kontrol et
      const saved = localStorage.getItem('vocabin-lang');
      if (saved === 'en' || saved === 'tr') {
        return saved;
      }

      // 2. Tarayıcı dilini kontrol et
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('tr')) {
        return 'tr';
      }
    }
    // 3. Varsayılan: İngilizce
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('vocabin-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export type { Language };
