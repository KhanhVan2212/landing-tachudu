import {
  Plane,
  Map,
  CalendarDays,
  Hotel,
  HeartHandshake,
  Lightbulb,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import {
  ServiceItem,
  AdvantageItem,
  TestimonialItem,
  PartnerItem,
} from "./types";

export const COMPANY_NAME = "TACHUDU";
export const SLOGAN = "Cùng chu du thế giới.";

export const CONTACT_INFO = {
  hotline: "024.39351122",
  hotlineUrl: "02439351122",
  email: "tachuduvn@gmail.com",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Đặt vé máy bay",
    description:
      "Dịch vụ đặt vé nhanh chóng, giá tốt nhất từ các hãng hàng không uy tín trong và ngoài nước.",
    icon: Plane,
    image: "/images/ticket.jpg",
  },
  {
    id: "s2",
    title: "Tour du lịch",
    description:
      "Khám phá vẻ đẹp Việt Nam và thế giới với các tour du lịch trọn gói, thiết kế riêng biệt.",
    icon: Map,
    image: "/images/tour.jpg",
  },
  {
    id: "s3",
    title: "Tổ chức sự kiện",
    description:
      "Chuyên nghiệp trong tổ chức sự kiện doanh nghiệp, teambuilding, hội nghị khách hàng.",
    icon: CalendarDays,
    image: "/images/event.jpg",
  },
  {
    id: "s4",
    title: "Visa & Khách sạn",
    description:
      "Hỗ trợ thủ tục visa nhanh gọn và hệ thống đặt phòng khách sạn đa dạng toàn cầu.",
    icon: Hotel,
    image: "/images/visa.jpg",
  },
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: "a1",
    title: "Hỗ trợ 24/7",
    description:
      "Đội ngũ tư vấn viên luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi trong suốt chuyến đi.",
    icon: HeartHandshake,
  },
  {
    id: "a2",
    title: "Dịch vụ chuyên nghiệp",
    description:
      "Hướng dẫn viên giàu kinh nghiệm, thông thạo nhiều ngôn ngữ và am hiểu văn hóa địa phương.",
    icon: Lightbulb,
  },
  {
    id: "a3",
    title: "Trải nghiệm độc đáo",
    description:
      'Tour thiết kế riêng biệt, mang đến những trải nghiệm khác biệt và đáng nhớ.',
    icon: Briefcase,
  },
  {
    id: "a4",
    title: "Tiết kiệm nguồn lực",
    description:
      "Tối ưu hóa chi phí và thời gian cho khách hàng thông qua quy trình làm việc chuyên nghiệp và mạng lưới đối tác rộng khắp.",
    icon: TrendingUp,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Nguyễn Văn Khánh",
    role: "Khách hàng",
    content:
      "Dịch vụ của TACHUDU thực sự ấn tượng. Chuyến company trip vừa rồi đã gắn kết nhân viên của chúng tôi rất nhiều.",
    avatar: "https://picsum.photos/100/100?random=10",
  },
  {
    id: "t2",
    name: "Trần Thị Thanh",
    role: "Khách hàng",
    content:
      "Tôi đã đặt vé và visa đi Châu Âu tại đây. Mọi thủ tục đều nhanh gọn, nhân viên tư vấn rất nhiệt tình.",
    avatar: "https://picsum.photos/100/100?random=11",
  },
  {
    id: "t3",
    name: "Lê Hoàng Anh",
    role: "Khách hàng",
    content:
      "Sự sáng tạo trong khâu tổ chức sự kiện của TACHUDU là điều khiến chúng tôi quyết định hợp tác lâu dài.",
    avatar: "https://picsum.photos/100/100?random=12",
  },
];

export const PARTNERS: PartnerItem[] = [
  {
    id: "p1",
    name: "Vietnam Airlines",
    logo: "https://picsum.photos/200/100?random=20",
  },
  {
    id: "p2",
    name: "Bamboo Airways",
    logo: "https://picsum.photos/200/100?random=21",
  },
  {
    id: "p3",
    name: "Marriott",
    logo: "https://picsum.photos/200/100?random=22",
  },
  {
    id: "p4",
    name: "Vinpearl",
    logo: "https://picsum.photos/200/100?random=23",
  },
  { id: "p5", name: "Agoda", logo: "https://picsum.photos/200/100?random=24" },
];
