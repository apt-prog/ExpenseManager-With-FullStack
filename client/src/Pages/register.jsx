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
  RiUserAddLine,
  RiCalendar2Line,
  RiPhoneLine,
  RiMapPinLine,
} from "react-icons/ri";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    mobile: "",
    city: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
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

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      age,
      mobile,
      city,
    } = formData;

    if (!acceptTerms) {
      return toast.warning("Please accept the terms and conditions ⚠️");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match ❌");
    }

    const newUser = { firstName, lastName, email, password, age, mobile, city };

    try {
      setIsLoading(true);

      const response = await axios.post(
        "http://localhost:5000/register",
        newUser
      );

      if (response.status === 201) {
        toast.success("Registration successful ✅");

        setTimeout(() => {
          setIsLoading(false);
          navigate("/login");
        }, 3100);
      }
    } catch (err) {
      setIsLoading(false);

      const status = err.response?.status;
      const message =
        status === 400
          ? "Email is already registered ❌"
          : "Registration failed. Please try again.";

      toast.error(message);
      console.error("Submission error:", err.response?.data || err.message);
    }
  };

  const handleSocialRegister = (provider) => {
    console.log(`Registering with ${provider}`);
    // Social registration logic
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" pauseOnHover={false} />
      <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1e293b] flex items-center justify-center p-4">
        <div className="w-full max-w-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/25">
              <RiUserAddLine className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-400">
              Join Ca-Online and start managing your finances
            </p>
          </div>

          <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-900/30 shadow-2xl shadow-blue-900/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field, index) => (
                  <div key={field} className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <RiUserLine className="text-blue-400" size={20} />
                      </div>
                      <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-blue-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                        placeholder={
                          field === "firstName" ? "First name" : "Last name"
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Age and Mobile */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Age
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <RiCalendar2Line className="text-blue-400" size={20} />
                    </div>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      min="1"
                      max="120"
                      className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-blue-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                      placeholder="Age"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <RiPhoneLine className="text-blue-400" size={20} />
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10,15}"
                      className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-blue-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                      placeholder="Mobile number"
                    />
                  </div>
                </div>
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  City
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiMapPinLine className="text-blue-400" size={20} />
                  </div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-blue-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                    placeholder="City"
                  />
                </div>
              </div>

              {/* Email */}
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

              {/* Password + Confirm */}
              {["password", "confirmPassword"].map((field, index) => {
                const isConfirm = field === "confirmPassword";
                const show = isConfirm ? showConfirmPassword : showPassword;
                const setShow = isConfirm
                  ? setShowConfirmPassword
                  : setShowPassword;

                return (
                  <div className="space-y-2" key={field}>
                    <label className="text-sm font-medium text-gray-300">
                      {isConfirm ? "Confirm Password" : "Password"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <RiLockLine className="text-blue-400" size={20} />
                      </div>
                      <input
                        type={show ? "text" : "password"}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-12 py-3 bg-[#0f172a] border border-blue-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                        placeholder={
                          isConfirm
                            ? "Confirm your password"
                            : "Create a password"
                        }
                      />
                      <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        {show ? (
                          <RiEyeOffLine size={20} />
                        ) : (
                          <RiEyeLine size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 mt-1 text-blue-600 bg-[#0f172a] border-blue-900/30 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label className="ml-2 text-sm text-gray-300">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !acceptTerms}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Create Account
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

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialRegister("google")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0f172a] border border-blue-900/30 rounded-lg text-gray-300 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-200"
              >
                <RiGoogleFill className="text-red-400" size={18} />
                <span className="text-sm">Google</span>
              </button>
              <button
                onClick={() => handleSocialRegister("github")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0f172a] border border-blue-900/30 rounded-lg text-gray-300 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-200"
              >
                <RiGithubFill className="text-gray-400" size={18} />
                <span className="text-sm">GitHub</span>
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
