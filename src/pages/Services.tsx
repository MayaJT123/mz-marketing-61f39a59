import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Target,
  BarChart3,
  PenTool,
  Megaphone,
  Mail,
  Video,
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: t('services.digital'),
      description: t('services.digital.desc'),
      details: [
        'Comprehensive digital strategy development',
        'Multi-channel campaign management',
        'Performance tracking and optimization',
        'Digital transformation consulting',
      ],
    },
    {
      icon: Users,
      title: t('services.social'),
      description: t('services.social.desc'),
      details: [
        'Content creation and scheduling',
        'Community engagement and management',
        'Influencer partnerships',
        'Social media advertising',
      ],
    },
    {
      icon: Target,
      title: t('services.branding'),
      description: t('services.branding.desc'),
      details: [
        'Brand identity design',
        'Brand strategy and positioning',
        'Visual identity systems',
        'Brand guidelines development',
      ],
    },
    {
      icon: BarChart3,
      title: t('services.seo'),
      description: t('services.seo.desc'),
      details: [
        'Keyword research and optimization',
        'Technical SEO audits',
        'Link building strategies',
        'Local SEO optimization',
      ],
    },
    {
      icon: PenTool,
      title: t('services.content'),
      description: t('services.content.desc'),
      details: [
        'Blog posts and articles',
        'Website copywriting',
        'Video scripts and storyboards',
        'Email newsletter content',
      ],
    },
    {
      icon: Megaphone,
      title: t('services.paid'),
      description: t('services.paid.desc'),
      details: [
        'Google Ads management',
        'Social media advertising',
        'Display and banner ads',
        'Retargeting campaigns',
      ],
    },
    {
      icon: Mail,
      title: t('services.email'),
      description: t('services.email.desc'),
      details: [
        'Email strategy and planning',
        'Newsletter design and content',
        'Automation workflows',
        'A/B testing and optimization',
      ],
    },
    {
      icon: Video,
      title: t('services.video'),
      description: t('services.video.desc'),
      details: [
        'Video production and editing',
        'YouTube channel optimization',
        'Video advertising campaigns',
        'Animation and motion graphics',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('services.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-up">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t('services.process')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: t('process.step1'), desc: t('process.step1.desc') },
              { step: '02', title: t('process.step2'), desc: t('process.step2.desc') },
              { step: '03', title: t('process.step3'), desc: t('process.step3.desc') },
              { step: '04', title: t('process.step4'), desc: t('process.step4.desc') },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('services.cta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <Link to="/contact">
            <Button size="lg">{t('services.cta.button')}</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
