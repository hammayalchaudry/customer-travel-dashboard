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

### Audit Results

#### Desktop Score
<img src="<img width="943" height="441" alt="Screenshot 2026-07-30 172644" src="https://github.com/user-attachments/assets/1507c8d4-225d-4686-87ba-4f19b250e802" />
" width="100%" alt="Lighthouse Score" />
)

#### Mobile Score
<img src="<img width="947" height="416" alt="Screenshot 2026-07-30 172803" src="https://github.com/user-attachments/assets/bce5dd59-3518-44ea-9a46-fb7a27d03db9" />
" width="100%" alt="Lighthouse Score" />
)

### Key Fixes Implemented:
1. **SEO Essentials:** Added descriptive meta tags, titles, and structured metadata in `public/index.html`.
2. **Accessibility:** Enhanced image `alt` attributes and added screen-reader support for dashboard controls.
3. **Asset Optimization:** Applied lazy loading on dynamic user profile assets to improve initial page load speed.

