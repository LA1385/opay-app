import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fingerprint, User } from 'lucide-react';
import Button from '../../components/Button';
import opayLogo from '../../assets/logo.png';

/**
 * BiometricSetup - Page for fingerprint authentication
 * 
 * Layout:
 * - OPay logo
 * - User silhouette avatar
 * - Fingerprint icon in center
 * - "Verify Fingerprint" action button
 * - Navigation links to switch account/password
 */
const BiometricSetup = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-opay-white min-h-screen flex flex-col items-center px-8 pt-12">
            {/* OPay Logo */}
            <div className="flex items-center justify-center mb-12">
                <div className="w-10 h-10">
                    <img src={opayLogo} alt="OPay" className="w-full h-full object-contain" />
                </div>
                <span className="text-2xl font-bold text-opay-blue ml-1">Pay</span>
            </div>

            {/* User Avatar Silhouette */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-12">
                <User size={48} className="text-gray-300" />
            </div>

            {/* Central Fingerprint Icon */}
            <div className="flex flex-col items-center mb-12">
                <Fingerprint size={80} className="text-opay-headings mb-4" />
                <button
                    onClick={() => navigate('/coming-soon')}
                    className="text-opay-main font-medium active:opacity-70 transition-opacity"
                >
                    Click to log in with Fingerprint
                </button>
            </div>

            {/* Verify Button */}
            <div className="w-full mb-auto">
                <Button
                    text="Verify Fingerprint"
                    onClick={() => navigate('/coming-soon')}
                    variant="primary"
                />
            </div>

            {/* Bottom Links */}
            <div className="w-full flex justify-center items-center gap-4 py-8 text-sm">
                <button
                    onClick={() => navigate('/signin')}
                    className="text-opay-main font-semibold"
                >
                    Switch Account
                </button>
                <div className="w-px h-3 bg-gray-300"></div>
                <button
                    onClick={() => navigate('/signin')}
                    className="text-opay-main font-semibold"
                >
                    Login with Password
                </button>
            </div>
        </div>
    );
};

export default BiometricSetup;
