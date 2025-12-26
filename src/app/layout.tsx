import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const vietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vietnam-pro",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    default: "TACHUDU - Du lịch & Sự kiện Chuyên nghiệp",
    template: "%s | TACHUDU",
  },
  description:
    "TACHUDU chuyên cung cấp dịch vụ vé máy bay, tour du lịch, tổ chức sự kiện (MICE) và dịch vụ visa chuyên nghiệp. Khám phá thế giới cùng chúng tôi!",
  keywords: [
    "du lịch",
    "vé máy bay",
    "tour du lịch",
    "tổ chức sự kiện",
    "MICE",
    "visa",
    "khách sạn",
    "TACHUDU",
  ],
  authors: [{ name: "TACHUDU Team", url: "https://tachudu.vn" }],
  creator: "TACHUDU",
  publisher: "TACHUDU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tachudu.vn"),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/vi",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://tachudu.vn",
    title: "TACHUDU - Đồng hành cùng mỗi chuyến đi",
    description:
      "Giải pháp du lịch và sự kiện toàn diện cho doanh nghiệp và cá nhân.",
    siteName: "TACHUDU",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TACHUDU Travel & Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TACHUDU - Du lịch & Sự kiện",
    description:
      "Chuyên cung cấp vé máy bay, tour, sự kiện và visa chuyên nghiệp.",
    creator: "@tachudu.vn",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${vietnamPro.variable} ${inter.variable}`}>
      <body className={`${vietnamPro.className} antialiased`}>
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
