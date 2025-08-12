import { Post } from "../../interfaces/Post";
import { useApi } from "../useApi";

export const usePostDetails = (id: number) => {
  const { data, loading, error } = useApi<Post>(`/posts/${id}`);
  return {
    post: data,
    loading,
    error,
  };
};
