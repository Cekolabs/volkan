import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Ayşe Hanım',
      comment:
        'Yorganlarımız ilk defa bu kadar güzel koktu, ellerinize sağlık!',
      rating: 5,
    },
    {
      name: 'Mehmet Bey',
      comment:
        'Halıları sanki yeni almışız gibi getirdiler, çok memnun kaldık.',
      rating: 5,
    },
    {
      name: 'Fatma Hanım',
      comment: 'Randevu saatine tam zamanında geldiler. Tertemiz iş, bravo!',
      rating: 5,
    },
  ];

  return (
    <section id="yorumlar" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Müşterilerimizin Gözünden Biz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{review.comment}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-gray-600 text-sm">Mutlu Müşteri</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
