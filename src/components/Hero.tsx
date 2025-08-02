import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="/images/machine-and-carpet.jpeg"
          alt="Halı Yıkama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            <a href="tel:+905551234567" className="btn-primary text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905551234567"
              className="btn-secondary text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp'tan Yaz
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
