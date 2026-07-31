# customer-travel-dashboard
Travel Booking Dashboard

Features:
- Total Bookings
- Revenue
- Destinations
- Customers

Charts:
- 📊 Monthly Bookings
- 📈 Revenue Trend
- 🥧 Booking Types (Flight, Hotel, Tour)

Filter:
- Destination
- Month

---

# ✈️ Customer Travel Management Dashboard

> **Live Production App:** [https://customer-travel-dashboard-azure.vercel.app](https://customer-travel-dashboard-azure.vercel.app)

---

## 🏗️ Architecture Overview

- **Frontend:** React.js, Recharts, Lucide Icons, CSS3 (Responsive Design)
- **Deployment:** Vercel Continuous Deployment (Production Ready)
- **Testing:** React Testing Library (Unit/Logic) & Cypress (E2E Integration)

---

## 🧪 Testing Instructions

Evaluators and mentors can execute automated unit, integration, and end-to-end tests using the commands below:

### 1. Run Unit & Logic Tests (Jest)
To run the automated React component and data logic tests:

```bash
cd frontend-appcd
npm test -- --watchAll=false
npm start
npx cypress run
