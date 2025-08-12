import { usePosts } from "../../hooks/usePosts";
import { ErrorPanel } from "../../components/ErrorPanel";
import { Loader } from "../../components/Loader";
import { PostItem } from "../../components/PostItem";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../router/RoutePaths";
import { useState } from "react";

export const Posts = () => {
  const { posts, loading, error } = usePosts();
  const navigate = useNavigate();
  const [searchPostTitle, setSearchPostTitle] = useState("");

  const showPostDetails = (postId: number) => {
    const postDetailsPath = RoutePaths.POST_DETAILS.replace(
      ":id",
      String(postId)
    );

    navigate(postDetailsPath);
  };
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchPostTitle.toLowerCase())
  );

  if (error) return <ErrorPanel />;
  if (loading) return <Loader />;

  return (
    <div className="h-screen max-w-3xl mx-auto p-4 flex flex-col shadow-md">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        className="sticky top-0 z-10 border shadow-md p-2 rounded w-full mb-4 bg-white"
        value={searchPostTitle}
        onChange={(e) => setSearchPostTitle(e.target.value)}
      />
      <ul className="flex-1 overflow-y-auto space-y-4">
        {filteredPosts.map((post) => (
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
