export const features = [
  {
    icon: "🔍",
    title: "Anında Çeviri",
    description: "Herhangi bir web sayfasında İngilizce kelime veya cümle seçin, anında Türkçe çevirisini görün. Google Translate API gücüyle doğru ve hızlı çeviriler."
  },
  {
    icon: "💾",
    title: "Kişisel Kelime Listesi",
    description: "Beğendiğiniz kelimeleri tek tıkla kaydedin. Tüm kelimeleriniz bulutta güvenle saklanır ve tüm cihazlarınızda senkronize edilir."
  },
  {
    icon: "📊",
    title: "İlerleme Takibi",
    description: "Kelimelerinizi \"Öğreniliyor\" ve \"Öğrenildi\" olarak işaretleyin. Toplam kelime sayınızı, ilerlemenizi ve istatistiklerinizi görsel olarak takip edin."
  },
  {
    icon: "🎯",
    title: "Akıllı Duplicate Kontrolü",
    description: "Aynı kelimeyi tekrar kaydetmeye çalıştığınızda \"Dejavu mu oldun?\" uyarısı ile gereksiz tekrarları önleyin."
  },
  {
    icon: "🔐",
    title: "Güvenli ve Gizli",
    description: "Verileriniz şifrelenmiş bağlantılarla korunur. GDPR/KVKK uyumlu. Kelime verileriniz sadece size aittir."
  },
  {
    icon: "⚡",
    title: "Hızlı ve Hafif",
    description: "100ms altında çeviri süresi. 5MB'dan az extension boyutu. Minimal CPU/RAM kullanımı ile sorunsuz deneyim."
  }
];

export const steps = [
  {
    number: 1,
    title: "Kurulum",
    description: "Chrome Web Store'dan Vocabin'i indirin ve aktif edin. Google hesabınızla giriş yapın veya email/şifre oluşturun."
  },
  {
    number: 2,
    title: "Kelime Seç",
    description: "Herhangi bir web sayfasında İngilizce kelime veya cümle seçin. Tooltip otomatik olarak belirir."
  },
  {
    number: 3,
    title: "Çeviri Gör",
    description: "Kelime anında çevrilir ve ekranda gösterilir. Beğenirseniz \"Kaydet\" butonuna tıklayın."
  },
  {
    number: 4,
    title: "İlerlemeyi Takip Et",
    description: "Kelime listenizi görüntüleyin, öğrendiğiniz kelimeleri işaretleyin ve istatistiklerinizi takip edin."
  }
];

export const pricingPlans = [
  {
    name: "Ücretsiz",
    price: "₺0",
    period: "/ay",
    features: [
      { text: "100 kelimeye kadar kayıt", included: true },
      { text: "Temel özellikler", included: true },
      { text: "Anında çeviri", included: true },
      { text: "İlerleme takibi", included: true },
      { text: "Reklamsız deneyim", included: true },
      { text: "Kendi API anahtarınız gerekli", included: false }
    ],
    buttonText: "Ücretsiz Başla",
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    price: "₺29.90",
    period: "/ay",
    badge: "En Popüler",
    featured: true,
    features: [
      { text: "Sınırsız kelime kaydı", included: true },
      { text: "API anahtarı dahil", included: true },
      { text: "Öncelikli destek", included: true },
      { text: "Gelişmiş istatistikler", included: true },
      { text: "Excel/CSV dışa aktarma", included: true },
      { text: "Flashcard modu (yakında)", included: true }
    ],
    buttonText: "Pro'ya Geç",
    buttonVariant: "primary" as const
  },
  {
    name: "Premium",
    price: "₺99.90",
    period: "/yıl",
    badge: "%65 İndirim",
    badgeType: "discount" as const,
    features: [
      { text: "Pro'nun tüm özellikleri", included: true },
      { text: "Yıllık faturalama", included: true },
      { text: "2 ay ücretsiz", included: true },
      { text: "VIP destek", included: true },
      { text: "Beta özelliklerine erişim", included: true },
      { text: "Özel eğitim materyalleri", included: true }
    ],
    buttonText: "Premium'a Geç",
    buttonVariant: "outline" as const
  }
];

