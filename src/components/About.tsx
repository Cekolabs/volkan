import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Güvenilir Hizmet',
      desc: '15+ yıllık deneyim',
    },
    {
      icon: Sparkles,
      title: 'Kaliteli Temizlik',
      desc: 'Endüstriyel makineler',
    },
    {
      icon: Users,
      title: 'Müşteri Memnuniyeti',
      desc: 'Binlerce mutlu müşteri',
    },
    { icon: Award, title: 'Profesyonel Ekip', desc: 'Uzman kadro' },
  ];

  return (
    <section id="hakkimizda" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kim Bu Volkan Halı Yıkama?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Biz bu işe 2008 yılında, "halı temizliği sadece yıkamak değil, bir
              güven işidir" diyerek başladık.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Bugün hâlâ aynı titizlikle çalışıyoruz. Her halı, yorgan ve
              battaniye bizim için bir emanet.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Endüstriyel makineler, doğal temizlik ürünleri ve güleryüzlü
              hizmetle çalışıyoruz. Evinizden alıyor, tertemiz geri getiriyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
              >
                <item.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
