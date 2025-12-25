import { cookies } from "next/headers";
import { decryptObject, decryptToken } from "@/utils/encryption";

const serverFetchApi = {
  post: async (
    url: string,
    rawData?: any,
    requestInit?: any,
    headers?: any
  ) => {
    try {
      const cookieStore = await cookies(); // Thêm await
      const encryptedToken = cookieStore.get("act")?.value;
      const accessToken = encryptedToken && decryptToken(encryptedToken);
      const data = rawData ? decryptObject(rawData) : {};
      const newUrl = `${process.env.API_BASE_URL}${url}`;
      const body = {
        ...data,
      };
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        } as any,
        body: JSON.stringify(body),
        ...requestInit,
      };

      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      const response = await fetch(newUrl, config);
      const result = await response.json();

      if (result?.code == 401) {
        cookieStore.delete("jwt"); // Sử dụng cookieStore thay vì cookies()
        cookieStore.delete("act");
        return;
      }

      return result;
    } catch (err: any) {
      return err?.message || err;
    }
  },
};

export default serverFetchApi;