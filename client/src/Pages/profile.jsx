import { useState } from 'react';
import { RiEdit2Line, RiLogoutBoxRLine, RiShieldUserLine, RiMailLine, RiUser3Line, RiVipCrown2Line, RiLockPasswordLine, RiShieldCheckLine, RiDeleteBin6Line, RiMoonLine, RiSunLine, RiArrowRightSLine, RiBarChart2Line, RiMoneyDollarCircleLine, RiArrowUpCircleLine, RiArrowDownCircleLine, RiNotification3Line, RiSettings3Line, RiGlobalLine, RiCalendar2Line, RiUpload2Line, RiPhoneLine, RiMapPin2Line, RiEarthLine, RiInformationLine } from 'react-icons/ri';
import ProfileBarChart from '../Components/ProfileBarChart';
// import { motion } from 'framer-motion'; // Uncomment if Framer Motion is installed
// import AOS from 'aos'; // Uncomment if AOS is installed
// import 'aos/dist/aos.css';

// Mock user and chart data
const mockUser = {
  id: 1,
  name: 'Jane Doe',
  email: 'jane.doe@email.com',
  accountType: 'Premium Member',
  profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4v1DYhjtdQS5cIsuF7by-dCyrg2SCY6dFyQ&s',
  mobile: '+1 555-987-6543',
  city: 'New York',
  country: 'USA',
  bio: 'Finance enthusiast. Love to track and optimize my expenses!',
  joined: '2022-03-10',
  lastLogin: '2024-06-10 14:23',
  totalTransactions: 142,
  totalIncome: 14500,
  totalExpense: 9800,
};

function UserInfoCard({ user, onPicChange }) {
  return (
    <div className="w-1/3 bg-[#101a2c] rounded-2xl shadow-xl border border-blue-900/30 p-8 flex flex-col items-center mb-8" data-aos="fade-down">
      <div className="relative mb-4 w-fit mx-auto">
        <img src={user.profilePic} alt="Profile" className="w-28 h-28 rounded-full border-4 border-blue-900 object-cover shadow-lg" />
        <label className="absolute bottom-2 right-2 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full cursor-pointer shadow transition-all">
          <RiUpload2Line size={18} />
          <input type="file" accept="image/*" className="hidden" onChange={onPicChange} />
        </label>
      </div>
      <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
        <RiUser3Line className="text-blue-400" /> {user.name}
      </h2>
      <div className="flex items-center gap-2 mb-1">
        <RiMailLine className="text-blue-400" />
        <span className="text-blue-200 text-sm">{user.email}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <RiVipCrown2Line className="text-yellow-400" />
        <span className="text-yellow-300 text-xs font-semibold uppercase tracking-wider">{user.accountType}</span>
      </div>
    </div>
  );
}

function UserForm({ user }) {
  return (
    <form className="w-full bg-[#101a2c] rounded-2xl shadow-xl border border-blue-900/30 p-8 mb-8 flex flex-col items-center" autoComplete="off" data-aos="fade-up">
      <h3 className="text-lg font-bold text-white mb-6">Profile Details</h3>
      <div className="flex flex-col gap-6 w-full mb-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full">
            <label className="block text-blue-200 font-semibold mb-1">Full Name</label>
            <input
              name="name"
              value={user.name}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full">
            <label className="block text-blue-200 font-semibold mb-1">Email</label>
            <input
              name="email"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
              placeholder="Email Address"
              type="email"
            />
          </div>
          <div className="w-full">
            <label className="block text-blue-200 font-semibold mb-1">Mobile Number</label>
            <input
              name="mobile"
              value={user.mobile}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
              placeholder="Mobile Number"
              type="tel"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full">
            <label className="block text-blue-200 font-semibold mb-1">City</label>
            <input
              name="city"
              value={user.city}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
              placeholder="City"
            />
          </div>
          <div className="w-full">
            <label className="block text-blue-200 font-semibold mb-1">Country</label>
            <input
              name="country"
              value={user.country}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
              placeholder="Country"
            />
          </div>
          <div className="w-full">
            <label className="block text-blue-200 font-semibold mb-1">Bio / About Profession</label>
            <textarea
              name="bio"
              value={user.bio}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
              placeholder="Tell us a little about yourself..."
              rows={2}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

function ProfileSummary({ user }) {
  return (
    <div className="w-full bg-[#101a2c] rounded-2xl shadow-xl border border-blue-900/30 p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6" data-aos="fade-up">
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-blue-300 text-xs">Total Transactions</span>
        <span className="text-white font-bold text-lg">{user.totalTransactions}</span>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-blue-300 text-xs">Joined on</span>
        <span className="text-white font-bold text-lg">{user.joined}</span>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-blue-300 text-xs">Last Login</span>
        <span className="text-white font-bold text-lg">{user.lastLogin}</span>
      </div>
    </div>
  );
}

export default function Profile() {
  const [user, setUser] = useState(mockUser);
  const [form, setForm] = useState({ ...mockUser });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Profile picture upload
  const handlePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUser({ ...user, profilePic: URL.createObjectURL(e.target.files[0]) });
      setForm({ ...form, profilePic: URL.createObjectURL(e.target.files[0]) });
    }
  };

  // Form change
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // Form submit with validation (mock PUT)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Enter a valid email.';
    if (!form.mobile.match(/^\+?\d[\d\s-]{7,}$/)) newErrors.mobile = 'Enter a valid mobile number.';
    if (!form.city.trim()) newErrors.city = 'City is required.';
    if (!form.country.trim()) newErrors.country = 'Country is required.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setUser({ ...form });
      setLoading(false);
    }, 1200); // Simulate PUT
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0f1c] px-4 py-4 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-left">
          Ca-Online / Profile
        </h1>
      </div>
      <UserInfoCard user={user} onPicChange={handlePicChange} />
      <UserForm user={user} />
      <ProfileBarChart income={user.totalIncome} expense={user.totalExpense} />
      <ProfileSummary user={user} />
    </div>
  );
}

// Add this to your global CSS for fade-in animation if using AOS/Framer Motion is not set up
// .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.4,0,0.2,1) both; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none;} } 