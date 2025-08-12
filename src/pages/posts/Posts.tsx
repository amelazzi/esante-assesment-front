import { usePosts } from "../../hooks/usePosts";
import { ErrorPanel } from "../../components/ErrorPanel";
import { Loader } from "../../components/Loader";
import { PostItem } from "../../components/PostItem";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../router/RoutePaths";

export const Posts = () => {
  const { posts, loading, error } = usePosts();
  const navigate = useNavigate();

  const showPostDetails = (postId: number) => {
    const postDetailsPath = RoutePaths.POST_DETAILS.replace(
      ":id",
      String(postId)
    );

    navigate(postDetailsPath);
  };

  if (error) return <ErrorPanel />;
  if (loading) return <Loader />;

  return (
    <div className="h-screen max-w-3xl mx-auto p-4 flex flex-col">
      <ul className="flex-1 overflow-y-auto space-y-4">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onClick={() => showPostDetails(post.id)}
          />
        ))}
      </ul>
    </div>
  );
};
