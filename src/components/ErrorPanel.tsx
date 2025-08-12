export const ErrorPanel = ({
  message = "An error occurred. Please try again.",
}: {
  message?: string;
}) => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-red-50 p-6">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md shadow-md max-w-sm text-center">
        <p className="font-semibold text-lg mb-2">Error occurred</p>
        <p>{message}</p>
      </div>
    </div>
  );
};
