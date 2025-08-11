import React from 'react';
import { Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom text-center">
        <p className="text-gray-400 flex items-center justify-center">
          <Copyright className="w-4 h-4 mr-2" />
          2025 Volkan Halı Yıkama – Tüm Hakları Saklıdır
        </p>
      </div>
    </footer>
  );
};

export default Footer;
