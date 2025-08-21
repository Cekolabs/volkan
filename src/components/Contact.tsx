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

            {/* Map - Right side on desktop, bottom on mobile */}
            <div className="w-full h-96 lg:h-full min-h-[400px] lg:col-start-1 lg:row-start-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3056.8123354821796!2d32.90345807598997!3d39.99029897151138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU5JzI1LjEiTiAzMsKwNTQnMjEuNyJF!5e0!3m2!1str!2str!4v1755799596721!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
