import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShieldCheck } from 'lucide-react';
import Button from '../../components/Button';
import profileImg from '../../assets/profile.png';

/**
 * ForgotPassword - Face Verification page
 * 
 * Layout:
 * - Header with back arrow and "Help" link
 * - "Face Verification" title
 * - Instructive subtitle with green highlights
 * - Large circular frame with selfie illustration/photo
 * - Shield icon overlay
 * - Verify button
 */
const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-opay-white min-h-screen flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
                <button onClick={() => navigate(-1)} className="p-1">
                    <ChevronLeft size={24} className="text-opay-headings" />
                </button>
                <button className="text-opay-main font-medium">Help</button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center px-8 pt-8">
                <h1 className="text-2xl font-bold text-opay-headings mb-4 text-center">Face Verification</h1>

                <p className="text-center text-opay-headings mb-12">
                    To <span className="text-opay-main font-semibold">protect</span> your account, we need to verify that you are the <span className="text-opay-main font-semibold">account owner</span>.
                </p>

                {/* Face Frame Container */}
                <div className="relative mb-auto flex justify-center">
                    {/* Green circle frame */}
                    <div className="w-56 h-56 rounded-full border-4 border-opay-main overflow-hidden flex items-center justify-center bg-gray-50">
                        {/* 
                            Using existing profile.png as a placeholder. 
                            In a real app, this would be the live camera feed.
                        */}
                        <img
                            src={profileImg}
                            alt="Face Verification"
                            className="w-full h-full object-cover scale-150 grayscale rotate-3"
                        />
                    </div>

                    {/* Shield Icon Overlay */}
                    <div className="absolute bottom-4 right-4 bg-opay-main p-2 rounded-lg shadow-lg">
                        <ShieldCheck size={32} className="text-white" />
                    </div>
                </div>

                <p className="text-xs text-opay-subtext italic mb-6">
                    Photos captured will only be used for this verification.
                </p>

                {/* Verify Button */}
                <div className="w-full mb-8">
                    <Button
                        text="Verify"
                        onClick={() => navigate('/coming-soon')}
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
