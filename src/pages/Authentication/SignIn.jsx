import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Fingerprint } from 'lucide-react'; 
import Input from '../../components/Input';
import Button from '../../components/Button';
import opayLogo from '../../assets/logo.png';
import { isValidPhone } from '../../utils/regex';
import { loginUser } from '../../utils/webAuth';

/**
 * SignIn - The Login page of the OPay app.
 *
 * Lets a registered user enter their phone number and 6-digit password to log in.
 * On success, redirects to the Dashboard. Also shows links to Sign Up and
 * biometric (fingerprint) login.
 *
 * Key concepts used:
 * - useState: manages form fields (phone, password) and feedback messages
 * - useNavigate: changes pages in code (e.g., go to /dashboard on success)
 * - useLocation: reads data passed from another page (e.g., success message from SignUp)
 * - isValidPhone / loginUser: validate input and check credentials via localStorage
 */
const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Form state: phone number, password,remember preference and message
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState(location.state?.successMsg || '');

    // Handles the login button press
    const handleLogin = (phone, password) => {
        setErrorMsg(''); 

        if (!isValidPhone(phone)) {
            setErrorMsg('Please enter a valid phone number.');
            return;
        }

        if (password.length !== 6) {
            setErrorMsg('Password must be exactly 6 digits.');
            return;
        }

        // Simulate local authentication
        const result = loginUser(phone, password);
        if (result.success) {
            setSuccessMsg(result.message);
            setTimeout(() => {
                navigate('/dashboard');
            }, 1500);
        } else {
            setErrorMsg(result.message);
        }
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
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        maxLength={11}
                    />
                </div>

                {/* Password Input - 6-digit password field */}
                <div className="w-full mb-3">
                    <Input
                        type="password"
                        placeholder="Enter 6-digits password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (errorMsg) setErrorMsg(''); // Clear error on typing
                            if (successMsg) setSuccessMsg('');
                        }}
                        maxLength={6}
                    />
                </div>

                {/* Validation/Auth Error Display */}
                {errorMsg && (
                    <div className="w-full mb-2">
                        <span className="text-sm font-medium text-red-500">{errorMsg}</span>
                    </div>
                )}

                {/* Success Message Display */}
                {successMsg && (
                    <div className="w-full mb-2">
                        <span className="text-sm font-medium text-green-500">{successMsg}</span>
                    </div>
                )}

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
                    {/* Forgot Password link*/}
                    <button
                        onClick={() => navigate('/forgot-password')}
                        className="text-sm font-semibold text-opay-main"
                    >
                        Forgot Password?
                    </button>
                </div>

                {/* Primary Login Button */}
                <div className="w-full mb-4">
                    <Button text="Login" onClick={() => {
                        handleLogin(phone, password);
                    }} variant="primary" />
                </div>

                {/* Create Account Button */}
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
                    {/* Fingerprint icon */}
                    <div className="w-14 h-14 rounded-full border-2 border-opay-main flex items-center justify-center">
                        <Fingerprint size={28} className="text-opay-main" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignIn;