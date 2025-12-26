"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ToursCRUD from "./ToursCRUD";
import JourneyGalleryCRUD from "./JourneyGalleryCRUD";
import EventsCRUD from "./EventsCRUD";
import CompanyInfoCRUD from "./CompanyInfoCRUD";
import Image from "next/image";

type Tab =
  | "dashboard"
  | "tours"
  | "journey-gallery"
  | "events"
  | "company-info";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    tours: 0,
    journeyGallery: 0,
    events: 0,
  });
  const router = useRouter();

  useEffect(() => {
    const userStr = localStorage.getItem("payload-user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }

    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch tours stats
      const toursResponse = await fetch("/api/tours?limit=1");
      const toursData = await toursResponse.json();

      // Fetch journey gallery stats
      const journeyResponse = await fetch("/api/journey-gallery?limit=1");
      const journeyData = await journeyResponse.json();

      // Fetch events stats
      const eventsResponse = await fetch("/api/events?limit=1");
      const eventsData = await eventsResponse.json();

      setStats({
        tours: toursData.totalDocs || 0,
        journeyGallery: journeyData.totalDocs || 0,
        events: eventsData.totalDocs || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("payload-token");
    localStorage.removeItem("payload-user");
    router.push("/admin");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={100}
              className="w-[100px] sm:w-[150px]"
            />
            <div className="flex items-center gap-4">
              {user && (
                <span className="hidden text-sm text-gray-600 sm:block">
                  {user.email}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-6 rounded-lg bg-white shadow">
          <nav className="flex overflow-x-auto border-b">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`whitespace-nowrap px-6 py-3 text-sm font-medium ${
                activeTab === "dashboard"
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Bảng điều khiển
            </button>
            <button
              onClick={() => setActiveTab("tours")}
              className={`whitespace-nowrap px-6 py-3 text-sm font-medium ${
                activeTab === "tours"
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Tours
            </button>
            <button
              onClick={() => setActiveTab("journey-gallery")}
              className={`whitespace-nowrap px-6 py-3 text-sm font-medium ${
                activeTab === "journey-gallery"
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Thư viện ảnh
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`whitespace-nowrap px-6 py-3 text-sm font-medium ${
                activeTab === "events"
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Tin tức & Sự kiện
            </button>
            <button
              onClick={() => setActiveTab("company-info")}
              className={`whitespace-nowrap px-6 py-3 text-sm font-medium ${
                activeTab === "company-info"
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Thông tin công ty
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="rounded-lg bg-white shadow">
          {activeTab === "dashboard" && (
            <div className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Tổng quan</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Tours Stats */}
                <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-orange-600">
                      Tours
                    </div>
                    <svg
                      className="h-8 w-8 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    {stats.tours}
                  </div>
                  <p className="mt-2 text-xs text-orange-600">
                    Tổng số tours trong hệ thống
                  </p>
                </div>

                {/* Journey Gallery Stats */}
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-blue-600">
                      Thư viện ảnh
                    </div>
                    <svg
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {stats.journeyGallery}
                  </div>
                  <p className="mt-2 text-xs text-blue-600">
                    Hành trình đã lưu giữ
                  </p>
                </div>

                {/* Events Stats */}
                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-purple-600">
                      Tin tức & Sự kiện
                    </div>
                    <svg
                      className="h-8 w-8 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    {stats.events}
                  </div>
                  <p className="mt-2 text-xs text-purple-600">
                    Tổng số sự kiện & tin tức
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <button
                    onClick={() => setActiveTab("tours")}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-left transition hover:border-orange-500 hover:bg-orange-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                      <svg
                        className="h-5 w-5 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Thêm Tour</p>
                      <p className="text-xs text-gray-500">
                        Tạo tour du lịch mới
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("journey-gallery")}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Thêm Gallery
                      </p>
                      <p className="text-xs text-gray-500">
                        Upload ảnh hành trình
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("events")}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-left transition hover:border-purple-500 hover:bg-purple-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        className="h-5 w-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Thêm Event</p>
                      <p className="text-xs text-gray-500">Đăng tin tức mới</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("company-info")}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Thông tin công ty
                      </p>
                      <p className="text-xs text-gray-500">
                        Sửa hotline, email, địa chỉ
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Guide */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">
                  Hướng dẫn sử dụng
                </h3>
                <div className="space-y-3 rounded-lg bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Quản lý Tours
                      </p>
                      <p className="text-xs text-gray-600">
                        Vào tab &quot;Tours&quot; để thêm, sửa, xóa và quản lý
                        các tour du lịch. Upload ảnh từ máy và quản lý thông tin
                        chi tiết.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Quản lý Thư viện ảnh
                      </p>
                      <p className="text-xs text-gray-600">
                        Upload album ảnh hành trình của khách hàng. Có thể chọn
                        nhiều ảnh cùng lúc và phân loại theo danh mục.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Quản lý Tin tức & Sự kiện
                      </p>
                      <p className="text-xs text-gray-600">
                        Đăng tin tức và sự kiện. Có thể đánh dấu &quot;Tin nổi
                        bật&quot; hoặc &quot;Sự kiện nổi bật&quot; để hiển thị
                        ưu tiên.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      4
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Upload ảnh từ máy
                      </p>
                      <p className="text-xs text-gray-600">
                        Tất cả ảnh được upload tự động lên Cloudinary. Giữ Ctrl
                        (Windows) hoặc Cmd (Mac) để chọn nhiều ảnh cùng lúc.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      5
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Xem trước nội dung
                      </p>
                      <p className="text-xs text-gray-600">
                        Click icon mắt để xem nội dung trên website. Tất cả thay
                        đổi hiển thị real-time sau khi lưu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Info */}
              <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">
                      Thông tin hệ thống
                    </p>
                    <p className="mt-1 text-xs text-blue-700">
                      • Database: MongoDB Atlas
                      <br />
                      • Storage: Cloudinary (10GB miễn phí)
                      <br />
                      • CMS: Payload 3.0 + Next.js 15
                      <br />• Mọi thay đổi được lưu trữ an toàn trên cloud
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tours" && <ToursCRUD onStatsUpdate={fetchStats} />}
          {activeTab === "journey-gallery" && (
            <JourneyGalleryCRUD onStatsUpdate={fetchStats} />
          )}
          {activeTab === "events" && <EventsCRUD onStatsUpdate={fetchStats} />}
          {activeTab === "company-info" && <CompanyInfoCRUD />}
        </div>
      </div>
    </div>
  );
}
