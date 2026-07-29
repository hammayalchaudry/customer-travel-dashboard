import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  User, Mail, Phone, MapPin, Award, DollarSign, Calendar, 
  Moon, Sun, Download, ShieldCheck, UserPlus, Clock, XCircle, CheckCircle 
} from 'lucide-react';
import './App.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Initial Mock Database for Multiple Customers
const initialCustomers = [
  {
    id: 'CUST-101',
    name: 'Ali Khan',
    email: 'ali.khan@example.com',
    phone: '+92 300 1234567',
    location: 'Lahore, Pakistan',
    loyaltyTier: 'Gold Member',
    favoriteDestination: 'Dubai, UAE',
    passportStatus: 'Valid (Exp: 2030)',
    spendingHistory: [
      { year: '2023', amount: 3800 },
      { year: '2024', amount: 4100 },
      { year: '2025', amount: 2950 },
      { year: '2026', amount: 1200 },
    ],
    bookingCategories: [
      { name: 'Flight Bookings', value: 45 },
      { name: 'Luxury Hotels', value: 35 },
      { name: 'Tour Packages', value: 20 },
    ],
    travelFrequency: [
      { season: 'Q1', trips: 3 },
      { season: 'Q2', trips: 4 },
      { season: 'Q3', trips: 2 },
      { season: 'Q4', trips: 3 },
    ],
    bookings: [
      { id: 'BK-101', destination: 'Dubai, UAE', date: '2026-08-15', amount: '$1,200', category: 'Flight + Hotel', status: 'Confirmed' },
      { id: 'BK-089', destination: 'Paris, France', date: '2025-11-14', amount: '$2,950', category: 'Tour Package', status: 'Confirmed' },
      { id: 'BK-074', destination: 'Istanbul, Turkey', date: '2025-05-10', amount: '$1,800', category: 'Flight Only', status: 'Confirmed' },
    ]
  },
  {
    id: 'CUST-102',
    name: 'Sarah Ahmed',
    email: 'sarah.a@example.com',
    phone: '+92 321 9876543',
    location: 'Karachi, Pakistan',
    loyaltyTier: 'Platinum Member',
    favoriteDestination: 'Paris, France',
    passportStatus: 'Valid (Exp: 2029)',
    spendingHistory: [
      { year: '2023', amount: 5200 },
      { year: '2024', amount: 6800 },
      { year: '2025', amount: 7400 },
      { year: '2026', amount: 2400 },
    ],
    bookingCategories: [
      { name: 'Flight Bookings', value: 30 },
      { name: 'Luxury Hotels', value: 50 },
      { name: 'Car Rentals', value: 20 },
    ],
    travelFrequency: [
      { season: 'Q1', trips: 2 },
      { season: 'Q2', trips: 5 },
      { season: 'Q3', trips: 4 },
      { season: 'Q4', trips: 2 },
    ],
    bookings: [
      { id: 'BK-202', destination: 'Paris, France', date: '2026-09-01', amount: '$2,400', category: 'Luxury Hotel', status: 'Confirmed' },
      { id: 'BK-195', destination: 'Tokyo, Japan', date: '2025-12-10', amount: '$3,800', category: 'Flight + Hotel', status: 'Confirmed' },
    ]
  }
];

