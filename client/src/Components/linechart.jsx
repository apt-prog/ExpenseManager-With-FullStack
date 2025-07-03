import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Income',
        data: [3200, 4000, 3700, 4200, 4800, 5000, 5300, 5500],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34,197,94,0.08)',
        pointBackgroundColor: '#22c55e',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 3,
        borderWidth: 3,
        tension: 0.4,
        fill: false
      },
      {
        label: 'Expense',
        data: [2100, 2500, 2300, 2700, 3000, 3200, 3400, 3600],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239,68,68,0.08)',
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 3,
        borderWidth: 3,
        tension: 0.4,
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeInOutSine',
      delay: 0,
      loop: false,
      animateScale: false,
      animateRotate: false,
      animations: {
        x: {
          type: 'number',
          easing: 'linear',
          duration: 1500,
          from: NaN,
          delay: 0
        },
        y: {
          type: 'number',
          easing: 'easeOutCubic',
          duration: 1500,
          from: NaN
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#94a3b8',
          font: {
            size: 13
          },
          usePointStyle: true,
          pointStyle: 'line',
          padding: 20
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
        padding: 14,
        displayColors: true,
        callbacks: {
          title: function (context) {
            return context[0].label;
          },
          label: function (context) {
            return `${context.dataset.label}: $${context.raw.toLocaleString()}`;
          }
        }
      }
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255,255,255,0.07)',
          drawBorder: false
        },
        ticks: {
          color: '#94a3b8',
          callback: function (value) {
            return '$' + value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255,255,255,0.04)',
          drawBorder: false
        },
        ticks: {
          color: '#94a3b8'
        }
      }
    }
  };

  return (
    <div className="bg-[#0f172a] rounded-xl shadow-xl shadow-blue-900/20 border border-blue-900/30 w-full mb-8 h-[340px] flex flex-col">
      <h2 className="text-xl font-semibold text-white mb-2 px-6 pt-4">Income & Expense Trend</h2>
      <div className="flex-1 px-4 pb-4">
        <Line data={data} options={options} style={{ height: '100%' }} />
      </div>
    </div>
  );
};

export default LineChart;
