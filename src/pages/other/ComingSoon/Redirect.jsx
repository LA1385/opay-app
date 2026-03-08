import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import Button from '../../../components/Button.jsx';
import opayLogo from '../../../assets/logo.png';
import { getCurrentUser } from '../../../utils/webAuth.js';

/**
 * ComingSoon - Placeholder page shown when a feature is not yet available.
 *
 * Shown when a user taps a feature that hasn't been built yet.
 * The page displays a "Coming Soon" message and a smart back button:
 * - If the user is logged in → goes back to the Dashboard
 * - If not logged in → goes back to Sign In
 *
 * Key concepts used:
 * - getCurrentUser: checks localStorage for an active session
 * - useNavigate: lets us send the user to a different page in code
 */
const Redirect = () => {
    const navigate = useNavigate();

    const user = getCurrentUser();

    // Decide where to send the user based on their login status
    const handleNavigation = () => {
        if (user) {
            navigate('/dashboard')
        }
        else {
            navigate('/signin')
        };
    };


    return (
        <div className="bg-opay-white min-h-screen flex flex-col items-center justify-center px-8">
            {/* Logo */}
            <div className="absolute top-12 flex items-center">
                <div className="w-8 h-8">
                    <img src={opayLogo} alt="OPay" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-bold text-opay-blue ml-1">Pay</span>
            </div>

            {/* Content Container */}
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                {/* Animated Icon */}
                <div className="w-24 h-24 bg-opay-iconbg rounded-full flex items-center justify-center mb-8 animate-bounce">
                    <Rocket size={48} className="text-opay-main" />
                </div>

                <h1 className="text-3xl font-bold text-opay-headings mb-4">Coming Soon</h1>
                <p className="text-center text-opay-subtext mb-12">
                    We're building something amazing to make your financial life better. Stay tuned!
                </p>

                {/* Return Button */}
                <div className="w-full max-w-xs">
                    <Button
                        text={user ? 'Back to dashboard' : 'Back to login'}
                        onClick={handleNavigation}
                        variant="primary"
                    />
                </div>
            </div>

            {/* Branding Subtext */}
            <div className="absolute bottom-8">
                <p className="text-xs text-opay-inactive">OPay - Beyond Banking</p>
            </div>
        </div>
    );
};

export default Redirect;
