import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page imports
import Welcome from './pages/Welcome';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';

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
      </Routes>
    </Router>
  )
}

export default App;