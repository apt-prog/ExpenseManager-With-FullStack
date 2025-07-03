import React, { useState } from "react";
import {
  RiEdit2Line,
  RiShoppingBag3Line,
  RiRestaurant2Line,
  RiCarLine,
  RiBillLine,
  RiStethoscopeLine,
  RiBook2Line,
  RiPlaneLine,
} from "react-icons/ri";
import { expenseCategories, categoryColors } from "../categoryData";

// Mock data for expense categories with budget information
const expenseCategoryData = [
  {
    name: "Groceries",
    icon: RiShoppingBag3Line,
    color: "from-emerald-500 to-emerald-700",
    budget: 500,
    spent: 320,
    limit: 600,
  },
  {
    name: "Dining",
    icon: RiRestaurant2Line,
    color: "from-rose-500 to-rose-700",
    budget: 300,
    spent: 180,
    limit: 350,
  },
  {
    name: "Transport",
    icon: RiCarLine,
    color: "from-blue-500 to-blue-700",
    budget: 200,
    spent: 90,
    limit: 250,
  },
  {
    name: "Bills",
    icon: RiBillLine,
    color: "from-purple-500 to-purple-700",
    budget: 400,
    spent: 350,
    limit: 400,
  },
  {
    name: "Health",
    icon: RiStethoscopeLine,
    color: "from-pink-500 to-pink-700",
    budget: 150,
    spent: 60,
    limit: 200,
  },
  {
    name: "Education",
    icon: RiBook2Line,
    color: "from-yellow-500 to-yellow-700",
    budget: 250,
    spent: 120,
    limit: 300,
  },
  {
    name: "Travel",
    icon: RiPlaneLine,
    color: "from-cyan-500 to-cyan-700",
    budget: 600,
    spent: 400,
    limit: 700,
  },
  {
    name: "Other",
    icon: RiShoppingBag3Line,
    color: "from-gray-500 to-gray-700",
    budget: 100,
    spent: 45,
    limit: 150,
  },
];

