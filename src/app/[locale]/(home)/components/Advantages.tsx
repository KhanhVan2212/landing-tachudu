import React from 'react';
import { ADVANTAGES } from '../../../../../constants';

const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 relative">
             <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://picsum.photos/600/800?random=50" 
              alt="Team working" 
              className="relative rounded-3xl shadow-2xl z-10 w-full object-cover h-[600px]"
            />
            <div className="absolute bottom-10 -right-5 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="text-4xl font-bold text-orange-600 mb-2">10+</p>
                <p className="text-gray-600 font-medium">Năm kinh nghiệm trong ngành du lịch & sự kiện</p>
            </div>
          </div>

          <div>
            <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">Tại sao chọn TACHUDU?</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
              Giá trị cốt lõi & Lợi thế cạnh tranh
            </h2>

            <div className="space-y-8">
              {ADVANTAGES.map((item) => (
                <div key={item.id} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                      <item.icon size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;