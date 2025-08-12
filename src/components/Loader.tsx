export const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white space-y-4">
      <div
        className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"
        style={{ animationDuration: "2s" }}
      />
      <p className="text-gray-700 text-lg font-medium">Loading ...</p>
    </div>
  );
};
