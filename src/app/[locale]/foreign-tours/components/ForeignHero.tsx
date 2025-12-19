import React from "react";

const ForeignHero = () => {
  return (
    <div className="relative overflow-hidden bg-orange-600 py-16 pt-[200px] text-center text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold uppercase tracking-wide drop-shadow-md md:text-4xl">
          Du Lịch Nước Ngoài
        </h1>
        <p className="mx-auto mt-4 max-w-2xl px-4 font-medium text-orange-50 drop-shadow sm:text-lg">
          Khám phá 5 châu, trải nghiệm văn hóa và kỳ quan thế giới
        </p>
      </div>
    </div>
  );
};

export default ForeignHero;
