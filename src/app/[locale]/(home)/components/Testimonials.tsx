import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../../../../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Khách hàng nói gì về chúng tôi
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="absolute top-6 right-6 text-orange-200 w-10 h-10" />
              <p className="text-gray-600 italic mb-8 relative z-10">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-orange-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-sm text-orange-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;