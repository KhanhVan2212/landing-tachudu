export default function MapLocation() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Bản đồ chỉ đường
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Số 4 ngõ 230/31 Phố Định Công Thượng, Phường Định Công,
          Quận Hoàng Mai, Hà Nội
        </p>

        <div className="w-full h-[480px] rounded-2xl overflow-hidden border shadow-sm">
          <iframe
            title="Google Maps Satellite"
            src="https://www.google.com/maps?q=S%E1%BB%91%204%20ng%C3%B5%20230/31%20Ph%E1%BB%91%20%C4%90%E1%BB%8Bnh%20C%C3%B4ng%20Th%C6%B0%E1%BB%A3ng%2C%20Ho%C3%A0ng%20Mai%2C%20H%C3%A0%20N%E1%BB%99i&t=k&z=17&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6">
          <a
            href="https://www.google.com/maps?q=S%E1%BB%91%204%20ng%C3%B5%20230/31%20Ph%E1%BB%91%20%C4%90%E1%BB%8Bnh%20C%C3%B4ng%20Th%C6%B0%E1%BB%A3ng%2C%20Ho%C3%A0ng%20Mai%2C%20H%C3%A0%20N%E1%BB%99i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition"
          >
            Xem bản đồ lớn hơn
          </a>
        </div>
      </div>
    </section>
  );
}
