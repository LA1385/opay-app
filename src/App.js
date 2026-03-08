import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page imports
import Welcome from './pages/other/Welcome';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import BiometricSetup from './pages/Authentication/BiometricSetup';
import Redirect from './pages/other/ComingSoon/Redirect';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import Me from './pages/Dashboard/Me';
import RedirectMe from './pages/other/ComingSoon/RedirectMe';

/**
 * App - Root component that sets up client-side routing
 * 
 * Routes:
 * - "/" → Welcome splash screen (auto-redirects to /signin after 3 seconds)
 * - "/signin" → Login page
 * - "/signup" → Create a new account page
 */
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/biometric" element={<BiometricSetup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/redirectme" element={<RedirectMe />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </Router>
  )
}

export default App;