import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>

        <h2 className="text-2xl font-semibold text-gray-600 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-3 mb-8">
          Looks like this page took an unexpected detour.{" "}
          <br className="hidden lg:flex" /> The chapter you're looking for
          doesn't exist, but there are plenty of great stories waiting for you.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
