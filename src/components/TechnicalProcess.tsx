import React from 'react';
import {
  Search,
  Brush,
  Droplets,
  Settings,
  Zap,
  Wind,
  Package2,
} from 'lucide-react';

const TechnicalProcess: React.FC = () => {
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
              {step.title === 'Endüstriyel Halı Yıkama' && (
                <div className="mt-4">
                  <video
                    className="w-full h-auto aspect-video object-cover rounded-md shadow-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  >
                    <source
                      src={`${process.env.PUBLIC_URL}/videos/carpet-video3.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
              {step.title === 'Durulama ve Sıkma' && (
                <div className="mt-4">
                  <h4 className="text-md font-semibold text-gray-900 mb-2 text-center">
                    Halılarınız %96 oranında sıktırılır
                  </h4>
                  <video
                    className="w-full h-auto aspect-video object-cover rounded-md shadow-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  >
                    <source
                      src={`${process.env.PUBLIC_URL}/videos/carpet-video2.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
              {step.title === 'Kurutma' && (
                <div className="mt-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/drying-carpets.jpeg`}
                    alt="Kurutma alanlarımız"
                    className="w-full h-auto rounded-md shadow-md object-cover"
                  />
                </div>
              )}
              {step.title === 'Hav Alma ve Paketleme' && (
                <div className="mt-4">
                  <video
                    className="w-full h-auto aspect-video object-cover rounded-md shadow-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  >
                    <source
                      src={`${process.env.PUBLIC_URL}/videos/carpet-video.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProcess;
