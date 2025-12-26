"use client";
import React from "react";
import { MessageSquare, ChevronDown } from "lucide-react";

const FAQItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      onClick={onToggle}
    >
      <div className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:text-orange-600">
        <span className="font-medium">{item.question}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-gray-100 p-4 text-sm leading-relaxed text-gray-600">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqItems = [
    {
      question: "Làm thế nào để đặt tour trực tuyến?",
      answer:
        "Quý khách có thể đặt tour trực tiếp trên website bằng cách nhấn vào nút 'Đặt ngay' tại trang chi tiết tour. Sau đó điền thông tin cá nhân và chọn phương thức thanh toán phù hợp. Đội ngũ Tachudu sẽ liên hệ xác nhận trong vòng 24h.",
    },
    {
      question: "Chính sách hoàn hủy tour như thế nào?",
      answer:
        "Tùy thuộc vào thời điểm hủy tour so với ngày khởi hành, phí hủy sẽ từ 0% đến 100%. Chi tiết quy định hoàn hủy được ghi rõ trong phần 'Lưu ý' của mỗi tour. Vui lòng liên hệ hotline để được hỗ trợ nhanh nhất.",
    },
    {
      question: "Tôi có thể thanh toán bằng những hình thức nào?",
      answer:
        "Chúng tôi chấp nhận nhiều hình thức thanh toán: Chuyển khoản ngân hàng (QR Code), Thẻ tín dụng/ghi nợ quốc tế (Visa, MasterCard), Tiền mặt tại văn phòng, hoặc Thanh toán qua cổng VNPAY/Momo.",
    },
    {
      question: "Tour có bao gồm bảo hiểm du lịch không?",
      answer:
        "Tất cả các tour du lịch trọn gói của Tachudu đều đã bao gồm bảo hiểm du lịch tiêu chuẩn cho du khách. Mức bồi thường tối đa tùy thuộc vào từng tuyến tour cụ thể.",
    },
    {
      question: "Tôi cần chuẩn bị giấy tờ gì khi đi tour nước ngoài?",
      answer:
        "Đối với tour nước ngoài, Quý khách cần Hộ chiếu còn hạn trên 6 tháng. Tùy từng quốc gia sẽ yêu cầu Visa (Thị thực) hoặc không. Nhân viên tư vấn sẽ hướng dẫn chi tiết thủ tục Visa cho từng thị trường.",
    },
  ];

  return (
    <div className="rounded-3xl bg-orange-50 p-8">
      <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
        <MessageSquare className="mr-3 text-orange-600" />
        Câu hỏi thường gặp
      </h3>
      <div className="space-y-4">
        {faqItems.map((item, idx) => (
          <FAQItem
            key={idx}
            item={item}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactFAQ;
