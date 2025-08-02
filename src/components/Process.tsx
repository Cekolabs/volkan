import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      step: '1️⃣',
      title: 'Telefonla Bize Ulaşıyorsunuz',
      desc: 'Tek bir telefon ile randevu alın',
    },
    {
      step: '2️⃣',
      title: 'Halılarınızı Evinizden Alıyoruz',
      desc: 'Ücretsiz evden alma hizmeti',
    },
    {
      step: '3️⃣',
      title: 'Fabrikamızda İtina İle Yıkıyoruz',
      desc: 'Profesyonel ekipman ve yöntemler',
    },
    {
      step: '4️⃣',
      title: 'Poşetlenmiş ve Mis Kokulu Şekilde Geri Getiriyoruz',
      desc: 'Ücretsiz teslimat hizmeti',
    },
  ];

  return (
    <section
      id="nasil-calisiyoruz"
      className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            4 Adımda Temizlik
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="text-6xl mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block mt-8">
                  <ArrowRight className="w-8 h-8 text-primary-600 mx-auto" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <p className="text-xl font-semibold text-gray-900">
              ➡️ Üstelik tüm bu süreç boyunca hiçbir ek ücret yok.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
