import React from 'react';
import {
  ArrowRight,
  Phone,
  Truck,
  WashingMachine,
  Package,
  CheckCircle,
  Search,
  Brush,
  Droplets,
  Settings,
  Zap,
  Wind,
  Package2,
} from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      step: <Phone className="w-16 h-16 text-primary-600 mx-auto" />,
      title: 'Telefonla Bize Ulaşıyorsunuz',
      desc: 'Tek bir telefon ile randevu alın',
    },
    {
      step: <Truck className="w-16 h-16 text-primary-600 mx-auto" />,
      title: 'Halılarınızı Evinizden Alıyoruz',
      desc: 'Ücretsiz evden alma hizmeti',
    },
    {
      step: <WashingMachine className="w-16 h-16 text-primary-600 mx-auto" />,
      title: 'Fabrikamızda İtina İle Yıkıyoruz',
      desc: 'Profesyonel ekipman ve yöntemler',
    },
    {
      step: <Package className="w-16 h-16 text-primary-600 mx-auto" />,
      title: 'Poşetlenmiş ve Mis Kokulu Şekilde Geri Getiriyoruz',
      desc: 'Ücretsiz teslimat hizmeti',
    },
  ];

  const technicalSteps = [
    {
      step: <Search className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Ön İnceleme ve Sınıflandırma',
      desc: 'Halılarınız fabrikamıza ulaştığında öncelikle uzman ekibimiz tarafından leke türü, halı cinsi ve dokusu tespit edilir. Böylece her halıya uygun özel yıkama programı belirlenir.',
    },
    {
      step: <Brush className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Toz Alma ve Ön Temizlik',
      desc: 'Son teknoloji toz alma makinelerimiz ile halının derinlerinde birikmiş toz, kum ve partiküller tamamen temizlenir. Bu adım, yıkama sırasında halı liflerine zarar gelmesini önler.',
    },
    {
      step: <Droplets className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Ön Yıkama ve Leke Çıkarma',
      desc: 'Zorlu lekeler için özel leke çözücüler kullanılır. Halının türüne göre pH dengeli ve çevre dostu deterjanlar tercih edilir.',
    },
    {
      step: <Settings className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Endüstriyel Halı Yıkama',
      desc: 'Halılarınız tam otomatik silindirik fırçalı makinelerde 360° fırçalama yöntemi ile, havuz sistemi kullanılmadan, ayrı ayrı yıkanır. Bu yöntemle hem hijyen hem de halı ömrü korunur.',
    },
    {
      step: <Zap className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Durulama ve Sıkma',
      desc: 'Yıkama sonrası bol su ile durulanan halılar, yüksek devirli santrifüj makinelerinde kısa sürede suyunu bırakır.',
    },
    {
      step: <Wind className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Kurutma',
      desc: 'Halılarınız, kapalı ve tozsuz ortamda, doğal hava sirkülasyonu ve nem kontrollü sistemlerle kurutulur.',
    },
    {
      step: <Package2 className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Hav Alma ve Paketleme',
      desc: 'Tamamen kuruyan halılar hav alma makinelerinden geçirilir, son kontroller yapılır ve poşetlenerek tertemiz şekilde adresinize teslim edilir.',
    },
  ];

  return (
    <>
      <section id="nasil-calisiyoruz" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              4 Adımda Temizlik
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center h-full">
                <div className="bg-white rounded-sm p-8 shadow-lg card-hover h-full flex flex-col justify-center">
                  <div className="mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-sm p-8 shadow-lg inline-block">
              <p className="text-xl font-semibold text-gray-900 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-2" />
                Üstelik tüm bu süreç boyunca hiçbir ek ücret yok.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Teknik Bilgi ve Yıkama Sürecimiz
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-sm p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                    {step.step}
                  </div>
                  <div className="bg-primary-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
