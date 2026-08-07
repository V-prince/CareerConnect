import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaUserPlus,
} from "react-icons/fa";
import Select from "react-select";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const roleOptions = [
  { value: "jobseeker", label: "Jobseeker" },
  { value: "employer", label: "Employer" },
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [role, setRole] = useState(null);

  const [agree, setAgree] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if(formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    console.log({
      ...formData,
      role: role?.value,
      agree,
    });

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setRole(null);
    setAgree(false);
    setShowPassword(false);
    setShowConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md border border-zinc-200 px-6 md:px-8 py-8 md:py-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-800">
            Register
          </h1>

          <p className="text-zinc-500 mt-4 text-sm md:text-base">
            Fill in the details to create your account
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Full Name
            </label>

            <div className="flex items-center border border-zinc-300 rounded-xl px-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-100 transition">
              <FaUser className="text-zinc-400 mr-3" />

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full h-12 outline-none text-zinc-700 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Email Address
            </label>

            <div className="flex items-center border border-zinc-300 rounded-xl px-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-100 transition">
              <FaEnvelope className="text-zinc-400 mr-3" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 outline-none text-zinc-700 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Password
            </label>

            <div className="flex items-center border border-zinc-300 rounded-xl px-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-100 transition">
              <FaLock className="text-zinc-400 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 outline-none text-zinc-700 text-sm"
                required
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

          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Confirm Password
            </label>

            <div className="flex items-center border border-zinc-300 rounded-xl px-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-100 transition">
              <FaLock className="text-zinc-400 mr-3" />

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full h-12 outline-none text-zinc-700 text-sm"
                required
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="text-zinc-400 hover:text-indigo-600 transition"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Select Role
            </label>

            <Select
              options={roleOptions}
              value={role}
              onChange={setRole}
              placeholder="Select your role"
              className="text-sm"
              styles={{
                control: (base) => ({
                  ...base,
                  height: 48,
                  borderRadius: 12,
                  borderColor: "#d4d4d8",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: "#d4d4d8",
                  },
                }),
                indicatorSeparator: () => ({
                  display: "none",
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  paddingRight: 12,
                }),
              }}
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="w-4 h-4 accent-indigo-600 rounded border-zinc-300"
              required
            />
            I agree to the
            <Link
              to="/terms"
              className="text-indigo-600 font-medium hover:text-indigo-700 transition"
            >
              Terms & Conditions
            </Link>
          </label>

          <button
            type="submit"
            className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-semibold flex justify-center items-center gap-2 transition text-sm"
          >
            <FaUserPlus />
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-zinc-200"></div>

          <span className="px-4 text-sm text-zinc-500">OR</span>

          <div className="flex-1 h-px bg-zinc-200"></div>
        </div>

        <button
          type="button"
          className="w-full h-12 border border-zinc-300 rounded-xl flex justify-center items-center gap-3 font-medium text-zinc-700 hover:bg-zinc-50 transition text-sm"
        >
          <FaGoogle className="text-red-500" />
          Register with Google
        </button>

        <p className="text-center mt-6 text-sm text-zinc-600">
          Already have an account?
          <Link
            to="/login"
            className="text-indigo-600 font-semibold ml-1 hover:text-indigo-700 transition"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
