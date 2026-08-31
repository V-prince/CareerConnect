import { useAuth } from "../../store/UserContext";

export const LoadingPage = () => {
  const { user } = useAuth()
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        
        <h2 className="text-2xl font-bold text-gray-800">
          {user?.fullname
            ? `Welcome Back ${user.fullname}!`
            : "Welcome Back!"}
        </h2>

       
        <p className="mt-2 text-gray-500 text-sm">
          Preparing your workspace
          <span className="inline-flex ml-1">
            <span className="animate-pulse">.</span>
            <span className="animate-pulse delay-150">.</span>
            <span className="animate-pulse delay-300">.</span>
          </span>
        </p>

        
        <div className="w-48 h-1.5 bg-gray-200 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full w-1/2 bg-blue-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>

      </div>

      <style>
        {`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(300%);
            }
          }
        `}
      </style>
    </div>
  );
};