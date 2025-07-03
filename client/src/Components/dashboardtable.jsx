const transactions = [
  { no: 1, date: '2024-06-01', category: 'Salary', type: 'Income', amount: 4500, tag: 'Profit' },
  { no: 2, date: '2024-06-03', category: 'Groceries', type: 'Expense', amount: 120, tag: 'Food' },
  { no: 3, date: '2024-06-05', category: 'Freelance', type: 'Income', amount: 800, tag: 'Profit' },
  { no: 4, date: '2024-06-07', category: 'Transport', type: 'Expense', amount: 40, tag: 'Transport' },
  { no: 5, date: '2024-06-10', category: 'Investment', type: 'Income', amount: 300, tag: 'Profit' },
  { no: 6, date: '2024-06-12', category: 'Dining', type: 'Expense', amount: 60, tag: 'Food' },
  { no: 7, date: '2024-06-15', category: 'Gift', type: 'Income', amount: 200, tag: 'Gift' },
  { no: 8, date: '2024-06-18', category: 'Shopping', type: 'Expense', amount: 150, tag: 'Shopping' },
  { no: 9, date: '2024-06-18', category: 'Groceries', type: 'Expense', amount: 150, tag: 'Shopping' },
  { no: 10, date: '2024-06-18', category: 'Shopping', type: 'Expense', amount: 150, tag: 'Shopping' },
];

const DashboardTable = () => {
  return (
    <div className="w-full bg-[#0f172a] rounded-xl shadow-xl shadow-blue-900/20 border border-blue-900/30 mt-8 overflow-x-auto mb-6">
      <h2 className="text-xl font-semibold text-white px-6 pt-2 pb-2">Recent Transactions</h2>
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
          {transactions.map((tx) => (
            <tr
              key={tx.no}
              className="border-b border-blue-900/30 hover:bg-blue-900/20 transition-colors"
            >
              <td className="px-6 py-3">{tx.no}</td>
              <td className="px-6 py-3">{tx.date}</td>
              <td className="px-6 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tx.type === 'Income'
                      ? 'bg-emerald-900/40 text-emerald-400'
                      : 'bg-rose-900/40 text-rose-400'
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
                    tx.type === 'Income'
                      ? 'text-emerald-400'
                      : 'text-rose-400'
                  }
                >
                  {tx.type === 'Income' ? '+' : '-'} ₹{tx.amount.toLocaleString()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
