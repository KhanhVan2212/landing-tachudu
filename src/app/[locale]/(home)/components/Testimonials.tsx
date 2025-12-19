import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../../../../constants";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Khách hàng nói gì về chúng tôi
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-orange-200" />
              <p className="relative z-10 mb-8 italic text-gray-600">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full object-cover ring-2 ring-orange-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-orange-500">
                    {testimonial.role}
                  </span>
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
