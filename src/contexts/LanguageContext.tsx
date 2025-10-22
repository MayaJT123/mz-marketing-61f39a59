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
    
    // Services Page
    'services.subtitle': 'Comprehensive digital marketing solutions tailored to your business goals',
    'services.content': 'Content Creation',
    'services.content.desc': 'Engaging content that tells your brand story',
    'services.paid': 'Paid Advertising',
    'services.paid.desc': 'Strategic ad campaigns that maximize ROI',
    'services.email': 'Email Marketing',
    'services.email.desc': 'Targeted campaigns that convert',
    'services.video': 'Video Marketing',
    'services.video.desc': 'Compelling video content for all platforms',
    'services.viewall': 'View All Services',
    'services.process': 'Our Process',
    'services.cta.title': 'Ready to Get Started?',
    'services.cta.subtitle': "Let's discuss how our services can help your business grow",
    'services.cta.button': 'Contact Us Today',
    
    // About Page
    'about.story': 'Our Story',
    'about.story.p1': 'Founded with a passion for digital innovation, MZ Marketing began as a vision to help businesses thrive in the digital age. What started as a small team of marketing enthusiasts has grown into a full-service digital marketing agency trusted by brands worldwide.',
    'about.story.p2': 'Our journey has been driven by one constant: a commitment to delivering exceptional results for our clients. We combine creative thinking with data-driven strategies to craft marketing solutions that not only look great but deliver measurable ROI.',
    'about.story.p3': 'Today, we work with businesses of all sizes, from startups to established enterprises, helping them navigate the complex digital landscape and achieve their growth objectives. Our team brings together expertise in digital marketing, branding, content creation, and analytics to provide comprehensive solutions.',
    'about.drives': 'What Drives Us',
    'about.mission': 'Our Mission',
    'about.mission.desc': 'To empower brands with innovative digital strategies that drive measurable growth and success.',
    'about.values': 'Our Values',
    'about.values.desc': 'Integrity, creativity, excellence, and client success are at the heart of everything we do.',
    'about.approach': 'Our Approach',
    'about.approach.desc': 'Data-driven strategies combined with creative thinking to deliver exceptional results.',
    'about.vision': 'Our Vision',
    'about.vision.desc': 'To be the leading force in transforming how businesses connect with their audiences.',
    'about.team': 'Our Team',
    'about.team.subtitle': 'Behind MZ Marketing is a diverse team of creative thinkers, strategic planners, and digital experts who are passionate about helping your business succeed.',
    'about.team.desc': 'Our team combines years of experience in marketing, design, analytics, and client relations to deliver comprehensive solutions tailored to your unique needs.',
    
    // Contact Page
    'contact.getin': 'Get In Touch',
    'contact.getin.desc': "We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.",
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.consultation': 'Book a Free Consultation',
    'contact.consultation.desc': 'Schedule a 30-minute call to discuss your marketing goals and how we can help you achieve them.',
    'contact.form.select': 'Select a service',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'john@example.com',
    'contact.form.placeholder.message': 'Tell us about your project...',
    'contact.error.required': 'Please fill in all required fields',
    'contact.error.email': 'Please enter a valid email address',
    'contact.success.title': 'Success!',
    'contact.success.desc': "Your message has been sent. We'll get back to you soon!",
    
    // Testimonials
    'testimonial1.name': 'Sarah Johnson',
    'testimonial1.company': 'Tech Innovators',
    'testimonial1.text': 'MZ Marketing transformed our digital presence. Their strategic approach and creative campaigns delivered outstanding results.',
    'testimonial2.name': 'Michael Chen',
    'testimonial2.company': 'Global Ventures',
    'testimonial2.text': 'Professional, creative, and results-driven. They understood our vision and brought it to life beautifully.',
    'testimonial3.name': 'Emma Rodriguez',
    'testimonial3.company': 'StartUp Hub',
    'testimonial3.text': 'Working with MZ Marketing was a game-changer for our brand. Highly recommend their expertise!',
    
    // Process Steps
    'process.step1': 'Discovery',
    'process.step1.desc': 'Understanding your goals and challenges',
    'process.step2': 'Strategy',
    'process.step2.desc': 'Crafting a customized marketing plan',
    'process.step3': 'Execution',
    'process.step3.desc': 'Implementing campaigns with precision',
    'process.step4': 'Optimization',
    'process.step4.desc': 'Continuous improvement and growth',
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
    
    // Services Page
    'services.subtitle': 'حلول تسويق رقمي شاملة مصممة خصيصًا لأهداف عملك',
    'services.content': 'إنشاء المحتوى',
    'services.content.desc': 'محتوى جذاب يروي قصة علامتك التجارية',
    'services.paid': 'الإعلانات المدفوعة',
    'services.paid.desc': 'حملات إعلانية استراتيجية تزيد من العائد على الاستثمار',
    'services.email': 'التسويق عبر البريد الإلكتروني',
    'services.email.desc': 'حملات مستهدفة تحقق التحويلات',
    'services.video': 'التسويق بالفيديو',
    'services.video.desc': 'محتوى فيديو مقنع لجميع المنصات',
    'services.viewall': 'عرض جميع الخدمات',
    'services.process': 'عمليتنا',
    'services.cta.title': 'هل أنت مستعد للبدء؟',
    'services.cta.subtitle': 'لنناقش كيف يمكن لخدماتنا مساعدة عملك على النمو',
    'services.cta.button': 'اتصل بنا اليوم',
    
    // About Page
    'about.story': 'قصتنا',
    'about.story.p1': 'تأسست MZ Marketing بشغف للابتكار الرقمي، بدأت كرؤية لمساعدة الشركات على الازدهار في العصر الرقمي. ما بدأ كفريق صغير من عشاق التسويق نما ليصبح وكالة تسويق رقمي كاملة الخدمات موثوق بها من قبل العلامات التجارية في جميع أنحاء العالم.',
    'about.story.p2': 'كانت رحلتنا مدفوعة بثابت واحد: التزام بتحقيق نتائج استثنائية لعملائنا. نجمع بين التفكير الإبداعي والاستراتيجيات القائمة على البيانات لصياغة حلول تسويقية لا تبدو رائعة فحسب، بل تحقق عائدًا قابلاً للقياس على الاستثمار.',
    'about.story.p3': 'اليوم، نعمل مع الشركات من جميع الأحجام، من الشركات الناشئة إلى المؤسسات القائمة، لمساعدتهم على التنقل في المشهد الرقمي المعقد وتحقيق أهداف نموهم. يجمع فريقنا الخبرة في التسويق الرقمي والعلامات التجارية وإنشاء المحتوى والتحليلات لتوفير حلول شاملة.',
    'about.drives': 'ما يحركنا',
    'about.mission': 'مهمتنا',
    'about.mission.desc': 'تمكين العلامات التجارية باستراتيجيات رقمية مبتكرة تدفع النمو والنجاح القابل للقياس.',
    'about.values': 'قيمنا',
    'about.values.desc': 'النزاهة والإبداع والتميز ونجاح العملاء في قلب كل ما نقوم به.',
    'about.approach': 'نهجنا',
    'about.approach.desc': 'استراتيجيات قائمة على البيانات مدمجة مع التفكير الإبداعي لتحقيق نتائج استثنائية.',
    'about.vision': 'رؤيتنا',
    'about.vision.desc': 'أن نكون القوة الرائدة في تحويل كيفية تواصل الشركات مع جماهيرها.',
    'about.team': 'فريقنا',
    'about.team.subtitle': 'وراء MZ Marketing فريق متنوع من المفكرين المبدعين والمخططين الاستراتيجيين والخبراء الرقميين الذين يتحمسون لمساعدة عملك على النجاح.',
    'about.team.desc': 'يجمع فريقنا سنوات من الخبرة في التسويق والتصميم والتحليلات وعلاقات العملاء لتقديم حلول شاملة مصممة خصيصًا لاحتياجاتك الفريدة.',
    
    // Contact Page
    'contact.getin': 'تواصل معنا',
    'contact.getin.desc': 'نود أن نسمع منك. سواء كان لديك سؤال حول خدماتنا أو الأسعار أو أي شيء آخر، فريقنا جاهز للإجابة على جميع أسئلتك.',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.phone': 'الهاتف',
    'contact.info.location': 'الموقع',
    'contact.consultation': 'احجز استشارة مجانية',
    'contact.consultation.desc': 'حدد موعدًا لمكالمة مدتها 30 دقيقة لمناقشة أهدافك التسويقية وكيف يمكننا مساعدتك في تحقيقها.',
    'contact.form.select': 'اختر خدمة',
    'contact.form.placeholder.name': 'الاسم الكامل',
    'contact.form.placeholder.email': 'example@email.com',
    'contact.form.placeholder.message': 'أخبرنا عن مشروعك...',
    'contact.error.required': 'يرجى ملء جميع الحقول المطلوبة',
    'contact.error.email': 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    'contact.success.title': 'نجاح!',
    'contact.success.desc': 'تم إرسال رسالتك. سنعود إليك قريبًا!',
    
    // Testimonials
    'testimonial1.name': 'سارة جونسون',
    'testimonial1.company': 'Tech Innovators',
    'testimonial1.text': 'حوّلت MZ Marketing تواجدنا الرقمي. نهجهم الاستراتيجي وحملاتهم الإبداعية حققت نتائج متميزة.',
    'testimonial2.name': 'مايكل تشين',
    'testimonial2.company': 'Global Ventures',
    'testimonial2.text': 'محترفون، مبدعون، ومدفوعون بالنتائج. فهموا رؤيتنا وأحضروها إلى الحياة بشكل جميل.',
    'testimonial3.name': 'إيما رودريغيز',
    'testimonial3.company': 'StartUp Hub',
    'testimonial3.text': 'العمل مع MZ Marketing كان تغييرًا جذريًا لعلامتنا التجارية. نوصي بشدة بخبرتهم!',
    
    // Process Steps
    'process.step1': 'الاكتشاف',
    'process.step1.desc': 'فهم أهدافك وتحدياتك',
    'process.step2': 'الاستراتيجية',
    'process.step2.desc': 'صياغة خطة تسويقية مخصصة',
    'process.step3': 'التنفيذ',
    'process.step3.desc': 'تنفيذ الحملات بدقة',
    'process.step4': 'التحسين',
    'process.step4.desc': 'التحسين المستمر والنمو',
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
    
    // Services Page
    'services.subtitle': 'פתרונות שיווק דיגיטלי מקיפים המותאמים למטרות העסק שלך',
    'services.content': 'יצירת תוכן',
    'services.content.desc': 'תוכן מרתק שמספר את סיפור המותג שלך',
    'services.paid': 'פרסום ממומן',
    'services.paid.desc': 'קמפיינים פרסומיים אסטרטגיים שממקסמים החזר השקעה',
    'services.email': 'שיווק באימייל',
    'services.email.desc': 'קמפיינים ממוקדים שמביאים להמרות',
    'services.video': 'שיווק בווידאו',
    'services.video.desc': 'תוכן וידאו משכנע לכל הפלטפורמות',
    'services.viewall': 'צפה בכל השירותים',
    'services.process': 'התהליך שלנו',
    'services.cta.title': 'מוכנים להתחיל?',
    'services.cta.subtitle': 'בואו נדבר על איך השירותים שלנו יכולים לעזור לעסק שלך לצמוח',
    'services.cta.button': 'צור קשר היום',
    
    // About Page
    'about.story': 'הסיפור שלנו',
    'about.story.p1': 'נוסדה מתוך תשוקה לחדשנות דיגיטלית, MZ Marketing התחילה כחזון לעזור לעסקים לשגשג בעידן הדיגיטלי. מה שהתחיל כצוות קטן של חובבי שיווק גדל לסוכנות שיווק דיגיטלי בעלת שירות מלא המהימנה על ידי מותגים ברחבי העולם.',
    'about.story.p2': 'המסע שלנו הונע על ידי קבוע אחד: מחויבות למסירת תוצאות יוצאות דופן ללקוחותינו. אנו משלבים חשיבה יצירתית עם אסטרטגיות מבוססות נתונים כדי ליצור פתרונות שיווקיים שלא רק נראים נהדר אלא גם מספקים החזר השקעה מדיד.',
    'about.story.p3': 'היום אנו עובדים עם עסקים בכל הגדלים, מסטארט-אפים ועד ארגונים מבוססים, עוזרים להם לנווט בנוף הדיגיטלי המורכב ולהשיג את יעדי הצמיחה שלהם. הצוות שלנו מביא ביחד מומחיות בשיווק דיגיטלי, מיתוג, יצירת תוכן וניתוח לספק פתרונות מקיפים.',
    'about.drives': 'מה מניע אותנו',
    'about.mission': 'המשימה שלנו',
    'about.mission.desc': 'להעצים מותגים באסטרטגיות דיגיטליות חדשניות שמניעות צמיחה והצלחה מדידה.',
    'about.values': 'הערכים שלנו',
    'about.values.desc': 'יושרה, יצירתיות, מצוינות והצלחת לקוחות נמצאים בליבו של כל מה שאנו עושים.',
    'about.approach': 'הגישה שלנו',
    'about.approach.desc': 'אסטרטגיות מבוססות נתונים בשילוב עם חשיבה יצירתית למסירת תוצאות יוצאות דופן.',
    'about.vision': 'החזון שלנו',
    'about.vision.desc': 'להיות הכוח המוביל בשינוי האופן שבו עסקים מתחברים לקהל שלהם.',
    'about.team': 'הצוות שלנו',
    'about.team.subtitle': 'מאחורי MZ Marketing עומד צוות מגוון של חושבים יצירתיים, מתכננים אסטרטגיים ומומחים דיגיטליים שנלהבים לעזור לעסק שלך להצליח.',
    'about.team.desc': 'הצוות שלנו משלב שנים של ניסיון בשיווק, עיצוב, ניתוח ויחסי לקוחות כדי לספק פתרונות מקיפים המותאמים לצרכים הייחודיים שלך.',
    
    // Contact Page
    'contact.getin': 'צור קשר',
    'contact.getin.desc': 'נשמח לשמוע ממך. בין אם יש לך שאלה על השירותים שלנו, תמחור או כל דבר אחר, הצוות שלנו מוכן לענות על כל השאלות שלך.',
    'contact.info.email': 'אימייל',
    'contact.info.phone': 'טלפון',
    'contact.info.location': 'מיקום',
    'contact.consultation': 'הזמן ייעוץ חינם',
    'contact.consultation.desc': 'קבע שיחה של 30 דקות כדי לדון ביעדי השיווק שלך וכיצד נוכל לעזור לך להשיג אותם.',
    'contact.form.select': 'בחר שירות',
    'contact.form.placeholder.name': 'שם מלא',
    'contact.form.placeholder.email': 'example@email.com',
    'contact.form.placeholder.message': 'ספר לנו על הפרויקט שלך...',
    'contact.error.required': 'אנא מלא את כל השדות הנדרשים',
    'contact.error.email': 'אנא הזן כתובת אימייל תקינה',
    'contact.success.title': 'הצלחה!',
    'contact.success.desc': 'ההודעה שלך נשלחה. נחזור אליך בקרוב!',
    
    // Testimonials
    'testimonial1.name': 'שרה ג׳ונסון',
    'testimonial1.company': 'Tech Innovators',
    'testimonial1.text': 'MZ Marketing שינתה את הנוכחות הדיגיטלית שלנו. הגישה האסטרטגית והקמפיינים היצירתיים שלהם הניבו תוצאות יוצאות דופן.',
    'testimonial2.name': 'מייקל צ׳ן',
    'testimonial2.company': 'Global Ventures',
    'testimonial2.text': 'מקצועי, יצירתי ומונע תוצאות. הם הבינו את החזון שלנו והפיחו בו חיים בצורה יפה.',
    'testimonial3.name': 'אמה רודריגז',
    'testimonial3.company': 'StartUp Hub',
    'testimonial3.text': 'העבודה עם MZ Marketing הייתה משנה משחק עבור המותג שלנו. ממליצים בחום על המומחיות שלהם!',
    
    // Process Steps
    'process.step1': 'גילוי',
    'process.step1.desc': 'הבנת המטרות והאתגרים שלך',
    'process.step2': 'אסטרטגיה',
    'process.step2.desc': 'יצירת תוכנית שיווק מותאמת אישית',
    'process.step3': 'ביצוע',
    'process.step3.desc': 'יישום קמפיינים בדיוק',
    'process.step4': 'אופטימיזציה',
    'process.step4.desc': 'שיפור מתמיד וצמיחה',
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
