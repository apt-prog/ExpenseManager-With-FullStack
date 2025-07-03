import {
  RiMoneyDollarCircleLine,
  RiMoneyDollarBoxLine,
  RiBankLine,
  RiWallet3Line,
  RiArrowUpLine,
  RiArrowDownLine,
  RiLineChartLine,
  RiPieChartLine,
  RiBarChartLine,
  RiArrowUpCircleFill
} from 'react-icons/ri';
import { useEffect, useState } from 'react';

// Count-up animation hook
const useCountUp = (end, duration = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

const DashboardCards = () => {
  const cards = [
    {
      title: "Total Income",
      amount: "$4500",
      change: "+12.5%",
      icon: <RiMoneyDollarCircleLine size={24} />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      changeColor: "text-emerald-500",
      trend: "up",
      cornerIcon: <RiArrowUpCircleFill size={32} />,
      cornerColor: "text-emerald-500/5"
    },
    {
      title: "Total Expenses",
      amount: "$2500",
      change: "+8.2%",
      icon: <RiMoneyDollarBoxLine size={24} />,
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
      changeColor: "text-rose-500",
      trend: "up",
      cornerIcon: <RiBarChartLine size={32} />,
      cornerColor: "text-rose-500/5"
    },
    {
      title: "Total Savings",
      amount: "$1200",
      change: "+15.3%",
      icon: <RiBankLine size={24} />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      changeColor: "text-blue-500",
      trend: "up",
      cornerIcon: <RiPieChartLine size={32} />,
      cornerColor: "text-blue-500/5"
    },
    {
      title: "Available Balance",
      amount: "$800",
      icon: <RiWallet3Line size={24} />,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      changeColor: "text-violet-500",
      trend: "neutral",
      cornerIcon: <RiLineChartLine size={32} />,
      cornerColor: "text-violet-500/5"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const number = parseInt(card.amount.replace(/[^0-9]/g, ''));
        const animatedValue = useCountUp(number);

        return (
          <div
            key={index}
            className="bg-[#0f172a] rounded-xl shadow-sm shadow-blue-900/10 hover:shadow-md hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Card Header */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-400">{card.title}</h3>
                <div className={`p-2 rounded-lg ${card.bgColor} transition-transform duration-300`}>
                  <span className={card.color}>{card.icon}</span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="px-4 pb-4">
              <div className="space-y-0.5">
                <p className="text-2xl font-semibold text-white transition-transform duration-300">
                  ${animatedValue.toLocaleString()}
                </p>
                {card.trend !== "neutral" && (
                  <div className="flex items-center gap-1">
                    <span className={card.changeColor}>
                      {card.trend === "up" ? <RiArrowUpLine size={16} /> : <RiArrowDownLine size={16} />}
                    </span>
                    <span className={`text-sm font-medium ${card.changeColor}`}>
                      {card.change}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Corner Decoration */}
            <div className={`absolute -bottom-2 -right-2 ${card.cornerColor} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
              {card.cornerIcon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;