function App() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomerId, setSelectedCustomerId] = useState('CUST-101');
  const [darkMode, setDarkMode] = useState(false);
  
  // Modal State for Add Customer
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCust, setNewCust] = useState({
    name: '', email: '', phone: '', location: '', favoriteDestination: '', loyaltyTier: 'Gold Member'
  });

  // Dark Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Selected Active Customer
  const activeCustomer = customers.find(c => c.id === selectedCustomerId) || customers[0];

  // Calculate Total Lifetime Spent dynamically
  const totalSpentCalculated = activeCustomer.bookings
    .filter(b => b.status !== 'Cancelled')
    .reduce((sum, b) => sum + parseInt(b.amount.replace('$', '').replace(',', '')), 0);

  // 1. Function to Change Flight Status (Delay / Cancel / Confirm)
  const handleUpdateFlightStatus = (bookingId, newStatus) => {
    const updatedCustomers = customers.map(cust => {
      if (cust.id === activeCustomer.id) {
        const updatedBookings = cust.bookings.map(b => {
          if (b.id === bookingId) {
            return { ...b, status: newStatus };
          }
          return b;
        });
        return { ...cust, bookings: updatedBookings };
      }
      return cust;
    });
    setCustomers(updatedCustomers);
  };

  // 2. Function to Add New Customer
  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (!newCust.name || !newCust.email) return;

    const newCustomerObj = {
      id: `CUST-${Math.floor(100 + Math.random() * 900)}`,
      name: newCust.name,
      email: newCust.email,
      phone: newCust.phone || '+92 300 0000000',
      location: newCust.location || 'Islamabad, PK',
      loyaltyTier: newCust.loyaltyTier,
      favoriteDestination: newCust.favoriteDestination || 'London, UK',
      passportStatus: 'Valid (Exp: 2031)',
      spendingHistory: [
        { year: '2025', amount: 1500 },
        { year: '2026', amount: 800 },
      ],
      bookingCategories: [
        { name: 'Flight Bookings', value: 60 },
        { name: 'Tour Packages', value: 40 },
      ],
      travelFrequency: [
        { season: 'Q1', trips: 1 },
        { season: 'Q2', trips: 2 },
      ],
      bookings: [
        { 
          id: `BK-${Math.floor(300 + Math.random() * 900)}`, 
          destination: newCust.favoriteDestination || 'London, UK', 
          date: '2026-10-12', 
          amount: '$1,500', 
          category: 'Flight Only', 
          status: 'Confirmed' 
        }
      ]
    };

    setCustomers([...customers, newCustomerObj]);
    setSelectedCustomerId(newCustomerObj.id);
    setShowAddModal(false);
    setNewCust({ name: '', email: '', phone: '', location: '', favoriteDestination: '', loyaltyTier: 'Gold Member' });
  };

  // Export Customer Data to CSV
  const downloadCustomerReport = () => {
    const headers = ["Booking ID,Destination,Date,Amount,Category,Status\n"];
    const rows = activeCustomer.bookings.map(b => `${b.id},${b.destination},${b.date},${b.amount},${b.category},${b.status}`);
    const blob = new Blob([headers + rows.join("\n")], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `${activeCustomer.name.replace(" ", "_")}_Report.csv`);
    a.click();
  };

  return (
    <div className="dashboard-container">
      
      {/* Header */}
      <header className="header">
        <div>
          <h1>✈️ Customer Travel Management</h1>
          <p>View details, delay/cancel flights, or add new customers</p>
        </div>

        <div className="top-controls">
          <button className="icon-btn primary" onClick={() => setShowAddModal(true)}>
            <UserPlus size={18} /> Add New Customer
          </button>
          <button className="icon-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? 'Light' : 'Dark'}
          </button>
          <button className="icon-btn" onClick={downloadCustomerReport}>
            <Download size={18} /> Export CSV
          </button>
        </div>
      </header>

      {/* Customer Switcher Tabs */}
      <div className="customer-selector">
        {customers.map(c => (
          <button 
            key={c.id} 
            className={`customer-tab ${c.id === selectedCustomerId ? 'active' : ''}`}
            onClick={() => setSelectedCustomerId(c.id)}
          >
            <User size={16} /> {c.name}
          </button>
        ))}
      </div>

      {/* 1. Customer Details Profile Card */}
      <div className="customer-profile-card">
        <div className="customer-avatar">
          {activeCustomer.name.charAt(0)}
        </div>
        
        <div className="customer-info">
          <h2>
            {activeCustomer.name} <span className="badge gold">{activeCustomer.loyaltyTier}</span>
          </h2>
          <p><Mail size={14} inline /> {activeCustomer.email} | <Phone size={14} inline /> {activeCustomer.phone}</p>
          
          <div className="customer-meta-grid">
            <div className="meta-box">
              <label><MapPin size={12} /> Location</label>
              <span>{activeCustomer.location}</span>
            </div>
            <div className="meta-box">
              <label><DollarSign size={12} /> Total Active Spent</label>
              <span>${totalSpentCalculated.toLocaleString()}</span>
            </div>
            <div className="meta-box">
              <label><Calendar size={12} /> Total Bookings</label>
              <span>{activeCustomer.bookings.length} Trips</span>
            </div>
            <div className="meta-box">
              <label><Award size={12} /> Fav Destination</label>
              <span>{activeCustomer.favoriteDestination}</span>
            </div>
            <div className="meta-box">
              <label><ShieldCheck size={12} /> Passport Status</label>
              <span>{activeCustomer.passportStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 3 Analytics Charts Section */}
      <h2 style={{ marginBottom: '15px' }}>📊 Travel & Spending Insights</h2>
      <div className="customer-charts-grid">
        
        {/* CHART 1: Yearly Spending */}
        <div className="chart-card">
          <h3>💰 Spending History ($ USD)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activeCustomer.spendingHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#0088FE" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* CHART 2: Preferred Booking Types */}
        <div className="chart-card">
          <h3>🍕 Preference Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={activeCustomer.bookingCategories}
                cx="50%" cy="50%" innerRadius={45} outerRadius={75}
                paddingAngle={5} dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {activeCustomer.bookingCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* CHART 3: Travel Frequency */}
        <div className="chart-card">
          <h3>📈 Quarterly Travel Frequency</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={activeCustomer.travelFrequency}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="season" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="trips" stroke="#00C49F" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* 3. Bookings Table with Flight Delay / Cancel Actions */}
      <div className="table-card">
        <h3>📋 Manage Bookings & Flight Status</h3>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Destination</th>
                <th>Flight Date</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Status</th>
                <th>Change Status Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeCustomer.bookings.map((b) => (
                <tr key={b.id}>
                  <td><b>{b.id}</b></td>
                  <td>{b.destination}</td>
                  <td>{b.date}</td>
                  <td>{b.amount}</td>
                  <td>{b.category}</td>
                  <td>
                    <span className={`badge ${b.status.toLowerCase()}`}>
                      {b.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button 
                        className="act-btn delay" 
                        title="Mark Flight as Delayed"
                        onClick={() => handleUpdateFlightStatus(b.id, 'Delayed')}
                      >
                        ⏱️ Delay
                      </button>
                      <button 
                        className="act-btn cancel" 
                        title="Cancel Flight Booking"
                        onClick={() => handleUpdateFlightStatus(b.id, 'Cancelled')}
                      >
                        ❌ Cancel
                      </button>
                      <button 
                        className="act-btn confirm" 
                        title="Re-confirm Flight"
                        onClick={() => handleUpdateFlightStatus(b.id, 'Confirmed')}
                      >
                        ✅ Confirm
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Add Customer Modal Form */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>➕ Add New Customer</h2>
            <form onSubmit={handleAddCustomer}>
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" required placeholder="e.g. Usman Raza"
                  value={newCust.name} onChange={e => setNewCust({...newCust, name: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" required placeholder="e.g. usman@example.com"
                  value={newCust.email} onChange={e => setNewCust({...newCust, email: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="text" placeholder="+92 300 0000000"
                  value={newCust.phone} onChange={e => setNewCust({...newCust, phone: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input 
                  type="text" placeholder="e.g. Islamabad, Pakistan"
                  value={newCust.location} onChange={e => setNewCust({...newCust, location: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label>Favorite Destination</label>
                <input 
                  type="text" placeholder="e.g. London, UK"
                  value={newCust.favoriteDestination} onChange={e => setNewCust({...newCust, favoriteDestination: e.target.value})} 
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="icon-btn" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="icon-btn primary">
                  Save Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
