// src/collections/Users.ts
import { CollectionConfig, Access } from "payload";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user?.role === "admin") return true;

  return {
    id: {
      equals: user?.id,
    },
  };
};

const admins = ({ req: { user } }: { req: { user?: any } }) => {
  return user?.role === "admin";
};

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: adminsAndUser,
    create: admins,
    update: adminsAndUser,
    delete: admins,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "user",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "User", value: "user" },
      ],
      access: {
        update: admins,
      },
    },
  ],
};

export default Users;
