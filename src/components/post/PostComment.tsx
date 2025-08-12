import { Comment } from "../../interfaces/Comment";

export const PostComment = ({ comment }: { comment: Comment }) => {
  return (
    <li key={comment.id} className="bg-white p-4 rounded shadow">
      <p className="font-semibold">
        {comment.name}{" "}
        <span className="text-sm text-gray-500">({comment.email})</span>
      </p>
      <p className="mt-1 text-gray-700">{comment.body}</p>
    </li>
  );
};
