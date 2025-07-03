import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./Components/sidebar";
import NavBar from "./Components/navbar";
import Dashboard from "./Pages/dashboard";
import Transactions from "./Pages/transactions";
import AddTransaction from "./Pages/addtransaction";
import Income from "./Pages/income";
import Expenses from "./Pages/expenses";
import Categories from "./Pages/categories";
import ExpenseManage from "./Pages/expensemanage";
import Profile from "./Pages/profile";
import Settings from "./Pages/settings";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Cover from "./Pages/cover";
import "./App.css";
import { useEffect, useRef } from "react";

// Placeholder components for other pages
const Analysis = () => <div className="p-8 text-white">Analysis Page</div>;
const ManageExpenses = () => (
  <div className="p-8 text-white">Manage Expenses Page</div>
);
const Reports = () => <div className="p-8 text-white">Reports Page</div>;

function ScrollToTopWrapper({ children, scrollRef }) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, scrollRef]);
  return children;
}

function App() {
  const mainScrollRef = useRef(null);
  return (
    <Router>
      <ScrollToTopWrapper scrollRef={mainScrollRef}>
        <Routes>
          {/* Cover page as default landing page */}
          <Route path="/" element={<Cover />} />
          {/* Auth routes without sidebar/navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Main app routes with sidebar/navbar */}
          <Route
            path="*"
            element={
              <div className="flex bg-[#0a0f1c] min-h-screen">
                <Sidebar />
                <div
                  ref={mainScrollRef}
                  className="flex-1 h-screen overflow-y-auto"
                >
                  <NavBar />
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route
                      path="/add-transaction"
                      element={<AddTransaction />}
                    />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/income" element={<Income />} />
                    <Route path="/expenses" element={<Expenses />} />
                    <Route path="/expensemanage" element={<ExpenseManage />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </ScrollToTopWrapper>
    </Router>
  );
}

export default App;
