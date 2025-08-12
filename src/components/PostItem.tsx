import { MouseEventHandler } from "react";
import { Post } from "../interfaces/Post";

export const PostItem = ({
  post,
  onClick,
}: {
  post: Post;
  onClick: MouseEventHandler<HTMLLIElement>;
}) => {
  return (
    <li
      className="bg-white rounded-md shadow-md p-6 hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </li>
  );
};
