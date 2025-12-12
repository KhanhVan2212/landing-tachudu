"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { COMPANY_NAME } from "../../../constants";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/" || location === "/en" || location === "/vi";

  // Helper to generate correct link
  const getLink = (href: string) => {
    if (href.startsWith("#")) {
      return isHome ? href : `/#${href.slice(1)}`;
    }
    return href;
  };

  const navLinks = [
    { name: "Trang chủ", href: "/", type: "link" },
    { name: "Dịch vụ", href: "/services", type: "anchor" },
    { name: "Về chúng tôi", href: "/about", type: "link" },
    { name: "Ưu đãi", href: "/deals", type: "link" },
    { name: "Chính sách", href: "/policy", type: "link" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${isScrolled || !isHome ? "bg-white py-2 shadow-md" : "bg-transparent py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className=""
            >
              <Image src="/images/logo.png" alt="Logo" width={150} height={100} className="w-[100px] h-[60px] sm:w-[150px] sm:h-[80px]" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline gap-8">
              {navLinks.map((link) => {
                const isActive =
                  location === link.href ||
                  location === `/en${link.href}` ||
                  location === `/vi${link.href}`;
                const textColor =
                  isScrolled || !isHome
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-white hover:text-orange-200";

                if (link.type === "link") {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`rounded-md  text-sm font-medium transition-colors duration-200 ${textColor} ${isActive ? "font-bold text-orange-500" : ""}`}
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={getLink(link.href)}
                    className={`rounded-md  text-sm font-medium transition-colors duration-200 ${textColor}`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
            </div>
          </div>
          <div className="hidden md:block">
            <a
                href={getLink("#contact")}
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-orange-600 hover:shadow-orange-500/30"
              >
                Đặt ngay
              </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center rounded-md p-2 ${
                isScrolled || !isHome ? "text-gray-700" : "text-white"
              } hover:text-orange-500 focus:outline-none`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-white shadow-xl md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => {
              if (link.type === "link") {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={getLink(link.href)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href={getLink("#contact")}
              className="block rounded-md px-3 py-2 text-base font-bold text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Đặt ngay
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
