import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Route,
  Package,
  Ticket,
  Building2,
  CalendarCheck,
  Users,
  Award,
} from "lucide-react";

export default function TourServicesPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="px-6">
            <p className="text-sm font-semibold text-orange-500 mb-4">
              Travel & MICE Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Giải pháp du lịch & MICE <br />
              toàn diện cho cá nhân <br />
              và doanh nghiệp
            </h1>

            <p className="text-gray-600 text-lg max-w-xl mb-10">
              Chúng tôi cung cấp các dịch vụ du lịch trọn gói, tour thiết kế theo
              yêu cầu và giải pháp MICE chuyên nghiệp, giúp tối ưu chi phí và
              nâng cao trải nghiệm cho khách hàng.
            </p>

            <div className="flex gap-4">
              <Link href="/contact">
                <button className="rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition">
                  Nhận tư vấn
                </button>
              </Link>

              <button className="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition">
                Xem dịch vụ
              </button>
            </div>
          </div>

          <div className="relative w-full h-[460px] lg:h-[520px] bg-black overflow-hidden">
            <Image
              src="/images/our-services.png"
              alt="Our services"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            {/* ===== TRAVEL ===== */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-10">
                Dịch vụ du lịch
              </h3>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <ServiceCard
                  icon={<MapPin />}
                  title="Tour Travel"
                  desc="Tổ chức tour du lịch trong nước và quốc tế với lịch trình trọn gói."
                />
                <ServiceCard
                  icon={<Route />}
                  title="Custom Tours"
                  desc="Thiết kế tour riêng theo yêu cầu về thời gian, ngân sách và mục đích."
                />
                <ServiceCard
                  icon={<Package />}
                  title="All-Inclusive"
                  desc="Gói du lịch trọn gói nội địa và quốc tế, tối ưu chi phí."
                />
                <ServiceCard
                  icon={<Ticket />}
                  title="Visa & Ticket"
                  desc="Hỗ trợ visa, vé máy bay và các thủ tục liên quan."
                />
              </div>
            </div>

            {/* ===== MICE ===== */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-10">
                Dịch vụ MICE
              </h3>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <ServiceCard
                  icon={<Building2 />}
                  title="MICE Services"
                  desc="Giải pháp hội nghị, hội thảo, triển lãm chuyên nghiệp."
                />
                <ServiceCard
                  icon={<CalendarCheck />}
                  title="Event Management"
                  desc="Tổ chức sự kiện doanh nghiệp, gala dinner, kick-off."
                />
                <ServiceCard
                  icon={<Users />}
                  title="Team Building"
                  desc="Hoạt động gắn kết đội nhóm theo mục tiêu doanh nghiệp."
                />
                <ServiceCard
                  icon={<Award />}
                  title="Incentive Travel"
                  desc="Du lịch khen thưởng cho nhân sự và đối tác."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Bạn đang tìm giải pháp du lịch hoặc MICE?
          </h3>
          <p className="text-orange-100 mb-8">
            Liên hệ với chúng tôi để được tư vấn và xây dựng phương án phù hợp nhất.
          </p>

          <Link href="/contact">
            <button className="rounded-full bg-white px-10 py-3 font-semibold text-orange-500 hover:bg-orange-50 transition">
              Liên hệ ngay
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= SERVICE CARD ================= */
function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
        {icon}
      </div>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h4>

      <p className="text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
