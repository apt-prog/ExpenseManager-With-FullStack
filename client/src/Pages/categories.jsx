import { useState } from 'react';
import {
  RiMoneyDollarCircleLine,
  RiWallet3Line,
  RiUserLine,
  RiGiftLine,
  RiHome2Line,
  RiComputerLine,
  RiTrophyLine,
  RiFolderLine,
  RiRestaurant2Line,
  RiHomeSmile2Line,
  RiCarLine,
  RiShoppingBag3Line,
  RiStethoscopeLine,
  RiBook2Line,
  RiPlaneLine,
  RiMovie2Line,
  RiBankCardLine,
  RiEdit2Line,
} from 'react-icons/ri';

const incomeCategories = [
  { name: 'Salary', icon: <RiMoneyDollarCircleLine size={22} color="#fff" /> },
  { name: 'Investment', icon: <RiWallet3Line size={22} color="#fff" /> },
  { name: 'Freelancing', icon: <RiUserLine size={22} color="#fff" /> },
  { name: 'Gifts', icon: <RiGiftLine size={22} color="#fff" /> },
  { name: 'Rent Income', icon: <RiHome2Line size={22} color="#fff" /> },
  { name: 'Digital Income', icon: <RiComputerLine size={22} color="#fff" /> },
  { name: 'Bonus', icon: <RiTrophyLine size={22} color="#fff" /> },
  { name: 'Other', icon: <RiFolderLine size={22} color="#fff" /> },
];
const expenseCategories = [
  { name: 'Food', icon: <RiRestaurant2Line size={22} color="#fff" /> },
  { name: 'Rent', icon: <RiHomeSmile2Line size={22} color="#fff" /> },
  { name: 'Transportation', icon: <RiCarLine size={22} color="#fff" /> },
  { name: 'Shopping', icon: <RiShoppingBag3Line size={22} color="#fff" /> },
  { name: 'Health', icon: <RiStethoscopeLine size={22} color="#fff" /> },
  { name: 'Education', icon: <RiBook2Line size={22} color="#fff" /> },
  { name: 'Travel', icon: <RiPlaneLine size={22} color="#fff" /> },
  { name: 'Entertainment', icon: <RiMovie2Line size={22} color="#fff" /> },
  { name: 'Loan', icon: <RiBankCardLine size={22} color="#fff" /> },
  { name: 'Others', icon: <RiFolderLine size={22} color="#fff" /> },
];

// Example sub-contents for demo
const categorySubContents = {
  Groceries: ['Food Bills', 'Food Charges', 'Vegetables', 'Fruits', 'Supermarket'],
  Dining: ['Restaurant', 'Cafe', 'Snacks', 'Takeaway', 'Fast Food'],
  Transport: ['Bus', 'Taxi', 'Fuel', 'Metro', 'Parking'],
  Shopping: ['Clothes', 'Electronics', 'Shoes', 'Accessories', 'Online Shopping'],
  Bills: ['Electricity', 'Water', 'Internet', 'Mobile', 'Gas'],
  Health: ['Doctor', 'Medicine', 'Gym', 'Insurance', 'Supplements'],
  Education: ['Books', 'Tuition', 'Stationery', 'Online Courses', 'Workshops'],
  Travel: ['Flights', 'Hotels', 'Taxi', 'Food', 'Tickets'],
  Other: ['Miscellaneous', 'Charity', 'Gifts', 'Donations', 'Tips'],
  Salary: ['Monthly', 'Bonus', 'Commission', 'Allowance', 'Incentives'],
  Freelance: ['Project A', 'Project B', 'Consulting', 'Remote Work', 'Contract'],
  Investment: ['Stocks', 'Crypto', 'Mutual Funds', 'Dividends', 'Bonds'],
  Gift: ['Birthday', 'Anniversary', 'Wedding', 'Festivals', 'Special Occasions'],
  Bonus: ['Quarterly', 'Yearly', 'Performance', 'Referral', 'Holiday'],
  Refund: ['Product Return', 'Service Refund', 'Overpayment', 'Reimbursement', 'Deposit Return'],
  Rent: ['Apartment', 'Garage', 'Office', 'Storage', 'Parking Space'],
};

