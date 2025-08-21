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
      media: null,
      mediaType: null,
    },
    {
      step: <Brush className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Toz Alma ve Ön Temizlik',
      desc: 'Son teknoloji toz alma makinelerimiz ile halının derinlerinde birikmiş toz, kum ve partiküller tamamen temizlenir. Bu adım, yıkama sırasında halı liflerine zarar gelmesini önler.',
      media: null,
      mediaType: null,
    },
    {
      step: <Droplets className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Ön Yıkama ve Leke Çıkarma',
      desc: 'Zorlu lekeler için özel leke çözücüler kullanılır. Halının türüne göre pH dengeli ve çevre dostu deterjanlar tercih edilir.',
      media: null,
      mediaType: null,
    },
    {
      step: <Settings className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Endüstriyel Halı Yıkama',
      desc: 'Halılarınız tam otomatik silindirik fırçalı makinelerde 360° fırçalama yöntemi ile, havuz sistemi kullanılmadan, ayrı ayrı yıkanır. Bu yöntemle hem hijyen hem de halı ömrü korunur.',
      media: `${process.env.PUBLIC_URL}/videos/carpet-video3.mp4`,
      mediaType: 'video',
    },
    {
      step: <Zap className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Durulama ve Sıkma',
      desc: 'Yıkama sonrası bol su ile durulanan halılar, yüksek devirli santrifüj makinelerinde kısa sürede suyunu bırakır.',
      media: `${process.env.PUBLIC_URL}/videos/carpet-video2.mp4`,
      mediaType: 'video',
      extraInfo: 'Halılarınız %96 oranında sıktırılır',
    },
    {
      step: <Wind className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Kurutma',
      desc: 'Halılarınız, kapalı ve tozsuz ortamda, doğal hava sirkülasyonu ve nem kontrollü sistemlerle kurutulur.',
      media: `${process.env.PUBLIC_URL}/images/drying-carpets.jpeg`,
      mediaType: 'image',
    },
    {
      step: <Package2 className="w-12 h-12 text-primary-600 mx-auto" />,
      title: 'Hav Alma ve Paketleme',
      desc: 'Tamamen kuruyan halılar hav alma makinelerinden geçirilir, son kontroller yapılır ve poşetlenerek tertemiz şekilde adresinize teslim edilir.',
      media: `${process.env.PUBLIC_URL}/videos/carpet-video.mp4`,
      mediaType: 'video',
    },
  ];

  const renderMedia = (
    media: string | null,
    mediaType: 'video' | 'image' | null
  ) => {
    if (!media || !mediaType) return null;

    if (mediaType === 'video') {
      return (
        <video
          className="w-full aspect-video object-cover rounded-md shadow-md"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        >
          <source src={media} type="video/mp4" />
        </video>
      );
    }

    if (mediaType === 'image') {
      return (
        <img
          src={media}
          alt=""
          className="w-full aspect-video rounded-md shadow-md object-cover"
        />
      );
    }

    return null;
  };

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
            <div
              key={index}
              className="bg-gray-50 rounded-sm p-6 shadow-lg flex flex-col justify-between"
            >
              <div>
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

                {step.extraInfo && (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2 text-center">
                      {step.extraInfo}
                    </h4>
                  </div>
                )}
              </div>

              {step.media && step.mediaType && (
                <div className="mt-4">
                  {renderMedia(step.media, step.mediaType as 'video' | 'image')}
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
