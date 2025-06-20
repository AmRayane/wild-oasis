import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onError: (err) => {
      toast.error("Provided email or password are incorrect");
    },
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("logged in successfully");
    },
  });
  return { login, isLoading };
}
