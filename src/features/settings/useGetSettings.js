import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useGetSettings() {
  const {
    data: settings,
    isPending,
    error,
  } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  });
  return { isPending, settings };
}
