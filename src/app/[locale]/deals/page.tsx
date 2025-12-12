"use client";
import React, { useEffect } from 'react';
import { Tag, Clock, ArrowRight, Plane, Map, Hotel, Star } from 'lucide-react';

const Deals: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flashSales = [
    {
      id: 1,
      title: "Hè rực rỡ tại Phú Quốc",
      type: "Combo 3N2Đ",
      price: "2.990.000đ",
      originalPrice: "4.500.000đ",
      discount: "-35%",
      image: "https://picsum.photos/600/400?random=101",
      timeLeft: "2 ngày còn lại"
    },
    {
      id: 2,
      title: "Khám phá Bangkok - Pattaya",
      type: "Tour 5N4Đ",
      price: "5.490.000đ",
      originalPrice: "7.990.000đ",
      discount: "-30%",
      image: "https://picsum.photos/600/400?random=102",
      timeLeft: "5 ngày còn lại"
    },
    {
      id: 3,
      title: "Nghỉ dưỡng 5* Đà Nẵng",
      type: "Khách sạn",
      price: "1.200.000đ/đêm",
      originalPrice: "2.400.000đ",
      discount: "-50%",
      image: "https://picsum.photos/600/400?random=103",
      timeLeft: "12 giờ còn lại"
    }
  ];

  const categories = [
    { name: "Vé máy bay", icon: Plane, count: "15+ ưu đãi" },
    { name: "Tour du lịch", icon: Map, count: "20+ ưu đãi" },
    { name: "Khách sạn", icon: Hotel, count: "30+ ưu đãi" },
    { name: "Combo tiết kiệm", icon: Tag, count: "10+ ưu đãi" },
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://picsum.photos/1920/600?random=deals" 
          alt="Deals Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                Hot Promotion
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Săn Deal Hời <br /> Vi Vu Khắp Nơi
              </h1>
              <p className="text-xl text-gray-200 mb-8 font-light">
                Tiết kiệm tới 50% cho chuyến đi tiếp theo của bạn cùng TACHUDU.
              </p>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg">
                Xem ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-b-4 border-transparent hover:border-orange-500 group">
              <div className="flex items-center justify-between mb-4">
                <cat.icon className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sales */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Clock className="mr-3 text-red-500 animate-pulse" /> 
              Flash Sale
            </h2>
            <p className="text-gray-500 mt-2">Cơ hội cuối cùng, đừng bỏ lỡ!</p>
          </div>
          <a href="#" className="text-orange-600 font-medium hover:underline hidden sm:block">Xem tất cả</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flashSales.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 bg-red-600 text-white font-bold px-3 py-1 rounded-md z-10 shadow-md">
                  {deal.discount}
                </div>
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">{deal.type}</span>
                   <span className="text-xs text-red-500 flex items-center font-medium"><Clock size={12} className="mr-1"/> {deal.timeLeft}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 h-14">{deal.title}</h3>
                <div className="flex items-end justify-between mt-4">
                  <div>
                    <p className="text-sm text-gray-400 line-through decoration-red-400">{deal.originalPrice}</p>
                    <p className="text-2xl font-bold text-orange-600">{deal.price}</p>
                  </div>
                  <button className="bg-orange-100 text-orange-600 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vouchers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Kho Voucher Độc Quyền</h2>
            <p className="text-gray-500 mt-2">Dành riêng cho thành viên TACHUDU</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Voucher 1 */}
            <div className="flex flex-col sm:flex-row bg-gradient-to-r from-orange-50 to-white border border-orange-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
               <div className="bg-orange-500 w-full sm:w-8 flex items-center justify-center p-2 sm:p-0">
                  <span className="text-white font-bold text-sm sm:-rotate-90 tracking-widest whitespace-nowrap">COUPON</span>
               </div>
               <div className="p-6 flex-1">
                  <div className="flex justify-between items-start">
                     <div>
                        <h4 className="text-xl font-bold text-gray-800">GIAM500K</h4>
                        <p className="text-gray-600 text-sm mt-1">Giảm 500k cho đơn hàng vé máy bay quốc tế</p>
                     </div>
                     <Star className="text-yellow-400 fill-current" />
                  </div>
                  <div className="mt-6 flex justify-between items-center border-t border-dashed border-gray-300 pt-4">
                     <span className="text-xs text-gray-500">HSD: 30/12/2024</span>
                     <button className="text-orange-600 font-bold text-sm hover:underline">Lưu mã</button>
                  </div>
               </div>
               {/* Decorative circles to make it look like a ticket */}
               <div className="absolute -left-2 top-1/2 w-4 h-4 bg-white rounded-full sm:hidden"></div>
               <div className="absolute -right-2 top-1/2 w-4 h-4 bg-white rounded-full"></div>
            </div>

            {/* Voucher 2 */}
            <div className="flex flex-col sm:flex-row bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
               <div className="bg-blue-500 w-full sm:w-8 flex items-center justify-center p-2 sm:p-0">
                  <span className="text-white font-bold text-sm sm:-rotate-90 tracking-widest whitespace-nowrap">COUPON</span>
               </div>
               <div className="p-6 flex-1">
                  <div className="flex justify-between items-start">
                     <div>
                        <h4 className="text-xl font-bold text-gray-800">SUMMER2024</h4>
                        <p className="text-gray-600 text-sm mt-1">Giảm 10% tối đa 2 triệu cho Tour trong nước</p>
                     </div>
                     <Star className="text-yellow-400 fill-current" />
                  </div>
                  <div className="mt-6 flex justify-between items-center border-t border-dashed border-gray-300 pt-4">
                     <span className="text-xs text-gray-500">HSD: 15/08/2024</span>
                     <button className="text-blue-600 font-bold text-sm hover:underline">Lưu mã</button>
                  </div>
               </div>
                <div className="absolute -right-2 top-1/2 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Đăng ký nhận ưu đãi</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Nhận thông báo về các chương trình khuyến mãi, vé máy bay giá rẻ và các tour du lịch độc quyền sớm nhất.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Nhập email của bạn" 
                className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
              <button type="button" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;