import React from 'react';
import Icon from './Icon';
import { useNavigate } from 'react-router-dom';

/**
 * BottomNav — the fixed navigation bar that sits at the bottom of every screen.
 * Highlights the currently active tab and navigates when a tab is tapped.
 *
 * @param {string}   active      - Key of the currently selected tab (e.g. "home", "me")
 * @param {function} onTabChange - Called with the tab key whenever the user switches tabs
 */
const BottomNav = ({ active = 'home', onTabChange }) => {

    const navigate = useNavigate();

    /* The five tabs shown in the navigation bar */
    const tabs = [
        { key: 'home', icon: 'Home', label: 'Home' },
        { key: 'rewards', icon: 'Rewards', label: 'Rewards' },
        { key: 'finance', icon: 'Finance', label: 'Finance' },
        { key: 'cards', icon: 'Cards', label: 'Cards' },
        { key: 'me', icon: 'Me', label: 'Me' },
    ];

    /* Navigates to the correct screen when a tab is pressed.
       Unfinished tabs redirect to the "coming soon" screen. */
    const handleTabPress = (tabKey) => {
        if (tabKey === 'home') {
            navigate('/dashboard');
        } else if (tabKey === 'me') {
            navigate('/me');
        } else {
            navigate('/redirect');
        }

        if (onTabChange) {
            onTabChange(tabKey);
        }
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
                {tabs.map(({ key, icon, label }) => {
                    const isActive = active === key;
                    return (
                        <button
                            key={key}
                            onClick={() => handleTabPress(key)}
                            className="flex flex-col items-center justify-center flex-1 h-full gap-0.5 focus:outline-none"
                        >
                            {/* Coloured underline that appears above the icon when the tab is active */}
                            <span
                                className={`block h-0.5 w-6 rounded-full mb-0.5 transition-all duration-200 ${isActive ? 'bg-opay-main' : 'bg-transparent'
                                    }`}
                            />
                            <Icon
                                name={icon}
                                className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'text-opay-main' : 'text-opay-inactive'
                                    }`}
                            />
                            <span
                                className={`text-[10px] font-medium transition-colors duration-200 ${isActive ? 'text-opay-main font-semibold' : 'text-opay-inactive'
                                    }`}
                            >
                                {label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
