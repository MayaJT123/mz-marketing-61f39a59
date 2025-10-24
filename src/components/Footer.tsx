import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import mzLogo from '@/assets/mz-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={mzLogo} alt="MZ Marketing" className="h-12 w-12 object-contain" />
              <span className="text-xl font-bold">MZ Marketing</span>
            </div>
            <p className="text-sm opacity-90">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.services')}
              </Link>
              <Link to="/contact" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Malklojen@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+972502122987</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hura,Israel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
