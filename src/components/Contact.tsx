import React from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="iletisim" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Bize Ulaşın</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Adres</h3>
                  <p className="text-gray-300">İstanbul, Türkiye</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Telefon</h3>
                  <a
                    href="tel:+905443518406"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    +90 544 351 84 06
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/905443518406"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    +90 544 351 84 06
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">E-posta</h3>
                  <a
                    href="mailto:info@volkanhaliyikama.com"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    info@volkanhaliyikama.com
                  </a>
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
