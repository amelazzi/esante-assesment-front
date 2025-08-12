import { Comment } from "../../interfaces/Comment";
import { useApi } from "../useApi";

export const usePostComments = (id: number) => {
  const { data, loading, error } = useApi<Comment[]>(`/comments?postId=${id}`);

  return {
    comments: data,
    loading,
    error,
  };
};
