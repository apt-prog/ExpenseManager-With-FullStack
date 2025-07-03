import { useState, useMemo, useRef } from "react";
import { RiSearchLine, RiApps2Line, RiArrowDownSLine } from "react-icons/ri";
import { incomeCategories, expenseCategories } from "../categoryData";

// Category and tag definitions
const categoryOptions = [
  { label: "All", value: "All" },
  { label: "Income", value: "Income" },
  { label: "Expense", value: "Expense" },
];

// Generate 60 fake transactions with tag names
const fakeTransactions = Array.from({ length: 60 }, (_, i) => {
  const types = ["Income", "Expense"];
  const type = types[Math.floor(Math.random() * 2)];
  const categoryObj =
    type === "Income"
      ? incomeCategories[Math.floor(Math.random() * incomeCategories.length)]
      : expenseCategories[Math.floor(Math.random() * expenseCategories.length)];
  const category = type === "Income" ? "Income" : "Expense";
  const tag = categoryObj.name; // Use the category name as tag
  const amount =
    type === "Income"
      ? Math.floor(Math.random() * 4000 + 500)
      : Math.floor(Math.random() * 300 + 20);
  return {
    no: i + 1,
    date: `2024-06-${String((i % 28) + 1).padStart(2, "0")}`,
    category,
    type,
    tag,
    amount,
  };
});

const ROWS_PER_PAGE = 20;

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState("All");
  const [page, setPage] = useState(1);
  const [catMenuOpen, setCatMenuOpen] = useState(false);
  const [tagMenuOpen, setTagMenuOpen] = useState(false);
  const catMenuRef = useRef();
  const tagMenuRef = useRef();

  // Filtered and searched data
  const filtered = useMemo(() => {
    let data = fakeTransactions;
    if (category !== "All") {
      data = data.filter((tx) => tx.category === category);
    }
    if (tag !== "All") {
      data = data.filter((tx) => tx.tag === tag);
    }
    if (search.trim()) {
      data = data.filter((tx) =>
        tx.tag.toLowerCase().includes(search.toLowerCase())
      );
    }
    return data;
  }, [search, category, tag]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ROWS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  // Handle page change
  const handlePage = (p) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  // Handle outside click for menus
  // ... (omitted for brevity, but would use useEffect to close menus on outside click)

  // Tag options for current category - extract just the names
  const currentTags =
    category === "All"
      ? []
      : category === "Income"
      ? incomeCategories.map((cat) => cat.name)
      : expenseCategories.map((cat) => cat.name);

  return (
    <div className="px-4 w-full">
      <div className="max-w-7xl mx-auto mt-4">
        <h1 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-left">
          Ca-Online / Transactions
        </h1>
        {/* Search and Filter Row */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center mb-4">
          {/* Search by tag name */}
          <div className="flex items-center w-full md:w-1/2 bg-[#0f172a] rounded-lg px-3 py-2 font-bold text-white">
            <RiSearchLine className="text-white mr-2" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search by tag name..."
              className="bg-transparent outline-none text-sm font-bold text-white placeholder:text-blue-200 w-full"
            />
          </div>
          {/* Category filter icon with dropdown */}
          <div className="relative flex items-center">
            <button
              className="flex items-center justify-center bg-[#0f172a] rounded-lg px-3 py-2 font-bold text-white hover:bg-blue-900/80 focus:outline-none"
              onClick={() => setCatMenuOpen((v) => !v)}
              ref={catMenuRef}
              aria-label="Filter by category"
            >
              <RiApps2Line size={20} />
              <RiArrowDownSLine size={18} className="ml-1" />
            </button>
            {catMenuOpen && (
              <div className="absolute z-10 mt-2 left-0 w-32 bg-blue-900/90 rounded-lg shadow-lg border border-blue-900/30">
                {categoryOptions.map((opt) => (
                  <button
                    key={opt.value}
                    className={`w-full text-left px-4 py-2 text-sm font-bold text-white hover:bg-blue-900/70 ${
                      category === opt.value ? "bg-blue-950" : ""
                    }`}
                    onClick={() => {
                      setCategory(opt.value);
                      setTag("All");
                      setPage(1);
                      setCatMenuOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Tag filter dropdown, always visible if category is not All */}
          {category !== "All" && (
            <div className="flex items-center bg-[#0f172a] rounded-lg px-3 py-2 font-bold text-white">
              <select
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value);
                  setPage(1);
                }}
                className="bg-transparent outline-none text-sm font-bold text-white w-full"
              >
                <option value="All" className="bg-blue-900/90">
                  All Tags
                </option>
                {currentTags.map((opt) => (
                  <option
                    key={opt}
                    value={opt}
                    className={tag === opt ? "bg-blue-950" : "bg-blue-900/90"}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}
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
                  <td colSpan={6} className="py-8 text-blue-300">
                    No transactions found.
                  </td>
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
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tx.type === "Income"
                            ? "bg-emerald-900/40 text-emerald-400"
                            : "bg-rose-900/40 text-rose-400"
                        }`}
                      >
                        {tx.type}
                      </span>
                    </td>
                    <td className="px-6 py-3">{tx.category}</td>
                    <td className="px-6 py-3">{tx.tag}</td>
                    <td className="px-6 py-3 font-bold">
                      <span
                        className={
                          tx.type === "Income"
                            ? "text-emerald-400"
                            : "text-rose-400"
                        }
                      >
                        {tx.type === "Income" ? "+" : "-"} ₹
                        {tx.amount.toLocaleString()}
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
              className={`px-3 py-1 rounded-lg font-semibold text-blue-300 bg-blue-900/30 hover:bg-blue-900/50 transition-colors ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePage(i + 1)}
                className={`px-3 py-1 rounded-lg font-semibold ${
                  page === i + 1
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                    : "bg-blue-900/30 text-blue-300 hover:bg-blue-900/50"
                } transition-colors`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePage(page + 1)}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-lg font-semibold text-blue-300 bg-blue-900/30 hover:bg-blue-900/50 transition-colors ${
                page === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
