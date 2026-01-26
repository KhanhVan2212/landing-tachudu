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
    { name: "Du lịch trong nước", href: "/domestic-tours", type: "link" },
    { name: "Du lịch nước ngoài", href: "/foreign-tours", type: "link" },
    { name: "MICE", href: "/mice", type: "link" },
    { name: "Sự kiện", href: "/event", type: "link" },
    { name: "Dịch vụ du lịch", href: "/services", type: "link" },
    { name: "Về chúng tôi", href: "/about", type: "link" },
    { name: "Liên hệ", href: "/contact", type: "link" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${isScrolled || !isHome ? "bg-white py-2 shadow-md" : "bg-transparent py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={100}
                className="h-[60px] w-[100px] sm:h-[80px] sm:w-[150px]"
              />
            </Link>
          </div>

          <div className="hidden flex-1 lg:block">
            <div className="flex flex-wrap items-baseline justify-center gap-2">
              {navLinks.map((link) => {
                const isActive =
                  location === link.href ||
                  (link.href === "/"
                    ? location === "/en" || location === "/vi"
                    : location === `/en${link.href}` ||
                      location === `/vi${link.href}`);

                const baseClasses =
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200";

                const activeClasses = "bg-orange-500 text-white font-bold";
                const inactiveClasses =
                  isScrolled || !isHome
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-white hover:text-orange-200";

                const className = `${baseClasses} ${
                  isActive ? activeClasses : inactiveClasses
                }`;

                if (link.type === "link") {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={className}
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={getLink(link.href)}
                    className={className}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden xl:block">
            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-orange-600 hover:shadow-orange-500/30"
            >
              Đặt ngay
            </Link>
          </div>

          <div className="lg:hidden">
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
        <div className="bg-white shadow-xl lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => {
              const isActive =
                location === link.href ||
                location === `/en${link.href}` ||
                location === `/vi${link.href}`;

              const activeClass =
                "bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-500";
              const normalClass = "text-gray-700 hover:text-orange-600";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base transition-all duration-200 ${
                    isActive ? activeClass : normalClass
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-bold ${
                location === "/contact" ||
                location === "/en/contact" ||
                location === "/vi/contact"
                  ? "bg-orange-500 text-white"
                  : "text-orange-600"
              }`}
            >
              Đặt ngay
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
