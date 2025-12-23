import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="rounded-2xl bg-orange-50 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Sứ Mệnh</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Sứ mệnh của Tachudu là kiến tạo những trải nghiệm vượt xa mong
                đợi thông qua thực hiện hóa mong muốn của khách hàng sự kết hợp
                hài hòa giữa sáng tạo tiên phong với giá trị văn hóa phong phú.
              </p>
              <p>
                Chúng tôi cam kết lắng nghe và thấu hiểu từng nhu cầu của khách
                hàng, từ đó biến mỗi chuyến du lịch hay sự kiện thành một hành
                trình đầy cảm hứng và ý nghĩa.
              </p>
              <p>
                Đồng thời, với mục tiêu phát triển doanh nghiệp, chúng tôi không
                ngừng đổi mới quy trình và dịch vụ, nhằm mang đến những sản phẩm
                đẳng cấp, góp phần xây dựng niềm tin và mở rộng tầm ảnh hưởng
                của thương hiệu trên thị trường trong nước và quốc tế.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-blue-50 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Tầm Nhìn</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Tại Tachudu, tầm nhìn của chúng tôi là trở thành “kiến trúc sư
                của trải nghiệm độc đáo và đậm chất văn hóa”, nơi mỗi chuyến đi
                và sự kiện không chỉ là những câu chuyện sống động kết nối con
                người với di sản văn hóa của từng vùng đất mà còn là biểu tượng
                của sự đổi mới và sáng tạo trong ngành du lịch – sự kiện.
              </p>
              <p>
                Song song với mục tiêu phát triển doanh nghiệp bền vững, chúng
                tôi mong muốn tạo dựng một thương hiệu được công nhận rộng rãi,
                góp phần nâng tầm giá trị văn hóa Việt và mở rộng thị trường,
                qua đó khẳng định vị thế tiên phong trong việc kiến tạo những
                trải nghiệm độc nhất vô nhị.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
