import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Halı Yıkama',
      icon: '🧺',
      features: [
        'Halılarınız tek tek ıslatılır, havuz sistemi kullanılmaz',
        'Son sistem makinelerde, hijyen kurallarına uygun şekilde yıkanır',
        'Hav alma ve son kontrol sonrası poşetlenerek teslim edilir',
      ],
      image: '/images/carpets-cleaning-process.jpeg',
    },
    {
      title: 'Yorgan & Battaniye Yıkama',
      icon: '🛏️',
      features: [
        'Elyaf ve yün yorganlarınız, endüstriyel çamaşır makinelerinde tek tek yıkanır',
        'Battaniyeleriniz özel programlarla yıpratılmadan tertemiz hale getirilir',
      ],
      image: '/images/drying-carpets.jpeg',
    },
    {
      title: 'Stor Perde Yıkama',
      icon: '🪟',
      features: [
        'Stor perdeleriniz hassas programlarla yıkanır',
        'Kırışmadan ve zarar görmeden teslim edilir',
      ],
      image: '/images/roller-blinds.jpeg',
    },
  ];

  return (
    <section id="hizmetler" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunduğumuz Hizmetler
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
