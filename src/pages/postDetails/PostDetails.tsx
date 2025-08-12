import { useParams } from "react-router-dom";
import { ErrorPanel } from "../../components/ErrorPanel";
import { Loader } from "../../components/Loader";
import { usePostData } from "../../hooks/post/usePostData";
import { PostAuthor } from "../../components/post/PostAuthor";
import { PostComment } from "../../components/post/PostComment";

export const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const { post, author, comments, loading, error } = usePostData(postId);

  if (error) return <ErrorPanel />;
  if (loading) return <Loader />;

  return (
    <div className="h-screen flex flex-col max-w-3xl mx-auto bg-white p-6 rounded shadow space-y-8">
      <section className="space-y-4">
        {author && <PostAuthor author={author} />}
        <h1 className="text-3xl font-bold mb-2">{post?.title}</h1>
        <p className="text-gray-700">{post?.body}</p>
      </section>
      <section className="flex flex-col flex-1 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">
          Comments ({comments?.length})
        </h2>
        {comments?.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          <ul className="space-y-4">
            {comments?.map((comment) => (
              <PostComment key={comment.id} comment={comment} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
