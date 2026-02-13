import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Fit Pulse - High-Performance Athletic Gear",
    description: "Elite engineering for athletes. Shop the latest in high-performance training gear and lab-tested equipment.",
    keywords: ["fitness", "athletic gear", "performance training", "sports equipment"],
};

export default function FitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#050505] text-[#9ca3af] font-sans selection:bg-[#bef264] selection:text-black">
            <nav className="bg-black/95 border-b border-[#bef264]/10 sticky top-0 z-50 overflow-hidden">
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#bef264] to-transparent w-full opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-2 italic">
                        <span className="text-3xl font-black text-white tracking-tighter italic">PULSE</span>
                        <span className="w-10 h-1 bg-[#bef264] mt-2"></span>
                    </div>
                    <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em]">
                        {/* Store Dropdown */}
                        <div className="relative group py-8">
                            <button className="text-white flex items-center space-x-2 group-hover:text-[#bef264] transition-colors">
                                <span>The_Store</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-black border-2 border-[#bef264]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                                <ul className="space-y-3">
                                    <li><a href="/variances/fit/frontoffice" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Home_Base</a></li>
                                    <li><a href="/variances/fit/frontoffice/shop" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Shop_All</a></li>
                                    <li><a href="/variances/fit/frontoffice/product" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Gear_Intel</a></li>
                                    <li><a href="/variances/fit/frontoffice/blog" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Lab_Notes</a></li>
                                    <li><a href="/variances/fit/frontoffice/about" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Mission_Log</a></li>
                                    <li><a href="/variances/fit/frontoffice/contact" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Support_Comm</a></li>
                                    <li><a href="/variances/fit/frontoffice/account" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Athlete_ID</a></li>
                                    <li><a href="/variances/fit/frontoffice/search" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Scan_Inventory</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8">
                            <button className="text-white/60 flex items-center space-x-2 group-hover:text-[#bef264] transition-colors">
                                <span>Lab_Control</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-black border-2 border-[#bef264]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                                <ul className="space-y-3">
                                    <li><a href="/variances/fit/backoffice/dashboard" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Core_Metrics</a></li>
                                    <li><a href="/variances/fit/backoffice/analytics" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Performance_Data</a></li>
                                    <li><a href="/variances/fit/backoffice/products" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Inventory_Sys</a></li>
                                    <li><a href="/variances/fit/backoffice/orders" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Order_Flow</a></li>
                                    <li><a href="/variances/fit/backoffice/athletes" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">Roster_Mgmt</a></li>
                                    <li><a href="/variances/fit/backoffice/settings" className="block hover:text-[#bef264] transition-colors border-l-2 border-transparent hover:border-[#bef264] pl-3">System_Config</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#bef264] transition-colors">Live_Pulse</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 border-2 border-[#bef264]/40 px-4 py-2 rounded-sm text-[10px] font-black uppercase text-white hover:bg-[#bef264] hover:text-black transition-all">
                            <span>Start Training</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
            <footer className="bg-black py-32 border-t-4 border-[#bef264] mt-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 relative z-10">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <h2 className="text-8xl md:text-9xl font-black text-white italic tracking-tighter leading-none">FASTER. <br /> <span className="text-[#bef264]">STRONGER.</span></h2>
                        <p className="text-lg font-medium max-w-sm">No excuses. Just elite engineering for the athletes who refuse to settle. Join the pulse.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-[#bef264] pl-4">Store_Front</h4>
                        <ul className="space-y-2 text-sm font-bold uppercase transition-all">
                            <li><a href="/variances/fit/frontoffice" className="hover:text-[#bef264]">Home</a></li>
                            <li><a href="/variances/fit/frontoffice/shop" className="hover:text-[#bef264]">Shop_All</a></li>
                            <li><a href="/variances/fit/frontoffice/product" className="hover:text-[#bef264]">Latest_Gear</a></li>
                            <li><a href="/variances/fit/frontoffice/blog" className="hover:text-[#bef264]">Lab_Notes</a></li>
                            <li><a href="/variances/fit/frontoffice/about" className="hover:text-[#bef264]">Our_Mission</a></li>
                            <li><a href="/variances/fit/frontoffice/contact" className="hover:text-[#bef264]">Support</a></li>
                            <li><a href="/variances/fit/frontoffice/account" className="hover:text-[#bef264]">Athlete_Profile</a></li>
                            <li><a href="/variances/fit/frontoffice/checkout" className="hover:text-[#bef264]">Checkout</a></li>
                            <li><a href="/variances/fit/frontoffice/policy" className="hover:text-[#bef264]">Policies</a></li>
                            <li><a href="/variances/fit/frontoffice/search" className="hover:text-[#bef264]">Search</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-[#bef264] pl-4">Lab_Control</h4>
                        <ul className="space-y-2 text-sm font-bold uppercase transition-all">
                            <li><a href="/variances/fit/backoffice/dashboard" className="hover:text-[#bef264]">Dashboard</a></li>
                            <li><a href="/variances/fit/backoffice/analytics" className="hover:text-[#bef264]">Analytics</a></li>
                            <li><a href="/variances/fit/backoffice/performance" className="hover:text-[#bef264]">Performance</a></li>
                            <li><a href="/variances/fit/backoffice/products" className="hover:text-[#bef264]">Inventory</a></li>
                            <li><a href="/variances/fit/backoffice/orders" className="hover:text-[#bef264]">Orders</a></li>
                            <li><a href="/variances/fit/backoffice/athletes" className="hover:text-[#bef264]">Athletes</a></li>
                            <li><a href="/variances/fit/backoffice/marketing" className="hover:text-[#bef264]">Marketing</a></li>
                            <li><a href="/variances/fit/backoffice/localization" className="hover:text-[#bef264]">Localization</a></li>
                            <li><a href="/variances/fit/backoffice/settings" className="hover:text-[#bef264]">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
