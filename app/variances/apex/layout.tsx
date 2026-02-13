"use client";

import React from 'react';

export default function ApexLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#020202] text-[#e2e8f0] font-sans selection:bg-[#a855f7] selection:text-white">
            {/* RGB Top Bar */}
            <div className="h-1 bg-gradient-to-r from-[#a855f7] via-[#06b6d4] to-[#22c55e] animate-rgb_flow sticky top-0 z-[100]"></div>

            <nav className="bg-black/80 backdrop-blur-2xl sticky top-1 z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#a855f7] to-[#06b6d4] clip-path-poly flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-xl font-black italic text-black">A</span>
                        </div>
                        <span className="text-2xl font-black italic tracking-tighter text-white">APEX_GEAR</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em] italic">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="text-[#a855f7] flex items-center space-x-2 group-hover:text-white transition-colors">
                                <span>Tactical_Store</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-black/90 border-2 border-[#a855f7]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                                <ul className="space-y-3">
                                    <li><a href="/variances/apex/frontoffice" className="block hover:text-white hover:bg-[#a855f7]/20 p-2 transition-all">Command_Center</a></li>
                                    <li><a href="/variances/apex/frontoffice/shop" className="block hover:text-white hover:bg-[#a855f7]/20 p-2 transition-all">Armory_Stock</a></li>
                                    <li><a href="/variances/apex/frontoffice/product" className="block hover:text-white hover:bg-[#a855f7]/20 p-2 transition-all">Spec_Check</a></li>
                                    <li><a href="/variances/apex/frontoffice/blog" className="block hover:text-white hover:bg-[#a855f7]/20 p-2 transition-all">Intel_Feed</a></li>
                                    <li><a href="/variances/apex/frontoffice/about" className="block hover:text-white hover:bg-[#a855f7]/20 p-2 transition-all">Origin_File</a></li>
                                    <li><a href="/variances/apex/frontoffice/contact" className="block hover:text-white hover:bg-[#a855f7]/20 p-2 transition-all">Comms_Relay</a></li>
                                    <li><a href="/variances/apex/frontoffice/account" className="block hover:text-white hover:bg-[#a855f7]/20 p-2 transition-all">Soldier_Profile</a></li>
                                    <li><a href="/variances/apex/frontoffice/search" className="block hover:text-white hover:bg-[#a855f7]/20 p-2 transition-all">Deep_Scan</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="text-white/40 flex items-center space-x-2 group-hover:text-[#06b6d4] transition-colors">
                                <span>Admin_Command</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-black/90 border-2 border-[#06b6d4]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                                <ul className="space-y-3">
                                    <li><a href="/variances/apex/backoffice/dashboard" className="block hover:text-white hover:bg-[#06b6d4]/20 p-2 transition-all">Mission_Control</a></li>
                                    <li><a href="/variances/apex/backoffice/analytics" className="block hover:text-white hover:bg-[#06b6d4]/20 p-2 transition-all">Data_Triage</a></li>
                                    <li><a href="/variances/apex/backoffice/products" className="block hover:text-white hover:bg-[#06b6d4]/20 p-2 transition-all">Gear_Vault</a></li>
                                    <li><a href="/variances/apex/backoffice/orders" className="block hover:text-white hover:bg-[#06b6d4]/20 p-2 transition-all">Shipment_Logs</a></li>
                                    <li><a href="/variances/apex/backoffice/marketing" className="block hover:text-white hover:bg-[#06b6d4]/20 p-2 transition-all">Signal_Flare</a></li>
                                    <li><a href="/variances/apex/backoffice/settings" className="block hover:text-white hover:bg-[#06b6d4]/20 p-2 transition-all">Kernel_Config</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#22c55e] transition-colors">Pro_League</a>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="hidden md:block text-[8px] font-black uppercase text-right opacity-40">
                            <p>MATCH_FOUND: 0.1s</p>
                            <p>FPS: 360_STABLE</p>
                        </div>
                        <button className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-[#a855f7] transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="relative">{children}</main>

            <footer className="bg-black py-32 border-t-8 border-[#111] mt-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a855f7] to-transparent opacity-40"></div>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 relative z-10">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none text-white">DOMINATE <br /> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#06b6d4]">ARENA.</span></h2>
                        <p className="text-lg font-bold opacity-40 max-w-sm">Level up your setup with gear optimized for elite performance. No lag. No compromises. Pure Apex.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-4 border-[#a855f7] pl-4">Tactical_Ops</h4>
                        <ul className="space-y-2 text-sm font-bold uppercase transition-all">
                            <li><a href="/variances/apex/frontoffice" className="hover:text-[#a855f7]">Home_Base</a></li>
                            <li><a href="/variances/apex/frontoffice/shop" className="hover:text-[#06b6d4]">Armory_Shop</a></li>
                            <li><a href="/variances/apex/frontoffice/product" className="hover:text-[#22c55e]">Gear_Intel</a></li>
                            <li><a href="/variances/apex/frontoffice/blog" className="hover:text-[#a855f7]">Strategic_Notes</a></li>
                            <li><a href="/variances/apex/frontoffice/about" className="hover:text-[#06b6d4]">Mission_Brief</a></li>
                            <li><a href="/variances/apex/frontoffice/contact" className="hover:text-[#22c55e]">Support_Comms</a></li>
                            <li><a href="/variances/apex/frontoffice/account" className="hover:text-[#a855f7]">Pilot_Profile</a></li>
                            <li><a href="/variances/apex/frontoffice/checkout" className="hover:text-[#06b6d4]">Extraction</a></li>
                            <li><a href="/variances/apex/frontoffice/policy" className="hover:text-[#22c55e]">Rules_Of_Engage</a></li>
                            <li><a href="/variances/apex/frontoffice/search" className="hover:text-[#a855f7]">Scout_Area</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-4 border-[#06b6d4] pl-4">Command_Terminal</h4>
                        <ul className="space-y-2 text-sm font-bold uppercase transition-all">
                            <li><a href="/variances/apex/backoffice/dashboard" className="hover:text-[#a855f7]">Admin_Root</a></li>
                            <li><a href="/variances/apex/backoffice/analytics" className="hover:text-[#06b6d4]">Data_Stream</a></li>
                            <li><a href="/variances/apex/backoffice/inventory" className="hover:text-[#22c55e]">Supply_Drop</a></li>
                            <li><a href="/variances/apex/backoffice/orders" className="hover:text-[#a855f7]">Logs</a></li>
                            <li><a href="/variances/apex/backoffice/players" className="hover:text-[#06b6d4]">Squad_Intel</a></li>
                            <li><a href="/variances/apex/backoffice/marketing" className="hover:text-[#22c55e]">Signal_Boost</a></li>
                            <li><a href="/variances/apex/backoffice/localization" className="hover:text-[#a855f7]">Global_Node</a></li>
                            <li><a href="/variances/apex/backoffice/settings" className="hover:text-[#06b6d4]">Kernel_Config</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
        @keyframes rgb_flow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .animate-rgb_flow {
          animation: rgb_flow 10s linear infinite;
        }
        .clip-path-poly {
          clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
        }
      `}</style>
        </div>
    );
}
