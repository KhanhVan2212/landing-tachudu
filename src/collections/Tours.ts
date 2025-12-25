// src/collections/Tours.ts
import { CollectionConfig } from "payload";

const Tours: CollectionConfig = {
  slug: "tours",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "price", "location", "status"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Tiêu đề Tour",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug (URL)",
      admin: {
        description: "URL-friendly version của title",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      label: "Danh mục",
      options: [
        { label: "Tour du lịch", value: "Tour du lịch" },
        { label: "Khách sạn", value: "Khách sạn" },
        { label: "Vé máy bay", value: "Vé máy bay" },
        { label: "Combo", value: "Combo" },
      ],
      defaultValue: "Tour du lịch",
    },
    {
      name: "type",
      type: "select",
      required: true,
      label: "Loại tour",
      options: [
        { label: "Tour trọn gói", value: "Tour trọn gói" },
        { label: "Tour tự túc", value: "Tour tự túc" },
        { label: "Tour theo nhóm", value: "Tour theo nhóm" },
        { label: "Tour riêng", value: "Tour riêng" },
      ],
      defaultValue: "Tour trọn gói",
    },
    {
      name: "location",
      type: "text",
      required: true,
      label: "Địa điểm",
    },

    // Miền / Khu vực - dành cho TOUR TRONG NƯỚC (giữ nguyên như cũ)
    {
      name: "region",
      type: "select",
      label: "Miền / Khu vực (Trong nước)",
      options: [
        { label: "Tất cả miền", value: "ALL" },
        { label: "Miền Bắc", value: "NORTH" },
        { label: "Miền Trung", value: "CENTRAL" },
        { label: "Tây Nguyên", value: "HIGHLANDS" },
        { label: "Miền Nam", value: "SOUTH" },
      ],
      defaultValue: "ALL",
      admin: {
        description: "Dùng cho tour trong nước. Để 'Tất cả miền' nếu không cần phân loại chi tiết.",
      },
    },

    // MỚI: Châu lục - dành cho TOUR NƯỚC NGOÀI
    {
      name: "continent",
      type: "select",
      label: "Châu lục (Tour nước ngoài)",
      options: [
        { label: "Châu Á", value: "ASIA" },
        { label: "Châu Âu", value: "EUROPE" },
        { label: "Châu Úc", value: "AUSTRALIA" },
        { label: "Châu Mỹ", value: "AMERICAS" },
      ],
      admin: {
        description: "Chỉ chọn khi là tour nước ngoài. Để trống = tour trong nước.",
        position: "sidebar", // Hiển thị nổi bật ở sidebar admin
      },
    },

    // MỚI: Khu vực con - chỉ hiện khi chọn Châu Á
    {
      name: "subRegion",
      type: "select",
      label: "Khu vực con (Châu Á)",
      options: [
        { label: "Đông Nam Á", value: "Southeast Asia" },
        { label: "Trung Quốc", value: "China" },
        { label: "Đông Bắc Á", value: "Northeast Asia" },
        { label: "Trung Đông", value: "Middle East" },
      ],
      admin: {
        condition: (data) => data.continent === "ASIA",
        description: "Chỉ hiển thị khi chọn 'Châu Á'",
      },
    },

    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
      label: "Hình ảnh chính",
    },
    {
      name: "imageUrl",
      type: "text",
      label: "URL Hình ảnh (nếu không upload)",
      admin: {
        description: "Nhập URL hình ảnh nếu không muốn upload file",
      },
    },
    {
      name: "gallery",
      type: "array",
      label: "Thư viện ảnh",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "imageUrl",
          type: "text",
          label: "URL Hình ảnh",
        },
      ],
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Mô tả",
    },
    {
      name: "price",
      type: "text",
      required: true,
      label: "Giá hiện tại",
      admin: {
        description: "VD: 5.990.000đ",
      },
    },
    {
      name: "originalPrice",
      type: "text",
      required: true,
      label: "Giá gốc",
      admin: {
        description: "VD: 8.990.000đ",
      },
    },
    {
      name: "discount",
      type: "text",
      label: "Giảm giá",
      admin: {
        description: "VD: -33%",
      },
    },
    {
      name: "duration",
      type: "text",
      label: "Thời gian",
      admin: {
        description: "VD: 3 ngày 2 đêm",
      },
    },
    {
      name: "timeLeft",
      type: "text",
      label: "Thời gian còn lại",
      admin: {
        description: "VD: Còn 5 ngày",
      },
    },
    {
      name: "rating",
      type: "number",
      label: "Đánh giá",
      min: 0,
      max: 5,
      defaultValue: 4.5,
      admin: {
        step: 0.1,
      },
    },
    {
      name: "reviews",
      type: "number",
      label: "Số lượng đánh giá",
      defaultValue: 0,
    },
    {
      name: "highlights",
      type: "array",
      label: "Điểm nổi bật",
      fields: [
        {
          name: "highlight",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "itinerary",
      type: "array",
      label: "Lịch trình",
      fields: [
        {
          name: "day",
          type: "text",
          required: true,
          label: "Ngày",
          admin: {
            description: "VD: Ngày 1",
          },
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Tiêu đề",
        },
        {
          name: "desc",
          type: "textarea",
          required: true,
          label: "Mô tả chi tiết",
        },
      ],
    },
    {
      name: "included",
      type: "array",
      label: "Dịch vụ bao gồm",
      fields: [
        {
          name: "service",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "excluded",
      type: "array",
      label: "Dịch vụ không bao gồm",
      fields: [
        {
          name: "service",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Nổi bật",
      defaultValue: false,
      admin: {
        description: "Hiển thị ở trang chủ",
      },
    },
    {
      name: "status",
      type: "select",
      label: "Trạng thái",
      options: [
        { label: "Đang bán", value: "active" },
        { label: "Tạm dừng", value: "paused" },
        { label: "Hết hạn", value: "expired" },
      ],
      defaultValue: "active",
      required: true,
    },
    {
      name: "departureDate",
      type: "date",
      label: "Ngày khởi hành",
      admin: {
        description: "Ngày khởi hành tour",
      },
    },
    {
      name: "maxGuests",
      type: "number",
      label: "Số khách tối đa",
      admin: {
        description: "Số lượng khách tối đa cho tour",
      },
    },
  ],
  timestamps: true,
};

export default Tours;