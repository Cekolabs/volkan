import React from 'react';
import { CheckCircle, Package, Bed, Square } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Halı Yıkama',
      icon: <Package className="w-12 h-12 text-primary-600" />,
      features: [
        'Halılarınız tek tek ıslatılır, havuz sistemi kullanılmaz',
        'Son sistem makinelerde, hijyen kurallarına uygun şekilde yıkanır',
        'Hav alma ve son kontrol sonrası poşetlenerek teslim edilir',
      ],
      image: `${process.env.PUBLIC_URL}/images/carpets-cleaning-process.jpeg`,
    },
    {
      title: 'Yorgan & Battaniye Yıkama',
      icon: <Bed className="w-12 h-12 text-primary-600" />,
      features: [
        'Elyaf ve yün yorganlarınız, endüstriyel çamaşır makinelerinde tek tek yıkanır',
        'Battaniyeleriniz özel programlarla yıpratılmadan tertemiz hale getirilir',
      ],
      image: `${process.env.PUBLIC_URL}/images/drying-carpets.jpeg`,
    },
    {
      title: 'Stor Perde Yıkama',
      icon: <Square className="w-12 h-12 text-primary-600" />,
      features: [
        'Stor perdeleriniz hassas programlarla yıkanır',
        'Kırışmadan ve zarar görmeden teslim edilir',
      ],
      image: `${process.env.PUBLIC_URL}/images/roller-blinds.jpeg`,
    },
  ];

  return (
    <section id="hizmetler" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunduğumuz Hizmetler
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-xl overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
