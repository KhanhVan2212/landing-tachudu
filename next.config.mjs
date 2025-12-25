  import createNextIntlPlugin from "next-intl/plugin";
  import { withPayload } from "@payloadcms/next/withPayload";

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    compress: true,
    // Payload CMS packages được tự động xử lý bởi withPayload
    // Không cần thêm vào transpilePackages vì chúng được đặt trong serverExternalPackages
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };

  const withNextIntl = createNextIntlPlugin();

  export default withPayload(withNextIntl(nextConfig));
