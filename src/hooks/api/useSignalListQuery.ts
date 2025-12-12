import { getSignalList } from "@/actions";
import { useQuery } from "@tanstack/react-query";

const useSignalListQuery = (params: any) => {
  return useQuery({
    queryKey: ["signal-list-query", params],
    queryFn: async ({ queryKey }) => {
      const res = await getSignalList(queryKey[1]);
      return res;
    },
  });
};

export default useSignalListQuery;
