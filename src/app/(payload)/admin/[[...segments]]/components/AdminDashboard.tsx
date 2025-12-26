"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ToursCRUD from ".//ToursCRUD";
import JourneyGalleryCRUD from "./JourneyGalleryCRUD";


type Tab = "dashboard" | "destinations" | "tours" | "journey-gallery";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    destinations: 0,
    tours: 0,
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
      // Fetch destinations stats
      const destResponse = await fetch("/api/destinations");
      const destData = await destResponse.json();

      // Fetch tours stats
      const toursResponse = await fetch("/api/tours?limit=1");
      const toursData = await toursResponse.json();

      if (destData.success && toursData.success) {
        setStats({
          destinations: destData.totalDocs || 0,
          tours: toursData.totalDocs || 0,
        });
      }
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">
              Hà Anh Travel CMS Admin
            </h1>
            <div className="flex items-center gap-4">
              {user && <span className="text-sm text-gray-600">{user.email}</span>}
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
              Dashboard
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
              Journey Gallery
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="rounded-lg bg-white shadow">
          {activeTab === "dashboard" && (
            <div className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Dashboard Overview</h2>
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

                {/* Destinations Stats */}
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-blue-600">
                      Destinations
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {stats.destinations}
                  </div>
                  <p className="mt-2 text-xs text-blue-600">
                    Điểm đến phổ biến
                  </p>
                </div>

                {/* Quick Actions Card */}
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 shadow-sm">
                  <div className="mb-2 text-sm font-medium text-green-600">
                    Quick Actions
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => setActiveTab("tours")}
                      className="w-full rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-green-700 shadow-sm hover:bg-green-50"
                    >
                      + Thêm Tour mới
                    </button>
                    <button
                      onClick={() => setActiveTab("destinations")}
                      className="w-full rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-green-700 shadow-sm hover:bg-green-50"
                    >
                      + Thêm Destination
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">Hướng dẫn sử dụng</h3>
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
                        Vào tab &quot;Tours&quot; để thêm, sửa, xóa và quản lý các tour du
                        lịch
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Quản lý Destinations
                      </p>
                      <p className="text-xs text-gray-600">
                        Vào tab &quot;Destinations&quot; để quản lý các điểm đến
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Xem trước nội dung
                      </p>
                      <p className="text-xs text-gray-600">
                        Click icon mắt để xem tour trên website
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tours" && <ToursCRUD onStatsUpdate={fetchStats} />}
          {activeTab === "journey-gallery" && (
            <JourneyGalleryCRUD onStatsUpdate={fetchStats} />
          )}

        </div>
      </div>
    </div>
  );
}