export default function ExpenseManage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [budget, setBudget] = useState("");

  const openModal = (cat) => {
    setSelectedCategory(cat);
    setModalOpen(true);
    setBudget("");
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCategory(null);
    setBudget("");
  };

  // Calculate total expense and remaining budget
  const totalExpense = expenseCategoryData.reduce(
    (sum, cat) => sum + cat.spent,
    0
  );
  const totalLimit = expenseCategoryData.reduce(
    (sum, cat) => sum + cat.limit,
    0
  );
  const remaining = totalLimit - totalExpense;

  return (
    <div className="px-4 w-full min-h-[90vh] bg-[#0a0f1c] flex flex-col items-center">
      <div className="max-w-7xl mx-auto mt-4 w-full">
        <h1 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-left">
          Ca-Online / Manage Expense
        </h1>
        {/* Summary Box */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#101a2c] border border-blue-900/30 rounded-2xl shadow-xl px-10 py-6 flex flex-col items-center w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-between items-center">
              <div className="flex flex-col items-center flex-1">
                <span className="text-blue-300 text-sm font-semibold mb-1">
                  Total Expense
                </span>
                <span className="text-3xl font-extrabold text-rose-400 drop-shadow">
                  ${totalExpense.toLocaleString()}
                </span>
              </div>
              <div className="w-px h-10 bg-blue-900/40 hidden sm:block"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-blue-300 text-sm font-semibold mb-1">
                  Remaining
                </span>
                <span className="text-3xl font-extrabold text-emerald-400 drop-shadow">
                  ${remaining.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive grid: two cards per row, cards fill available space */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 mx-auto">
          {expenseCategoryData.map((cat) => {
            const usedPercent = Math.min(
              100,
              Math.round((cat.spent / cat.limit) * 100)
            );
            const remain = cat.limit - cat.spent;
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.name}
                className="relative rounded-2xl shadow-xl border border-blue-900/30 bg-[#101a2c] p-6 flex flex-col items-center min-h-[240px] w-full transition-transform hover:scale-[1.03] hover:shadow-2xl group"
              >
                {/* Top Row: Icon left, Name center, Edit right */}
                <div className="flex w-full items-center mb-4 relative">
                  {/* Icon left */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.color} shadow-lg ring-2 ring-white/10`}
                  >
                    <IconComponent
                      size={30}
                      className="text-white drop-shadow-lg"
                    />
                  </div>
                  {/* Name center */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none">
                    <span className="text-lg font-bold text-white drop-shadow text-center pointer-events-none">
                      {cat.name}
                    </span>
                  </div>
                  {/* Edit right */}
                  <div className="ml-auto">
                    <button
                      className="bg-[#0f172a] hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-all group-hover:scale-110"
                      title="Edit Category Limit"
                      onClick={() => openModal(cat)}
                    >
                      <RiEdit2Line size={20} />
                    </button>
                  </div>
                </div>
                {/* Key-Value Lines */}
                <div className="flex flex-col gap-1 w-full mb-4">
                  <div className="flex justify-between text-sm text-blue-100 font-semibold">
                    <span>Total Budget</span>
                    <span>₹{cat.limit}</span>
                  </div>
                  <div className="flex justify-between text-sm text-blue-100 font-semibold">
                    <span>Used Budget</span>
                    <span>₹{cat.spent}</span>
                  </div>
                  <div className="flex justify-between text-sm text-blue-100 font-semibold">
                    <span>Remaining</span>
                    <span>₹{remain}</span>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full flex items-center gap-2 mt-auto">
                  <div className="relative w-full h-3 bg-blue-900/40 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                      style={{ width: `${usedPercent}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs font-bold text-blue-300 min-w-[36px] text-right">
                    {usedPercent}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Sliding Modal */}
        {modalOpen && selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
            {/* Modal overlay to close */}
            <div className="absolute inset-0" onClick={closeModal}></div>
            {/* Modal content */}
            <div className="relative bg-[#101a2c] w-[60vw] max-w-xl h-auto sm:rounded-2xl shadow-2xl flex flex-col overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center p-6 border-b border-blue-900/30 relative">
                {/* Icon left */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${selectedCategory.color} shadow-lg ring-2 ring-white/10`}
                >
                  {React.createElement(selectedCategory.icon, {
                    size: 30,
                    className: "text-white drop-shadow-lg",
                  })}
                </div>
                {/* Name center */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none">
                  <span className="text-lg font-bold text-white drop-shadow text-center pointer-events-none">
                    {selectedCategory.name}
                  </span>
                </div>
                {/* Close btn right */}
                <div className="ml-auto">
                  <button
                    className="bg-[#0f172a] hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-all"
                    title="Close"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Modal Form - simplified form */}
              <form
                className="flex flex-col gap-6 p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  closeModal();
                }}
              >
                <label className="text-blue-100 font-semibold text-sm">
                  Current Category Budget
                </label>
                <input
                  type="number"
                  className="w-full p-3 rounded-lg bg-[#0a0f1c] border border-blue-900/40 text-blue-300 font-bold text-lg cursor-not-allowed opacity-80"
                  value={selectedCategory.limit}
                  readOnly
                  tabIndex={-1}
                />
                <label className="text-blue-100 font-semibold text-sm">
                  Set New Category Budget
                </label>
                <input
                  type="number"
                  className="w-full p-3 rounded-lg bg-[#0a0f1c] border border-blue-900/40 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-bold placeholder:text-blue-300"
                  placeholder="Enter new budget..."
                  min={0}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                />
                <div className="border-t border-blue-900/30 pt-2">
                  <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                    🔒 Security Verification
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-blue-200 font-semibold text-sm block mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 rounded-lg bg-[#0a0f1c] border border-blue-900/40 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base placeholder:text-blue-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-blue-200 font-semibold text-sm block mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-3 rounded-lg bg-[#0a0f1c] border border-blue-900/40 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base placeholder:text-blue-300"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-bold text-lg shadow-lg hover:from-emerald-600 hover:to-emerald-800 transition-all"
                >
                  Update Budget
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* Add animation for sliding modal */
// Add this to your global CSS (e.g., index.css or App.css):
// .animate-slide-in-right { animation: slideInRight 0.3s cubic-bezier(0.4,0,0.2,1) both; }
// @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
