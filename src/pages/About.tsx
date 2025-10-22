import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.mission'),
      description: t('about.mission.desc'),
    },
    {
      icon: Heart,
      title: t('about.values'),
      description: t('about.values.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.approach'),
      description: t('about.approach.desc'),
    },
    {
      icon: TrendingUp,
      title: t('about.vision'),
      description: t('about.vision.desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('about.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-up">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">{t('about.story')}</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                {t('about.story.p1')}
              </p>
              <p>
                {t('about.story.p2')}
              </p>
              <p>
                {t('about.story.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t('about.drives')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">{t('about.team')}</h2>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            {t('about.team.subtitle')}
          </p>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              {t('about.team.desc')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
