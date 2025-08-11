import React from 'react';
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kim Bu Volkan Halı Yıkama?
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
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
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-sm shadow-lg card-hover"
              >
                <item.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
