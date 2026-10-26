// GitHub projects. To add one: copy a block and fill the fields.
// image: optional screenshot in /public/projects (e.g. 'projects/shop.webp'); without it a designed cover is drawn.
const GH = 'https://github.com/Taghreed103/'
const PAGES = 'https://taghreed103.github.io/'

export const githubProjects = [
  {
    title: { en: 'FreshCart E-commerce', ar: 'متجر FreshCart' },
    desc: {
      en: 'Full e-commerce store with products, categories, brands, cart, wishlist, orders, payments and login with credentials or GitHub.',
      ar: 'متجر إلكتروني متكامل: منتجات، أقسام، براندات، سلة، مفضلة، طلبات، دفع، وتسجيل دخول بالبريد أو GitHub.',
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    repo: GH + 'ecommerce',
    live: 'https://ecommerce-8hf1.vercel.app',
    image: 'projects/ecommerce.webp',
  },
  {
    title: { en: 'YourUni Registration System', ar: 'نظام تسجيل YourUni' },
    desc: {
      en: 'Student registration platform for Malaysian universities with role-based access, document management and task tracking.',
      ar: 'منصة لتسجيل الطلاب في جامعات ماليزيا بصلاحيات حسب الدور، وإدارة للمستندات، ومتابعة للمهام.',
    },
    tags: ['React', 'TypeScript', 'JWT'],
    repo: GH + 'yourni',
    live: PAGES + 'yourni/',
    image: 'projects/yourni.webp',
  },
  {
    title: { en: 'Online Book Store', ar: 'متجر الكتب أونلاين' },
    desc: {
      en: 'A book store where readers browse, search and order titles through a clean, easy interface.',
      ar: 'متجر كتب يتيح للقراء التصفح والبحث وطلب الكتب من خلال واجهة واضحة وسهلة.',
    },
    tags: ['React', 'JavaScript', 'Vercel'],
    repo: GH + 'book-store',
    live: 'https://book-store-theta-ruby.vercel.app',
    image: 'projects/book-store.webp',
  },
  {
    title: { en: 'Social App', ar: 'تطبيق تواصل اجتماعي' },
    desc: {
      en: 'A Facebook-style social network in React and Tailwind using React Query, global state and custom hooks, with dark mode.',
      ar: 'شبكة تواصل على طريقة فيسبوك بـ React وTailwind، تستخدم React Query وإدارة الحالة العامة والـ hooks، مع وضع داكن.',
    },
    tags: ['React', 'React Query', 'Tailwind'],
    repo: GH + 'SocialApp',
    live: PAGES + 'SocialApp/',
    image: 'projects/social.webp',
  },
  {
    title: { en: 'FruityShop', ar: 'متجر FruityShop' },
    desc: {
      en: 'A grocery store landing page for fresh organic products, with features, products, categories and reviews sections.',
      ar: 'صفحة متجر خضار وفاكهة عضوية، بأقسام للمميزات والمنتجات والتصنيفات والتقييمات.',
    },
    tags: ['HTML', 'CSS', 'Responsive'],
    repo: GH + 'FruityOnline',
    live: PAGES + 'FruityOnline/',
    image: 'projects/fruity.webp',
  },
  {
    title: { en: 'Bookmarker', ar: 'مدير الروابط Bookmarker' },
    desc: {
      en: 'A bookmark manager to save, visit and delete favorite sites, with URL validation and local storage.',
      ar: 'تطبيق لحفظ المواقع المفضلة وزيارتها وحذفها، مع التحقق من صحة الروابط والحفظ في المتصفح.',
    },
    tags: ['JavaScript', 'CRUD', 'Validation'],
    repo: GH + 'BookMark-CRUDS',
    live: PAGES + 'BookMark-CRUDS/',
    image: 'projects/bookmark.webp',
  },
  {
    title: { en: 'Start Framework (React)', ar: 'Start Framework بـ React' },
    desc: {
      en: 'A multi-page React site practicing hooks, props, state management and routing between pages.',
      ar: 'موقع React متعدد الصفحات للتدريب على الـ hooks والـ props وإدارة الحالة والتنقل بين الصفحات.',
    },
    tags: ['React', 'React Router', 'Vite'],
    repo: GH + 'ReactApp1',
    live: PAGES + 'ReactApp1/',
    image: 'projects/reactapp1.webp',
  },
]

// Behance case studies.
export const behanceProjects = [
  {
    title: { en: 'InstaPay Website Redesign', ar: 'إعادة تصميم موقع InstaPay' },
    desc: {
      en: 'A conceptual redesign of the InstaPay website: better user experience, a modern visual interface and a cleaner, more accessible design that keeps the brand identity.',
      ar: 'إعادة تصميم مفاهيمية لموقع InstaPay: تجربة استخدام أفضل، وواجهة عصرية، وتصميم أنظف وأسهل في الوصول مع الحفاظ على هوية البراند.',
    },
    tags: ['Web', 'Fintech', 'Redesign'],
    url: 'https://www.behance.net/gallery/252112823/InstaPay-Website-Redesign',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/6e2ebe252112823.6ac81d58e6fd8.png',
    fallback: 'projects/behance-instapay.webp',
    kind: 'web',
  },
  {
    title: { en: 'Glowee Beauty Booking', ar: 'Glowee لحجز مراكز التجميل' },
    desc: {
      en: 'A beauty center booking platform that makes discovering, comparing and booking beauty services simple and convenient.',
      ar: 'منصة لحجز مراكز التجميل تجعل اكتشاف الخدمات ومقارنتها وحجزها أمرًا سهلًا ومريحًا.',
    },
    tags: ['Web', 'Booking', 'Beauty'],
    url: 'https://www.behance.net/gallery/255928433/Beauty-Center-GloweeBooking',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/6dcfcf255928433.6ab9dd3435120.png',
    fallback: 'projects/behance-glowee.webp',
    kind: 'mobile',
  },
  {
    title: { en: 'Saydaliyati Medical App', ar: 'تطبيق صيدليتي الطبي' },
    desc: {
      en: 'Saydality, an Arabic-first pharmacy app that reminds users of their medicine schedule. A full UI/UX case study designed in Figma over 6 weeks.',
      ar: 'صيدليتي، تطبيق صيدلية عربي يذكّر المستخدم بمواعيد أدويته. دراسة حالة UI/UX كاملة صُممت على Figma خلال 6 أسابيع.',
    },
    tags: ['Mobile', 'Health', 'Arabic UI'],
    url: 'https://www.behance.net/gallery/253656695/-Medical-app',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c09c27253656695.6a6ef482118be.png',
    fallback: 'projects/behance-saydality.webp',
    kind: 'mobile',
  },
]
