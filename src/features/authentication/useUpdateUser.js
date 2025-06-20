import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const {
    mutate: updateUser,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: ({ fullName, newPassword, avatar }) =>
      updateUserApi({ fullName, newPassword, avatar }),
    onSuccess: (user) => {
      queryClient.invalidateQueries(["user"]);
    },
    onError: () => {
      toast.error("can t upload the new informations");
    },
  });
  return { updateUser, isLoading };
}
