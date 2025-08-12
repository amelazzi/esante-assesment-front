import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { ErrorPanel } from "../../components/ErrorPanel";
import { Loader } from "../../components/Loader";

export const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { user, loading, error } = useUser(Number(id));
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`;

  if (error) return <ErrorPanel />;
  if (loading) return <Loader />;

  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-semibold text-lg">
            <img
              src={avatarUrl}
              alt={`${user?.name}`}
              className="w-12 h-12 rounded-full border border-gray-300"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
            <p className="text-sm text-gray-500">@{user?.username}</p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${user?.email}`}
              className="text-blue-600 hover:underline"
            >
              {user?.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user?.phone}
          </p>
          <p>
            <span className="font-semibold">Website:</span>{" "}
            <a
              href={`https://${user?.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user?.website}
            </a>
          </p>
        </div>

        <div className="mt-4 text-sm text-gray-700">
          <span className="font-semibold">Address:</span>{" "}
          {`${user?.address.street}, ${user?.address.suite}, ${user?.address.city} ${user?.address.zipcode}`}
        </div>

        <div className="mt-4 text-sm text-gray-700">
          <span className="font-semibold">Company:</span> {user?.company.name}
          <p className="text-gray-500">{user?.company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
};
