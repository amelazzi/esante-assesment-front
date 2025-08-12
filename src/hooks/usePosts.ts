import { Post } from "../interfaces/Post";
import { useApi } from "./useApi";

export function usePosts() {
  const { data, loading, error } = useApi<Post[]>("/posts");

  return {
    posts: data ?? [],
    loading,
    error,
  };
}
