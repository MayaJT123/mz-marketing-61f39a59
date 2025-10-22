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
      title: 'Our Mission',
      description: 'To empower brands with innovative digital strategies that drive measurable growth and success.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, creativity, excellence, and client success are at the heart of everything we do.',
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'Data-driven strategies combined with creative thinking to deliver exceptional results.',
    },
    {
      icon: TrendingUp,
      title: 'Our Vision',
      description: 'To be the leading force in transforming how businesses connect with their audiences.',
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
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded with a passion for digital innovation, MZ Marketing began as a vision to help businesses thrive in the digital age. What started as a small team of marketing enthusiasts has grown into a full-service digital marketing agency trusted by brands worldwide.
              </p>
              <p>
                Our journey has been driven by one constant: a commitment to delivering exceptional results for our clients. We combine creative thinking with data-driven strategies to craft marketing solutions that not only look great but deliver measurable ROI.
              </p>
              <p>
                Today, we work with businesses of all sizes, from startups to established enterprises, helping them navigate the complex digital landscape and achieve their growth objectives. Our team brings together expertise in digital marketing, branding, content creation, and analytics to provide comprehensive solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Drives Us</h2>
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
          <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Behind MZ Marketing is a diverse team of creative thinkers, strategic planners, and digital experts who are passionate about helping your business succeed.
          </p>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Our team combines years of experience in marketing, design, analytics, and client relations to deliver comprehensive solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
