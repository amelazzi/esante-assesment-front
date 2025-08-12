import { User } from "../../interfaces/User";

export const PostAuthor = ({ author }: { author: User }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${author.name}`;

  return (
    <div className="flex items-center gap-4 hover:cursor-pointer">
      <img
        src={avatarUrl}
        alt={`${author.name}`}
        className="w-12 h-12 rounded-full border border-gray-300"
      />
      <div>
        <div className="font-semibold">{author.name}</div>
        <div className="text-gray-500 text-sm">{author.email}</div>
      </div>
    </div>
  );
};
