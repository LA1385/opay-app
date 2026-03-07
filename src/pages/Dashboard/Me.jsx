import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import BottomNav from '../../components/BottomNav';
import { logoutUser } from '../../utils/webAuth';

/* White card wrapper used to visually group related menu items */
const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-2xl shadow-sm ${className}`}>{children}</div>
);

/**
 * MenuItem — a single tappable row in a menu section.
 * Shows an icon, a label, an optional subtitle, and an optional badge (e.g. "New").
 */
const MenuItem = ({ icon, label, subtitle, badge, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center w-full px-4 py-3.5 gap-4 hover:bg-gray-50 transition-colors active:bg-gray-100 text-left"
    >
        {/* Icon bubble */}
        <div className="w-10 h-10 rounded-full bg-opay-iconbg flex items-center justify-center flex-shrink-0">
            <Icon name={icon} className="w-5 h-5 text-opay-main" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-opay-headings leading-tight"
                style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                {label}
            </p>
            {subtitle && (
                <p className="text-xs text-opay-subtext mt-0.5">{subtitle}</p>
            )}
        </div>

        {/* Badge + chevron */}
        <div className="flex items-center gap-2 flex-shrink-0">
            {badge && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full leading-none">
                    {badge}
                </span>
            )}
            <Icon name="ChevronRight" className="w-4 h-4 text-opay-inactive" />
        </div>
    </button>
);

/* Thin horizontal line used to separate menu items inside a card */
const Divider = () => (
    <div className="mx-4 border-t border-gray-100" />
);

/**
 * Me — the profile and account settings page.
 * Shows the user's avatar, balance, security alerts, account menus, and a logout button.
 */
const Me = () => {
    const navigate = useNavigate();
    const [balanceHidden, setBalanceHidden] = useState(true);

    /* Navigates to the "coming soon" screen for unimplemented features */
    const handleComingSoon = () => navigate('/coming-soon');

    /* Clears the user session and redirects to the sign-in page */
    const handleLogout = () => {
        logoutUser();
        navigate('/signin', { replace: true });
    };

    /* Account-related menu items shown in the first menu card */
    const accountMenu = [
        { icon: 'TransactionHistory', label: 'Transaction History', subtitle: null },
        { icon: 'AccountLimits', label: 'Account Limits', subtitle: 'View your transaction limits' },
        { icon: 'BankCard', label: 'Bank Card/Account', subtitle: 'Add payment option' },
        { icon: 'PayMe', label: 'Pay ME', subtitle: 'Receive payment for your business' },
        { icon: 'ShareOPay', label: 'Share OPay with Others', subtitle: 'Help a loved one get an account', badge: 'New' },
    ];

    /* Support and settings menu items shown in the second menu card */
    const supportMenu = [
        { icon: 'SecurityCenter', label: 'Security Center', subtitle: 'Protect your funds' },
        { icon: 'CustomerService', label: 'Customer Service Center', subtitle: null },
        { icon: 'Invitation', label: 'Invitation', subtitle: 'Invite friends and earn up to ₦5,600 Bonus' },
        { icon: 'OPayUSSD', label: 'OPay USSD', subtitle: null },
        { icon: 'RateUs', label: 'Rate Us', subtitle: null },
    ];

    return (
        <div className="min-h-screen bg-opay-app flex flex-col">
            <div className="flex-1 overflow-y-auto pb-20">

                {/* ══════════════ HEADER SECTION ══════════════ */}
                <div className="bg-opay-iconbg px-4 pt-5 pb-6">

                    {/* Top bar: avatar + greeting + settings */}
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                            {/* Avatar circle */}
                            <div className="w-12 h-12 rounded-full bg-white border-2 border-opay-main flex items-center justify-center shadow-sm">
                                <span className="text-opay-main font-bold text-sm">CU</span>
                            </div>
                            {/* Name */}
                            <div>
                                <p className="text-xs text-opay-subtext">Hi,</p>
                                <p className="text-base font-extrabold text-opay-headings leading-tight tracking-wide">
                                    Current User
                                </p>
                                {/* Tier upgrade badge */}
                                <button
                                    onClick={handleComingSoon}
                                    className="mt-0.5 flex items-center gap-1 bg-opay-main bg-opacity-15 rounded-full px-2 py-0.5"
                                >
                                </button>
                            </div>
                        </div>

                        {/* Hex Settings icon (top right) */}
                        <button
                            onClick={handleComingSoon}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-50 transition-colors"
                        >
                            <Icon name="HexSettings" className="w-7 h-7 text-opay-headings" />
                        </button>
                    </div>

                    {/* Balance display with a show/hide eye toggle */}
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <p className="text-xs text-opay-subtext font-medium">Total Balance</p>
                            <button onClick={() => setBalanceHidden(!balanceHidden)}>
                                <Icon
                                    name={balanceHidden ? 'ClosedEye' : 'Eye'}
                                    className="w-4 h-4 text-opay-subtext"
                                />
                            </button>
                        </div>
                        <p className="text-2xl font-extrabold text-opay-headings tracking-widest">
                            {balanceHidden ? '****' : '₦1200.00'}
                        </p>
                    </div>

                    <div className="flex justify-end -mt-8">
                        <div className="w-16 h-16 rounded-full bg-opay-main bg-opacity-10 flex items-center justify-center">
                            <Icon name="SecurityBanner" className="w-10 h-10 text-opay-main" />
                        </div>
                    </div>
                </div>

                {/* ── Security alert banner prompting the user to enable Security Check ── */}
                <div className="mx-4 mt-4 rounded-2xl bg-opay-main px-4 py-3 flex items-center gap-3 shadow-md">
                    <Icon name="SecurityBanner" className="w-7 h-7 text-white flex-shrink-0" />
                    <div className="flex-1">
                        <p className="text-white text-xs font-bold leading-tight">
                            Security Check is not turned on
                        </p>
                        <p className="text-white text-[10px] opacity-80 mt-0.5 italic">
                            Make your account more secure with extra safety checks.
                        </p>
                    </div>
                    <button
                        onClick={handleComingSoon}
                        className="bg-white text-opay-main font-bold text-xs px-4 py-1.5 rounded-full flex-shrink-0 hover:opacity-90 transition-opacity"
                    >
                        Turn On
                    </button>
                </div>

                {/* ── Account menu: transaction history, limits, cards, etc. ── */}
                <div className="mx-4 mt-4">
                    <Card>
                        {accountMenu.map((item, idx) => (
                            <React.Fragment key={item.label}>
                                <MenuItem
                                    icon={item.icon}
                                    label={item.label}
                                    subtitle={item.subtitle}
                                    badge={item.badge}
                                    onClick={handleComingSoon}
                                />
                                {idx < accountMenu.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </Card>
                </div>

                {/* ── Support menu: security center, customer service, invitations, etc. ── */}
                <div className="mx-4 mt-3 mb-4">
                    <Card>
                        {supportMenu.map((item, idx) => (
                            <React.Fragment key={item.label}>
                                <MenuItem
                                    icon={item.icon}
                                    label={item.label}
                                    subtitle={item.subtitle}
                                    onClick={handleComingSoon}
                                />
                                {idx < supportMenu.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </Card>
                </div>

                {/* ── Logout button: ends the session and returns to sign-in ── */}
                <div className="mx-4 mb-6">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 bg-white rounded-2xl shadow-sm px-4 py-4 text-red-500 font-bold text-sm hover:bg-red-50 transition-colors"
                    >
                        <Icon name="Logout" className="w-5 h-5 text-red-500" />
                        Log Out
                    </button>
                </div>

            </div>

            {/* ── Fixed Bottom Nav ── */}
            <BottomNav active="me" onTabChange={() => { }} />
        </div>
    );
};

export default Me;
