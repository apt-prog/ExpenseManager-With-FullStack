import { useState } from 'react';
import { RiMoonLine, RiSunLine, RiMailLine, RiLockPasswordLine, RiShieldCheckLine, RiDeleteBin6Line, RiNotification3Line, RiGlobalLine, RiMoneyDollarCircleLine, RiEarthLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@email.com',
  tagline: 'Finance enthusiast. Love to track and optimize my expenses!',
  darkMode: true,
  currency: 'USD',
  dateFormat: 'DD/MM/YYYY',
  language: 'English',
  emailAlerts: true,
  pushNotifications: false,
  lastDevices: [
    { ip: '192.168.1.10', time: '2024-06-10 14:23' },
    { ip: '192.168.1.11', time: '2024-06-09 18:10' },
  ],
  twoFA: true,
};

function Section({ title, description, children, className = '' }) {
  return (
    <section className={`w-full bg-[#101a2c] rounded-2xl shadow-xl border border-blue-900/30 p-8 mb-8 ${className}`}>
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      {description && <p className="text-blue-300 mb-6 text-sm">{description}</p>}
      {children}
    </section>
  );
}

export default function Settings() {
  const [user, setUser] = useState(mockUser);
  const [general, setGeneral] = useState({ name: user.name, tagline: user.tagline });
  const [generalMsg, setGeneralMsg] = useState('');
  const [prefs, setPrefs] = useState({
    darkMode: user.darkMode,
    currency: user.currency,
    dateFormat: user.dateFormat,
    language: user.language,
    emailAlerts: user.emailAlerts,
    pushNotifications: user.pushNotifications,
  });
  const [prefsMsg, setPrefsMsg] = useState('');
  const [security, setSecurity] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFA: user.twoFA,
  });
  const [securityMsg, setSecurityMsg] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editForm, setEditForm] = useState({ ...user });
  const [editErrors, setEditErrors] = useState({});
  const [editLoading, setEditLoading] = useState(false);

  // Handlers for demo
  const handleGeneralChange = e => setGeneral({ ...general, [e.target.name]: e.target.value });
  const handleEditFormChange = e => setEditForm({ ...editForm, [e.target.name]: e.target.value });
  const handleEditSave = e => {
    e.preventDefault();
    let newErrors = {};
    if (!editForm.name.trim()) newErrors.name = 'Name is required.';
    if (!editForm.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Enter a valid email.';
    if (!editForm.mobile.match(/^\+?\d[\d\s-]{7,}$/)) newErrors.mobile = 'Enter a valid mobile number.';
    if (!editForm.city.trim()) newErrors.city = 'City is required.';
    if (!editForm.country.trim()) newErrors.country = 'Country is required.';
    setEditErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setEditLoading(true);
    setTimeout(() => {
      setUser({ ...user, ...editForm });
      setGeneral({ name: editForm.name, tagline: editForm.tagline });
      setEditLoading(false);
      setEditModal(false);
    }, 1200);
  };
  const handlePrefsChange = e => setPrefs({ ...prefs, [e.target.name]: e.target.value });
  const handlePrefsToggle = key => setPrefs({ ...prefs, [key]: !prefs[key] });
  const handlePrefsSave = e => {
    e.preventDefault();
    setPrefsMsg('Preferences updated!');
    setTimeout(() => setPrefsMsg(''), 1500);
  };
  const handleSecurityChange = e => setSecurity({ ...security, [e.target.name]: e.target.value });
  const handleSecurityToggle = key => setSecurity({ ...security, [key]: !security[key] });
  const handleSecuritySave = e => {
    e.preventDefault();
    setSecurityMsg('Security updated!');
    setTimeout(() => setSecurityMsg(''), 1500);
  };
  const handleDelete = () => {
    setDeleteModal(false);
    alert('Account deleted (demo only)');
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0f1c] px-0 py-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto mb-8 px-4">
        <h1 className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-left">
          Settings
        </h1>
        <p className="text-blue-300 mb-6 text-sm">Manage your preferences, security, and app behavior here.</p>
      </div>
      {/* General + Preferences side by side on large screens */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 px-4">
        <Section title="General Settings" className="flex-1">
          <form className="flex flex-col gap-6 w-full" autoComplete="off">
            <div className="w-full">
              <label className="block text-blue-200 font-semibold mb-1">Full Name</label>
              <input
                name="name"
                value={user.name}
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
                placeholder="Full Name"
              />
            </div>
            <div className="w-full">
              <label className="block text-blue-200 font-semibold mb-1">Email</label>
              <input
                name="email"
                value={user.email}
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
                placeholder="Email Address"
                type="email"
              />
            </div>
            <div className="w-full">
              <label className="block text-blue-200 font-semibold mb-1">Bio / About Profession</label>
              <textarea
                name="bio"
                value={user.tagline || user.bio}
                readOnly
                className="w-full h-24 px-4 py-2 rounded-lg bg-[#0a0f1c] text-blue-300 border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
                placeholder="Tell us a little about yourself..."
                rows={2}
              />
            </div>
            <button type="button" className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg shadow-lg mt-2 transition-all" onClick={() => setEditModal(true)}>
              Edit The Details
            </button>
          </form>
          {/* Edit Modal */}
          {editModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="absolute inset-0" onClick={() => setEditModal(false)}></div>
              <div className="relative bg-[#101a2c] w-[95vw] max-w-2xl rounded-2xl shadow-2xl p-10 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-8">Edit Details</h3>
                <form className="flex flex-col gap-6 w-full" onSubmit={handleEditSave} autoComplete="off">
                  <div className="w-full">
                    <label className="block text-blue-200 font-semibold mb-1">Full Name</label>
                    <input
                      name="name"
                      value={editForm.name}
                      onChange={handleEditFormChange}
                      className={`w-full px-4 py-1.5 rounded-lg bg-[#0a0f1c] text-white border ${editErrors.name ? 'border-rose-500' : 'border-blue-900/30'} focus:ring-2 focus:ring-blue-500 outline-none`}
                      placeholder="Full Name"
                    />
                    {editErrors.name && <span className="text-rose-400 text-xs mt-1">{editErrors.name}</span>}
                  </div>
                  <div className="w-full">
                    <label className="block text-blue-200 font-semibold mb-1">Email</label>
                    <input
                      name="email"
                      value={editForm.email}
                      onChange={handleEditFormChange}
                      className={`w-full px-4 py-1.5 rounded-lg bg-[#0a0f1c] text-white border ${editErrors.email ? 'border-rose-500' : 'border-blue-900/30'} focus:ring-2 focus:ring-blue-500 outline-none`}
                      placeholder="Email Address"
                      type="email"
                    />
                    {editErrors.email && <span className="text-rose-400 text-xs mt-1">{editErrors.email}</span>}
                  </div>
                  <div className="w-full">
                    <label className="block text-blue-200 font-semibold mb-1">Mobile Number</label>
                    <input
                      name="mobile"
                      value={editForm.mobile}
                      onChange={handleEditFormChange}
                      className={`w-full px-4 py-1.5 rounded-lg bg-[#0a0f1c] text-white border ${editErrors.mobile ? 'border-rose-500' : 'border-blue-900/30'} focus:ring-2 focus:ring-blue-500 outline-none`}
                      placeholder="Mobile Number"
                      type="tel"
                    />
                    {editErrors.mobile && <span className="text-rose-400 text-xs mt-1">{editErrors.mobile}</span>}
                  </div>
                  <div className="w-full">
                    <label className="block text-blue-200 font-semibold mb-1">Bio / About Profession</label>
                    <textarea
                      name="tagline"
                      value={editForm.tagline || editForm.bio}
                      onChange={handleEditFormChange}
                      className={`w-full px-4 py-1.5 rounded-lg bg-[#0a0f1c] text-white border ${editErrors.bio ? 'border-rose-500' : 'border-blue-900/30'} focus:ring-2 focus:ring-blue-500 outline-none`}
                      placeholder="Tell us a little about yourself..."
                      rows={2}
                    />
                    {editErrors.bio && <span className="text-rose-400 text-xs mt-1">{editErrors.bio}</span>}
                  </div>
                  <div className="flex w-full gap-4 mt-4">
                    <button type="button" className="w-1/2 py-3 rounded-lg bg-blue-900 text-white hover:bg-blue-700 transition-all" onClick={() => setEditModal(false)}>Cancel</button>
                    <button type="submit" className="w-1/2 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg shadow-lg transition-all" disabled={editLoading}>
                      {editLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Section>
        <Section title="User Preferences" className="flex-1">
          <form className="flex flex-col gap-6 w-full" onSubmit={handlePrefsSave} autoComplete="off">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full">
                <span className="block text-blue-200 font-semibold mb-1">Theme</span>
                <button type="button" onClick={() => handlePrefsToggle('darkMode')} className={`w-full flex items-center justify-between px-4 py-2 rounded-lg ${prefs.darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900'} transition-all`}>
                  <span className="flex items-center gap-2">{prefs.darkMode ? <RiMoonLine /> : <RiSunLine />} {prefs.darkMode ? 'Dark' : 'Light'}</span>
                </button>
              </div>
              <div className="w-full">
                <span className="block text-blue-200 font-semibold mb-1">Currency</span>
                <select name="currency" value={prefs.currency} onChange={handlePrefsChange} className="w-full px-4 py-2 rounded-lg bg-blue-900 text-white focus:outline-none">
                  <option>USD</option>
                  <option>INR</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className="w-full">
                <span className="block text-blue-200 font-semibold mb-1">Language</span>
                <select name="language" value={prefs.language} onChange={handlePrefsChange} className="w-full px-4 py-2 rounded-lg bg-blue-900 text-white focus:outline-none">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div className="w-full">
                <span className="block text-blue-200 font-semibold mb-1">Email Alerts</span>
                <button type="button" onClick={() => handlePrefsToggle('emailAlerts')} className={`w-full flex items-center justify-between px-4 py-2 rounded-lg ${prefs.emailAlerts ? 'bg-emerald-600 text-white' : 'bg-blue-900 text-blue-200'} transition-all`}>
                  <span className="flex items-center gap-2"><RiNotification3Line /> Email Alerts</span>
                  <span>{prefs.emailAlerts ? 'On' : 'Off'}</span>
                </button>
              </div>
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg shadow-lg mt-2 transition-all">Save</button>
            {prefsMsg && <div className="text-emerald-400 text-center font-semibold mt-2">{prefsMsg}</div>}
          </form>
        </Section>
      </div>
      {/* Security + Device Info side by side on large screens */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 px-4">
        <Section title="Security Controls" className="flex-1">
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSecuritySave} autoComplete="off">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full">
                <label className="block text-blue-200 font-semibold mb-1">Old Password</label>
                <div className="relative">
                  <input
                    name="oldPassword"
                    value={security.oldPassword}
                    onChange={handleSecurityChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-white border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                    placeholder="Old Password"
                    type={showPw ? 'text' : 'password'}
                  />
                  <button type="button" className="absolute right-2 top-2 text-blue-400" onClick={() => setShowPw(v => !v)}>{showPw ? <RiEyeOffLine /> : <RiEyeLine />}</button>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-blue-200 font-semibold mb-1">New Password</label>
                <div className="relative">
                  <input
                    name="newPassword"
                    value={security.newPassword}
                    onChange={handleSecurityChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-white border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                    placeholder="New Password"
                    type={showNewPw ? 'text' : 'password'}
                  />
                  <button type="button" className="absolute right-2 top-2 text-blue-400" onClick={() => setShowNewPw(v => !v)}>{showNewPw ? <RiEyeOffLine /> : <RiEyeLine />}</button>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-blue-200 font-semibold mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    value={security.confirmPassword}
                    onChange={handleSecurityChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] text-white border border-blue-900/30 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                    placeholder="Confirm Password"
                    type={showConfirmPw ? 'text' : 'password'}
                  />
                  <button type="button" className="absolute right-2 top-2 text-blue-400" onClick={() => setShowConfirmPw(v => !v)}>{showConfirmPw ? <RiEyeOffLine /> : <RiEyeLine />}</button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-200 font-semibold">Two-Factor Authentication (2FA)</span>
                <button type="button" onClick={() => handleSecurityToggle('twoFA')} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${security.twoFA ? 'bg-emerald-600 text-white' : 'bg-blue-900 text-blue-200'} transition-all`}>
                  <RiShieldCheckLine /> {security.twoFA ? 'Enabled' : 'Disabled'}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg shadow-lg mt-2 transition-all">Save</button>
            {securityMsg && <div className="text-emerald-400 text-center font-semibold mt-2">{securityMsg}</div>}
          </form>
          <div className="w-full border-t border-blue-900/30 mt-8 pt-6">
            <div className="text-blue-300 font-semibold mb-2">Last Device Login Info</div>
            <ul className="divide-y divide-blue-900/40">
              {user.lastDevices.map((d, i) => (
                <li key={i} className="py-2 flex items-center gap-4">
                  <span className="text-white font-semibold">{d.ip}</span>
                  <span className="text-xs text-blue-300">{d.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex items-center gap-3 mt-8">
            <RiDeleteBin6Line className="text-rose-400" />
            <span className="text-white font-semibold">Delete Account</span>
            <button type="button" className="ml-auto px-4 py-2 rounded-lg bg-rose-700 text-white hover:bg-rose-800 transition-all" onClick={() => setDeleteModal(true)}>Delete</button>
          </div>
          {deleteModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="absolute inset-0" onClick={() => setDeleteModal(false)}></div>
              <div className="relative bg-[#101a2c] w-[90vw] max-w-sm rounded-2xl shadow-2xl p-8 flex flex-col items-center">
                <RiDeleteBin6Line size={40} className="text-rose-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Confirm Delete</h3>
                <p className="text-blue-200 mb-6 text-center">Are you sure you want to delete your account? This action cannot be undone.</p>
                <div className="flex gap-4 w-full">
                  <button onClick={() => setDeleteModal(false)} className="w-1/2 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-700 transition-all">Cancel</button>
                  <button onClick={handleDelete} className="w-1/2 py-2 rounded-lg bg-rose-700 text-white hover:bg-rose-800 transition-all">Delete</button>
                </div>
              </div>
            </div>
          )}
        </Section>
      </div>
    </div>
  );
} 