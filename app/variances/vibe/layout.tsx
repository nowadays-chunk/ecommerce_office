import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Vibe Records - Rare Vinyl & Analog Sound",
    description: "Curation for the soul. Rare finds, master pressings, and the sound of history spinning at 33 RPM.",
    keywords: ["vinyl records", "analog sound", "music records", "rare vinyl", "vibe records"],
};

export default function VibeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#fef6e4] text-[#023047] font-serif selection:bg-[#fb8500] selection:text-white">
            <div className="h-2 bg-gradient-to-r from-[#fb8500] via-[#ffb703] to-[#219ebc]"></div>
            <nav className="bg-white/50 backdrop-blur-md sticky top-2 z-50 border-b border-[#023047]/10">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-3xl font-black italic tracking-tighter text-[#fb8500]">VIBE_RECORDS</div>
                    <div className="hidden md:flex items-center space-x-10 text-xs uppercase font-bold tracking-widest italic">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="hover:text-[#219ebc] border-b-2 border-[#fb8500] flex items-center space-x-2">
                                <span>The_Store</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-[#fef6e4] border-2 border-[#023047]/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                                <ul className="space-y-3 font-bold italic text-sm">
                                    <li><a href="/variances/vibe/frontoffice" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Live_Session</a></li>
                                    <li><a href="/variances/vibe/frontoffice/shop" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Vinyl_Crates</a></li>
                                    <li><a href="/variances/vibe/frontoffice/product" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Album_Intel</a></li>
                                    <li><a href="/variances/vibe/frontoffice/blog" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Liner_Notes</a></li>
                                    <li><a href="/variances/vibe/frontoffice/about" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Our_Sound</a></li>
                                    <li><a href="/variances/vibe/frontoffice/contact" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Support</a></li>
                                    <li><a href="/variances/vibe/frontoffice/account" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Listener_ID</a></li>
                                    <li><a href="/variances/vibe/frontoffice/search" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Search_Vault</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center ml-10">
                            <button className="text-[#023047]/40 hover:text-[#219ebc] border-b-2 border-transparent flex items-center space-x-2">
                                <span>Studio_Control</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-[#fef6e4] border-2 border-[#023047]/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                                <ul className="space-y-3 font-bold italic text-sm">
                                    <li><a href="/variances/vibe/backoffice/dashboard" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Console_Ready</a></li>
                                    <li><a href="/variances/vibe/backoffice/analytics" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Sound_Waves</a></li>
                                    <li><a href="/variances/vibe/backoffice/products" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Master_Tapes</a></li>
                                    <li><a href="/variances/vibe/backoffice/orders" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Shipments</a></li>
                                    <li><a href="/variances/vibe/backoffice/marketing" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Promos</a></li>
                                    <li><a href="/variances/vibe/backoffice/settings" className="block hover:text-[#fb8500] border-l-2 border-transparent hover:border-[#fb8500] pl-3 transition-all">Root_Vibes</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#219ebc] border-b-2 border-transparent hover:border-[#fb8500] whitespace-nowrap ml-10">Artists</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="bg-[#fb8500] text-white p-2 rounded-full shadow-lg hover:rotate-12 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <main className="max-w-6xl mx-auto">{children}</main>
            <footer className="bg-[#023047] text-[#fef6e4] py-24 mt-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#fb8500] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-16 relative z-10">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <h2 className="text-6xl font-black italic tracking-tighter text-white">ANALOG <br /> FOREVER.</h2>
                        <p className="text-lg opacity-60 max-w-sm italic">Curation for the soul. Rare finds, master pressings, and the sound of history spinning at 33 RPM.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[#ffb703] font-black uppercase text-xs tracking-[0.2em]">The_Record_Store</h4>
                        <ul className="space-y-2 text-sm font-bold italic opacity-80 uppercase">
                            <li><a href="/variances/vibe/frontoffice" className="hover:text-[#219ebc]">Live_Session</a></li>
                            <li><a href="/variances/vibe/frontoffice/shop" className="hover:text-[#219ebc]">Vinyl_Crates</a></li>
                            <li><a href="/variances/vibe/frontoffice/product" className="hover:text-[#219ebc]">Album_Intel</a></li>
                            <li><a href="/variances/vibe/frontoffice/blog" className="hover:text-[#219ebc]">Liner_Notes</a></li>
                            <li><a href="/variances/vibe/frontoffice/about" className="hover:text-[#219ebc]">Our_Sound</a></li>
                            <li><a href="/variances/vibe/frontoffice/contact" className="hover:text-[#219ebc]">Support</a></li>
                            <li><a href="/variances/vibe/frontoffice/account" className="hover:text-[#219ebc]">Listener_ID</a></li>
                            <li><a href="/variances/vibe/frontoffice/checkout" className="hover:text-[#219ebc]">Checkout</a></li>
                            <li><a href="/variances/vibe/frontoffice/policy" className="hover:text-[#219ebc]">Legal</a></li>
                            <li><a href="/variances/vibe/frontoffice/search" className="hover:text-[#219ebc]">Find_Track</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[#ffb703] font-black uppercase text-xs tracking-[0.2em]">Studio_Terminal</h4>
                        <ul className="space-y-2 text-sm font-bold italic opacity-80 uppercase">
                            <li><a href="/variances/vibe/backoffice/dashboard" className="hover:text-[#219ebc]">Dashboard</a></li>
                            <li><a href="/variances/vibe/backoffice/analytics" className="hover:text-[#219ebc]">Charts</a></li>
                            <li><a href="/variances/vibe/backoffice/products" className="hover:text-[#219ebc]">Pressing_Plant</a></li>
                            <li><a href="/variances/vibe/backoffice/orders" className="hover:text-[#219ebc]">Logistics</a></li>
                            <li><a href="/variances/vibe/backoffice/marketing" className="hover:text-[#219ebc]">Promotion</a></li>
                            <li><a href="/variances/vibe/backoffice/localization" className="hover:text-[#219ebc]">Global_Sync</a></li>
                            <li><a href="/variances/vibe/backoffice/settings" className="hover:text-[#219ebc]">Gear_Config</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
