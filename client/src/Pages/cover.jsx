import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  RiShieldCheckLine, RiBarChart2Line, RiUserStarLine, RiPieChart2Line,
  RiLock2Line, RiTeamLine, RiRocket2Line, RiLoginCircleLine, RiLogoutCircleLine
} from 'react-icons/ri';

const testimonials = [
  {
    name: 'Priya',
    text: 'Ca-Online made budgeting fun and easy!',
    avatar: '🧑‍💼',
  },
  {
    name: 'John',
    text: 'Best app for tracking expenses!',
    avatar: '👨‍💻',
  },
  {
    name: 'Aisha',
    text: 'Love the analytics and charts.',
    avatar: '👩‍🎨',
  },
];

export default function Cover() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const nextTestimonial = () =>
    setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1e293b] text-white flex flex-col items-center">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 px-4 flex flex-col items-center text-center shadow-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          Ca-Online Expense Manager
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
          Take control of your finances with the most intuitive and powerful expense management platform.
        </p>
        <div className="flex gap-4 justify-center">
          {!loggedIn ? (
            <>
              <Link to="/login" className="flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg transition-all"><RiLoginCircleLine /> Login</Link>
              <Link to="/register" className="flex items-center gap-2 px-8 py-3 rounded-full bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg shadow-lg transition-all">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="flex items-center gap-2 px-8 py-3 rounded-full bg-rose-700 hover:bg-rose-800 text-white font-bold text-lg shadow-lg transition-all"><RiLogoutCircleLine /> Logout</button>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-2"><RiPieChart2Line /> How It Works</h2>
          <ul className="text-blue-200 text-lg space-y-3">
            <li>✔️ Track your income and expenses in real time</li>
            <li>✔️ Categorize transactions for clarity</li>
            <li>✔️ Visualize your financial health with charts</li>
            <li>✔️ Get actionable insights and reports</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80"
            alt="How it works"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-blue-900/30"
          />
        </div>
      </section>

      {/* Why We Are the Best */}
      <section className="w-full bg-[#101a2c] py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 flex items-center gap-2"><RiUserStarLine /> Why We Are the Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border border-blue-900/30">
            <RiShieldCheckLine className="text-blue-300 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-blue-200">Your data is encrypted and protected with industry-leading security standards.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border border-blue-900/30">
            <RiBarChart2Line className="text-blue-300 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
            <p className="text-blue-200">Visualize your spending, set goals, and receive personalized insights.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border border-blue-900/30">
            <RiTeamLine className="text-blue-300 text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Community Trusted</h3>
            <p className="text-blue-200">Thousands of users trust Ca-Online to manage their finances every day.</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 flex items-center gap-2"><RiRocket2Line /> Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            ['📊', 'Real-time Tracking', 'Monitor your expenses and income as they happen.'],
            ['🗂️', 'Custom Categories', 'Organize your transactions your way.'],
            ['📈', 'Interactive Dashboards', 'Visualize your financial data with beautiful charts.'],
            ['🔔', 'Smart Notifications', 'Get alerts for budgets, bills, and more.'],
            ['💾', 'Exportable Reports', 'Download your data for offline analysis.'],
            ['🔄', 'Multi-device Sync', 'Access your finances anywhere, anytime.'],
          ].map(([icon, title, desc], idx) => (
            <div key={idx} className="bg-[#1e293b] rounded-xl p-6 flex flex-col items-center border border-blue-900/30 shadow-md">
              <span className="text-2xl">{icon}</span>
              <h4 className="font-bold text-lg mt-2 mb-1">{title}</h4>
              <p className="text-blue-200 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4 bg-gradient-to-r from-blue-900/80 to-blue-700/80">
        <div className="flex-1 flex flex-col items-center md:items-end">
          <div className="bg-[#101a2c] rounded-2xl p-10 shadow-2xl border border-blue-900/30 max-w-md">
            <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2"><RiLock2Line /> Security & Privacy</h2>
            <p className="text-blue-200 text-lg mb-2">Your data is encrypted and protected with industry-leading security standards.</p>
            <p className="text-blue-200 text-lg">We value your privacy and never share your information.</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80"
            alt="Security"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-blue-900/30"
          />
        </div>
      </section>

      {/* User Testimonials */}
      <section className="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 flex items-center gap-2"><RiUserStarLine /> What Our Users Say</h2>
        <div className="relative w-full flex flex-col items-center">
          <div className="bg-[#101a2c] rounded-2xl p-8 shadow-xl border border-blue-900/30 flex flex-col items-center max-w-xl mx-auto">
            <span className="text-5xl mb-4">{testimonials[testimonialIdx].avatar}</span>
            <p className="text-blue-200 text-lg mb-2">“{testimonials[testimonialIdx].text}”</p>
            <span className="text-blue-400 font-bold">– {testimonials[testimonialIdx].name}</span>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevTestimonial} className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold shadow transition-all">Prev</button>
            <button onClick={nextTestimonial} className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold shadow transition-all">Next</button>
          </div>
        </div>
      </section>

      {/* Analytics & Insights */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-2"><RiBarChart2Line /> Analytics & Insights</h2>
          <p className="text-blue-200 text-lg mb-4">Visualize your spending patterns, set goals, and receive personalized insights to optimize your finances.</p>
          <ul className="list-disc list-inside text-blue-300 space-y-2">
            <li>Monthly and yearly breakdowns</li>
            <li>Category-wise analysis</li>
            <li>Goal tracking and progress</li>
            <li>Exportable charts and reports</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80"
            alt="Analytics"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-blue-900/30"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 px-4 flex flex-col items-center bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
        <div className="bg-[#101a2c]/90 rounded-2xl p-10 shadow-2xl border border-blue-900/30 flex flex-col items-center max-w-2xl">
          <h2 className="text-3xl font-bold text-blue-300 mb-4">Ready to take charge of your finances?</h2>
          <p className="text-blue-200 text-lg mb-8 text-center">Join thousands of users who trust Ca-Online to manage their money. Start your journey today!</p>
          <div className="flex gap-4 justify-center">
            {!loggedIn ? (
              <>
                <Link to="/login" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg transition-all">Login</Link>
                <Link to="/register" className="px-8 py-3 rounded-full bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg shadow-lg transition-all">Register</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="px-8 py-3 rounded-full bg-rose-700 hover:bg-rose-800 text-white font-bold text-lg shadow-lg transition-all">Logout</button>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto py-6 px-4 text-center text-blue-400 text-sm mt-12">
        &copy; {new Date().getFullYear()} Ca-Online. All rights reserved.
      </footer>
    </div>
  );
}
