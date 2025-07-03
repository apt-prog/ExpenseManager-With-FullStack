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
} from 'react-icons/ri';

export const incomeCategories = [
  { name: 'Salary', icon: RiMoneyDollarCircleLine, color: 'from-emerald-500 to-emerald-700' },
  { name: 'Investment', icon: RiWallet3Line, color: 'from-yellow-500 to-yellow-700' },
  { name: 'Freelancing', icon: RiUserLine, color: 'from-blue-500 to-blue-700' },
  { name: 'Gifts', icon: RiGiftLine, color: 'from-pink-500 to-pink-700' },
  { name: 'Rent Income', icon: RiHome2Line, color: 'from-rose-500 to-rose-700' },
  { name: 'Digital Income', icon: RiComputerLine, color: 'from-indigo-500 to-indigo-700' },
  { name: 'Bonus', icon: RiTrophyLine, color: 'from-purple-500 to-purple-700' },
  { name: 'Other', icon: RiFolderLine, color: 'from-gray-500 to-gray-700' },
];

export const expenseCategories = [
  { name: 'Food', icon: RiRestaurant2Line, color: 'from-orange-500 to-orange-700' },
  { name: 'Rent', icon: RiHomeSmile2Line, color: 'from-lime-500 to-lime-700' },
  { name: 'Transportation', icon: RiCarLine, color: 'from-cyan-500 to-cyan-700' },
  { name: 'Shopping', icon: RiShoppingBag3Line, color: 'from-fuchsia-500 to-fuchsia-700' },
  { name: 'Health', icon: RiStethoscopeLine, color: 'from-red-500 to-red-700' },
  { name: 'Education', icon: RiBook2Line, color: 'from-teal-500 to-teal-700' },
  { name: 'Travel', icon: RiPlaneLine, color: 'from-blue-400 to-blue-600' },
  { name: 'Entertainment', icon: RiMovie2Line, color: 'from-violet-500 to-violet-700' },
  { name: 'Loan', icon: RiBankCardLine, color: 'from-amber-500 to-amber-700' },
  { name: 'Others', icon: RiFolderLine, color: 'from-slate-500 to-slate-700' },
];

export const categoryColors = Object.fromEntries([
  ...incomeCategories.map(cat => [cat.name, cat.color]),
  ...expenseCategories.map(cat => [cat.name, cat.color]),
]); 