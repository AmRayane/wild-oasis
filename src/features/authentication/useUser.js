import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  console.log(user);
  return { user, isLoading, authenticated: user?.role === "authenticated" };
}
