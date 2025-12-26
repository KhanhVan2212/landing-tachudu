import { GlobalConfig } from "payload";

const CompanyInfo: GlobalConfig = {
  slug: "company-info",
  label: "Company Information",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "address",
      type: "text",
      label: "Địa chỉ",
      defaultValue:
        "Số 4 ngõ 230/31 Phố Định Công Thượng, Phường Định Công, Quận Hoàng Mai, HN",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      defaultValue: "tachuduvn@gmail.com",
    },
    {
      name: "hotline",
      type: "text",
      label: "Hotline",
      defaultValue: "024.39351122",
    },
    {
      name: "facebook",
      type: "text",
      label: "Link Facebook",
    },
    {
      name: "zalo",
      type: "text",
      label: "Link Zalo",
    },
  ],
};

export default CompanyInfo;
