import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Your Vision, Our Strategy',
    'hero.subtitle': 'Creative digital marketing strategies with measurable results',
    'hero.cta': "Let's Grow Your Brand",
    
    // About
    'about.title': 'About MZ Marketing',
    'about.description': 'We are a creative digital marketing agency dedicated to transforming brands through innovative strategies and measurable results. With expertise in digital marketing, branding, and strategy, we help businesses grow and thrive in the digital age.',
    'about.learn': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.digital': 'Digital Marketing',
    'services.digital.desc': 'Comprehensive digital strategies to boost your online presence',
    'services.social': 'Social Media Management',
    'services.social.desc': 'Engaging content and community building across all platforms',
    'services.branding': 'Brand Development',
    'services.branding.desc': 'Creating powerful brand identities that resonate',
    'services.seo': 'SEO & SEM',
    'services.seo.desc': 'Optimizing your visibility on search engines',
    
    // Why Choose Us
    'why.title': 'Why Choose MZ Marketing',
    'why.expertise': 'Expertise',
    'why.expertise.desc': 'Years of experience delivering results',
    'why.creativity': 'Creativity',
    'why.creativity.desc': 'Innovative solutions for every challenge',
    'why.results': 'Measurable Results',
    'why.results.desc': 'Data-driven strategies that deliver ROI',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's discuss how we can help grow your business",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.service': 'Service Interest',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.rights': '© 2024 MZ Marketing. All rights reserved.',
    'footer.tagline': 'Marketing That Moves You Forward',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'رؤيتك، استراتيجيتنا',
    'hero.subtitle': 'استراتيجيات تسويق رقمي إبداعية بنتائج قابلة للقياس',
    'hero.cta': 'لننمي علامتك التجارية',
    
    // About
    'about.title': 'عن MZ Marketing',
    'about.description': 'نحن وكالة تسويق رقمي إبداعية مكرسة لتحويل العلامات التجارية من خلال استراتيجيات مبتكرة ونتائج قابلة للقياس. مع خبرة في التسويق الرقمي والعلامات التجارية والاستراتيجية، نساعد الشركات على النمو والازدهار في العصر الرقمي.',
    'about.learn': 'اعرف المزيد',
    
    // Services
    'services.title': 'خدماتنا',
    'services.digital': 'التسويق الرقمي',
    'services.digital.desc': 'استراتيجيات رقمية شاملة لتعزيز تواجدك على الإنترنت',
    'services.social': 'إدارة وسائل التواصل الاجتماعي',
    'services.social.desc': 'محتوى جذاب وبناء مجتمع عبر جميع المنصات',
    'services.branding': 'تطوير العلامة التجارية',
    'services.branding.desc': 'إنشاء هويات علامة تجارية قوية لها صدى',
    'services.seo': 'تحسين محركات البحث والتسويق',
    'services.seo.desc': 'تحسين ظهورك على محركات البحث',
    
    // Why Choose Us
    'why.title': 'لماذا تختار MZ Marketing',
    'why.expertise': 'الخبرة',
    'why.expertise.desc': 'سنوات من الخبرة في تحقيق النتائج',
    'why.creativity': 'الإبداع',
    'why.creativity.desc': 'حلول مبتكرة لكل تحدي',
    'why.results': 'نتائج قابلة للقياس',
    'why.results.desc': 'استراتيجيات قائمة على البيانات تحقق العائد على الاستثمار',
    
    // Testimonials
    'testimonials.title': 'ماذا يقول عملاؤنا',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'لنناقش كيف يمكننا مساعدة عملك على النمو',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.service': 'الخدمة المهتم بها',
    'contact.send': 'إرسال الرسالة',
    
    // Footer
    'footer.rights': '© 2024 MZ Marketing. جميع الحقوق محفوظة.',
    'footer.tagline': 'التسويق الذي يدفعك للأمام',
  },
  he: {
    // Navigation
    'nav.home': 'בית',
    'nav.about': 'אודות',
    'nav.services': 'שירותים',
    'nav.contact': 'צור קשר',
    
    // Hero
    'hero.title': 'החזון שלך, האסטרטגיה שלנו',
    'hero.subtitle': 'אסטרטגיות שיווק דיגיטלי יצירתיות עם תוצאות מדידות',
    'hero.cta': 'בואו נצמיח את המותג שלכם',
    
    // About
    'about.title': 'אודות MZ Marketing',
    'about.description': 'אנחנו סוכנות שיווק דיגיטלי יצירתית המוקדשת לשינוי מותגים באמצעות אסטרטגיות חדשניות ותוצאות מדידות. עם מומחיות בשיווק דיגיטלי, מיתוג ואסטרטגיה, אנו עוזרים לעסקים לצמוח ולשגשג בעידן הדיגיטלי.',
    'about.learn': 'למידע נוסף',
    
    // Services
    'services.title': 'השירותים שלנו',
    'services.digital': 'שיווק דיגיטלי',
    'services.digital.desc': 'אסטרטגיות דיגיטליות מקיפות לחיזוק הנוכחות המקוונת שלך',
    'services.social': 'ניהול מדיה חברתית',
    'services.social.desc': 'תוכן מרתק ובניית קהילה בכל הפלטפורמות',
    'services.branding': 'פיתוח מותג',
    'services.branding.desc': 'יצירת זהויות מותג חזקות שמהדהדות',
    'services.seo': 'קידום אתרים ושיווק במנועי חיפוש',
    'services.seo.desc': 'אופטימיזציה של הנראות שלך במנועי חיפוש',
    
    // Why Choose Us
    'why.title': 'למה לבחור ב-MZ Marketing',
    'why.expertise': 'מומחיות',
    'why.expertise.desc': 'שנים של ניסיון במתן תוצאות',
    'why.creativity': 'יצירתיות',
    'why.creativity.desc': 'פתרונות חדשניים לכל אתגר',
    'why.results': 'תוצאות מדידות',
    'why.results.desc': 'אסטרטגיות מבוססות נתונים שמספקות החזר השקעה',
    
    // Testimonials
    'testimonials.title': 'מה הלקוחות שלנו אומרים',
    
    // Contact
    'contact.title': 'צור קשר',
    'contact.subtitle': 'בואו נדבר על איך אנחנו יכולים לעזור לעסק שלך לצמוח',
    'contact.name': 'שם',
    'contact.email': 'אימייל',
    'contact.message': 'הודעה',
    'contact.service': 'עניין בשירות',
    'contact.send': 'שלח הודעה',
    
    // Footer
    'footer.rights': '© 2024 MZ Marketing. כל הזכויות שמורות.',
    'footer.tagline': 'שיווק שמקדם אותך קדימה',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set RTL for Arabic and Hebrew
    document.documentElement.dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
