import serverFetchApi from "@/plugins/serverFetchApi";

export const getSignalList = async (rawData: any, requestInit?: any) => {
  const res = await serverFetchApi.post(
    "/api/signals/24h",
    rawData,
    requestInit
  );
  return res;
};
