import React, { useState } from 'react';
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

  const menuItems = [
    { title: 'Hakkımızda', id: 'hakkimizda' },
    { title: 'Hizmetler', id: 'hizmetler' },
    { title: 'Nasıl Çalışıyoruz', id: 'nasil-calisiyoruz' },
    { title: 'Yorumlar', id: 'yorumlar' },
    { title: 'İletişim', id: 'iletisim' },
  ];

  const handleMenuClick = (item: { id: string }) => {
    scrollToSection(item.id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container-custom px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold text-primary-600">
            VOLKAN HALI YIKAMA
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-medium text-gray-700 hover:text-primary-600"
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+905443518406"
              className="btn-primary text-sm inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hemen Ara
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="tel:+905443518406"
              className="btn-primary text-xs inline-flex items-center"
            >
              <Phone className="w-3 h-3 mr-1" />
              Ara
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600"
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
          <div className="lg:hidden mt-4 pb-4">
            <div className="bg-gray-50 rounded-sm p-4 shadow-lg">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-sm"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
