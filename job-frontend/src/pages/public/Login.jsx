import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginAPI } from "../../Services/authService";
import { useAuth } from "../../store/UserContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { user, setUser, isLoggedIn, SetIsLoggedIn } = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.password.trim()) {
      toast.error("Please enter your password.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {

      const data = await LoginAPI(formData);

      if (!data.success) {
        return toast.error(data.message)
      }

      toast.success("Login successful!");
      setUser(data.user);
      
      SetIsLoggedIn(true);
      if (data.user.role === "candidate") {
        navigate('/user/profile')
      } else {
        navigate('/employer/profile')
      }
    } catch (error) {
      console.log("login err", error)
    }


    setFormData({
      email: "",
      password: "",
    });

    setRememberMe(false);
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white flex items-center justify-center px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-zinc-200 px-6 md:px-8 py-8 md:py-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-800">
            Login
          </h1>

          <p className="text-zinc-500 mt-4 text-sm md:text-base">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Email Address
            </label>

            <div className="flex items-center border border-zinc-300 rounded-xl px-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-100 transition">
              <FaEnvelope className="text-zinc-400 mr-3" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full h-12 outline-none text-zinc-700 text-sm"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Password
            </label>

            <div className="flex items-center border border-zinc-300 rounded-xl px-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-100 transition">
              <FaLock className="text-zinc-400 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full h-12 outline-none text-zinc-700 text-sm"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-zinc-400 hover:text-indigo-600 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-indigo-600 rounded border-zinc-300"
              />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition text-sm"
          >
            <FaSignInAlt />
            Login
          </button>
        </form>

        <p className="text-center text-sm text-zinc-600 mt-7">
          Don't have an account?
          <Link
            to="/register"
            className="text-indigo-600 font-semibold ml-1 hover:text-indigo-700 transition"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
