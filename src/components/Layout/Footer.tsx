import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { COMPANY_NAME, SLOGAN } from "../../../constants";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={60}
              className="h-[60px] w-[100px] sm:h-[80px] sm:w-[150px]"
            />
            <p className="mb-6 italic leading-relaxed text-gray-300">
              {SLOGAN}
            </p>

            {/* Contact Info */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone size={16} className="mr-2 text-orange-500" />
                <span>024.39351122</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail size={16} className="mr-2 text-orange-500" />
                <span>tachuduvn@gmail.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin
                  size={16}
                  className="mr-2 mt-1 flex-shrink-0 text-orange-500"
                />
                <span>
                  Số 4 ngõ 230/31 Phố Định Công Thượng, Phường Định Công, Quận
                  Hoàng Mai, HN
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-orange-600"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-orange-600"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.threads.net/@tachudu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-orange-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 7.5c-1.333-3-3.667-4.5-7-4.5-5 0-7.5 3.5-7.5 7.5s2.5 7.5 7.5 7.5c3.333 0 5.667-1.5 7-4.5"></path>
                  <path d="M12 12c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5-2-4.5-4.5-4.5"></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-orange-600"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 border-b border-orange-500/30 pb-2 text-lg font-bold text-white">
              Dịch vụ
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Vé máy bay
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Tour trong nước
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Tour quốc tế
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Tổ chức sự kiện
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 border-b border-orange-500/30 pb-2 text-lg font-bold text-white">
              Công ty
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Đội ngũ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Tuyển dụng
                </a>
              </li>
              <li>
                <Link
                  href="/deals"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Ưu đãi
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 border-b border-orange-500/30 pb-2 text-lg font-bold text-white">
              Hỗ trợ
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-orange-500"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-orange-500 transition-all group-hover:w-2"></span>
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="transition-colors hover:text-orange-500">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-orange-500">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-orange-500">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
