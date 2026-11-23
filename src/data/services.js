// Services shown in the Services section, in display order.
// tech: highlighted skill chips. href: makes the whole card a link.
import { contact } from './content'

export const services = [
  {
    key: 'ds',
    title: { en: 'Design Systems', ar: 'أنظمة التصميم' },
    text: {
      en: 'Scalable component libraries, design tokens and variables in Figma, bilingual RTL and LTR, so every screen stays consistent.',
      ar: 'مكتبات كومبوننتس قابلة للتوسع، وتوكنز ومتغيرات على Figma، بالعربي والإنجليزي RTL وLTR، عشان كل شاشة تفضل متناسقة.',
    },
  },
  {
    key: 'mobile',
    title: { en: 'Mobile App UI/UX Design', ar: 'تصميم UI/UX لتطبيقات الموبايل' },
    text: {
      en: 'iOS and Android experiences designed for real hands and real days, from user flows to pixel-perfect screens and prototypes.',
      ar: 'تجارب iOS وAndroid مصممة للاستخدام الحقيقي، من رحلة المستخدم لحد شاشات دقيقة وبروتوتايب جاهز.',
    },
  },
  {
    key: 'web',
    title: { en: 'Website UI/UX Design', ar: 'تصميم UI/UX للمواقع' },
    text: {
      en: 'Landing pages, portfolios, dashboards and full websites that tell your story clearly and turn visitors into customers.',
      ar: 'صفحات هبوط وبورتفوليو وداشبورد ومواقع كاملة، بتحكي قصتك بوضوح وبتحوّل الزائر لعميل.',
    },
  },
  {
    key: 'research',
    title: { en: 'UX Research', ar: 'أبحاث تجربة المستخدم' },
    text: {
      en: 'User interviews, competitor analysis and usability testing that ground every design decision in real user behavior.',
      ar: 'مقابلات مع المستخدمين، وتحليل منافسين، واختبارات استخدام، عشان كل قرار تصميم يكون مبني على سلوك حقيقي.',
    },
  },
  {
    key: 'consult',
    title: { en: 'UX Consultation', ar: 'استشارات تجربة المستخدم' },
    text: {
      en: 'UX audits and clear, prioritized recommendations: where your users struggle and exactly what to fix first.',
      ar: 'مراجعة شاملة لتجربة المستخدم وتوصيات واضحة ومرتبة: فين المستخدم بيتعب، وإيه اللي يتصلح الأول.',
    },
  },
  {
    key: 'frontend',
    title: { en: 'Front-End Development', ar: 'تطوير الواجهات الأمامية' },
    text: {
      en: 'Turning designs into fast, responsive, accessible websites with clean code, deployed live on Vercel.',
      ar: 'تحويل التصميم لمواقع سريعة ومتجاوبة وسهلة الاستخدام بكود نضيف، ومنشورة لايف على Vercel.',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    key: 'ai',
    title: { en: 'Claude & MCP', ar: 'Claude و MCP' },
    text: {
      en: 'AI consultations: how to use Claude and MCP connectors with Figma, GitHub and your tools to design and ship faster.',
      ar: 'استشارات في استخدام الذكاء الاصطناعي: إزاي تستخدم Claude وموصّلات MCP مع Figma وGitHub وأدواتك عشان تصمم وتنفذ أسرع.',
    },
    badge: { en: 'AI consultations', ar: 'استشارات AI' },
  },
  {
    key: 'mentor',
    title: { en: 'Mentorship & Training', ar: 'إرشاد وتدريب' },
    text: {
      en: 'One-to-one sessions on UI/UX and front-end: portfolio reviews, career guidance and hands-on learning.',
      ar: 'جلسات فردية في UI/UX والفرونت إند: مراجعة البورتفوليو، وتوجيه مهني، وتعلم عملي.',
    },
    badge: { en: 'Free for now', ar: 'مجانًا حاليًا' },
    href: contact.mentorship,
  },
]
