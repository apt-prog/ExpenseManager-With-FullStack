import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IncomeExpenseChart = () => {
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
        borderRadius: 8,
        barThickness: 100,
        maxBarThickness: 110,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `$${context.raw.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#94a3b8',
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeOutCubic',
      // Only animate the bars, not the y-axis or layout
      animations: {
        y: {
          type: 'number',
          easing: 'easeOutCubic',
          duration: 1000,
          from: 0
        }
      }
    }
  };

  return (
    <div className="bg-[#0f172a] rounded-xl p-6 shadow-xl shadow-blue-900/20 border border-blue-900/30">
      <h2 className="text-xl font-semibold text-white mb-6">Income vs Expenses</h2>
      <div className="h-[300px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
