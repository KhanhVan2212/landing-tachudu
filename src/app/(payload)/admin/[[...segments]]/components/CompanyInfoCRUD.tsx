"use client";

import React, { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { toast } from "sonner";

export default function CompanyInfoCRUD() {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    hotline: "",
    facebook: "",
    zalo: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  const fetchCompanyInfo = async () => {
    try {
      const response = await fetch("/api/globals/company-info");
      const data = await response.json();
      if (data) {
        setFormData({
          address: data.address || "",
          email: data.email || "",
          hotline: data.hotline || "",
          facebook: data.facebook || "",
          zalo: data.zalo || "",
        });
      }
    } catch (error) {
      console.error("Error fetching company info:", error);
      toast.error("Không thể tải thông tin công ty");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/globals/company-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Cập nhật thông tin công ty thành công!");
      } else {
        toast.error(data.details || data.error || "Có lỗi xảy ra khi cập nhật");
      }
    } catch (error) {
      console.error("Error saving company info:", error);
      toast.error("Có lỗi xảy ra khi lưu thông tin");
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Quản lý Thông tin Công ty</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl rounded-lg bg-white p-6 shadow"
      >
        <div className="space-y-6">
          {/* Address */}
          <div>
            <label className="mb-2 block text-sm font-medium">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
            />
          </div>

          {/* Hotline */}
          <div>
            <label className="mb-2 block text-sm font-medium">Hotline</label>
            <input
              type="text"
              name="hotline"
              value={formData.hotline}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
            />
          </div>

          {/* Facebook */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Link Facebook
            </label>
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
            />
          </div>

          {/* Zalo */}
          <div>
            <label className="mb-2 block text-sm font-medium">Link Zalo</label>
            <input
              type="text"
              name="zalo"
              value={formData.zalo}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-2 font-semibold text-white hover:bg-orange-700 disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>
      </form>
    </div>
  );
}
