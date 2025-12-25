// src/collections/Deals.ts
import { CollectionConfig } from "payload";

const Deals: CollectionConfig = {
  slug: "deals",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "price", "category", "location", "timeLeft"],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Tiêu đề",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Hình ảnh",
    },
    {
      name: "category",
      type: "select",
      required: true,
      label: "Danh mục",
      options: [
        {
          label: "Tour du lịch",
          value: "Tour du lịch",
        },
        {
          label: "Khách sạn",
          value: "Khách sạn",
        },
        {
          label: "Vé máy bay",
          value: "Vé máy bay",
        },
        {
          label: "Combo du lịch",
          value: "Combo du lịch",
        },
      ],
      defaultValue: "Tour du lịch",
    },
    {
      name: "location",
      type: "text",
      required: true,
      label: "Địa điểm",
    },
    {
      name: "price",
      type: "text",
      required: true,
      label: "Giá (VNĐ)",
      admin: {
        description: "Ví dụ: 5.990.000đ",
      },
    },
    {
      name: "originalPrice",
      type: "text",
      required: true,
      label: "Giá gốc (VNĐ)",
      admin: {
        description: "Ví dụ: 8.990.000đ",
      },
    },
    {
      name: "discount",
      type: "text",
      required: true,
      label: "Giảm giá",
      admin: {
        description: "Ví dụ: -33%",
      },
    },
    {
      name: "type",
      type: "select",
      required: true,
      label: "Loại ưu đãi",
      options: [
        {
          label: "Flash Sale",
          value: "Flash Sale",
        },
        {
          label: "Ưu đãi đặc biệt",
          value: "Ưu đãi đặc biệt",
        },
        {
          label: "Combo tiết kiệm",
          value: "Combo tiết kiệm",
        },
      ],
      defaultValue: "Flash Sale",
    },
    {
      name: "timeLeft",
      type: "text",
      required: true,
      label: "Thời gian còn lại",
      defaultValue: "3 ngày",
      admin: {
        description: "Ví dụ: 3 ngày, 24 giờ, 1 tuần",
      },
    },
    {
      name: "rating",
      type: "number",
      required: false,
      label: "Đánh giá",
      defaultValue: 4.5,
      min: 0,
      max: 5,
      admin: {
        step: 0.1,
      },
    },
    {
      name: "reviews",
      type: "number",
      required: false,
      label: "Số lượt đánh giá",
      defaultValue: 0,
      min: 0,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Mô tả",
    },
    {
      name: "highlights",
      type: "array",
      label: "Điểm nổi bật",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
          label: "Nội dung",
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
            description: "Ví dụ: Ngày 1, Ngày 2",
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
      name: "status",
      type: "select",
      required: true,
      label: "Trạng thái",
      options: [
        {
          label: "Đang hoạt động",
          value: "active",
        },
        {
          label: "Ngừng hoạt động",
          value: "inactive",
        },
        {
          label: "Hết hạn",
          value: "expired",
        },
      ],
      defaultValue: "active",
    },
  ],
};

export default Deals;