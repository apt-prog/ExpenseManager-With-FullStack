import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiUserLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiMailLine,
  RiArrowRightLine,
  RiGoogleFill,
  RiGithubFill,
} from "react-icons/ri";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = formData;
    const finalLoginObject = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        finalLoginObject,
        {
          withCredentials: true, // ✅ This enables session cookie to be stored
        }
      );

      console.log("Login successful:", response.data);
      toast.success("Login successful ✅");

      setTimeout(() => {
        setIsLoading(false);
        navigate(`/dashboard?`);
      }, 3100);
    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        const { status, data } = error.response;

        if (status === 404) {
          toast.error("User not found ❌");
        } else if (status === 401) {
          toast.error("Incorrect password ❌");
        } else {
          toast.error(`Login failed: ${data.message || "Unknown error"} ⚠️`);
        }
      } else {
        toast.error("Something went wrong. Please try again later.");
      }

      console.error("Login error:", error);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic here
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        pauseOnHover={false}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1e293b] flex items-center justify-center p-4">
        <div className="w-full max-w-xl">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/25">
              <RiUserLine className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to your Ca-Online account</p>
          </div>

          {/* Login Form */}
          <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-900/30 shadow-2xl shadow-blue-900/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiMailLine className="text-blue-400" size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-blue-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiLockLine className="text-blue-400" size={20} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-[#0f172a] border border-blue-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {showPassword ? (
                      <RiEyeOffLine size={20} />
                    ) : (
                      <RiEyeLine size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-[#0f172a] border-blue-900/30 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-300">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Sign In
                    <RiArrowRightLine size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-900/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1e293b]/50 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialLogin("google")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0f172a] border border-blue-900/30 rounded-lg text-gray-300 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-200"
              >
                <RiGoogleFill className="text-red-400" size={18} />
                <span className="text-sm">Google</span>
              </button>
              <button
                onClick={() => handleSocialLogin("github")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0f172a] border border-blue-900/30 rounded-lg text-gray-300 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-200"
              >
                <RiGithubFill className="text-gray-400" size={18} />
                <span className="text-sm">GitHub</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
