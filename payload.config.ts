// payload.config.ts
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";
import sharp from "sharp";

import Users from "./src/collections/Users";
import Media from "./src/collections/Media";
import Pages from "./src/collections/Pages";
import Posts from "./src/collections/Posts";
import Tours from "./src/collections/Tours";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000",

  admin: {
    user: "users",
  },

  routes: {
    api: "/api",
    admin: "/admin",
  },

  collections: [Users, Media, Pages, Posts, Tours], // Thêm Tours vào đây

  secret: process.env.PAYLOAD_SECRET || "",

  typescript: {
    outputFile: path.resolve(process.cwd(), "payload-types.ts"),
  },

  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),

  sharp,
});