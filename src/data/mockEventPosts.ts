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
    /* ================= POST 0 ================= */
    {
        slug: "du-lich-mice-giai-phap-doanh-nghiep",
        title: "Du lịch MICE – Giải pháp nâng cao hiệu suất & gắn kết doanh nghiệp",
        date: "18/07/2024",
        category: "MICE & Sự kiện",
        cover:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "MICE Tourism đang trở thành xu hướng chiến lược của nhiều doanh nghiệp hiện đại. Việc kết hợp du lịch, đào tạo và tổ chức sự kiện giúp doanh nghiệp tối ưu hiệu suất làm việc, đồng thời xây dựng văn hóa đội nhóm bền vững."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
                caption: "Không gian hội nghị hiện đại kết hợp du lịch"
            },
            {
                type: "paragraph",
                value:
                    "Thông qua các chương trình MICE, doanh nghiệp không chỉ tạo ra trải nghiệm mới mẻ cho nhân sự mà còn nâng cao sự gắn kết nội bộ, cải thiện giao tiếp và thúc đẩy tinh thần đổi mới sáng tạo."
            },
            {
                type: "list",
                items: [
                    "Kết hợp du lịch – đào tạo – sự kiện",
                    "Gia tăng hiệu suất làm việc",
                    "Xây dựng văn hóa doanh nghiệp bền vững"
                ]
            },
            {
                type: "paragraph",
                value:
                    "Tachudu tự hào là đơn vị tổ chức MICE chuyên nghiệp, đồng hành cùng doanh nghiệp trong việc thiết kế các chương trình phù hợp mục tiêu, ngân sách và định hướng phát triển dài hạn."
            }
        ]
    },

    /* ================= POST 1 ================= */
    {
        slug: "tachudu-to-chuc-hoi-nghi-khach-hang-2024",
        title: "Tachudu tổ chức hội nghị khách hàng toàn quốc 2024",
        date: "12/07/2024",
        category: "Sự kiện doanh nghiệp",
        cover:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "Hội nghị khách hàng toàn quốc 2024 do Tachudu tổ chức là sự kiện thường niên quan trọng nhằm tri ân khách hàng và đối tác chiến lược trên toàn quốc. Chương trình được xây dựng với mục tiêu tăng cường kết nối, chia sẻ định hướng phát triển và mở rộng cơ hội hợp tác bền vững."
            },
            {
                type: "paragraph",
                value:
                    "Sự kiện quy tụ hơn 300 đại biểu đến từ nhiều tỉnh thành, bao gồm đại diện doanh nghiệp, đối tác chiến lược và khách hàng thân thiết đã đồng hành cùng Tachudu trong suốt chặng đường phát triển."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=900&q=80",
                caption: "Không gian hội nghị được tổ chức chuyên nghiệp và hiện đại"
            },
            {
                type: "paragraph",
                value:
                    "Bên cạnh các phiên báo cáo tổng kết và định hướng chiến lược, hội nghị còn mang đến không gian networking cởi mở, giúp các doanh nghiệp giao lưu, chia sẻ kinh nghiệm và tìm kiếm cơ hội hợp tác mới."
            },
            {
                type: "list",
                items: [
                    "Quy mô tổ chức toàn quốc",
                    "Hơn 300 khách mời tham dự",
                    "Kết hợp hội nghị – networking – gala dinner",
                    "Trải nghiệm dịch vụ tổ chức sự kiện chuyên nghiệp"
                ]
            }
        ]
    },

    /* ================= POST 2 ================= */
    {
        slug: "team-building-dong-luc-doi-nhom",
        title: "Team building – Chìa khóa tạo động lực & gắn kết nội bộ",
        date: "10/07/2024",
        category: "Team Building",
        cover:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "Trong bối cảnh doanh nghiệp không ngừng thay đổi, team building đã trở thành một phần không thể thiếu trong chiến lược phát triển nguồn nhân lực. Đây không chỉ là hoạt động vui chơi mà còn là giải pháp nâng cao tinh thần làm việc và sự gắn kết nội bộ."
            },
            {
                type: "paragraph",
                value:
                    "Các chương trình team building giúp phá vỡ rào cản giao tiếp, tạo môi trường để các thành viên thấu hiểu nhau hơn, từ đó cải thiện hiệu quả phối hợp trong công việc."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80",
                caption: "Hoạt động team building ngoài trời do Tachudu tổ chức"
            },
            {
                type: "paragraph",
                value:
                    "Tachudu thiết kế chương trình team building dựa trên mục tiêu cụ thể của từng doanh nghiệp, kết hợp giữa vận động thể chất, tư duy chiến lược và trải nghiệm tập thể nhằm mang lại giá trị thực tiễn."
            },
            {
                type: "list",
                items: [
                    "Gia tăng tinh thần đồng đội",
                    "Cải thiện giao tiếp và phối hợp",
                    "Khơi dậy động lực và sáng tạo",
                    "Xây dựng văn hóa doanh nghiệp tích cực"
                ]
            }
        ]
    },

    /* ================= POST 3 ================= */
    {
        slug: "xu-huong-su-kien-doanh-nghiep-2025",
        title: "Xu hướng tổ chức sự kiện doanh nghiệp năm 2025",
        date: "08/07/2024",
        category: "Xu hướng sự kiện",
        cover:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "Năm 2025 được dự đoán là giai đoạn bùng nổ của các xu hướng tổ chức sự kiện doanh nghiệp hiện đại, trong đó trải nghiệm người tham dự, công nghệ và yếu tố bền vững đóng vai trò trung tâm."
            },
            {
                type: "paragraph",
                value:
                    "Doanh nghiệp không chỉ tổ chức sự kiện để truyền thông mà còn chú trọng tạo ra những trải nghiệm cảm xúc, giúp nâng cao hình ảnh thương hiệu và giá trị gắn kết lâu dài."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=900&q=80",
                caption: "Công nghệ số được ứng dụng trong sự kiện doanh nghiệp"
            },
            {
                type: "paragraph",
                value:
                    "Các mô hình sự kiện kết hợp du lịch (MICE), hội nghị xanh, sự kiện hybrid (online & offline) và hoạt động cộng đồng đang trở thành xu hướng được nhiều doanh nghiệp ưu tiên."
            },
            {
                type: "list",
                items: [
                    "Sự kiện kết hợp du lịch MICE",
                    "Ứng dụng công nghệ số & AI",
                    "Sự kiện hybrid (trực tiếp & trực tuyến)",
                    "Tổ chức sự kiện bền vững, thân thiện môi trường"
                ]
            }
        ]
    },
    /* ================= POST 4 ================= */
    {
        slug: "hanh-trinh-kham-pha-phu-quoc-doanh-nghiep",
        title: "Hành trình khám phá Phú Quốc cùng doanh nghiệp",
        date: "05/07/2024",
        category: "Du lịch & Sự kiện",
        cover:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "Phú Quốc là điểm đến lý tưởng cho các chương trình du lịch doanh nghiệp kết hợp nghỉ dưỡng và trải nghiệm. Hành trình mang đến không gian thư giãn, tái tạo năng lượng và gắn kết đội ngũ."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1000&q=80",
                caption: "Khung cảnh biển Phú Quốc trong chương trình du lịch doanh nghiệp"
            },
            {
                type: "list",
                items: [
                    "Resort cao cấp ven biển",
                    "Hoạt động trải nghiệm & khám phá",
                    "Gắn kết đội nhóm sau thời gian làm việc căng thẳng"
                ]
            }
        ]
    },

    /* ================= POST 5 ================= */
    {
        slug: "gala-dinner-doanh-nghiep-da-nang",
        title: "Gala dinner doanh nghiệp tại Đà Nẵng",
        date: "28/06/2024",
        category: "Du lịch & Sự kiện",
        cover:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "Gala Dinner tại Đà Nẵng được tổ chức trong không gian sang trọng, là dịp để doanh nghiệp tri ân nhân sự, đối tác và khẳng định hình ảnh thương hiệu."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
                caption: "Không gian gala dinner cao cấp bên hồ bơi"
            },
            {
                type: "list",
                items: [
                    "Không gian sang trọng",
                    "Kết hợp giải trí & vinh danh",
                    "Tăng cường gắn kết nội bộ"
                ]
            }
        ]
    },

    /* ================= POST 6 ================= */
    {
        slug: "du-lich-khen-thuong-dong-luc-phat-trien",
        title: "Du lịch khen thưởng – Động lực phát triển doanh nghiệp",
        date: "18/06/2024",
        category: "Du lịch & Sự kiện",
        cover:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "Du lịch khen thưởng là hình thức ghi nhận và tạo động lực cho cá nhân, tập thể có thành tích xuất sắc. Đây là công cụ quản trị nhân sự hiệu quả được nhiều doanh nghiệp áp dụng."
            },
            {
                type: "list",
                items: [
                    "Ghi nhận đóng góp nhân sự",
                    "Tạo động lực làm việc dài hạn",
                    "Nâng cao sự trung thành với doanh nghiệp"
                ]
            }
        ]
    },

    /* ================= POST 7 ================= */
    {
        slug: "team-building-bai-bien",
        title: "Team building bãi biển – Gắn kết và bứt phá",
        date: "02/06/2024",
        category: "Team Building & MICE",
        cover:
            "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "Team building bãi biển mang đến không gian mở, năng động và sáng tạo, giúp các thành viên giải tỏa áp lực và tăng cường tinh thần đồng đội."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
                caption: "Hoạt động team building sôi động trên bãi biển"
            },
            {
                type: "list",
                items: [
                    "Trò chơi vận động nhóm",
                    "Nâng cao tinh thần teamwork",
                    "Khơi dậy năng lượng tích cực"
                ]
            }
        ]
    },

    /* ================= POST 8 ================= */
    {
        slug: "chuong-trinh-dao-tao-ket-noi-doanh-nghiep",
        title: "Chương trình đào tạo & kết nối doanh nghiệp",
        date: "20/05/2024",
        category: "Team Building & MICE",
        cover:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "Chương trình đào tạo & kết nối được thiết kế nhằm nâng cao kỹ năng quản lý, giao tiếp và xây dựng mạng lưới quan hệ bền vững giữa các doanh nghiệp."
            },
            {
                type: "list",
                items: [
                    "Workshop chuyên sâu",
                    "Kết nối doanh nghiệp đa ngành",
                    "Chia sẻ kinh nghiệm thực tiễn"
                ]
            }
        ]
    },

    /* ================= POST 9 ================= */
    {
        slug: "mice-giai-phap-gan-ket-doi-ngu",
        title: "MICE – Giải pháp gắn kết đội ngũ & phát triển bền vững",
        date: "10/05/2024",
        category: "Team Building & MICE",
        cover:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
        content: [
            {
                type: "paragraph",
                value:
                    "MICE không chỉ là xu hướng tổ chức sự kiện mà còn là giải pháp chiến lược giúp doanh nghiệp xây dựng đội ngũ vững mạnh, đồng bộ mục tiêu và định hướng phát triển."
            },
            {
                type: "list",
                items: [
                    "Kết hợp hội nghị – du lịch – đào tạo",
                    "Gia tăng hiệu quả làm việc nhóm",
                    "Xây dựng văn hóa doanh nghiệp hiện đại"
                ]
            }
        ]
    },
    /* ================= POST 10 ================= */
{
  slug: "doanh-nghiep-nen-dau-tu-su-kien-trai-nghiem",
  title: "Vì sao doanh nghiệp nên đầu tư vào sự kiện trải nghiệm?",
  date: "15/07/2024",
  category: "Tin tức & Góc nhìn",
  cover:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  content: [
    {
      type: "paragraph",
      value:
        "Trong bối cảnh thị trường cạnh tranh ngày càng khốc liệt, việc tạo ra trải nghiệm khác biệt cho khách hàng và nhân sự đang trở thành yếu tố then chốt giúp doanh nghiệp xây dựng thương hiệu bền vững."
    },
    {
      type: "paragraph",
      value:
        "Các sự kiện trải nghiệm không chỉ giúp truyền tải thông điệp thương hiệu mà còn tạo ra cảm xúc tích cực, từ đó gia tăng mức độ ghi nhớ và sự gắn bó lâu dài."
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1000&q=80",
      caption: "Sự kiện trải nghiệm giúp doanh nghiệp kết nối sâu hơn với khách hàng"
    },
    {
      type: "list",
      items: [
        "Tăng độ nhận diện thương hiệu",
        "Tạo trải nghiệm cảm xúc cho người tham dự",
        "Gia tăng sự trung thành của khách hàng"
      ]
    }
  ]
},
/* ================= POST 11 ================= */
{
  slug: "vai-tro-team-building-trong-van-hoa-doanh-nghiep",
  title: "Vai trò của team building trong xây dựng văn hóa doanh nghiệp",
  date: "01/07/2024",
  category: "Tin tức & Góc nhìn",
  cover:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  content: [
    {
      type: "paragraph",
      value:
        "Team building không còn đơn thuần là hoạt động vui chơi nội bộ mà đã trở thành một phần quan trọng trong chiến lược phát triển văn hóa doanh nghiệp."
    },
    {
      type: "paragraph",
      value:
        "Thông qua các hoạt động tập thể, doanh nghiệp có thể xây dựng niềm tin, cải thiện giao tiếp và thúc đẩy tinh thần hợp tác giữa các phòng ban."
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80",
      caption: "Team building góp phần xây dựng văn hóa doanh nghiệp tích cực"
    },
    {
      type: "list",
      items: [
        "Tăng cường tinh thần đồng đội",
        "Giảm xung đột nội bộ",
        "Xây dựng môi trường làm việc tích cực"
      ]
    }
  ]
},
/* ================= POST 12 ================= */
{
  slug: "xu-huong-du-lich-mice-tai-viet-nam",
  title: "Xu hướng du lịch MICE tại Việt Nam trong những năm tới",
  date: "25/06/2024",
  category: "Tin tức & Góc nhìn",
  cover:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
  content: [
    {
      type: "paragraph",
      value:
        "Du lịch MICE đang phát triển mạnh mẽ tại Việt Nam nhờ hạ tầng ngày càng hoàn thiện và nhu cầu tổ chức sự kiện chuyên nghiệp của doanh nghiệp."
    },
    {
      type: "paragraph",
      value:
        "Các điểm đến như Đà Nẵng, Phú Quốc, Nha Trang đang trở thành lựa chọn hàng đầu cho các chương trình hội nghị, hội thảo kết hợp nghỉ dưỡng."
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
      caption: "Du lịch MICE kết hợp nghỉ dưỡng cao cấp"
    },
    {
      type: "list",
      items: [
        "Hạ tầng du lịch ngày càng hoàn thiện",
        "Nhu cầu tổ chức sự kiện tăng cao",
        "Xu hướng kết hợp công việc & nghỉ dưỡng"
      ]
    }
  ]
}
];
