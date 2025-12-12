import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../../../../constants';
import { Link } from '@/i18n/navigation';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">Dịch vụ của chúng tôi</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Giải pháp du lịch toàn diện
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Chúng tôi cung cấp đầy đủ các dịch vụ để đảm bảo chuyến đi của bạn hoàn hảo nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-orange-500/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link href="/services" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
                  Tìm hiểu thêm <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;