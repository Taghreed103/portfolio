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
]

// Behance case studies, in display order. Covers are the project covers from Behance.
const BE_COVER = 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/'

export const behanceProjects = [
  {
    title: { en: 'Saydaliyati Medical App', ar: 'تطبيق صيدليتي الطبي' },
    desc: {
      en: 'Saydality, an Arabic-first pharmacy app that reminds users of their medicine schedule. A full UI/UX case study designed in Figma over 6 weeks.',
      ar: 'صيدليتي، تطبيق صيدلية عربي يذكّر المستخدم بمواعيد أدويته. دراسة حالة UI/UX كاملة صُممت على Figma خلال 6 أسابيع.',
    },
    tags: ['Mobile', 'Health', 'Arabic UI'],
    url: 'https://www.behance.net/gallery/253656695/-Medical-app',
    image: BE_COVER + '57f95c253656695.Y3JvcCwzNDI4LDI2ODIsNDQxLDA.png',
    fallback: 'projects/behance-saydality.webp',
  },
  {
    title: { en: "Mo'na Grocery Delivery App", ar: 'مؤنة لتوصيل البقالة' },
    desc: {
      en: 'A full UX/UI case study for a grocery delivery ecosystem: mobile app, website and dashboard, from user interviews and competitor analysis to a 336-component design system.',
      ar: 'دراسة حالة UX/UI كاملة لمنظومة توصيل بقالة: تطبيق موبايل وموقع وداشبورد، من مقابلات المستخدمين وتحليل المنافسين لحد Design System من 336 كومبوننت.',
    },
    tags: ['Mobile', 'Web', 'Dashboard'],
    url: 'https://www.behance.net/gallery/258864421/-Mona-Grocery-Delivery-App-UXUI-Case-Study',
    image: BE_COVER + '1c8a95258864421.Y3JvcCw0ODQ4LDM3OTIsMCww.png',
  },
  {
    title: { en: 'Glowee Beauty Booking', ar: 'Glowee لحجز مراكز التجميل' },
    desc: {
      en: 'A beauty center booking platform that makes discovering, comparing and booking beauty services simple and convenient.',
      ar: 'منصة لحجز مراكز التجميل تجعل اكتشاف الخدمات ومقارنتها وحجزها أمرًا سهلًا ومريحًا.',
    },
    tags: ['Web', 'Booking', 'Beauty'],
    url: 'https://www.behance.net/gallery/255928433/Beauty-Center-GloweeBooking',
    image: BE_COVER + '570a60255928433.Y3JvcCw0ODQ4LDM3OTIsMCww.png',
    fallback: 'projects/behance-glowee.webp',
  },
  {
    title: { en: 'InstaPay Website Redesign', ar: 'إعادة تصميم موقع InstaPay' },
    desc: {
      en: 'A conceptual redesign of the InstaPay website: better user experience, a modern visual interface and a cleaner, more accessible design that keeps the brand identity.',
      ar: 'إعادة تصميم مفاهيمية لموقع InstaPay: تجربة استخدام أفضل، وواجهة عصرية، وتصميم أنظف وأسهل في الوصول مع الحفاظ على هوية البراند.',
    },
    tags: ['Web', 'Fintech', 'Redesign'],
    url: 'https://www.behance.net/gallery/252112823/InstaPay-Website-Redesign',
    image: BE_COVER + '9a5ab5252112823.Y3JvcCwzMzI5LDI2MDQsMzYyLDA.png',
    fallback: 'projects/behance-instapay.webp',
  },
  {
    title: { en: 'Kyan Design System', ar: 'نظام التصميم كيان' },
    desc: {
      en: "A bilingual Arabic/English design system built in Figma for Mo'na: 336 components, 1,922 RTL and LTR variants, 308 variables, light/dark and 3 brand modes.",
      ar: 'نظام تصميم ثنائي اللغة (عربي/إنجليزي) على Figma لتطبيق مؤنة: 336 كومبوننت، و1,922 فاريانت RTL وLTR، و308 متغير، مع وضع فاتح وداكن و3 أوضاع للبراند.',
    },
    tags: ['Design System', 'Figma', 'RTL/LTR'],
    url: 'https://www.behance.net/gallery/258566247/Kyan-Design-System-Bilingual-UI-Case-Study',
    image: BE_COVER + 'e25d1d258566247.Y3JvcCw0MTQyLDMyNDAsMCww.png',
  },
]