// Ensure every category has at least 5 sub-contents for demo
const ensureFiveItems = (arr) => {
  const result = [...arr];
  let i = 1;
  while (result.length < 5) {
    result.push(`Other ${i++}`);
  }
  return result;
};
Object.keys(categorySubContents).forEach(key => {
  categorySubContents[key] = ensureFiveItems(categorySubContents[key]);
});

// Colorful gradient mapping for categories (same as Expense Manager)
const categoryColors = {
  Salary: 'from-emerald-500 to-emerald-700',
  Investment: 'from-yellow-500 to-yellow-700',
  Freelancing: 'from-blue-500 to-blue-700',
  Gifts: 'from-pink-500 to-pink-700',
  'Rent Income': 'from-rose-500 to-rose-700',
  'Digital Income': 'from-indigo-500 to-indigo-700',
  Bonus: 'from-purple-500 to-purple-700',
  Other: 'from-gray-500 to-gray-700',
  Food: 'from-orange-500 to-orange-700',
  Rent: 'from-lime-500 to-lime-700',
  Transportation: 'from-cyan-500 to-cyan-700',
  Shopping: 'from-fuchsia-500 to-fuchsia-700',
  Health: 'from-red-500 to-red-700',
  Education: 'from-teal-500 to-teal-700',
  Travel: 'from-blue-400 to-blue-600',
  Entertainment: 'from-violet-500 to-violet-700',
  Loan: 'from-amber-500 to-amber-700',
  Others: 'from-slate-500 to-slate-700',
};

export default function Categories() {
  const [type, setType] = useState('Income');
  const [name, setName] = useState('');
  const [iconLink, setIconLink] = useState('');

  const mainBtn = type === 'Income' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700';
  const mainText = type === 'Income' ? 'text-emerald-500' : 'text-rose-500';

  return (
    <div className="px-4 mt-4 mb-4 flex flex-col items-center min-h-[80vh] w-full bg-[#0a0f1c] px-2">
      <div className="max-w-7xl w-full pt-2">
        <h1 className="text-xl font-extrabold text-white mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-wide drop-shadow-lg">Ca-Online / Categories</h1>
      </div>
      <div className="w-full">
        <div className="w-full max-w-7xl bg-[#0f172a] rounded-2xl shadow-2xl border border-blue-900/30 p-8 flex flex-col gap-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Income Categories */}
            <div className="flex flex-col gap-6 w-full bg-emerald-500/10 rounded-xl p-4">
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Income Categories</h3>
              <div className="flex flex-col gap-3">
                {incomeCategories.map((cat, idx) => (
                  <div key={cat.name} className="flex items-center justify-between bg-[#101a2c] rounded-lg px-4 py-2 shadow">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${categoryColors[cat.name] || 'from-gray-500 to-gray-700'} shadow ring-2 ring-white/10`}>
                        <span className="text-white drop-shadow-lg" style={{fontSize: 20}}>{cat.icon}</span>
                      </div>
                      <span className="text-white font-semibold text-base">{cat.name}</span>
                    </div>
                    <button className="flex items-center gap-1 px-2 py-1 rounded bg-blue-900/30 hover:bg-blue-700 text-blue-300 hover:text-white font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" title="Edit">
                      <RiEdit2Line size={16} />
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* Expense Categories */}
            <div className="flex flex-col gap-6 w-full bg-rose-500/10 rounded-xl p-4">
              <h3 className="text-xl font-bold text-rose-400 mb-2">Expense Categories</h3>
              <div className="flex flex-col gap-3">
                {expenseCategories.map((cat, idx) => (
                  <div key={cat.name} className="flex items-center justify-between bg-[#101a2c] rounded-lg px-4 py-2 shadow">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${categoryColors[cat.name] || 'from-gray-500 to-gray-700'} shadow ring-2 ring-white/10`}>
                        <span className="text-white drop-shadow-lg" style={{fontSize: 20}}>{cat.icon}</span>
                      </div>
                      <span className="text-white font-semibold text-base">{cat.name}</span>
                    </div>
                    <button className="flex items-center gap-1 px-2 py-1 rounded bg-blue-900/30 hover:bg-blue-700 text-blue-300 hover:text-white font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" title="Edit">
                      <RiEdit2Line size={16} />
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}