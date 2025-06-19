import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { singUp as signupApi } from "../../services/apiAuth";
export function useSingup() {
  const { mutate: singUp, isPending: inRegistration } = useMutation({
    mutationFn: ({ fullName, password, email }) =>
      signupApi({ fullName, password, email }),
    onSuccess: () => {
      toast.success("user added successfully");
    },
  });
  return { singUp, inRegistration };
}
