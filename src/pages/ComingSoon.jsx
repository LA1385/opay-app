import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import Button from '../components/Button';
import opayLogo from '../assets/logo.png';

/**
 * ComingSoon - A premium placeholder page for unbuilt features
 */
const ComingSoon = () => {
    const navigate = useNavigate();

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
                        text="Back to Login"
                        onClick={() => navigate('/signin')}
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

export default ComingSoon;
