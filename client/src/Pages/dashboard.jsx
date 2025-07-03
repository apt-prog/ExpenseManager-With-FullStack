import LineChart from '../Components/linechart';
import DashboardCards from '../Components/dashboardcards';
import IncomeExpenseChart from '../Components/incomeexpensechart';
import ExpensePieChart from '../Components/expensepiechart';
import DashboardTable from '../Components/dashboardtable';
import { RiAddCircleLine, RiArrowUpCircleLine, RiArrowDownCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="px-4 w-full">
      <div className="max-w-7xl mx-auto mt-4">
        <h1 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-left">
          Ca-Online / Dashboard
        </h1>
        {/* Dashboard Cards */}
        <DashboardCards />

        {/* Line Chart Section - 100% width */}
        <div className="w-full mb-8">
          <LineChart />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <IncomeExpenseChart />
          <ExpensePieChart />
        </div>

        {/* Dashboard Table Section */}
        <DashboardTable />

        {/* Add Income/Expense Buttons */}
        <div className="flex justify-center gap-6 mt-10 mb-8">
          <Link to="/income" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-900/20 transition-all text-base">
            <RiArrowUpCircleLine size={22} className="text-white" />
            Add Income
          </Link>
          <Link to="/expenses" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold shadow-lg shadow-rose-900/20 transition-all text-base">
            <RiArrowDownCircleLine size={22} className="text-white" />
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 