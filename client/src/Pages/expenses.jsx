import { useState, useMemo } from 'react';
import { RiSearchLine, RiShoppingBag3Line, RiRestaurant2Line, RiCarLine, RiBillLine, RiStethoscopeLine, RiBook2Line, RiPlaneLine } from 'react-icons/ri';
import { expenseCategories } from '../categoryData';

// Generate 60 fake expense transactions
const fakeTransactions = Array.from({ length: 60 }, (_, i) => {
  const categoryObj = expenseCategories[Math.floor(Math.random() * expenseCategories.length)];
  const category = categoryObj.name; // Use category name instead of object
  const amount = Math.floor(Math.random() * 300 + 20);
  return {
    no: i + 1,
    date: `2024-06-${String((i % 28) + 1).padStart(2, '0')}`,
    category,
    type: 'Expense',
    tag: category, // Use category name as tag
    amount,
  };
});

const ROWS_PER_PAGE = 20;

// Example category data for cards - store icon components as references
const categoryCards = [
  {
    name: 'Groceries',
    icon: RiShoppingBag3Line,
    color: 'from-emerald-500 to-emerald-700',
    budget: 500,
    spent: 320,
    limit: 600,
  },
  {
    name: 'Dining',
    icon: RiRestaurant2Line,
    color: 'from-rose-500 to-rose-700',
    budget: 300,
    spent: 180,
    limit: 350,
  },
  {
    name: 'Transport',
    icon: RiCarLine,
    color: 'from-blue-500 to-blue-700',
    budget: 200,
    spent: 90,
    limit: 250,
  },
  {
    name: 'Bills',
    icon: RiBillLine,
    color: 'from-purple-500 to-purple-700',
    budget: 400,
    spent: 350,
    limit: 400,
  },
  {
    name: 'Health',
    icon: RiStethoscopeLine,
    color: 'from-pink-500 to-pink-700',
    budget: 150,
    spent: 60,
    limit: 200,
  },
  {
    name: 'Education',
    icon: RiBook2Line,
    color: 'from-yellow-500 to-yellow-700',
    budget: 250,
    spent: 120,
    limit: 300,
  },
  {
    name: 'Travel',
    icon: RiPlaneLine,
    color: 'from-cyan-500 to-cyan-700',
    budget: 600,
    spent: 400,
    limit: 700,
  },
];

export default function Expenses() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  // Filtered and searched data
  const filtered = useMemo(() => {
    let data = fakeTransactions;
    if (category !== 'All') {
      data = data.filter(tx => tx.category === category);
    }
    if (search.trim()) {
      data = data.filter(
        tx =>
          tx.tag.toLowerCase().includes(search.toLowerCase())
      );
    }
    return data;
  }, [search, category]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ROWS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE);

  // Handle page change
  const handlePage = (p) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  // Calculate total expense and remaining (for demo, assume a fixed budget of 5000)
  const totalExpense = fakeTransactions.reduce((sum, tx) => sum + tx.amount, 0);
  const budget = 5000;
  const remaining = budget - totalExpense;

  // Get category names for filter dropdown
  const categoryOptions = ['All', ...expenseCategories.map(cat => cat.name)];

  return (
    <div className="px-4 w-full">
      <div className="max-w-7xl mx-auto mt-4">
        <h1 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-left">
          Ca-Online / Expenses
        </h1>
        {/* Search and Filter Row */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center mb-4">
          {/* Search by tag name */}
          <div className="flex items-center w-full md:w-1/2 bg-[#0f172a] rounded-lg px-3 py-2 font-bold text-white">
            <RiSearchLine className="text-white mr-2" size={18} />
            <input
              type="text"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search by tag name..."
              className="bg-transparent outline-none text-sm font-bold text-white placeholder:text-blue-200 w-full"
            />
          </div>
          {/* Category filter dropdown */}
          <div className="relative flex items-center">
            <select
              value={category}
              onChange={e => { setCategory(e.target.value); setPage(1); }}
              className="bg-[#0f172a] rounded-lg px-3 py-2 font-bold text-white outline-none border-none"
              style={{ minWidth: 120 }}
            >
              {categoryOptions.map(cat => (
                <option key={cat} value={cat} className={category === cat ? 'bg-blue-950' : 'bg-blue-900/90'}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Table */}
        <div className="w-full bg-[#0f172a] rounded-xl shadow-xl shadow-blue-900/20 border border-blue-900/30 overflow-x-auto mb-6">
          <table className="min-w-full text-sm text-center text-gray-400">
            <thead className="bg-blue-900/30 text-blue-300">
              <tr>
                <th className="px-6 py-3 font-semibold">No</th>
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Type</th>
                <th className="px-6 py-3 font-semibold">Category</th>
                <th className="px-6 py-3 font-semibold">Tag Name</th>
                <th className="px-6 py-3 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-blue-300">No transactions found.</td>
                </tr>
              ) : (
                paginated.map((tx) => (
                  <tr
                    key={tx.no}
                    className="border-b border-blue-900/30 hover:bg-blue-900/20 transition-colors"
                  >
                    <td className="px-6 py-3">{tx.no}</td>
                    <td className="px-6 py-3">{tx.date}</td>
                    <td className="px-6 py-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-900/40 text-rose-400">
                        Expense
                      </span>
                    </td>
                    <td className="px-6 py-3">{tx.category}</td>
                    <td className="px-6 py-3">{tx.tag}</td>
                    <td className="px-6 py-3 font-bold">
                      <span className="text-rose-400">
                        - ₹{tx.amount.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => handlePage(page - 1)}
              disabled={page === 1}
              className={`px-3 py-1 rounded-lg font-semibold text-blue-300 bg-blue-900/30 hover:bg-blue-900/50 transition-colors ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePage(i + 1)}
                className={`px-3 py-1 rounded-lg font-semibold ${
                  page === i + 1
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30'
                    : 'bg-blue-900/30 text-blue-300 hover:bg-blue-900/50'
                } transition-colors`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePage(page + 1)}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-lg font-semibold text-blue-300 bg-blue-900/30 hover:bg-blue-900/50 transition-colors ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 