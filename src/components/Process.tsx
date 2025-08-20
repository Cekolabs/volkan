import React from 'react';
import {
  Phone,
  Truck,
  WashingMachine,
  Package,
  CheckCircle,
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
    </>
  );
};

export default Process;
