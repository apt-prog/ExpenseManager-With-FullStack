import React from 'react';

export default function ProfileBarChart({ income, expense }) {
  const max = Math.max(income, expense);
  return (
    <div className="w-full bg-[#101a2c] rounded-2xl shadow-xl border border-blue-900/30 p-8 mb-8 flex flex-col items-center" data-aos="fade-up">
      <h3 className="text-lg font-bold text-white mb-6">Income vs Expense</h3>
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <div className="flex items-center gap-4 w-full">
          <span className="text-blue-300 font-semibold w-24">Income</span>
          <div className="flex-1 h-6 bg-blue-900/40 rounded-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full bg-emerald-500/80 rounded-full transition-all duration-700" style={{ width: `${(income / max) * 100}%` }}></div>
          </div>
          <span className="text-emerald-300 font-bold ml-2">${income.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-4 w-full">
          <span className="text-blue-300 font-semibold w-24">Expense</span>
          <div className="flex-1 h-6 bg-blue-900/40 rounded-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full bg-rose-500/80 rounded-full transition-all duration-700" style={{ width: `${(expense / max) * 100}%` }}></div>
          </div>
          <span className="text-rose-300 font-bold ml-2">${expense.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
} 