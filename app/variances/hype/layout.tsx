import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hype Culture - Elite Streetwear & Exclusive Drops",
    description: "No filters, no limits. Shop the latest streetwear drops and join the restless generation. Premium culture gear.",
    keywords: ["streetwear", "exclusive drops", "hype culture", "fashion", "limited edition"],
};

export default function HypeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#000] text-white font-black selection:bg-[#ccff00] selection:text-black">
            <div className="h-1 bg-[#ccff00] sticky top-0 z-[100]"></div>
            <nav className="bg-black border-b-[8px] border-white sticky top-1 z-50">
                <div className="max-w-[1400px] mx-auto flex items-stretch">
                    <div className="p-6 border-r-[8px] border-white flex items-center justify-center bg-white text-black text-4xl leading-none">
                        HYPE.
                    </div>
                    <div className="flex-1 flex items-center px-12 space-x-12 text-sm uppercase tracking-tighter">
                        {/* Store Dropdown */}
                        <div className="relative group h-full flex items-center">
                            <button className="hover:text-[#ccff00] whitespace-nowrap flex items-center space-x-2 h-full">
                                <span>Front_Store</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-white text-black border-[8px] border-black p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[60] shadow-[16px_16px_0px_#ccff00]">
                                <ul className="space-y-3 font-black">
                                    <li><a href="/variances/hype/frontoffice" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">Home_Base</a></li>
                                    <li><a href="/variances/hype/frontoffice/shop" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">All_Drops</a></li>
                                    <li><a href="/variances/hype/frontoffice/product" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">Item_Detail</a></li>
                                    <li><a href="/variances/hype/frontoffice/blog" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">The_Hype_Report</a></li>
                                    <li><a href="/variances/hype/frontoffice/about" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">Our_Legacy</a></li>
                                    <li><a href="/variances/hype/frontoffice/contact" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">Connect</a></li>
                                    <li><a href="/variances/hype/frontoffice/account" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">Identity_Card</a></li>
                                    <li><a href="/variances/hype/frontoffice/search" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">Scan_Vault</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group h-full flex items-center border-l-[8px] border-white pl-12 ml-12">
                            <button className="text-white/40 hover:text-[#ccff00] whitespace-nowrap flex items-center space-x-2 h-full">
                                <span>Admin_Protocol</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-white text-black border-[8px] border-black p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[60] shadow-[16px_16px_0px_#ccff00]">
                                <ul className="space-y-3 font-black">
                                    <li><a href="/variances/hype/backoffice/dashboard" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">Dashboard</a></li>
                                    <li><a href="/variances/hype/backoffice/analytics" className="block hover:bg-black hover:text-[#ccff00] p-2 transition-all">Market_Intel</a></li>
                                    <li><a href="/variances/hype/backoffice/products" className="block hover:text-black hover:bg-[#ccff00] p-2 transition-all">Stock_Mgmt</a></li>
                                    <li><a href="/variances/hype/backoffice/orders" className="block hover:text-black hover:bg-[#ccff00] p-2 transition-all">Logistics</a></li>
                                    <li><a href="/variances/hype/backoffice/marketing" className="block hover:text-black hover:bg-[#ccff00] p-2 transition-all">Ad_Campaigns</a></li>
                                    <li><a href="/variances/hype/backoffice/settings" className="block hover:text-black hover:bg-[#ccff00] p-2 transition-all">Root_Settings</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#ccff00] whitespace-nowrap border-b-2 border-transparent hover:border-[#ccff00]">Drops</a>
                    </div>
                    <div className="p-6 border-l-[8px] border-white flex items-center space-x-8">
                        <button className="hover:scale-125 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></button>
                        <div className="relative group">
                            <button className="hover:scale-125 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></button>
                            <span className="absolute -top-2 -right-2 bg-[#ccff00] text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full">3</span>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="max-w-[1400px] mx-auto border-x-[8px] border-white min-h-screen">
                {children}
            </main>
            <footer className="bg-white text-black p-12 mt-0 border-t-[8px] border-black">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-24">
                    <div className="space-y-8">
                        <h2 className="text-8xl md:text-[10rem] leading-[0.8] tracking-tighter">STAY <br /> <span className="bg-black text-[#ccff00] px-4">LOUD.</span></h2>
                        <p className="text-xl max-w-md">No filters. No limits. Just the culture. Premium streetwear for the restless generation.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 text-sm">
                        <div className="space-y-4">
                            <h4 className="border-b-4 border-black pb-2 font-black uppercase text-lg">Culture_Store</h4>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 uppercase font-black">
                                <li><a href="/variances/hype/frontoffice" className="hover:pl-2 transition-all block">Home</a></li>
                                <li><a href="/variances/hype/frontoffice/shop" className="hover:pl-2 transition-all block">Shop_All</a></li>
                                <li><a href="/variances/hype/frontoffice/product" className="hover:pl-2 transition-all block">Drop_List</a></li>
                                <li><a href="/variances/hype/frontoffice/blog" className="hover:pl-2 transition-all block">Vibe_Check</a></li>
                                <li><a href="/variances/hype/frontoffice/about" className="hover:pl-2 transition-all block">Manifesto</a></li>
                                <li><a href="/variances/hype/frontoffice/contact" className="hover:pl-2 transition-all block">Connect</a></li>
                                <li><a href="/variances/hype/frontoffice/account" className="hover:pl-2 transition-all block">Member_ID</a></li>
                                <li><a href="/variances/hype/frontoffice/checkout" className="hover:pl-2 transition-all block">Checkout</a></li>
                                <li><a href="/variances/hype/frontoffice/policy" className="hover:pl-2 transition-all block">Laws</a></li>
                                <li><a href="/variances/hype/frontoffice/search" className="hover:pl-2 transition-all block">Search</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-12 text-sm">
                        <div className="space-y-4">
                            <h4 className="border-b-4 border-black pb-2 font-black uppercase text-lg">Admin_Terminal</h4>
                            <ul className="grid grid-cols-1 gap-y-2 uppercase font-black">
                                <li><a href="/variances/hype/backoffice/dashboard" className="hover:pl-2 transition-all block">Dashboard</a></li>
                                <li><a href="/variances/hype/backoffice/analytics" className="hover:pl-2 transition-all block">Intel</a></li>
                                <li><a href="/variances/hype/backoffice/products" className="hover:pl-2 transition-all block">Drops_Manager</a></li>
                                <li><a href="/variances/hype/backoffice/orders" className="hover:pl-2 transition-all block">Orders</a></li>
                                <li><a href="/variances/hype/backoffice/marketing" className="hover:pl-2 transition-all block">Hype_Engine</a></li>
                                <li><a href="/variances/hype/backoffice/localization" className="hover:pl-2 transition-all block">Global_Reach</a></li>
                                <li><a href="/variances/hype/backoffice/settings" className="hover:pl-2 transition-all block">System_Config</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
