import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Users, Target, Award, BarChart3, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-marketing.jpg';

const Index = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: t('services.digital'),
      description: t('services.digital.desc'),
    },
    {
      icon: Users,
      title: t('services.social'),
      description: t('services.social.desc'),
    },
    {
      icon: Target,
      title: t('services.branding'),
      description: t('services.branding.desc'),
    },
    {
      icon: BarChart3,
      title: t('services.seo'),
      description: t('services.seo.desc'),
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: t('why.expertise'),
      description: t('why.expertise.desc'),
    },
    {
      icon: Sparkles,
      title: t('why.creativity'),
      description: t('why.creativity.desc'),
    },
    {
      icon: Target,
      title: t('why.results'),
      description: t('why.results.desc'),
    },
  ];

  const testimonials = [
    {
      name: t('testimonial1.name'),
      company: t('testimonial1.company'),
      text: t('testimonial1.text'),
    },
    {
      name: t('testimonial2.name'),
      company: t('testimonial2.company'),
      text: t('testimonial2.text'),
    },
    {
      name: t('testimonial3.name'),
      company: t('testimonial3.company'),
      text: t('testimonial3.text'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 animate-slide-up">
            {t('hero.subtitle')}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="hero" className="animate-slide-up text-lg px-8 py-6">
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              {t('about.description')}
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                {t('about.learn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">{t('services.viewall')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            {t('why.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            {t('testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {t('contact.title')}
          </h2>
          <p className="text-xl mb-8 opacity-95 animate-slide-up">
            {t('contact.subtitle')}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="hero" className="animate-slide-up">
              {t('contact.send')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
