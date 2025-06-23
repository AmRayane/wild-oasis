import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const {
    mutate: editCabin,
    isPending: isEditing,
    error,
  } = useMutation({
    mutationFn: (data) => createEditCabin(data),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  console.log(error);
  return { editCabin, isEditing };
}
