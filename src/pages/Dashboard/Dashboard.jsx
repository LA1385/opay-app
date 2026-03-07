import React, { useState } from 'react';
import Icon from '../../components/Icon';
import BottomNav from '../../components/BottomNav';


/* White card wrapper used to group sections on the dashboard */
const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-2xl shadow-sm ${className}`}>{children}</div>
);

/**
 * Header — shows the user's avatar, greeting, and action buttons (Help, QR Scan, Notifications).
 */
const Header = () => {

    return (
        <header className="flex items-center justify-between px-4 pt-5 pb-3">
            {/* Avatar + Greeting */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-opay-iconbg border-2 border-opay-main flex items-center justify-center">
                    <span className="text-opay-main font-bold text-base"> CU</span>
                </div>
                <div>
                    <p className="text-xs text-opay-subtext">Hi,</p>
                    <p className="text-base font-bold text-opay-headings leading-tight">Current User</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Help badge */}
                <button className="relative flex items-center justify-center w-9 h-9 rounded-full bg-opay-iconbg">
                    <Icon name="Help" className="w-5 h-5 text-opay-main" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold px-1 py-0.5 rounded leading-none">
                        HELP
                    </span>
                </button>

                <button className="flex items-center justify-center w-9 h-9 rounded-full bg-opay-iconbg">
                    <Icon name="QRScan" className="w-5 h-5 text-opay-icon" />
                </button>

                <button className="relative flex items-center justify-center w-9 h-9 rounded-full bg-opay-iconbg">
                    <Icon name="Bell" className="w-5 h-5 text-opay-icon" />
                </button>
            </div>
        </header>
    );
};

/**
 * BalanceCard — displays the user's wallet balance with a toggle to show or hide it.
 * Also includes a link to Transaction History and an "Add Money" button.
 */
const BalanceCard = () => {
    const [hidden, setHidden] = useState(true);
    const hiddenIcon = <Icon name="ClosedEye" className="w-3.5 h-3.5 text-white opacity-70" />
    const unHiddenIcon = <Icon name="Eye" className="w-3.5 h-3.5 text-white opacity-70" />

    return (
        <div className="mx-4 rounded-2xl bg-opay-main px-5 py-5 shadow-md">
            <div className="flex items-start justify-between">
                {/* Left: balance label + amount */}
                <div>
                    <div className="flex items-center gap-2">
                        <Icon name="Shield" className="w-4 h-4 text-white opacity-80" />
                        <span className="text-white text-xs opacity-90 font-medium">Available Balance</span>
                        <button onClick={() => setHidden(!hidden)}>
                            {hidden ? hiddenIcon : unHiddenIcon}
                        </button>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-white text-2xl font-bold tracking-widest">
                            {hidden ? '****' : '₦1200.00'}
                        </span>
                        <Icon name="ChevronRight" className="w-4 h-4 text-white opacity-70" />
                    </div>
                </div>

                {/* Right: Transaction history */}
                <button className="flex items-center gap-1 mt-1">
                    <span className="text-white text-xs italic font-medium opacity-90">Transaction History</span>
                    <Icon name="ChevronRight" className="w-3 h-3 text-white opacity-90" />
                </button>
            </div>

            {/* Add Money button */}
            <div className="flex justify-end mt-4">
                <button className="bg-white text-opay-main font-semibold text-sm px-5 py-1.5 rounded-full shadow hover:opacity-90 transition-opacity">
                    + Add Money
                </button>
            </div>
        </div>
    );
};

/* List of quick money transfer actions shown below the balance card */
const quickActions = [
    { icon: 'SendToPerson', label: 'To OPay' },
    { icon: 'Bank', label: 'To Bank' },
    { icon: 'Withdraw', label: 'Withdraw' },
];

const QuickActions = () => (
    <Card className="mx-4 px-4 py-4">
        <div className="flex justify-around">
            {quickActions.map(({ icon, label }) => (
                <button key={label} className="flex flex-col items-center gap-2 group">
                    <div className="w-14 h-14 rounded-full bg-opay-iconbg flex items-center justify-center transition-transform group-hover:scale-105">
                        <Icon name={icon} className="w-6 h-6 text-opay-main" />
                    </div>
                    <span className="text-xs text-opay-icon font-medium">{label}</span>
                </button>
            ))}
        </div>
    </Card>
);

/**
 * PromoBanner — a promotional card prompting the user to add their email address.
 */
const PromoBanner = () => (
    <Card className="mx-4 px-4 py-4 flex items-center gap-4">
        {/* Envelope illustration */}
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 relative">
            <Icon name="Email" className="w-8 h-8 text-blue-600" />
            {/* Small notification dot */}
            <span className="absolute top-1 right-1 w-3 h-3 bg-opay-gift rounded-full flex items-center justify-center">
                <span className="text-[7px] text-white">!</span>
            </span>
        </div>
        <div>
            <p className="text-sm font-bold text-opay-headings">Take Control, Stay Informed</p>
            <p className="text-xs text-opay-subtext mt-0.5">Add your email, get the latest from OPay</p>
        </div>
    </Card>
);

/* All available services displayed in the services grid */
const services = [
    { icon: 'Airtime', label: 'Airtime' },
    { icon: 'Data', label: 'Data' },
    { icon: 'Betting', label: 'Betting' },
    { icon: 'TV', label: 'TV' },
    { icon: 'OWealth', label: 'OWealth' },
    { icon: 'Loan', label: 'Loan' },
    { icon: 'Invitation', label: 'Invitation' },
    { icon: 'More', label: 'More' },
];

/**
 * ServicesGrid — a 4-column grid of tappable service icons (Airtime, Data, TV, etc.).
 */
const ServicesGrid = () => (
    <Card className="mx-4 px-4 py-4">
        <div className="grid grid-cols-4 gap-y-5">
            {services.map(({ icon, label}) => (
                <button key={label} className="flex flex-col items-center gap-2 group">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-opay-iconbg flex items-center justify-center transition-transform group-hover:scale-105">
                            <Icon name={icon} className="w-7 h-7 text-opay-main" />
                        </div>
                    </div>
                    <span className="text-[11px] text-opay-icon font-medium text-center leading-tight">{label}</span>
                </button>
            ))}
        </div>
    </Card>
);

/**
 * SavingChallenge — a promotional card encouraging users to set a savings goal for 2026.
 */
const SavingChallenge = () => (
    <div className="mx-4 rounded-2xl bg-opay-savebg px-4 py-4 relative overflow-hidden">
        {/* Title row */}
        <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-opay-headings">Saving Challenge 2026</p>
            <Icon name="Gift" className="w-7 h-7 text-opay-main" />
        </div>

        {/* Dashed separator */}
        <div className="border-t border-dashed border-opay-main border-opacity-40 mb-3" />

        {/* Special Target row */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-opay-iconbg flex items-center justify-center">
                    <Icon name="Target" className="w-5 h-5 text-opay-main" />
                </div>
                <div>
                    <p className="text-sm font-bold text-opay-headings">Special Target</p>
                    <p className="text-[11px] text-opay-subtext">Start small daily, finish big in 2026</p>
                </div>
            </div>
            <button className="bg-opay-main text-white font-bold text-sm px-5 py-1.5 rounded-full shadow hover:opacity-90 transition-opacity">
                Go
            </button>
        </div>
    </div>
);

/**
 * VoucherTeaser — a card that advertises exclusive voucher packages available to the user.
 */
const VoucherTeaser = () => (
    <Card className="mx-4 px-4 py-4 flex items-center gap-4">
        <div className="w-14 h-14 bg-opay-iconbg rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon name="Voucher" className="w-7 h-7 text-opay-main" />
        </div>
        <div className="flex-1">
            <p className="text-sm font-bold text-opay-headings">Super Voucher Package</p>
            <p className="text-xs text-opay-subtext mt-0.5">Exclusive deals and discounts for you</p>
        </div>
        <Icon name="ChevronRight" className="w-4 h-4 text-opay-inactive flex-shrink-0" />
    </Card>
);

/**
 * Dashboard — the main home screen of the app.
 * Stacks all sections vertically inside a scrollable area, with a fixed bottom navigation bar.
 */
const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="min-h-screen bg-opay-app flex flex-col">
            <div className="flex-1 overflow-y-auto pb-20">
                <Header />

                <div className="flex flex-col gap-3 pb-4">
                    <BalanceCard />
                    <QuickActions />
                    <PromoBanner />
                    <ServicesGrid />
                    <SavingChallenge />
                    <VoucherTeaser />
                </div>
            </div>

            {/* Fixed bottom navigation */}
            <BottomNav active={activeTab} onTabChange={setActiveTab} />
        </div>
    );
};

export default Dashboard;
