import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourwebsite.com";

  // Trang tĩnh
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];

  // Trang động (sản phẩm, blog)
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

  return [...staticPages];
  // ...productPages, ...blogPages];
}
