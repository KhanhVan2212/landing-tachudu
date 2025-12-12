import { 
  Plane, 
  Map, 
  CalendarDays, 
  Hotel, 
  HeartHandshake, 
  Lightbulb, 
  Briefcase, 
  TrendingUp 
} from 'lucide-react';
import { ServiceItem, AdvantageItem, TestimonialItem, PartnerItem } from './types';

export const COMPANY_NAME = "TACHUDU";
export const SLOGAN = "One step at a time. You’ll get there.";

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Đặt vé máy bay',
    description: 'Dịch vụ đặt vé nhanh chóng, giá tốt nhất từ các hãng hàng không uy tín trong và ngoài nước.',
    icon: Plane,
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 's2',
    title: 'Tour du lịch',
    description: 'Khám phá vẻ đẹp Việt Nam và thế giới với các tour du lịch trọn gói, thiết kế riêng biệt.',
    icon: Map,
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 's3',
    title: 'Tổ chức sự kiện',
    description: 'Chuyên nghiệp trong tổ chức sự kiện doanh nghiệp, teambuilding, hội nghị khách hàng.',
    icon: CalendarDays,
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 's4',
    title: 'Visa & Khách sạn',
    description: 'Hỗ trợ thủ tục visa nhanh gọn và hệ thống đặt phòng khách sạn đa dạng toàn cầu.',
    icon: Hotel,
    image: 'https://picsum.photos/800/600?random=4'
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: 'a1',
    title: 'Thấu hiểu văn hóa',
    description: 'Văn hóa là linh hồn của mọi chuyến đi. Chúng tôi kết nối và tôn vinh giá trị văn hóa của từng địa phương, tạo nên câu chuyện cảm xúc sống động nơi quá khứ và hiện đại giao hòa.',
    icon: HeartHandshake
  },
  {
    id: 'a2',
    title: 'Sáng tạo phù hợp',
    description: 'Trọng tâm vào những sáng tạo mang tính đột phá và độc đáo, tạo ra sự khác biệt cho từng dự án, với từng doanh nghiệp.',
    icon: Lightbulb
  },
  {
    id: 'a3',
    title: 'Giải pháp tùy chỉnh',
    description: 'Xây dựng giải pháp dựa trên sự tư vấn chuyên sâu và "may đo" chính xác theo yêu cầu của doanh nghiệp, nhằm phản ánh đúng giá trị thương hiệu.',
    icon: Briefcase
  },
  {
    id: 'a4',
    title: 'Tiết kiệm nguồn lực',
    description: 'Tối ưu hóa chi phí và thời gian cho khách hàng thông qua quy trình làm việc chuyên nghiệp và mạng lưới đối tác rộng khắp.',
    icon: TrendingUp
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Nguyễn Văn A',
    role: 'CEO TechCorp',
    content: 'Dịch vụ của TACHUDU thực sự ấn tượng. Chuyến company trip vừa rồi đã gắn kết nhân viên của chúng tôi rất nhiều.',
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Trần Thị B',
    role: 'Freelancer',
    content: 'Tôi đã đặt vé và visa đi Châu Âu tại đây. Mọi thủ tục đều nhanh gọn, nhân viên tư vấn rất nhiệt tình.',
    avatar: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 't3',
    name: 'Le Hoang C',
    role: 'Event Manager',
    content: 'Sự sáng tạo trong khâu tổ chức sự kiện của TACHUDU là điều khiến chúng tôi quyết định hợp tác lâu dài.',
    avatar: 'https://picsum.photos/100/100?random=12'
  }
];

export const PARTNERS: PartnerItem[] = [
  { id: 'p1', name: 'Vietnam Airlines', logo: 'https://picsum.photos/200/100?random=20' },
  { id: 'p2', name: 'Bamboo Airways', logo: 'https://picsum.photos/200/100?random=21' },
  { id: 'p3', name: 'Marriott', logo: 'https://picsum.photos/200/100?random=22' },
  { id: 'p4', name: 'Vinpearl', logo: 'https://picsum.photos/200/100?random=23' },
  { id: 'p5', name: 'Agoda', logo: 'https://picsum.photos/200/100?random=24' },
];