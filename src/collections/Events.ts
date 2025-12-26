// src/collections/Events.ts
import { CollectionConfig } from "payload";

const Events: CollectionConfig = {
  slug: "events",
  labels: {
    singular: "Event",
    plural: "Events",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "date", "featured", "status"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Tiêu đề",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug (URL)",
      admin: {
        description: "URL thân thiện, VD: dai-hoi-nong-dan-2025",
      },
    },
    {
      name: "date",
      type: "text",
      required: true,
      label: "Ngày đăng",
      admin: {
        description: "VD: 25/11/2025",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      label: "Mô tả ngắn",
      admin: {
        description: "Hiển thị trong danh sách và preview",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Ảnh bìa",
    },
    {
      name: "content",
      type: "textarea",
      required: true,
      label: "Nội dung (HTML)",
      admin: {
        description: "Nội dung HTML từ Tiptap editor",
      },
    },
    {
      name: "gallery",
      type: "array",
      label: "Album ảnh sự kiện",
      maxRows: 50,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
          label: "Chú thích",
        },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Tin nổi bật",
      admin: {
        description: "Hiển thị ở Featured News Section",
      },
    },
    {
      name: "highlight",
      type: "checkbox",
      defaultValue: false,
      label: "Sự kiện nổi bật",
      admin: {
        description: "Hiển thị ở Event Highlight Section",
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "published",
      label: "Trạng thái",
      options: [
        { label: "Đã xuất bản", value: "published" },
        { label: "Nháp", value: "draft" },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "Thứ tự sắp xếp",
      admin: {
        description: "Số càng nhỏ hiển thị càng trước",
      },
    },
    {
      name: "category",
      type: "select",
      label: "Danh mục",
      options: [
        { label: "Sự kiện", value: "event" },
        { label: "Tin tức", value: "news" },
        { label: "Hoạt động", value: "activity" },
      ],
      defaultValue: "event",
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data }) => {
        // Auto generate slug if not provided
        if (data.title && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[đĐ]/g, "d")
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
        }
        return data;
      },
    ],
  },
};

export default Events;