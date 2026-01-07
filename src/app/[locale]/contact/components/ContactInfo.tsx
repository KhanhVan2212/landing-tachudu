import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactInfoProps {
  companyInfo: any;
}

const ContactInfo = ({ companyInfo }: ContactInfoProps) => {
  const fullAddress = companyInfo?.address || "Số 2 Tông Đản, Hoàn Kiếm, Hà Nội";

  const addressParts = fullAddress.split(',');
  const shortAddress = addressParts.length >= 2
    ? addressParts.slice(-2).join(', ').trim() 
    : fullAddress;

  return (
    <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {[
        {
          icon: Phone,
          title: "Hotline (24/7)",
          info: companyInfo?.hotline || "024.39351122",
          subInfo: "Hỗ trợ đặt tour & vé",
          color: "bg-orange-50 text-orange-600",
          href: `tel:${companyInfo?.hotline?.replace(/\./g, "") || "02439351122"}`,
        },
        {
          icon: Mail,
          title: "Email liên hệ",
          info: companyInfo?.email || "tachuduvn@gmail.com",
          subInfo: "Phản hồi trong 24h",
          color: "bg-orange-50 text-orange-600",
          href: `mailto:${companyInfo?.email || "tachuduvn@gmail.com"}`,
        },
        {
          icon: MapPin,
          title: "Trụ sở chính",
          info: shortAddress,
          subInfo: fullAddress, 
          color: "bg-orange-50 text-orange-600",
        },
        {
          icon: Clock,
          title: "Giờ làm việc",
          info: "Thứ 2 - Thứ 7",
          subInfo: "08:00 - 17:30",
          color: "bg-orange-50 text-orange-600",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="group rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div
            className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
          >
            <item.icon size={28} />
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
          {item.href ? (
            <a
              href={item.href}
              className="text-xl font-bold text-gray-900 hover:text-orange-600"
            >
              {item.info}
            </a>
          ) : (
            <p className="text-xl font-bold text-gray-900">{item.info}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">{item.subInfo}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;