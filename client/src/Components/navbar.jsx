import { RiSearchLine, RiUser3Line, RiMore2Fill, RiSettings4Line } from 'react-icons/ri';

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-3 py-2 bg-[#0f172a] border-b border-blue-900/30 sticky top-0 z-40 min-h-[48px]">
      {/* Search Bar */}
      <div className="cursor-pointer flex items-center gap-2 w-full max-w-xs bg-[#1e293b] rounded-lg px-2 py-1">
        <RiSearchLine className="text-blue-400" size={16} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm text-gray-200 placeholder:text-blue-300 w-full"
        />
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="cursor-pointer p-1.5 rounded-full bg-blue-900/30 hover:bg-blue-900/50 transition-colors">
          <RiSettings4Line className="text-blue-400" size={18} />
        </button>
        <button className="cursor-pointer p-1.5 rounded-full bg-blue-900/30 hover:bg-blue-900/50 transition-colors">
          <RiMore2Fill className="text-blue-400" size={18} />
        </button>
        <div className="cursor-pointer flex items-center gap-1.5 bg-blue-900/30 px-2 py-1 rounded-lg">
          <RiUser3Line className="text-blue-400" size={18} />
          <span className="text-gray-200 font-medium text-sm">Username</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
