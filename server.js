const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 🧮 MOCK TRAVEL DATA DATABASE
const travelData = {
  stats: {
    totalBookings: 1420,
    totalRevenue: "$348,500",
    activeTrips: 184,
    cancellations: 23
  },
  monthlyTrends: [
    { month: 'Jan', bookings: 65, revenue: 15000 },
    { month: 'Feb', bookings: 85, revenue: 22000 },
    { month: 'Mar', bookings: 120, revenue: 31000 },
    { month: 'Apr', bookings: 95, revenue: 24000 },
    { month: 'May', bookings: 150, revenue: 42000 },
    { month: 'Jun', bookings: 210, revenue: 58000 },
    { month: 'Jul', bookings: 240, revenue: 64000 },
    { month: 'Aug', bookings: 190, revenue: 49000 },
    { month: 'Sep', bookings: 130, revenue: 35000 },
    { month: 'Oct', bookings: 110, revenue: 29000 }
  ],
  destinations: [
    { name: 'Dubai', region: 'Middle East', bookings: 420 },
    { name: 'Paris', region: 'Europe', bookings: 350 },
    { name: 'Bali', region: 'Asia', bookings: 290 },
    { name: 'Tokyo', region: 'Asia', bookings: 210 },
    { name: 'Istanbul', region: 'Europe', bookings: 150 }
  ],
  categories: [
    { name: 'Flight Only', value: 45 },
    { name: 'Hotel & Resort', value: 30 },
    { name: 'Tour Packages', value: 20 },
    { name: 'Car Rental', value: 5 }
  ]
};

// 🌐 API ENDPOINT WITH DESTINATION & MONTH FILTERS
app.get('/api/dashboard-data', (req, res) => {
  const { destination, month } = req.query;

  let filteredDestinations = [...travelData.destinations];
  let filteredMonthly = [...travelData.monthlyTrends];

  // Destination Filter
  if (destination && destination !== 'All') {
    filteredDestinations = filteredDestinations.filter(d => d.name.toLowerCase() === destination.toLowerCase());
  }

  // Month Filter
  if (month && month !== 'All') {
    filteredMonthly = filteredMonthly.filter(m => m.month.toLowerCase() === month.toLowerCase());
  }

  // Calculate dynamic stats based on filters
  const currentTotalBookings = destination !== 'All' 
    ? filteredDestinations.reduce((sum, d) => sum + d.bookings, 0)
    : (month !== 'All' && filteredMonthly.length > 0 ? filteredMonthly[0].bookings * 5 : travelData.stats.totalBookings);

  const currentRevenue = (typeof currentTotalBookings === 'number') 
    ? `$${(currentTotalBookings * 245).toLocaleString()}`
    : travelData.stats.totalRevenue;

  res.json({
    stats: {
      totalBookings: currentTotalBookings,
      totalRevenue: currentRevenue,
      activeTrips: Math.round(currentTotalBookings * 0.12),
      cancellations: Math.round(currentTotalBookings * 0.02)
    },
    monthlyTrends: filteredMonthly,
    destinations: filteredDestinations,
    categories: travelData.categories
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Travel Backend running on http://localhost:${PORT}`);
});