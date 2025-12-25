"use client";

import React, { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, Search, Eye, X, PlusCircle } from "lucide-react";

interface Tour {
  id: string;
  title: string;
  slug: string;
  category: string;
  region?: string;
  continent?: string;
  subRegion?: string;
  type: string;
  location: string;
  image: any;
  imageUrl?: string;
  description: string;
  price: string;
  originalPrice: string;
  discount?: string;
  duration?: string;
  timeLeft?: string;
  rating: number;
  reviews: number;
  highlights?: Array<{ highlight: string }>;
  itinerary?: Array<{ day: string; title: string; desc: string }>;
  included?: Array<{ service: string }>;
  excluded?: Array<{ service: string }>;
  featured: boolean;
  status: string;
  departureDate?: string;
  maxGuests?: number;
}

interface ToursCRUDProps {
  onStatsUpdate?: () => void;
}

export default function ToursCRUD({ onStatsUpdate }: ToursCRUDProps) {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [tourLocation, setTourLocation] = useState<"domestic" | "foreign">("domestic");
  const [formData, setFormData] = useState<Partial<Tour>>({
    title: "",
    slug: "",
    category: "Tour du lịch",
    region: "ALL",
    continent: undefined,
    subRegion: undefined,
    type: "Tour trọn gói",
    location: "",
    imageUrl: "",
    description: "",
    price: "",
    originalPrice: "",
    discount: "",
    duration: "",
    timeLeft: "",
    rating: 4.5,
    reviews: 0,
    featured: false,
    status: "active",
    highlights: [],
    itinerary: [],
    included: [],
    excluded: [],
  });

  const [itineraryItems, setItineraryItems] = useState<
    Array<{ day: string; title: string; desc: string }>
  >([]);

  const continents = [
    { id: "ASIA", label: "Châu Á" },
    { id: "EUROPE", label: "Châu Âu" },
    { id: "AUSTRALIA", label: "Châu Úc" },
    { id: "AMERICAS", label: "Châu Mỹ" },
  ];

  const asiaRegions = [
    { id: "Southeast Asia", label: "Đông Nam Á" },
    { id: "China", label: "Trung Quốc" },
    { id: "Northeast Asia", label: "Đông Bắc Á" },
    { id: "Middle East", label: "Trung Đông" },
  ];

  const domesticRegions = [
    { id: "ALL", label: "Tất cả miền" },
    { id: "NORTH", label: "Miền Bắc" },
    { id: "CENTRAL", label: "Miền Trung" },
    { id: "HIGHLANDS", label: "Tây Nguyên" },
    { id: "SOUTH", label: "Miền Nam" },
  ];

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/tours?limit=100");
      const data = await response.json();
      if (data.success) {
        setTours(data.docs);
        if (onStatsUpdate) onStatsUpdate();
      }
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
    setLoading(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "title") {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(value),
      }));
    }
  };

  const handleArrayChange = (
    field: "highlights" | "included" | "excluded",
    value: string
  ) => {
    if (!value.trim()) {
      setFormData((prev) => ({ ...prev, [field]: [] }));
      return;
    }

    const items = value
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item)
      .map((item) => ({
        [field === "highlights" ? "highlight" : "service"]: item,
      }));

    setFormData((prev) => ({ ...prev, [field]: items }));
  };

  const addItineraryDay = () => {
    setItineraryItems([
      ...itineraryItems,
      { day: `Ngày ${itineraryItems.length + 1}`, title: "", desc: "" },
    ]);
  };

  const removeItineraryDay = (index: number) => {
    const newItems = itineraryItems.filter((_, i) => i !== index);
    setItineraryItems(newItems);
  };

  const updateItineraryDay = (
    index: number,
    field: "day" | "title" | "desc",
    value: string
  ) => {
    const newItems = [...itineraryItems];
    newItems[index][field] = value;
    setItineraryItems(newItems);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const cleanData: any = {
        ...formData,
        image: formData.imageUrl,
        imageUrl: formData.imageUrl,
        itinerary: itineraryItems.filter(
          (item) => item.day?.trim() && item.title?.trim() && item.desc?.trim()
        ),
        highlights: formData.highlights?.filter((h) => h.highlight?.trim()) || [],
        included: formData.included?.filter((s) => s.service?.trim()) || [],
        excluded: formData.excluded?.filter((s) => s.service?.trim()) || [],
      };

      if (tourLocation === "domestic") {
        cleanData.continent = null;
        cleanData.subRegion = null;
        cleanData.region = formData.region || "ALL";
      } else {
        cleanData.region = "ALL";
        cleanData.continent = formData.continent;
        cleanData.subRegion = formData.subRegion || null;
      }

      console.log("Sending data:", cleanData);

      const url = editingTour ? `/api/tours/${editingTour.id}` : "/api/tours";
      const method = editingTour ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanData),
      });

      const data = await response.json();

      if (data.success) {
        alert(editingTour ? "Cập nhật tour thành công!" : "Tạo tour thành công!");
        setShowModal(false);
        setEditingTour(null);
        resetForm();
        fetchTours();
      } else {
        alert("Có lỗi xảy ra: " + (data.error || "Unknown error"));
        console.error("Error details:", data);
      }
    } catch (error) {
      console.error("Error saving tour:", error);
      alert("Có lỗi xảy ra khi lưu tour");
    }
    setLoading(false);
  };

  const handleEdit = (tour: Tour) => {
    setEditingTour(tour);

    const isForeign = tour.continent !== null && tour.continent !== undefined;
    setTourLocation(isForeign ? "foreign" : "domestic");

    setFormData({
      title: tour.title,
      slug: tour.slug,
      category: tour.category,
      region: tour.region || "ALL",
      continent: tour.continent,
      subRegion: tour.subRegion,
      type: tour.type,
      location: tour.location,
      imageUrl: tour.imageUrl || (typeof tour.image === "string" ? tour.image : ""),
      description: tour.description,
      price: tour.price,
      originalPrice: tour.originalPrice,
      discount: tour.discount || "",
      duration: tour.duration || "",
      timeLeft: tour.timeLeft || "",
      rating: tour.rating,
      reviews: tour.reviews,
      featured: tour.featured,
      status: tour.status,
      highlights: tour.highlights || [],
      included: tour.included || [],
      excluded: tour.excluded || [],
      departureDate: tour.departureDate,
      maxGuests: tour.maxGuests,
    });
    setItineraryItems(tour.itinerary || []);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa tour này?")) return;

    try {
      const response = await fetch(`/api/tours/${id}`, { method: "DELETE" });
      const data = await response.json();

      if (data.success) {
        alert("Xóa tour thành công!");
        fetchTours();
      }
    } catch (error) {
      console.error("Error deleting tour:", error);
      alert("Có lỗi xảy ra khi xóa tour");
    }
  };

  const resetForm = () => {
    setTourLocation("domestic");
    setFormData({
      title: "",
      slug: "",
      category: "Tour du lịch",
      region: "ALL",
      continent: undefined,
      subRegion: undefined,
      type: "Tour trọn gói",
      location: "",
      imageUrl: "",
      description: "",
      price: "",
      originalPrice: "",
      discount: "",
      duration: "",
      timeLeft: "",
      rating: 4.5,
      reviews: 0,
      featured: false,
      status: "active",
      highlights: [],
      itinerary: [],
      included: [],
      excluded: [],
    });
    setItineraryItems([]);
  };

  const filteredTours = tours.filter(
    (tour) =>
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Quản lý Tours</h2>
        <button
          onClick={() => {
            resetForm();
            setEditingTour(null);
            setShowModal(true);
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
        >
          <Plus size={16} />
          Thêm Tour mới
        </button>
      </div>

      <div className="mb-4 relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Tìm kiếm tour..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-orange-500 focus:outline-none"
        />
      </div>

      {loading ? (
        <div className="py-8 text-center text-gray-500">Đang tải...</div>
      ) : filteredTours.length === 0 ? (
        <div className="py-8 text-center text-gray-500">Không có tour nào</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tiêu đề</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Danh mục</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Địa điểm</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Giá</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Trạng thái</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Thao tác</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {filteredTours.map((tour) => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="font-medium text-gray-900">{tour.title}</div>
                    {tour.featured && (
                      <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                          Nổi bật
                        </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{tour.category}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{tour.location}</td>
                <td className="px-4 py-3 text-sm font-semibold text-orange-600">{tour.price}</td>
                <td className="px-4 py-3">
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      tour.status === "active" ? "bg-green-100 text-green-800" :
                        tour.status === "paused" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                    }`}>
                      {tour.status === "active" ? "Đang bán" :
                        tour.status === "paused" ? "Tạm dừng" : "Hết hạn"}
                    </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <a
                      href={`/deals/${tour.slug || tour.id}`}
                      target="_blank"
                      className="rounded p-1 text-blue-600 hover:bg-blue-50"
                    >
                      <Eye size={16} />
                    </a>
                    <button
                      onClick={() => handleEdit(tour)}
                      className="rounded p-1 text-orange-600 hover:bg-orange-50"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(tour.id)}
                      className="rounded p-1 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-6">
              <h3 className="text-xl font-bold">
                {editingTour ? "Chỉnh sửa Tour" : "Thêm Tour mới"}
              </h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingTour(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  Loại tour <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setTourLocation("domestic");
                      setFormData((prev) => ({
                        ...prev,
                        region: "ALL",
                        continent: undefined,
                        subRegion: undefined,
                      }));
                    }}
                    className={`flex-1 rounded-lg px-4 py-3 font-semibold transition-all ${
                      tourLocation === "domestic"
                        ? "bg-orange-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    🇻🇳 Tour trong nước
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTourLocation("foreign");
                      setFormData((prev) => ({
                        ...prev,
                        region: "ALL",
                        continent: "ASIA",
                        subRegion: undefined,
                      }));
                    }}
                    className={`flex-1 rounded-lg px-4 py-3 font-semibold transition-all ${
                      tourLocation === "foreign"
                        ? "bg-orange-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    🌍 Tour ngoài nước
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <h4 className="mb-4 text-lg font-semibold">Thông tin cơ bản</h4>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Tiêu đề <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Slug (URL) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    URL Hình ảnh <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    required
                    placeholder="https://example.com/image.jpg"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                  {formData.imageUrl && (
                    <div className="mt-2">
                      <img
                        src={formData.imageUrl}
                        alt="Preview"
                        className="h-32 w-full rounded-lg object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Invalid+URL";
                        }}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Danh mục <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="Tour du lịch">Tour du lịch</option>
                    <option value="Khách sạn">Khách sạn</option>
                    <option value="Vé máy bay">Vé máy bay</option>
                    <option value="Combo">Combo</option>
                  </select>
                </div>

                {tourLocation === "domestic" ? (
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Miền / Khu vực <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                    >
                      {domesticRegions.map((region) => (
                        <option key={region.id} value={region.id}>{region.label}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Châu lục <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="continent"
                        value={formData.continent}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                      >
                        {continents.map((continent) => (
                          <option key={continent.id} value={continent.id}>{continent.label}</option>
                        ))}
                      </select>
                    </div>

                    {formData.continent === "ASIA" && (
                      <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium">Khu vực con (Châu Á)</label>
                        <select
                          name="subRegion"
                          value={formData.subRegion || ""}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                        >
                          <option value="">-- Chọn khu vực --</option>
                          {asiaRegions.map((region) => (
                            <option key={region.id} value={region.id}>{region.label}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Loại tour <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="Tour trọn gói">Tour trọn gói</option>
                    <option value="Tour tự túc">Tour tự túc</option>
                    <option value="Tour theo nhóm">Tour theo nhóm</option>
                    <option value="Tour riêng">Tour riêng</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Địa điểm <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="Hạ Long, Quảng Ninh"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Thời gian</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    placeholder="3 ngày 2 đêm"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Mô tả <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <h4 className="mb-4 text-lg font-semibold">Giá cả</h4>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Giá hiện tại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    placeholder="5.990.000đ"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Giá gốc <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleInputChange}
                    required
                    placeholder="8.990.000đ"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Giảm giá</label>
                  <input
                    type="text"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    placeholder="-33%"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Thời gian còn lại</label>
                  <input
                    type="text"
                    name="timeLeft"
                    value={formData.timeLeft}
                    onChange={handleInputChange}
                    placeholder="Còn 5 ngày"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Đánh giá</label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    max="5"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Số đánh giá</label>
                  <input
                    type="number"
                    name="reviews"
                    value={formData.reviews}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Trạng thái <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="active">Đang bán</option>
                    <option value="paused">Tạm dừng</option>
                    <option value="expired">Hết hạn</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <label className="ml-2 text-sm font-medium">Hiển thị nổi bật</label>
                </div>

                <div className="md:col-span-2">
                  <h4 className="mb-4 text-lg font-semibold">Thông tin bổ sung</h4>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">Điểm nổi bật (mỗi dòng một mục)</label>
                  <textarea
                    rows={4}
                    placeholder="Khám phá Vịnh Hạ Long tuyệt đẹp&#10;Thưởng thức hải sản tươi ngon&#10;Nghỉ dưỡng trên du thuyền 5 sao"
                    onChange={(e) => handleArrayChange("highlights", e.target.value)}
                    defaultValue={formData.highlights?.map((h) => h.highlight).join("\n")}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="mb-4 flex items-center justify-between">
                    <label className="text-sm font-medium">Lịch trình chi tiết</label>
                    <button
                      type="button"
                      onClick={addItineraryDay}
                      className="flex items-center gap-2 rounded-lg bg-green-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-green-700"
                    >
                      <PlusCircle size={16} />
                      Thêm ngày
                    </button>
                  </div>

                  <div className="space-y-4">
                    {itineraryItems.map((item, index) => (
                      <div key={index} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <input
                            type="text"
                            value={item.day}
                            onChange={(e) => updateItineraryDay(index, "day", e.target.value)}
                            placeholder="Ngày 1"
                            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-semibold focus:border-orange-500 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => removeItineraryDay(index)}
                            className="rounded p-1 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => updateItineraryDay(index, "title", e.target.value)}
                          placeholder="Tiêu đề ngày"
                          className="mb-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
                        />

                        <textarea
                          value={item.desc}
                          onChange={(e) => updateItineraryDay(index, "desc", e.target.value)}
                          placeholder="Mô tả chi tiết"
                          rows={3}
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    ))}

                    {itineraryItems.length === 0 && (
                      <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                        <p className="text-sm text-gray-500">Chưa có lịch trình nào. Nhấn &quot;Thêm ngày&quot; để bắt đầu.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">Dịch vụ bao gồm (mỗi dòng một mục)</label>
                  <textarea
                    rows={3}
                    placeholder="Vé máy bay khứ hồi&#10;Khách sạn 4 sao&#10;Bữa ăn theo chương trình"
                    onChange={(e) => handleArrayChange("included", e.target.value)}
                    defaultValue={formData.included?.map((s) => s.service).join("\n")}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">Dịch vụ không bao gồm (mỗi dòng một mục)</label>
                  <textarea
                    rows={3}
                    placeholder="Chi phí cá nhân&#10;Bảo hiểm du lịch&#10;Thuế VAT"
                    onChange={(e) => handleArrayChange("excluded", e.target.value)}
                    defaultValue={formData.excluded?.map((s) => s.service).join("\n")}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingTour(null);
                    resetForm();
                  }}
                  className="rounded-lg border border-gray-300 px-6 py-2 font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-orange-600 px-6 py-2 font-semibold text-white hover:bg-orange-700 disabled:opacity-50"
                >
                  {loading ? "Đang lưu..." : editingTour ? "Cập nhật" : "Tạo mới"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}