export const testimonials = [
  {
    rating: 5,
    text: "Teknik dokümantasyon okurken vazgeçilmez oldu. Her gün onlarca kelime öğreniyorum! Artık Google Translate'e gerek kalmadı.",
    avatar: "AK",
    name: "Ahmet K.",
    role: "Yazılım Geliştirici"
  },
  {
    rating: 5,
    text: "Akademik makaleler okurken sürekli kullanıyorum. Kelime listem 3 ayda 500'e ulaştı! Tez yazarken çok işime yarıyor.",
    avatar: "EY",
    name: "Elif Y.",
    role: "Üniversite Öğrencisi"
  },
  {
    rating: 5,
    text: "Öğrencilerime tavsiye ediyorum. Gerçek bağlamda kelime öğrenmek çok daha etkili! Sınıfımda kullanım oranı %80'e ulaştı.",
    avatar: "MS",
    name: "Mehmet S.",
    role: "İngilizce Öğretmeni"
  }
];

export const faqItems = [
  {
    question: "Vocabin nedir ve nasıl çalışır?",
    answer: "Vocabin, web'de gezinirken İngilizce kelimeleri anında Türkçe'ye çeviren ve kişisel kelime listenize kaydeden bir Chrome Extension'dır. Herhangi bir web sayfasında kelime seçtiğinizde otomatik olarak çeviri yapılır ve kaydedebilirsiniz."
  },
  {
    question: "Ücretsiz plan yeterli mi?",
    answer: "Ücretsiz plan ile 100 kelimeye kadar kayıt yapabilir ve temel özellikleri kullanabilirsiniz. Kendi Google Translate API anahtarınızı eklemeniz gerekir. Daha fazla kelime ve özellik için Pro veya Premium planlarımızı inceleyebilirsiniz."
  },
  {
    question: "Verilerim güvende mi?",
    answer: "Evet! Tüm verileriniz şifrelenmiş bağlantılarla korunur ve Supabase'in güvenli altyapısında saklanır. GDPR ve KVKK uyumluyuz. Kelime verileriniz sadece size aittir ve üçüncü taraflarla paylaşılmaz."
  },
  {
    question: "Hangi tarayıcılarda çalışır?",
    answer: "Şu anda Vocabin sadece Google Chrome'da çalışmaktadır. Firefox ve Edge desteği 2025'in 3. çeyreğinde gelecektir. Ayrıca mobil uygulama da yakında kullanıma sunulacak."
  },
  {
    question: "İnternet bağlantısı olmadan kullanabilir miyim?",
    answer: "Çevrimdışıyken kaydettiğiniz kelimeleri görüntüleyebilirsiniz. Ancak yeni kelime çevirisi için internet bağlantısı gereklidir. Online olduğunuzda verileriniz otomatik olarak senkronize edilir."
  },
  {
    question: "Sadece İngilizce-Türkçe mi destekleniyor?",
    answer: "Şu anda evet, sadece İngilizce-Türkçe çeviri desteklenmektedir. 2025'in son çeyreğinde Almanca, Fransızca ve İspanyolca dilleri de eklenecektir. Ayrıca Türkçe-İngilizce çift yönlü çeviri de gelecek."
  }
];

export const footerLinks = {
  product: [
    { label: "Özellikler", href: "#features" },
    { label: "Nasıl Çalışır?", href: "#how-it-works" },
    { label: "Fiyatlandırma", href: "#pricing" },
    { label: "Roadmap", href: "#" },
    { label: "Changelog", href: "#" }
  ],
  resources: [
    { label: "Dokümantasyon", href: "#" },
    { label: "API", href: "#" },
    { label: "Destek", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Topluluk", href: "#" }
  ],
  company: [
    { label: "Hakkımızda", href: "#" },
    { label: "İletişim", href: "#" },
    { label: "Gizlilik Politikası", href: "/privacy-policy" },
    { label: "Kullanım Koşulları", href: "/terms-of-service" },
    { label: "KVKK", href: "#" }
  ]
};

export const navLinks = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır?", href: "#how-it-works" },
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "Kullanıcılar", href: "#testimonials" },
  { label: "SSS", href: "#faq" }
];
