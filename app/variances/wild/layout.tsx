import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wild Watch - Rugged Outdoor & Adventure Gear",
    description: "Gear designed for the edge of the world. No maps, just grit. Leave civilization behind with Wild Watch adventure gear.",
    keywords: ["outdoor gear", "adventure", "rugged equipment", "survival gear", "wild watch"],
};

export default function WildLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#fcfbf7] text-[#3d3d3d] font-sans selection:bg-[#a3b18a] selection:text-[#2d3a1f]">
            <nav className="bg-[#2d3a1f] border-b-4 border-[#a3b18a] sticky top-0 z-50 overflow-hidden shadow-lg">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-[#a3b18a] rounded-lg flex items-center justify-center text-xl font-black text-[#2d3a1f]">W</div>
                        <span className="text-2xl font-black text-white tracking-widest uppercase italic">WILD_WATCH</span>
                    </div>
                    <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="hover:text-[#a3b18a] transition-colors border-b-2 border-transparent hover:border-[#a3b18a] flex items-center space-x-2">
                                <span>Front_Camp</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-[#2d3a1f] border-2 border-[#a3b18a]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                                <ul className="space-y-3 font-black text-white/80">
                                    <li><a href="/variances/wild/frontoffice" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Base_Camp</a></li>
                                    <li><a href="/variances/wild/frontoffice/shop" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Gear_Inventory</a></li>
                                    <li><a href="/variances/wild/frontoffice/product" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Spec_Detail</a></li>
                                    <li><a href="/variances/wild/frontoffice/blog" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Trail_Logs</a></li>
                                    <li><a href="/variances/wild/frontoffice/about" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Legacy_Path</a></li>
                                    <li><a href="/variances/wild/frontoffice/contact" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Signal_Flare</a></li>
                                    <li><a href="/variances/wild/frontoffice/account" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Walker_ID</a></li>
                                    <li><a href="/variances/wild/frontoffice/search" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Scout_Wild</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="hover:text-[#a3b18a] transition-colors flex items-center space-x-2">
                                <span>Admin_Command</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-[#2d3a1f] border-2 border-[#a3b18a]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                                <ul className="space-y-3 font-black text-white/80">
                                    <li><a href="/variances/wild/backoffice/dashboard" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">HQ_Overview</a></li>
                                    <li><a href="/variances/wild/backoffice/analytics" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Expedition_Data</a></li>
                                    <li><a href="/variances/wild/backoffice/products" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Stockpiles</a></li>
                                    <li><a href="/variances/wild/backoffice/orders" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Logistics</a></li>
                                    <li><a href="/variances/wild/backoffice/marketing" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Outreach</a></li>
                                    <li><a href="/variances/wild/backoffice/settings" className="block hover:text-[#a3b18a] border-l-2 border-transparent hover:border-[#a3b18a] pl-3 transition-all">Node_Config</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#a3b18a] transition-colors">Tribe</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="border-2 border-[#a3b18a] text-[#a3b18a] px-6 py-2 rounded-full text-[10px] font-black uppercase hover:bg-[#a3b18a] hover:text-[#2d3a1f] transition-all">
                            <span>Join_Expedition</span>
                        </button>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
            <footer className="bg-[#2d3a1f] py-32 border-t-8 border-[#344e41] mt-20 relative overflow-hidden text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 relative z-10">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <h2 className="text-8xl md:text-9xl font-black text-white italic tracking-tighter leading-none">LIVE <br /> <span className="text-[#a3b18a]">RAW.</span></h2>
                        <p className="text-lg font-bold max-w-sm opacity-60">Gear designed for the edge of the world. No maps, just grit. Leave the civilization behind.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[#a3b18a] font-black uppercase text-xs tracking-widest border-l-4 border-white pl-4">Front_Camp</h4>
                        <ul className="space-y-2 text-sm font-bold uppercase transition-all opacity-60">
                            <li><a href="/variances/wild/frontoffice" className="hover:text-[#a3b18a] hover:opacity-100">Home_Base</a></li>
                            <li><a href="/variances/wild/frontoffice/shop" className="hover:text-[#a3b18a] hover:opacity-100">Supply_Store</a></li>
                            <li><a href="/variances/wild/frontoffice/product" className="hover:text-[#a3b18a] hover:opacity-100">Gear_Spec</a></li>
                            <li><a href="/variances/wild/frontoffice/blog" className="hover:text-[#a3b18a] hover:opacity-100">Trail_Logs</a></li>
                            <li><a href="/variances/wild/frontoffice/about" className="hover:text-[#a3b18a] hover:opacity-100">Manifesto</a></li>
                            <li><a href="/variances/wild/frontoffice/contact" className="hover:text-[#a3b18a] hover:opacity-100">Rescue_Comms</a></li>
                            <li><a href="/variances/wild/frontoffice/account" className="hover:text-[#a3b18a] hover:opacity-100">Ranger_ID</a></li>
                            <li><a href="/variances/wild/frontoffice/checkout" className="hover:text-[#a3b18a] hover:opacity-100">Final_Prep</a></li>
                            <li><a href="/variances/wild/frontoffice/policy" className="hover:text-[#a3b18a] hover:opacity-100">Protocols</a></li>
                            <li><a href="/variances/wild/frontoffice/search" className="hover:text-[#a3b18a] hover:opacity-100">Track_Path</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[#a3b18a] font-black uppercase text-xs tracking-widest border-l-4 border-white pl-4">Command_Post</h4>
                        <ul className="space-y-2 text-sm font-bold uppercase transition-all opacity-60">
                            <li><a href="/variances/wild/backoffice/dashboard" className="hover:text-[#a3b18a] hover:opacity-100">Dashboard</a></li>
                            <li><a href="/variances/wild/backoffice/analytics" className="hover:text-[#a3b18a] hover:opacity-100">Eco_Stats</a></li>
                            <li><a href="/variances/wild/backoffice/products" className="hover:text-[#a3b18a] hover:opacity-100">Inventory</a></li>
                            <li><a href="/variances/wild/backoffice/orders" className="hover:text-[#a3b18a] hover:opacity-100">Logistics</a></li>
                            <li><a href="/variances/wild/backoffice/tribe" className="hover:text-[#a3b18a] hover:opacity-100">Tribe_Intel</a></li>
                            <li><a href="/variances/wild/backoffice/marketing" className="hover:text-[#a3b18a] hover:opacity-100">Signal_Flash</a></li>
                            <li><a href="/variances/wild/backoffice/localization" className="hover:text-[#a3b18a] hover:opacity-100">Global_Nodes</a></li>
                            <li><a href="/variances/wild/backoffice/settings" className="hover:text-[#a3b18a] hover:opacity-100">Camp_Config</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
