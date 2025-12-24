export const features = [
  {
    icon: "🔍",
    title: "Anında Çeviri",
    description: "Herhangi bir web sayfasında kelime veya cümle seçin, anında çeviriyi kaydedin."
  },
  {
    icon: "💾",
    title: "Vocabin Akıllı defter",
    description: "Vocabin akıllı defterle. Her translate bir not, her not kalıcı bir öğrenme. Yeni gördüğünüz çevirileri tek tıkla keydedin. IOS & Android cihazınızdan senkronize bir şekilde istediğiniz zaman erişim sağlayın."
  },
  {
    icon: "📊",
    title: "İlerleme Takibi",
    description: "Kelimeleri öğrenme sürecinizi görünür hale getirir. İlerlemenizi istatistiksel olarak görüntüler. Yabancı dilleri kalıcı bir şekilde öğrenme yolculuğuna çıkartır."
  },
  {
    icon: "🎯",
    title: "Makale Oluşturucu",
    description: "Makale oluşturucuyla, Öğrendiğiniz kelime gruplarıyla, seviyenize göre anlamlı metinler oluşturur ve bu metinlerden oluşturduğu quizlerle pekiştirmenizi sağlar."
  },
  {
    icon: "🔐",
    title: "Platform Bağımsız",
    description: "Vocabine , IOS Android markletlerden ve  webden erişebilir. Kalıcı öğrenme sürecinizi takip edebilirsiniz."
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
    name: "Aylık",
    price: "₺150",
    period: "/ay",
    features: [
      { text: "Sınırsız kelime kaydı", included: true },
      { text: "API anahtarı dahil", included: true },
      { text: "Öncelikli destek", included: true },
      { text: "Gelişmiş istatistikler", included: true },
      { text: "Excel/CSV dışa aktarma", included: true },
      { text: "Flashcard modu (yakında)", included: true }
    ],
    buttonText: "Aylık Plan",
    buttonVariant: "outline" as const
  },
  {
    name: "Yıllık",
    price: "₺1000",
    period: "/yıl",
    badge: "%44 İndirim",
    secondaryBadge: "En Popüler",
    featured: true,
    badgeType: "discount" as const,
    features: [
      { text: "Aylık planın tüm özellikleri", included: true },
      { text: "Yıllık faturalama", included: true },
      { text: "VIP destek", included: true },
      { text: "Beta özelliklerine erişim", included: true },
      { text: "Özel eğitim materyalleri", included: true }
    ],
    buttonText: "Yıllık Plan",
    buttonVariant: "primary" as const
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
    answer: "Vocabin, web'de gezinirken İngilizce kelimeleri anında Türkçe'ye çeviren ve kişisel kelime listenize kaydeden bir Chrome Extension'dır. Herhangi bir web sayfasında kelime seçtiğinizde otomatik olarak çeviri yapılır ve kaydedebilirsiniz. Öğrenmek istediğiniz kelimeleri vocabin mobil uygulamalarıyla kalıcı hafızanıza taşıyabilirsiniz."
  },
  {
    question: "Ücretsiz plan yeterli mi?",
    answer: "Ücretsiz plan  100 kadar kelimeyle Vocabinin tüm özelliklerini erişebileceğiniz ve test edebileceğiniz bir deneme sürümüdür. Uzun vadeli fayda için pro plan önerilir."
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
    { label: "Gizlilik Politikası", href: "/privacy" },
    { label: "Kullanım Koşulları", href: "/terms" },
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
