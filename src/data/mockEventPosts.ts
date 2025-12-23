export type EventContentBlock =
  | { type: "paragraph"; value: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "list"; items: string[] };

export type EventPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  cover: string;
  content: EventContentBlock[];
};

export const mockEventPosts: EventPost[] = [
  /* ================= POST 1 ================= */
  {
    slug: "dai-hoi-hoi-nong-dan-ha-noi-lan-thu-xi",
    title:
      "Đại hội đại biểu Hội Nông dân Thành phố Hà Nội lần thứ XI diễn ra thành công tốt đẹp",
    date: "25/11/2025",
    category: "Sự kiện Chính trị - Xã hội",
    cover:
      "/images/events/1.jpg",
    content: [
      {
        type: "paragraph",
        value:
          "Trong hai ngày 24–25/11/2025, tại Cung Văn hóa Lao động Hữu nghị Việt Xô, Đại hội đại biểu Hội Nông dân Thành phố Hà Nội lần thứ XI, nhiệm kỳ 2025–2030 đã diễn ra trong không khí trang trọng. Sự kiện có sự tham dự của lãnh đạo Trung ương, Thành phố cùng đại diện các sở, ban, ngành, đồng thời quy tụ 288 đại biểu chính thức đại diện cho hơn 400.000 hội viên nông dân Thủ đô. Đây là dịp quan trọng để nhìn lại những thành quả đã đạt được, đồng thời xác định tầm nhìn và định hướng phát triển cho giai đoạn mới của phong trào nông dân Hà Nội.",
      },
      {
        type: "image",
        src: "/images/events/2.jpg",
        caption: "Toàn cảnh Đại hội trang trọng tại Cung Việt Xô",
      },
      {
        type: "paragraph",
        value:
          "Tachudu tự hào là đơn vị tổ chức và vận hành toàn bộ Đại hội. Với sự chuẩn bị kỹ lưỡng, từ vận hành sự kiện đến dàn dựng chương trình nghệ thuật, chúng tôi nỗ lực mang đến một không gian chỉn chu, trang nghiêm và truyền cảm hứng, góp phần làm nên thành công chung của Đại hội lần này.",
      },
      {
        type: "paragraph",
        value:
          "Đại hội mang chủ đề “Xây dựng tổ chức Hội vững mạnh; phát huy vai trò nông dân số trong phát triển nông nghiệp sạch, nông thôn xanh, góp phần xây dựng Thủ đô văn minh, hiện đại, hạnh phúc”, đồng thời hướng tới các giá trị trọng tâm: “Sinh kế nông thôn xanh – Nông nghiệp số – Chuỗi giá trị”. Những định hướng này thể hiện rõ khát vọng chuyển đổi mạnh mẽ của Hội trong nhiệm kỳ mới, đưa nông nghiệp Thủ đô phát triển bền vững và hiện đại hơn.",
      },
      {
        type: "paragraph",
        value:
          "Sự kiện diễn ra trong bầu không khí phấn khởi của toàn Đảng bộ, chính quyền và Nhân dân Thủ đô trước thành công của Đại hội Đảng bộ Thành phố lần thứ XVIII. Đại hội XI của Hội Nông dân Thành phố Hà Nội tiếp tục khẳng định quyết tâm của đội ngũ cán bộ, hội viên nông dân trong việc phát huy truyền thống, đổi mới sáng tạo và tinh thần vượt khó; góp phần quan trọng vào quá trình xây dựng Thủ đô văn hiến, văn minh, hiện đại, hạnh phúc.",
      },
    ],
  },

  /* ================= POST 2 ================= */
  {
    slug: "le-tuyen-duong-thu-khoa-xuat-sac-2025",
    title:
      "Lễ tuyên dương thủ khoa xuất sắc 2025: Hành trình tri thức rực rỡ của tuổi trẻ Thủ đô",
    date: "14/11/2025",
    category: "Giáo dục & Vinh danh",
    cover:
      "/images/events/4.jpg",
    content: [
      {
        type: "paragraph",
        value:
          "Tối 14/11, tại Văn Miếu Quốc Tử Giám, Thành ủy, Hội đồng nhân dân, Ủy ban nhân dân và Ủy ban Mặt trận Tổ quốc Việt Nam thành phố Hà Nội đã tổ chức Lễ tuyên dương thủ khoa xuất sắc tốt nghiệp các trường đại học và học viện trên địa bàn năm 2025.",
      },
      {
        type: "image",
        src: "/images/events/5.jpg",
        caption: "Lễ tuyên dương tại Văn Miếu Quốc Tử Giám",
      },
      {
        type: "paragraph",
        value:
          "Tachudu tự hào là đơn vị tổ chức và vận hành sự kiện ý nghĩa này. Chương trình năm nay mang đến những tiết mục nghệ thuật được dàn dựng chỉn chu, tạo bầu không khí trang trọng nhưng vẫn tràn đầy cảm hứng dành cho các tân thủ khoa và toàn thể khách mời.",
      },
      {
        type: "paragraph",
        value:
          "Lễ tuyên dương được tổ chức thường niên và đã trở thành một nét đẹp văn hóa đặc trưng của Hà Nội. Đây là nơi tri thức được tôn vinh, là dịp ghi nhận những nỗ lực miệt mài trong học tập và bày tỏ sự trân trọng đối với hiền tài. Sự kiện mang giá trị giáo dục sâu sắc, hướng tới kỷ niệm 43 năm Ngày Nhà giáo Việt Nam, đồng thời thể hiện quyết tâm của thành phố trong việc gìn giữ truyền thống hiếu học và bồi dưỡng nhân lực chất lượng cao cho tương lai.",
      },
      {
        type: "paragraph",
        value:
          "Các thủ khoa được vinh danh năm nay không chỉ đạt thành tích nổi bật mà còn đại diện cho tinh thần đổi mới, sáng tạo và khát vọng đóng góp cho cộng đồng. Họ chính là hình ảnh đẹp của thế hệ trẻ Thủ đô trên con đường hội nhập và phát triển.",
      },
    ],
  },

  /* ================= POST 3 ================= */
  {
    slug: "vinh-danh-80-guong-mat-thap-lua-thi-dua-yeu-nuoc",
    title:
      "Vinh danh 80 gương mặt tiêu biểu “Thắp lửa” phong trào thi đua yêu nước",
    date: "26/10/2025",
    category: "Thi đua & Khen thưởng",
    cover:
      "/images/events/6.jpg",
    content: [
      {
        type: "paragraph",
        value:
          "Sáng 26/10/2025, tại Trung tâm Hội nghị Quốc gia, Tổng Liên đoàn Lao động Việt Nam đã tổ chức Đại hội Thi đua yêu nước giai đoạn 2020 – 2025, vinh danh 80 tập thể và cá nhân tiêu biểu – những người đang ngày ngày “thắp lửa” bằng tinh thần trách nhiệm, sáng tạo và khát vọng cống hiến.",
      },
      {
        type: "image",
        src: "/images/events/7.jpg",
        caption: "Trao thưởng cho các gương mặt tiêu biểu",
      },
      {
        type: "paragraph",
        value:
          "Phát biểu tại đại hội, ông Đỗ Văn Chiến – Ủy viên Bộ Chính trị, Chủ tịch Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam nhấn mạnh: “Đổi mới tư duy, nội dung và phương thức tổ chức các phong trào thi đua với tinh thần đổi mới sáng tạo là động lực, chuyển đổi số là phương thức, năng suất lao động là thước đo, đời sống nâng cao, việc làm bền vững là mục tiêu của các phong trào thi đua yêu nước.”",
      },
      {
        type: "paragraph",
        value:
          "Thông điệp ấy không chỉ là lời cổ vũ, mà còn là định hướng để mỗi người Việt hôm nay tiếp tục nỗ lực làm tốt hơn mỗi ngày, để thi đua không chỉ là khẩu hiệu – mà là văn hóa, là tinh thần sống tích cực.",
      },
      {
        type: "paragraph",
        value:
          "Tachudu tự hào được đồng hành cùng hành trình lan tỏa những giá trị tốt đẹp ấy, nơi mỗi sự kiện, mỗi khoảnh khắc tôn vinh đều mang trong mình ngọn lửa của niềm tin, sáng tạo và cống hiến. Chúng tôi tin rằng, khi ai cũng làm việc bằng cả trái tim, mỗi việc làm nhỏ đều có thể tạo nên khác biệt lớn cho cộng đồng.",
      },
    ],
  },

  /* ================= POST 4 ================= */
  {
    slug: "weilaiya-hanh-trinh-ruc-ro-2025",
    title: "Weilaiya - Hành trình rực rỡ: Dấu ấn 2025",
    date: "23/02/2025",
    category: "Sự kiện Doanh nghiệp",
    cover:
      "/images/events/8.jpg",
    content: [
      {
        type: "paragraph",
        value:
          "Ngày 23/02 vừa qua, tại khách sạn Almaz Convention Center Hà Nội, tập đoàn Wonder Union đã thành công tổ chức chương trình “Wonder Union 2025 - Hành trình rực rỡ”.",
      },
      {
        type: "image",
        src: "/images/events/9.jpg",
        caption: "Không gian sự kiện lộng lẫy tại Almaz Convention Center",
      },
      {
        type: "paragraph",
        value:
          "Sự kiện không chỉ là một cột mốc quan trọng mà còn đánh dấu những bước tiến mạnh mẽ trong chiến lược phát triển của tập đoàn:",
      },
      {
        type: "list",
        items: [
          "Ra mắt các sản phẩm mới của Weilaiya 2025 – Dẫn đầu xu hướng làm đẹp, nâng tầm trải nghiệm người dùng.",
          "Phát triển thần tốc thương hiệu Elvawell – Định hình phong cách sống khỏe mạnh, toàn diện.",
          "Giới thiệu thương hiệu skincare cao cấp Haijichun – Một bước ngoặt lớn trong ngành làm đẹp.",
        ],
      },
      {
        type: "paragraph",
        value:
          "Tachudu tự hào là đơn vị đồng hành tổ chức, góp phần tạo nên một đêm sự kiện đẳng cấp và đáng nhớ! Hành trình rực rỡ đã bắt đầu – và những dấu ấn tiếp theo đang chờ được viết tiếp!",
      },
    ],
  },
];
