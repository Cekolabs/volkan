import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  scrollToSection,
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -50]);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{ y }}
    >
      <div className="container-custom px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            VOLKAN HALI YIKAMA
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              'hakkimizda',
              'hizmetler',
              'nasil-calisiyoruz',
              'yorumlar',
              'iletisim',
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+905551234567"
              className="btn-primary text-sm inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
