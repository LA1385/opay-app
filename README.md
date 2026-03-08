# OPay Clone UI

A React-based web application that mimics the user interface and basic flow of the OPay mobile application. This project was created to demonstrate frontend development skills, UI/UX implementation, and client-side routing.

## 🚀 Key Features (What it CAN do)

The application implements several front-end functionalities with a focus on UI and navigation:

- **Authentication Flow:**
  - **Sign In:** Users can log in using a registered phone number and a 6-digit password.
  - **Sign Up:** New users can register with their phone number. Registration simulates OTP verification.
  - **Local Storage Mock Backend:** User accounts, balances, and sessions are stored in the browser's `localStorage` (no real database required).
  - *Test Account:* You can log in quickly using Phone: `08012345678` and Password: `123456`.
- **Dashboard (`/dashboard`):**
  - Displays the user's available balance with a toggle (hide/unhide) feature.
  - Interactive UI mockups for Quick Actions (To Bank, Withdraw) and Services Grid (Airtime, Data, Betting, TV, etc.).
- **Profile / Me Page (`/me`):**
  - Shows user details, account limits, and security alerts.
  - Functional **Log Out** button that clears the local session and redirects to the sign-in page.
- **Client-Side Routing:** Built with `react-router-dom` to handle navigation between Authentication, Dashboard, Profile, and other views seamlessly.

## 🚧 Limitations (What it CANNOT do)

Since this is primarily a frontend UI clone without a real backend server or external API integrations, several features are mockups and will redirect to a "Coming Soon" screen:

- **Password Changes / Recovery:** The "Forgot Password" flow shows a Face Verification UI but does not actually reset passwords or use device cameras. Passwords cannot be changed from the frontend once set.
- **Biometric Login:** The fingerprint/biometric login option is a visual placeholder.
- **Real Financial Transactions:** Buttons for Airtime, Data, Transfers, and "Add Money" do not process real payments or interact with actual banking endpoints.
- **Dynamic Transaction History:** The transaction history and account limits are static UI components or placeholders.
- **SMS OTP:** During Registration, the OTP is randomly generated and shown via a browser alert instead of a real SMS.

## 🛠️ Technology Stack

- **Framework:** React.js (Bootstrapped with Create React App)
- **Routing:** React Router DOM (v7)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React & Custom SVGs

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd opay-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

---
*Note: This project is for educational purposes and is not affiliated with OPay Digital Services.*
