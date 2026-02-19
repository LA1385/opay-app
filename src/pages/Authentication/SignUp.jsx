import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react'; // Back arrow icon
import Input from '../../components/Input';
import Button from '../../components/Button';
import opayLogo from '../../assets/logo.png';

/**
 * SignUp - The "Create a new account" page of the OPay app
 * 
 * Layout (top to bottom):
 * - Header bar with back arrow and "Create a new account" title
 * - OPay logo
 * - Promotional banner (₦1,200 welcome bonus)
 * - Phone number input (Nigerian flag + +234 prefix)
 * - OTP input with "Get OTP" button on the right
 * - Validation error text (shows "Invalid" when OTP is wrong)
 * - Terms & Conditions checkbox
 * - "Confirm" primary button
 */
const SignUp = () => {
    const navigate = useNavigate();

    // Form state
    const [phone, setPhone] = useState('');       // User's phone number
    const [otp, setOtp] = useState('');            // 6-digit OTP code
    const [otpError, setOtpError] = useState(false); // Controls "Invalid" error visibility
    const [acceptedTerms, setAcceptedTerms] = useState(true); // Terms checkbox (pre-checked)

    // Handles requesting a new OTP
    const handleGetOtp = () => {
        // TODO: Add OTP request API call here
    };

    // Handles the confirm button press
    const handleConfirm = () => {
        // Validate that OTP is exactly 6 digits
        if (otp.length !== 6) {
            setOtpError(true);
            return;
        }
        setOtpError(false);
        // TODO: Add signup confirmation logic here
    };

    return (
        <div className="bg-opay-white min-h-screen flex flex-col">
            {/* ===== Top Header Bar ===== */}
            <div className="flex items-center px-4 pt-4 pb-2">
                {/* Back button - navigates to the previous page (SignIn) */}
                <button onClick={() => navigate(-1)} className="p-1">
                    <ChevronLeft size={24} className="text-opay-headings" />
                </button>
                <span className="ml-2 text-lg font-semibold text-opay-headings">Create a new account</span>
            </div>

            {/* ===== Main Content Area ===== */}
            <div className="flex-1 flex flex-col items-center px-8 pt-6">

                {/* OPay Logo */}
                <div className="w-16 h-16 mb-6">
                    <img src={opayLogo} alt="OPay" className="w-full h-full object-contain" />
                </div>

                {/* Promotional Banner - mint green background with bonus info */}
                <div className="w-full bg-opay-savebg rounded-lg px-4 py-3 mb-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-opay-headings">
                        Join OPay & Get <span className="font-bold">₦1,200</span> welcome bonus!
                    </p>
                    {/* Small badge showing the bonus amount */}
                    <div className="w-12 h-12 flex-shrink-0 ml-2">
                        <div className="w-full h-full bg-opay-main rounded-lg flex items-center justify-center text-white text-xs font-bold">
                            ₦1,200
                        </div>
                    </div>
                </div>

                {/* Phone Number Input - uses the "phone" variant with +234 prefix */}
                <div className="w-full mb-4">
                    <Input
                        variant="phone"
                        placeholder="Input phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                {/* OTP Input - with "Get OTP" button on the right side */}
                <div className="w-full mb-1">
                    <Input
                        type="text"
                        placeholder="Enter 6 digits"
                        value={otp}
                        onChange={(e) => {
                            setOtp(e.target.value);
                            // Clear error when user starts typing again
                            if (otpError) setOtpError(false);
                        }}
                        maxLength={6}
                        rightElement={
                            <button
                                onClick={handleGetOtp}
                                className="text-sm font-semibold text-opay-main whitespace-nowrap"
                            >
                                Get OTP
                            </button>
                        }
                    />
                </div>

                {/* Validation Error - only shown when OTP is invalid */}
                {otpError && (
                    <div className="w-full mb-2">
                        <span className="text-sm font-medium text-red-500">Invalid</span>
                    </div>
                )}

                {/* Terms and Conditions Checkbox */}
                <div className="w-full flex items-center gap-3 mt-8 mb-6">
                    <input
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="w-5 h-5 rounded accent-opay-main flex-shrink-0"
                    />
                    <span className="text-sm text-opay-headings">
                        Click "Confirm" to accept{' '}
                        {/* Terms link - styled in brand green */}
                        <button className="text-opay-main font-semibold">Terms and Conditions</button>.
                    </span>
                </div>

                {/* Confirm Button - filled green, validates OTP before proceeding */}
                <div className="w-full">
                    <Button text="Confirm" onClick={handleConfirm} variant="primary" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
