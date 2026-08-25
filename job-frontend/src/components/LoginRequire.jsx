import { FaPaperPlane } from "react-icons/fa";

const LoginRequire = ({ onClose, onLogin }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
        <div className="text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <FaPaperPlane size={22} />
          </div>

          <h3 className="text-xl font-bold text-zinc-800">Login Required</h3>

          <p className="text-sm text-zinc-500 mt-2 leading-6">
            You need to login before applying for this job. Would you like to
            login now?
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={onClose}
              className="w-full h-11 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-600 text-sm font-semibold transition"
            >
              Later
            </button>

            <button
              onClick={onLogin}
              className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition"
            >
              Login Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRequire;
