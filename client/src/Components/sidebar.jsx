import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  RiDashboardLine,
  RiExchangeDollarLine,
  RiAddCircleLine,
  RiMoneyDollarCircleLine,
  RiMoneyDollarBoxLine,
  RiFolderLine,
  RiSettings4Line,
  RiUserLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiLogoutBoxLine
} from 'react-icons/ri';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { title: 'Dashboard', icon: <RiDashboardLine size={24} />, path: '/dashboard' },
    { title: 'Transactions', icon: <RiExchangeDollarLine size={24} />, path: '/transactions' },
    { title: 'Add Transaction', icon: <RiAddCircleLine size={24} />, path: '/add-transaction' },
    { title: 'Income', icon: <RiMoneyDollarCircleLine size={24} />, path: '/income' },
    { title: 'Expenses', icon: <RiMoneyDollarBoxLine size={24} />, path: '/expenses' },
    { title: 'Categories', icon: <RiFolderLine size={24} />, path: '/categories' },
    { title: 'Manage Expenses', icon: <RiExchangeDollarLine size={24} />, path: '/expensemanage' },
    { title: 'Profile', icon: <RiUserLine size={24} />, path: '/profile' },
    { title: 'Settings', icon: <RiSettings4Line size={24} />, path: '/settings' },
  ];

  return (
    <div className={`bg-[#0f172a] h-screen ${isOpen ? 'w-64' : 'w-20'} duration-300 text-gray-100 px-4 shadow-2xl shadow-blue-900/20 border-r border-blue-900/30 relative flex flex-col`}>
      {/* Header with logo and toggle button */}
      <div className="py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className={`font-bold text-xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>
            Ca-Online
          </h1>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-blue-900/30 hover:bg-blue-800/40 transition-all duration-200 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 hover:scale-105 active:scale-95"
        >
          {isOpen ? <RiMenuFoldLine size={24} /> : <RiMenuUnfoldLine size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 flex flex-col gap-1.5 mt-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-4 p-2.5 rounded-lg hover:bg-blue-900/30 transition-all duration-200 group hover:shadow-lg hover:shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
              {item.icon}
            </span>
            {isOpen && <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">{item.title}</span>}
          </Link>
        ))}
      </nav>
      
      {/* Logout Button */}
      <div className={`py-4 ${isOpen ? 'w-[calc(100%-2rem)]' : 'w-12'}`}>
        <button
          className="w-full flex items-center gap-4 p-2.5 rounded-lg bg-red-900/30 hover:bg-red-800/40 transition-all duration-200 group hover:shadow-lg hover:shadow-red-900/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="text-red-400 group-hover:text-red-300 transition-colors duration-200">
            <RiLogoutBoxLine size={24} />
          </span>
          {isOpen && <span className="text-sm text-red-300 group-hover:text-white transition-colors duration-200">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
