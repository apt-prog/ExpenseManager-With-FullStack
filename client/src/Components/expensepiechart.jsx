import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const ExpensePieChart = () => {
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [4500, 2500],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',  // emerald-500
          'rgba(239, 68, 68, 0.8)',  // rose-500
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',    // emerald-500
          'rgba(239, 68, 68, 1)',    // rose-500
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#94a3b8',
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context) {
            const value = context.raw;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${context.label}: $${value.toLocaleString()} (${percentage}%)`;
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      duration: 1200,
      easing: 'easeOutCirc'
    }
  };

  return (
    <div className="bg-[#0f172a] rounded-xl p-6 shadow-xl shadow-blue-900/20 border border-blue-900/30">
      <h2 className="text-xl font-semibold text-white mb-6">Income vs Expenses</h2>
      <div className="h-[300px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpensePieChart;
