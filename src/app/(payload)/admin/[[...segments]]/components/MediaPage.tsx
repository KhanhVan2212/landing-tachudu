"use client";

import { useState, useEffect } from "react";

interface Media {
  id: string;
  filename: string;
  mimeType: string;
  filesize: number;
  url: string;
  alt?: string;
  updatedAt: string;
}

export default function MediaPage() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const token = localStorage.getItem("payload-token");
      const response = await fetch("/api/payload/api/media", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMedia(data.docs || []);
      } else {
        setError("Không thể tải danh sách media");
      }
    } catch (err) {
      setError("Có lỗi xảy ra");
      console.error("Fetch media error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  if (loading) {
    return <div className="p-6">Đang tải...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Quản lý Media</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Upload Media
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {media.map((item) => (
          <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden border">
            {item.mimeType?.startsWith("image/") ? (
              <img
                src={item.url}
                alt={item.alt || item.filename}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">File</span>
              </div>
            )}
            <div className="p-4">
              <h3 className="font-medium text-sm truncate">{item.filename}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {formatFileSize(item.filesize)}
              </p>
              <div className="mt-2 flex gap-2">
                <button className="text-xs text-blue-600 hover:text-blue-900">
                  Edit
                </button>
                <button className="text-xs text-red-600 hover:text-red-900">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

