import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const locations: string[] = [
    'Ankara',
    'Güneş evler',
    'Keçiören',
    'Kamil ocak',
    'Çaldıran',
    'Tepebaşı',
    'Yıldız tepe',
    'Hasköy',
    'Aydınlık evler',
    'Pursaklar',
    'Mamak',
    'Cebeci',
    'Etlik',
    'Subay Evler',
  ];

  return (
    <section id="iletisim" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Bize Ulaşın</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-center">
            {/* Contact Information - Left side on desktop, top on mobile */}
            <div className="space-y-8 lg:col-start-2 lg:row-start-1">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Adres</h3>
                  <p className="text-gray-300">Ankara, Türkiye</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                  <a
                    href="tel:+905443518406"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    +90 544 351 84 06
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/905443518406"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    +90 544 351 84 06
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">E-posta</h3>
                  <a
                    href="mailto:info@volkanhaliyikama.com"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    info@volkanhaliyikama.com
                  </a>
                </div>
              </div>
            </div>

            {/* Custom Ankara Map - Right side on desktop, bottom on mobile */}
            <div className="w-full h-96 lg:h-full min-h-[400px] lg:col-start-1 lg:row-start-1">
              <div className="relative w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-lg overflow-hidden border-2 border-primary-500/30">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-16 left-16 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute top-24 right-24 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-32 left-32 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-40 right-40 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute top-48 left-48 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-56 right-56 w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Ankara City Representation */}
                <div className="absolute top-1/4 left-1/2 transform -tanslate-x-1/2 flex items-center justify-center">
                  <div className="text-center">
                    {/* City Icon */}
                    <div className="mb-4">
                      <Navigation className="w-16 h-16 text-primary-400 mx-auto" />
                    </div>

                    {/* City Name */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ANKARA
                    </h3>
                  </div>
                </div>

                {/* Location Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary-500 rounded-full animate-pulse"></div>
                    <div className="w-6 h-6 bg-primary-500/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                  </div>
                </div>

                {/* Mock Service Areas */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-primary-300 mb-2">
                      Hizmet Bölgeleri
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-300 max-h-24 overflow-y-auto">
                      {locations.map((location, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-500/20 rounded"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-primary-400 rounded-full opacity-60"></div>
                </div>
                <div className="absolute bottom-2 left-2">
                  <div className="w-2 h-2 bg-primary-300 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
