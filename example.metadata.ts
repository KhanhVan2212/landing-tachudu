// // 1. Metadata cơ bản cho trang chính (app/layout.tsx)
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: {
//     default: "Tên Website - Mô tả ngắn gọn",
//     template: "%s | Tên Website",
//   },
//   description: "Mô tả chi tiết về website, tối ưu cho SEO với từ khóa chính",
//   keywords: ["từ khóa 1", "từ khóa 2", "từ khóa 3"],
//   authors: [{ name: "Tên tác giả", url: "https://example.com" }],
//   creator: "Tên người tạo",
//   publisher: "Tên nhà xuất bản",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://yourwebsite.com"),
//   alternates: {
//     canonical: "/",
//     languages: {
//       "vi-VN": "/vi",
//       "en-US": "/en",
//     },
//   },
//   openGraph: {
//     type: "website",
//     locale: "vi_VN",
//     url: "https://yourwebsite.com",
//     title: "Tiêu đề cho Open Graph",
//     description: "Mô tả cho Open Graph",
//     siteName: "Tên Website",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Mô tả hình ảnh",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Tiêu đề cho Twitter",
//     description: "Mô tả cho Twitter",
//     creator: "@twitter_handle",
//     images: ["/twitter-image.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   verification: {
//     google: "mã_xác_minh_google",
//     yandex: "mã_xác_minh_yandex",
//     yahoo: "mã_xác_minh_yahoo",
//   },
// };

// // 2. Metadata động cho trang sản phẩm (app/product/[id]/page.tsx)
// import { Metadata } from "next";

// interface Props {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// }

// // Hàm tạo metadata động
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // Lấy dữ liệu sản phẩm
//   const product = await getProduct(params.id);

//   if (!product) {
//     return {
//       title: "Không tìm thấy sản phẩm",
//       description: "Sản phẩm không tồn tại hoặc đã bị xóa",
//     };
//   }

//   return {
//     title: `${product.name} - Giá ${product.price.toLocaleString("vi-VN")}đ`,
//     description: product.description,
//     keywords: product.tags,
//     openGraph: {
//       title: product.name,
//       description: product.description,
//       type: "product",
//       images: [
//         {
//           url: product.image,
//           width: 800,
//           height: 600,
//           alt: product.name,
//         },
//       ],
//       url: `/product/${params.id}`,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: product.name,
//       description: product.description,
//       images: [product.image],
//     },
//     alternates: {
//       canonical: `/product/${params.id}`,
//     },
//   };
// }

// // 3. Metadata cho trang blog (app/blog/[slug]/page.tsx)
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const post = await getBlogPost(params.slug);

//   if (!post) {
//     return {
//       title: "Bài viết không tồn tại",
//       description: "Bài viết không tìm thấy hoặc đã bị xóa",
//     };
//   }

//   return {
//     title: post.title,
//     description: post.excerpt,
//     authors: [{ name: post.author.name, url: post.author.url }],
//     publishedTime: post.publishedAt,
//     modifiedTime: post.updatedAt,
//     keywords: post.tags,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       type: "article",
//       publishedTime: post.publishedAt,
//       modifiedTime: post.updatedAt,
//       authors: [post.author.name],
//       images: [
//         {
//           url: post.featuredImage,
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//       url: `/blog/${params.slug}`,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.excerpt,
//       images: [post.featuredImage],
//     },
//     alternates: {
//       canonical: `/blog/${params.slug}`,
//     },
//   };
// }

// // 4. Structured Data (JSON-LD) cho SEO
// export function generateStructuredData(type: string, data: any) {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": type,
//     ...data,
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify(structuredData),
//       }}
//     />
//   );
// }

// // Ví dụ sử dụng Structured Data cho sản phẩm
// export function ProductStructuredData({ product }: { product: any }) {
//   const productData = {
//     name: product.name,
//     image: product.image,
//     description: product.description,
//     sku: product.sku,
//     mpn: product.mpn,
//     brand: {
//       "@type": "Brand",
//       name: product.brand,
//     },
//     offers: {
//       "@type": "Offer",
//       url: `https://yourwebsite.com/product/${product.id}`,
//       priceCurrency: "VND",
//       price: product.price,
//       priceValidUntil: "2024-12-31",
//       itemCondition: "https://schema.org/NewCondition",
//       availability: "https://schema.org/InStock",
//       seller: {
//         "@type": "Organization",
//         name: "Tên cửa hàng",
//       },
//     },
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: product.rating,
//       reviewCount: product.reviewCount,
//     },
//   };

//   return generateStructuredData("Product", productData);
// }

// // 5. Sitemap tự động (app/sitemap.ts)
// import { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://yourwebsite.com";

//   // Trang tĩnh
//   const staticPages = [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: "yearly" as const,
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: new Date(),
//       changeFrequency: "monthly" as const,
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: "yearly" as const,
//       priority: 0.5,
//     },
//   ];

//   // Trang động (sản phẩm, blog)
//   const products = await getProducts();
//   const productPages = products.map((product) => ({
//     url: `${baseUrl}/product/${product.id}`,
//     lastModified: new Date(product.updatedAt),
//     changeFrequency: "weekly" as const,
//     priority: 0.7,
//   }));

//   const posts = await getBlogPosts();
//   const blogPages = posts.map((post) => ({
//     url: `${baseUrl}/blog/${post.slug}`,
//     lastModified: new Date(post.updatedAt),
//     changeFrequency: "monthly" as const,
//     priority: 0.6,
//   }));

//   return [...staticPages, ...productPages, ...blogPages];
// }

// // 6. Robots.txt (app/robots.ts)
// import { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//       disallow: ["/private/", "/admin/", "/api/"],
//     },
//     sitemap: "https://yourwebsite.com/sitemap.xml",
//   };
// }

// // 7. Metadata cho trang 404 (app/not-found.tsx)
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Không tìm thấy trang - 404",
//   description: "Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.",
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

// // 8. Hook tùy chỉnh cho SEO
// import { useEffect } from "react";

// export function useSEO(title: string, description: string) {
//   useEffect(() => {
//     // Cập nhật title động
//     document.title = title;

//     // Cập nhật meta description
//     const metaDescription = document.querySelector('meta[name="description"]');
//     if (metaDescription) {
//       metaDescription.setAttribute("content", description);
//     }
//   }, [title, description]);
// }

// // 9. Component SEO tùy chỉnh
// import Head from "next/head";

// interface SEOProps {
//   title: string;
//   description: string;
//   image?: string;
//   url?: string;
//   type?: "website" | "article" | "product";
// }

// export function SEO({
//   title,
//   description,
//   image,
//   url,
//   type = "website",
// }: SEOProps) {
//   const fullTitle = `${title} | Tên Website`;
//   const fullUrl = url
//     ? `https://yourwebsite.com${url}`
//     : "https://yourwebsite.com";
//   const fullImage = image
//     ? `https://yourwebsite.com${image}`
//     : "https://yourwebsite.com/default-og.jpg";

//   return (
//     <Head>
//       <title>{fullTitle}</title>
//       <meta name="description" content={description} />
//       <link rel="canonical" href={fullUrl} />

//       {/* Open Graph */}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:type" content={type} />
//       <meta property="og:url" content={fullUrl} />
//       <meta property="og:image" content={fullImage} />

//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={fullImage} />
//     </Head>
//   );
// }

// // 10. Best Practices và Tips
// /*
// SEO Best Practices cho Next.js:

// 1. Tiêu đề (Title):
//    - Độ dài: 50-60 ký tự
//    - Chứa từ khóa chính ở đầu
//    - Unique cho mỗi trang

// 2. Mô tả (Description):
//    - Độ dài: 150-160 ký tự
//    - Hấp dẫn, chứa từ khóa
//    - Call-to-action rõ ràng

// 3. Hình ảnh Open Graph:
//    - Kích thước: 1200x630px
//    - Định dạng: JPG, PNG
//    - Dung lượng < 1MB

// 4. Structured Data:
//    - Sử dụng schema.org
//    - Test với Google Rich Results Test
//    - Phù hợp với nội dung

// 5. Sitemap:
//    - Cập nhật tự động
//    - Gửi lên Google Search Console
//    - Bao gồm lastModified

// 6. Performance:
//    - Core Web Vitals
//    - Image optimization
//    - Lazy loading
// */
