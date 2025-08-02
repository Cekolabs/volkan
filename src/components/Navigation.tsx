import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  scrollToSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -20]);

  const menuItems = [
    'hakkimizda',
    'hizmetler',
    'nasil-calisiyoruz',
    'yorumlar',
    'iletisim',
  ];

  const handleMenuClick = (item: string) => {
    scrollToSection(item);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-lg ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{ y }}
    >
      <div className="container-custom px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl md:text-2xl font-bold text-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            VOLKAN HALI YIKAMA
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-300'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+905551234567"
              className="btn-primary text-sm inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hemen Ara
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="tel:+905551234567"
              className="btn-primary text-xs inline-flex items-center"
            >
              <Phone className="w-3 h-3 mr-1" />
              Ara
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-300'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 pb-4"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
