import { User } from "../interfaces/User";
import { useApi } from "./useApi";

export const useUser = (authorId: number) => {
  const { data, loading, error } = useApi<User>(`/users/${authorId}`);

  return {
    user: data,
    loading,
    error,
  };
};
