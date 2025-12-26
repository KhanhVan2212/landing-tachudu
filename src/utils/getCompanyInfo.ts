import { getPayload } from "payload";
import configPromise from "../../payload.config";

export async function getCompanyInfo() {
  const payload = await getPayload({ config: configPromise });
  const companyInfo = await payload.findGlobal({
    slug: "company-info",
  });
  return companyInfo;
}
