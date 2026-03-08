import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import opayLogo from '../../assets/logo.png';

/**
 * Welcome - The app's splash/intro screen shown on first load.
 *
 * What it does:
 * - Displays the OPay logo and brand tagline for 2.5 seconds
 * - Fades out smoothly, then redirects the user to the Sign In page
 *
 * Key concepts used:
 * - useEffect: runs side-effects (timers) after the component renders
 * - useState: tracks whether the fade-out animation should start
 * - useNavigate: programmatically changes the current page/route
 */
const Welcome = () => {
    const navigate = useNavigate();
    const [isExiting, setIsExiting] = React.useState(false);

    useEffect(() => {
        // After 2.5s, trigger the fade-out animation
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 2500);

        // After 3s, navigate to the Sign In page
        const navTimer = setTimeout(() => {
            navigate('/signin');
        }, 3000);

        // Cleanup: cancel both timers if the component is removed early
        return () => {
            clearTimeout(exitTimer);
            clearTimeout(navTimer);
        };
    });

    return (
        <div className={`bg-opay-main min-h-screen flex flex-col justify-center items-center gap-y-4 transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
            <div className='flex flex-col gap-y-4 justify-center items-center'>
                <div className='w-24 h-24 lg:w-32 lg:h-32 bg-opay-white flex rounded-full'>
                    <img className='object-cover' src={opayLogo} alt="logo not found" />
                </div>
                <div className='text-2xl lg:text-4xl font-bold text-opay-blue'>
                    We are Beyond Banking
                </div>
            </div>
            <div>
                <p className='text-center text-xs lg:text-base text-opay-blue'>Licensed by the <strong>CBN</strong> and insured by the |<strong className='underline'>NDIC</strong></p>
            </div>
        </div>
    )
}

export default Welcome;