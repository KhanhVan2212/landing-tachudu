"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  X,
  Upload,
  Save,
  Eye,
  Star,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";

const TiptapEditor = dynamic(() => import("./TiptapEditor"), { ssr: false });

interface Event {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  cover: string;
  content: any;
  featured: boolean;
  highlight: boolean;
  status: string;
  category: string;
  order: number;
}

interface Props {
  onStatsUpdate?: () => void;
}

const categories = [
  { label: "Sự kiện", value: "event" },
  { label: "Tin tức", value: "news" },
  { label: "Hoạt động", value: "activity" },
];

export default function EventsCRUD({ onStatsUpdate }: Props) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [mediaFiles, setMediaFiles] = useState<any[]>([]);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    date: "",
    excerpt: "",
    coverImage: "", // This should be media ID
    content: "",
    featured: false,
    highlight: false,
    status: "published",
    category: "event",
    order: 0,
  });

  useEffect(() => {
    fetchEvents();
    fetchMediaFiles();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      if (data.success) {
        setEvents(data.docs);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMediaFiles = async () => {
    try {
      const response = await fetch("/api/media?limit=100");
      const data = await response.json();
      if (data.docs) {
        setMediaFiles(data.docs);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const handleFileUpload = async (file: File) => {
    setUploadingImage(true);

    try {
      const formDataUpload = new FormData();
      formDataUpload.append("file", file);
      formDataUpload.append("alt", file.name.replace(/\.[^/.]+$/, ""));

      const response = await fetch("/api/upload-cloudinary", {
        method: "POST",
        body: formDataUpload,
      });

      const data = await response.json();

      if (data.success && data.doc) {
        await fetchMediaFiles();
        // Return the media ID, not the URL
        return data.doc.id;
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading:", error);
      toast.error("Có lỗi khi upload ảnh");
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const handleContentImageUpload = async (file: File): Promise<string> => {
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("alt", file.name.replace(/\.[^/.]+$/, ""));

    const response = await fetch("/api/upload-cloudinary", {
      method: "POST",
      body: formDataUpload,
    });

    const data = await response.json();

    if (data.success && data.doc) {
      // For content images, return the URL directly
      return data.doc.url || data.doc.cloudinaryUrl;
    }
    throw new Error("Upload failed");
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleCreate = () => {
    setEditingEvent(null);
    setFormData({
      title: "",
      slug: "",
      date: "",
      excerpt: "",
      coverImage: "",
      content: "",
      featured: false,
      highlight: false,
      status: "published",
      category: "event",
      order: 0,
    });
    setShowModal(true);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);

    // Get the coverImage ID from the event
    let coverImageId = "";
    if (typeof event.cover === "string") {
      // If cover is already an ID, use it
      coverImageId = event.cover;
    }

    setFormData({
      title: event.title,
      slug: event.slug,
      date: event.date,
      excerpt: event.excerpt,
      coverImage: coverImageId,
      content:
        typeof event.content === "string"
          ? event.content
          : JSON.stringify(event.content),
      featured: event.featured,
      highlight: event.highlight,
      status: event.status,
      category: event.category,
      order: event.order,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate coverImage ID
    if (!formData.coverImage) {
      toast.error("Vui lòng chọn ảnh bìa");
      return;
    }

    try {
      const slug = formData.slug || generateSlug(formData.title);

      const payload = {
        title: formData.title,
        slug: slug,
        date: formData.date,
        excerpt: formData.excerpt,
        coverImage: formData.coverImage, // This is now the media ID
        content: formData.content,
        featured: formData.featured,
        highlight: formData.highlight,
        status: formData.status,
        category: formData.category,
        order: formData.order,
      };

      const url = editingEvent
        ? `/api/events/${editingEvent.id}`
        : "/api/events";
      const method = editingEvent ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          editingEvent ? "Cập nhật thành công!" : "Thêm mới thành công!",
        );
        setShowModal(false);
        fetchEvents();
        onStatsUpdate?.();
      } else {
        toast.error("Có lỗi xảy ra: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Có lỗi xảy ra khi lưu dữ liệu");
    }
  };

  const handleDelete = (id: string) => {
    toast("Bạn có chắc chắn muốn xóa event này?", {
      action: {
        label: "Xóa",
        onClick: async () => {
          try {
            const response = await fetch(`/api/events/${id}`, {
              method: "DELETE",
            });

            const data = await response.json();

            if (data.success) {
              toast.success("Xóa thành công!");
              fetchEvents();
              onStatsUpdate?.();
            } else {
              toast.error("Có lỗi xảy ra khi xóa");
            }
          } catch (error) {
            console.error("Error deleting:", error);
            toast.error("Có lỗi xảy ra khi xóa");
          }
        },
      },
      cancel: {
        label: "Hủy",
        onClick: () => {},
      },
    });
  };

  const selectMedia = (mediaId: string) => {
    setFormData({ ...formData, coverImage: mediaId });
    setShowMediaPicker(false);
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || event.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getMediaUrl = (mediaId: string) => {
    if (!mediaId) return "";
    const media = mediaFiles.find((m) => m.id === mediaId);
    return media?.url || media?.cloudinaryUrl || "";
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-gray-500">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Quản lý Tin tức & Sự kiện</h2>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
        >
          <Plus className="h-5 w-5" />
          Thêm mới
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tiêu đề hoặc mô tả..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-orange-500 focus:outline-none"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
        >
          <option value="all">Tất cả danh mục</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => {
          const imageUrl = event.cover || getMediaUrl(event.cover);

          return (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                    {categories.find((c) => c.value === event.category)?.label}
                  </span>
                  {event.featured && (
                    <span className="flex items-center gap-1 rounded-full bg-yellow-500 px-2 py-1 text-xs font-medium text-white">
                      <Star className="h-3 w-3" /> Featured
                    </span>
                  )}
                  {event.highlight && (
                    <span className="rounded-full bg-purple-500 px-2 py-1 text-xs font-medium text-white">
                      Highlight
                    </span>
                  )}
                  {event.status === "draft" && (
                    <span className="rounded-full bg-gray-500 px-2 py-1 text-xs font-medium text-white">
                      Nháp
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  {event.date}
                </div>
                <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
                  {event.title}
                </h3>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {event.excerpt}
                </p>
              </div>

              {/* Actions */}
              <div className="flex border-t border-gray-100">
                <button
                  onClick={() => handleEdit(event)}
                  className="flex flex-1 items-center justify-center gap-2 py-3 text-sm text-blue-600 transition-colors hover:bg-blue-50"
                >
                  <Edit className="h-4 w-4" />
                  Sửa
                </button>
                <button
                  onClick={() => window.open(`/event/${event.slug}`, "_blank")}
                  className="flex flex-1 items-center justify-center gap-2 border-l border-gray-100 py-3 text-sm text-green-600 transition-colors hover:bg-green-50"
                >
                  <Eye className="h-4 w-4" />
                  Xem
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="flex flex-1 items-center justify-center gap-2 border-l border-gray-100 py-3 text-sm text-red-600 transition-colors hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                  Xóa
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          Không tìm thấy kết quả nào
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b bg-white p-6">
              <h3 className="text-xl font-bold">
                {editingEvent ? "Chỉnh sửa" : "Thêm mới"} Event
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium">
                      Tiêu đề *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          title: e.target.value,
                          slug: generateSlug(e.target.value),
                        });
                      }}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                      placeholder="VD: Đại hội Hội Nông dân Hà Nội..."
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Slug (URL) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({ ...formData, slug: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                      placeholder="dai-hoi-nong-dan-ha-noi"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Ngày đăng *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                      placeholder="25/11/2025"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Mô tả ngắn *
                  </label>
                  <textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) =>
                      setFormData({ ...formData, excerpt: e.target.value })
                    }
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                    placeholder="Mô tả ngắn về event..."
                  />
                </div>

                {/* Cover Image */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Ảnh bìa *
                  </label>
                  <div className="flex gap-4">
                    {formData.coverImage && (
                      <div className="relative h-32 w-32 overflow-hidden rounded-lg border">
                        <Image
                          src={getMediaUrl(formData.coverImage)}
                          alt="Cover"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => setShowMediaPicker(true)}
                      className="flex items-center gap-2 rounded-lg border-2 border-dashed border-gray-300 px-6 py-4 hover:border-orange-500"
                    >
                      <Upload className="h-5 w-5" />
                      Chọn ảnh
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Nội dung *
                  </label>
                  <TiptapEditor
                    value={formData.content}
                    onChange={(value) =>
                      setFormData({ ...formData, content: value })
                    }
                    onImageUpload={handleContentImageUpload}
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    💡 Click icon ảnh trong toolbar để upload ảnh vào nội dung
                  </p>
                </div>

                {/* Settings */}
                <div className="grid gap-6 md:grid-cols-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Danh mục
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Trạng thái
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                    >
                      <option value="published">Đã xuất bản</option>
                      <option value="draft">Nháp</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Thứ tự
                    </label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          order: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            featured: e.target.checked,
                          })
                        }
                        className="h-5 w-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm font-medium">Tin nổi bật</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.highlight}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            highlight: e.target.checked,
                          })
                        }
                        className="h-5 w-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm font-medium">
                        Sự kiện nổi bật
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-lg border border-gray-300 px-6 py-2 hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-2 text-white hover:bg-orange-700"
                >
                  <Save className="h-5 w-5" />
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Media Picker Modal */}
      {showMediaPicker && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[80vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white">
            <div className="sticky top-0 flex items-center justify-between border-b bg-white p-6">
              <h3 className="text-xl font-bold">Chọn ảnh bìa</h3>
              <button
                onClick={() => setShowMediaPicker(false)}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Upload Section */}
            <div className="border-b bg-gray-50 p-6">
              <label className="mb-2 block text-sm font-medium">
                Upload ảnh mới
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const mediaId = await handleFileUpload(file);
                    if (mediaId) {
                      setFormData({ ...formData, coverImage: mediaId });
                      setShowMediaPicker(false);
                    }
                  }
                }}
                disabled={uploadingImage}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 file:mr-4 file:rounded-full file:border-0 file:bg-orange-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-orange-600 hover:file:bg-orange-100 disabled:opacity-50"
              />
              {uploadingImage && (
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-orange-600 border-t-transparent"></div>
                  Đang upload...
                </div>
              )}
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-3 gap-4 p-6 md:grid-cols-4">
              {mediaFiles.map((media) => (
                <button
                  key={media.id}
                  type="button"
                  onClick={() => selectMedia(media.id)}
                  className="group relative aspect-square overflow-hidden rounded-lg border hover:border-orange-500"
                >
                  <Image
                    src={media.url || media.cloudinaryUrl}
                    alt={media.alt || "Media"}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </button>
              ))}
            </div>

            {mediaFiles.length === 0 && !uploadingImage && (
              <div className="p-6 text-center text-gray-500">
                Chưa có ảnh nào. Upload ảnh đầu tiên!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
