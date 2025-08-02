import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="iletisim" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Bize Ulaşın</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary-400 mr-4" />
                <div>
                  <h3 className="font-semibold">Adres</h3>
                  <p className="text-gray-300">İstanbul, Türkiye</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary-400 mr-4" />
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <a
                    href="tel:+905551234567"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    +90 555 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-primary-400 mr-4" />
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a
                    href="https://wa.me/905551234567"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    +90 555 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary-400 mr-4" />
                <div>
                  <h3 className="font-semibold">E-posta</h3>
                  <a
                    href="mailto:info@volkanhaliyikama.com"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    info@volkanhaliyikama.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-gray-900"
          >
            <h3 className="text-2xl font-bold mb-6">Hızlı İletişim Formu</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adınız
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Adınızı girin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Telefon numaranızı girin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notunuz
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Mesajınızı yazın..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
