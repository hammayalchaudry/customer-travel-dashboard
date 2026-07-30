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

## 🚀 Performance & Lighthouse Audit Fixes

Ran Google Lighthouse audit on the deployed application and resolved key flagged issues:

1. **SEO Essentials:** Added proper meta tags, page description, dynamic page titles, and OpenGraph structured data in `public/index.html`.
2. **Accessibility Fixes:** Added explicit `alt` text to profile dynamic avatars and optimized SVG icon labels for screen readers.
3. **Asset Optimization:** Applied lazy loading (`loading="lazy"`) to media assets and optimized DOM rendering for faster initial paint.
<img width="943" height="441" alt="Screenshot 2026-07-30 172644" src="https://github.com/user-attachments/assets/6a31ae2a-de11-41ab-816b-598c3fa6d4c9" />
<img width="947" height="416" alt="Screenshot 2026-07-30 172803" src="https://github.com/user-attachments/assets/77f3198e-cba1-424a-ab33-b914aa4da55f" />


