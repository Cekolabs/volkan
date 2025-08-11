import React from 'react';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero-carpet.jpeg`}
          alt="Halı Yıkama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white container-custom px-4">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Halılarınızı Kendi Halımız Gibi Yıkıyoruz!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            2008'den bu yana binlerce mutlu müşteri…
            <br />
            Halı, yorgan, battaniye ve stor perdelerinizi itina ile
            temizliyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+905443518406"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-sm inline-flex items-center text-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905443518406"
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-sm inline-flex items-center text-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;
