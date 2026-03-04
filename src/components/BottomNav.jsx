import React from 'react';
import Icon from './Icon';

/**
 * BottomNav - Sticky bottom navigation bar with five tabs.
 *
 * @param {string}   active   - Currently active tab key (default: "home")
 * @param {function} onTabChange - Callback with tab key when a tab is pressed
 */
const BottomNav = ({ active = 'home', onTabChange }) => {
    const tabs = [
        { key: 'home', icon: 'Home', label: 'Home' },
        { key: 'rewards', icon: 'Rewards', label: 'Rewards' },
        { key: 'finance', icon: 'Finance', label: 'Finance' },
        { key: 'cards', icon: 'Cards', label: 'Cards' },
        { key: 'me', icon: 'Me', label: 'Me' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
                {tabs.map(({ key, icon, label }) => {
                    const isActive = active === key;
                    return (
                        <button
                            key={key}
                            onClick={() => onTabChange && onTabChange(key)}
                            className="flex flex-col items-center justify-center flex-1 h-full gap-0.5 focus:outline-none"
                        >
                            {/* Active indicator dot above icon */}
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
