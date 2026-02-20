import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Fingerprint } from 'lucide-react'; // Icons from lucide-react
import Input from '../../components/Input';
import Button from '../../components/Button';
import opayLogo from '../../assets/logo.png';

/**
 * SignIn - The Login page of the OPay app
 * 
 * Layout (top to bottom):
 * - Header bar with back arrow and "Login" title
 * - OPay logo (icon + "Pay" text)
 * - Phone number input (Nigerian flag + +234 prefix)
 * - 6-digit password input
 * - Remember Password checkbox + Forgot Password link
 * - "Login" primary button
 * - "Create a new account" outline button (navigates to /signup)
 * - Fingerprint login option at the bottom
 */
const SignIn = () => {
    const navigate = useNavigate();

    // Form state: phone number, password, and remember preference
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    // Handles the login button press
    const handleLogin = () => {
        // TODO: Add authentication logic here
    };

    return (
        <div className="bg-opay-white min-h-screen flex flex-col">
            {/* ===== Top Header Bar ===== */}
            <div className="flex items-center px-4 pt-4 pb-2">
                {/* Back button - navigates to the previous page */}
                <button onClick={() => navigate(-1)} className="p-1">
                    <ChevronLeft size={24} className="text-opay-headings" />
                </button>
                <span className="ml-2 text-lg font-semibold text-opay-headings">Login</span>
            </div>

            {/* ===== Main Content Area ===== */}
            <div className="flex-1 flex flex-col items-center px-8 pt-8">

                {/* OPay Logo: logo image + "Pay" text in brand blue */}
                <div className="flex items-center justify-center mb-10">
                    <div className="w-12 h-12">
                        <img src={opayLogo} alt="OPay" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-3xl font-bold text-opay-blue ml-1">Pay</span>
                </div>

                {/* Phone Number Input - uses the "phone" variant with +234 prefix */}
                <div className="w-full mb-4">
                    <Input
                        variant="phone"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                {/* Password Input - 6-digit password field */}
                <div className="w-full mb-3">
                    <Input
                        type="password"
                        placeholder="Enter 6-digits password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength={6}
                    />
                </div>

                {/* Remember Password & Forgot Password row */}
                <div className="w-full flex items-center justify-between mb-10">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={rememberPassword}
                            onChange={(e) => setRememberPassword(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 accent-opay-main"
                        />
                        <span className="text-sm text-opay-subtext">Remember Password</span>
                    </label>
                    {/* Forgot Password link - styled in brand green */}
                    <button
                        onClick={() => navigate('/forgot-password')}
                        className="text-sm font-semibold text-opay-main"
                    >
                        Forgot Password?
                    </button>
                </div>

                {/* Primary Login Button - filled green */}
                <div className="w-full mb-4">
                    <Button text="Login" onClick={handleLogin} variant="primary" />
                </div>

                {/* Create Account Button - outlined green, navigates to SignUp page */}
                <div className="w-full mb-8">
                    <Button
                        text="Create a new account"
                        onClick={() => navigate('/signup')}
                        variant="outline"
                    />
                </div>

                {/* Fingerprint Login Section */}
                <button
                    onClick={() => navigate('/biometric')}
                    className="flex flex-col items-center gap-3 active:opacity-70 transition-opacity"
                >
                    <span className="text-sm text-opay-subtext">Login with fingerprint</span>
                    {/* Fingerprint icon inside a circular green border */}
                    <div className="w-14 h-14 rounded-full border-2 border-opay-main flex items-center justify-center">
                        <Fingerprint size={28} className="text-opay-main" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignIn;