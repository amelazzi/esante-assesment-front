import { useUser } from "../useUser";
import { usePostComments } from "./usePostComments";
import { usePostDetails } from "./usePostDetails";

export const usePostData = (postId: number) => {
  const {
    post,
    loading: postLoading,
    error: postError,
  } = usePostDetails(postId);

  const {
    user,
    loading: authorLoading,
    error: authorError,
  } = useUser(post?.userId ?? 0);

  const {
    comments,
    loading: commentsLoading,
    error: commentsError,
  } = usePostComments(postId);

  return {
    post,
    author: user,
    comments,
    loading: postLoading || authorLoading || commentsLoading,
    error: postError || authorError || commentsError,
  };
};
