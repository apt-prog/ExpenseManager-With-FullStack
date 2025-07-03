import React, { useState } from 'react';
import {
  RiMoneyDollarCircleLine,
  RiBankLine,
  RiWallet3Line,
  RiGiftLine,
  RiRefund2Line,
  RiHome2Line,
  RiTrophyLine,
  RiShoppingBag3Line,
  RiRestaurant2Line,
  RiCarLine,
  RiFolderLine,
  RiBillLine,
  RiStethoscopeLine,
  RiBook2Line,
  RiPlaneLine,
  RiArrowUpCircleLine,
  RiArrowDownCircleLine,
  RiCalendar2Line,
  RiPriceTag3Line,
  RiPhoneLine,
} from 'react-icons/ri';
import { incomeCategories, expenseCategories, categoryColors } from '../categoryData';

const today = new Date().toISOString().slice(0, 10);

export default function AddTransaction() {
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState(incomeCategories[0].name);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(today);
  const [tag, setTag] = useState('');

  const categories = type === 'Income' ? incomeCategories : expenseCategories;
  const selectedCategory = categories.find(c => c.name === category);

  // Format amount with commas
  const formatAmount = (val) => {
    if (!val) return '';
    const [int, dec] = val.split('.');
    return dec !== undefined
      ? parseInt(int, 10).toLocaleString() + '.' + dec
      : parseInt(int, 10).toLocaleString();
  };

  // Handle input for amount with formatting
  const handleAmountChange = (e) => {
    let val = e.target.value.replace(/,/g, '');
    // Allow only numbers and optional decimal
    if (!/^\d*(\.\d{0,2})?$/.test(val)) return;
    setAmount(val);
  };

  // Color logic
  const mainColor = type === 'Income' ? 'emerald' : 'rose';
  const mainBg = type === 'Income' ? 'bg-emerald-600' : 'bg-rose-600';
  const mainBgFaded = type === 'Income' ? 'bg-emerald-500/10' : 'bg-rose-500/10';
  const mainText = type === 'Income' ? 'text-emerald-500' : 'text-rose-500';
  const mainBtn = type === 'Income' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700';

  return (
    <div className="px-4 w-full min-h-[90vh] bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto pt-4">
        <h1 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-left">Ca-Online / Add Transaction</h1>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="w-full bg-[#0f172a] rounded-2xl shadow-2xl border border-blue-900/30 flex flex-row overflow-hidden">
          {/* Left Side */}
          <div className="w-full md:w-[60%] p-6 flex flex-col">
            {/* Type Toggle */}
            <div className="flex gap-4 mb-4">
              <button
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold shadow transition-all text-base ${type === 'Income' ? 'bg-emerald-600 text-white' : 'bg-[#1e293b] text-emerald-400 hover:bg-emerald-900/30'}`}
                onClick={() => { setType('Income'); setCategory(j[0].name); }}
              >
                <RiArrowUpCircleLine size={18} /> Income
              </button>
              <button
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold shadow transition-all text-base ${type === 'Expense' ? 'bg-rose-600 text-white' : 'bg-[#1e293b] text-rose-400 hover:bg-rose-900/30'}`}
                onClick={() => { setType('Expense'); setCategory(expenseCategories[0].name); }}
              >
                <RiArrowDownCircleLine size={18} /> Expense
              </button>
            </div>
            {/* Category Selector */}
            <div className="mb-4">
              <div className="text-gray-300 font-semibold mb-2 flex items-center gap-2">
                <RiFolderLine size={16} /> Choose Category
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {categories.map(cat => {
                  const IconComponent = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl border-2 transition-all duration-150 font-semibold text-xs focus:outline-none shadow ${category === cat.name ? 'bg-blue-600/90 border-blue-400 text-white shadow-md' : 'bg-[#101a2c] border-blue-900/40 text-blue-300 hover:bg-blue-900/30'}`}
                      onClick={() => setCategory(cat.name)}
                    >
                      {/* Colorful icon background */}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${categoryColors[cat.name] || 'from-gray-500 to-gray-700'} shadow ring-2 ring-white/10 mb-1`}>
                        <IconComponent size={20} className="text-white drop-shadow-lg" />
                      </div>
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Amount, Date, Tag Inputs */}
            <div className="flex flex-col md:flex-row gap-6 mb-2">
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <div className="text-gray-300 font-semibold mb-1 flex items-center gap-2"><RiPriceTag3Line size={18} /> Amount</div>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={formatAmount(amount)}
                    onChange={handleAmountChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-white font-semibold border border-blue-900/30 focus:border-blue-500 outline-none text-base shadow"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <div className="text-gray-300 font-semibold mb-1 flex items-center gap-2"><RiPriceTag3Line size={18} /> Tag Name</div>
                  <input
                    type="text"
                    value={tag}
                    onChange={e => setTag(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-white font-semibold border border-blue-900/30 focus:border-blue-500 outline-none text-base shadow"
                    placeholder="Enter tag name (e.g. Food, Profit)"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-6">
                <div>
                  <div className="text-gray-300 font-semibold mb-1 flex items-center gap-2"><RiCalendar2Line size={18} /> Date</div>
                  <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-white font-semibold border border-blue-900/30 focus:border-blue-500 outline-none text-base shadow"
                  />
                </div>
              </div>
            </div>
            {/* Add Transaction Button at the end */}
            <button
              className={`w-full mt-4 py-2.5 rounded-lg font-bold text-base shadow-lg transition-all duration-200 ${type === 'Income' ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-rose-600 hover:bg-rose-700 text-white'}`}
            >
              {type === 'Income' ? 'Add Income' : 'Add Expense'}
            </button>
          </div>
          {/* Right Side (Preview) */}
          <div className="hidden md:flex w-[40%] flex-col bg-[#101a2c] p-4">
            <div className="flex flex-col h-full w-full justify-center items-center">
              <div className="flex flex-col items-center w-full">
                {/* Colorful icon background for preview */}
                <div className={`w-20 h-20 rounded-xl flex items-center justify-center shadow-lg mb-2 bg-gradient-to-br ${categoryColors[category] || 'from-gray-500 to-gray-700'}`}>
                  {selectedCategory && React.createElement(selectedCategory.icon, { size: 32, className: "text-white drop-shadow-lg" })}
                </div>
                <div className="w-full bg-[#0f172a] rounded-xl shadow-xl p-4 flex flex-col items-center gap-3">
                  <div className="text-lg font-bold text-white flex items-center gap-2">
                    {type === 'Income' ? <RiArrowUpCircleLine className="text-emerald-400" /> : <RiArrowDownCircleLine className="text-rose-400" />}
                    {type}
                  </div>
                  <div className="text-blue-300 font-semibold flex items-center gap-2 text-base">
                    {/* Colorful icon background for preview row */}
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center bg-gradient-to-br ${categoryColors[category] || 'from-gray-500 to-gray-700'} shadow ring-2 ring-white/10`}>
                      {selectedCategory && React.createElement(selectedCategory.icon, { size: 18, className: "text-white drop-shadow-lg" })}
                    </div>
                    {category}
                  </div>
                  <div className="text-white text-2xl font-bold">{amount ? `${type === 'Income' ? '+' : '-'} ₹${formatAmount(amount)}` : '--'}</div>
                  <div className="text-blue-400 flex items-center gap-1 text-sm"><RiCalendar2Line /> {date}</div>
                  <div className="text-blue-400 flex items-center gap-1 text-sm"><RiPriceTag3Line /> {tag || '--'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 