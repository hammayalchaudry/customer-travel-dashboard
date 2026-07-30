# customer-travel-dashboard
Travel Booking Dashboard

Features:
Total Bookings
Revenue
Destinations
Customers

Charts:
📊 Monthly Bookings
📈 Revenue Trend
🥧 Booking Types (Flight, Hotel, Tour)

Filter:
Destination
Month
---

## 🧪 Testing Instructions

Evaluators and mentors can execute automated unit, integration, and end-to-end tests using the commands below:

### 1. Run Unit & Logic Tests (Jest)
To run the 10 automated React component and data logic tests:

```bash
cd frontend-appcd
npm test -- --watchAll=false
cd frontend-appcd
npm start
npx cypress run

# ✈️ Customer Travel Management Dashboard

> **Live Production App:** [https://customer-travel-dashboard-azure.vercel.app](https://customer-travel-dashboard-azure.vercel.app)

---

## 🏗️ Architecture Overview

- **Frontend:** React.js, Recharts, Lucide Icons, CSS3 (Responsive Design)
- **Deployment:** Vercel Continuous Deployment (Production Ready)
- **Testing:** React Testing Library (Unit/Logic) & Cypress (E2E Integration)

---

---

## 🚀 Performance & Lighthouse Audit

Ran Google Lighthouse audit on the deployed application for both Desktop and Mobile viewports:
#### Desktop Score
![Desktop Score](https://github.com/user-attachments/assets/80b81c94-ceb5-43ea-bc22-a8091a41675f)

#### Mobile Score
![Mobile Score](https://github.com/user-attachments/assets/39866c7b-03dd-44cc-b8dd-7269b99e565e)

### Key Fixes Implemented:
1. **SEO Essentials:** Added descriptive meta tags, titles, and structured metadata in `public/index.html`.
2. **Accessibility:** Enhanced image `alt` attributes and added screen-reader support for dashboard controls.
3. **Asset Optimization:** Applied lazy loading on dynamic user profile assets to improve initial page load speed.

