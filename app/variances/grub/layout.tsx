import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Grub Hub - Premium Food Delivery & Daily Specials",
    description: "No excuses, just elite grub. Order now for terminal velocity delivery of your favorite premium kitchen recipes.",
    keywords: ["food delivery", "gourmet food", "daily specials", "fast delivery", "premium grub"],
};

export default function GrubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#4c1d95] text-white font-black selection:bg-[#facc15] selection:text-[#4c1d95]">
            <nav className="bg-[#ec4899] border-b-8 border-[#4c1d95] sticky top-0 z-50 overflow-hidden shadow-[0_8px_0px_#4c1d95]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-2 italic">
                        <span className="text-3xl font-black text-white tracking-tighter italic">GRUB_HUB</span>
                        <span className="w-10 h-1 bg-[#facc15] mt-2"></span>
                    </div>
                    <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em]">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="text-white flex items-center space-x-2 group-hover:text-[#facc15] transition-colors">
                                <span>The_Kitchen</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-[#ec4899] border-8 border-[#4c1d95] p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[60] shadow-[12px_12px_0px_#facc15]">
                                <ul className="space-y-3 font-black text-[#4c1d95]">
                                    <li><a href="/variances/grub/frontoffice" className="block hover:bg-[#facc15] p-2 transition-all">Kitchen_Home</a></li>
                                    <li><a href="/variances/grub/frontoffice/shop" className="block hover:bg-[#facc15] p-2 transition-all">Full_Menu</a></li>
                                    <li><a href="/variances/grub/frontoffice/product" className="block hover:bg-[#facc15] p-2 transition-all">Daily_Special</a></li>
                                    <li><a href="/variances/grub/frontoffice/blog" className="block hover:bg-[#facc15] p-2 transition-all">Taste_Notes</a></li>
                                    <li><a href="/variances/grub/frontoffice/about" className="block hover:bg-[#facc15] p-2 transition-all">Our_Recipe</a></li>
                                    <li><a href="/variances/grub/frontoffice/contact" className="block hover:bg-[#facc15] p-2 transition-all">Help_Counter</a></li>
                                    <li><a href="/variances/grub/frontoffice/account" className="block hover:bg-[#facc15] p-2 transition-all">Eater_Profile</a></li>
                                    <li><a href="/variances/grub/frontoffice/search" className="block hover:bg-[#facc15] p-2 transition-all">Scout_Grub</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="text-white/60 flex items-center space-x-2 group-hover:text-[#facc15] transition-colors">
                                <span>Pantry_Admin</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-[#ec4899] border-8 border-[#4c1d95] p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[60] shadow-[12px_12px_0px_#facc15]">
                                <ul className="space-y-3 font-black text-[#4c1d95]">
                                    <li><a href="/variances/grub/backoffice/dashboard" className="block hover:bg-[#facc15] p-2 transition-all">Command_Center</a></li>
                                    <li><a href="/variances/grub/backoffice/analytics" className="block hover:bg-[#facc15] p-2 transition-all">Crave_Charts</a></li>
                                    <li><a href="/variances/grub/backoffice/pantry" className="block hover:bg-[#facc15] p-2 transition-all">Stock_Vault</a></li>
                                    <li><a href="/variances/grub/backoffice/orders" className="block hover:bg-[#facc15] p-2 transition-all">Order_History</a></li>
                                    <li><a href="/variances/grub/backoffice/marketing" className="block hover:bg-[#facc15] p-2 transition-all">Promo_Engine</a></li>
                                    <li><a href="/variances/grub/backoffice/settings" className="block hover:bg-[#facc15] p-2 transition-all">Kitchen_Setup</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#facc15] transition-colors">Gatherers</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 border-4 border-[#4c1d95] bg-[#facc15] px-4 py-2 rounded-xl text-[10px] font-black uppercase text-[#4c1d95] hover:scale-105 transition-all">
                            <span>Order_Now</span>
                        </button>
                    </div>
                </div>
            </nav>
            <main className="p-8 md:p-12">{children}</main>
            <footer className="bg-[#ec4899] py-32 border-t-8 border-[#4c1d95] mt-20 relative overflow-hidden text-[#4c1d95]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 relative z-10">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <h2 className="text-8xl md:text-9xl font-black text-white italic tracking-tighter leading-none">STAY <br /> <span className="text-[#facc15] underline decoration-[#4c1d95]">FED.</span></h2>
                        <p className="text-lg font-black max-w-sm uppercase italic">No hungergames. Just premium grub delivered at terminal velocity. Join the pantry.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-4 border-[#4c1d95] pl-4">Front_Counter</h4>
                        <ul className="space-y-2 text-sm font-black uppercase transition-all">
                            <li><a href="/variances/grub/frontoffice" className="hover:text-[#facc15]">Kitchen_Base</a></li>
                            <li><a href="/variances/grub/frontoffice/shop" className="hover:text-[#facc15]">Menu_All</a></li>
                            <li><a href="/variances/grub/frontoffice/product" className="hover:text-[#facc15]">Specials</a></li>
                            <li><a href="/variances/grub/frontoffice/blog" className="hover:text-[#facc15]">Taste_Test</a></li>
                            <li><a href="/variances/grub/frontoffice/about" className="hover:text-[#facc15]">Our_Recipe</a></li>
                            <li><a href="/variances/grub/frontoffice/contact" className="hover:text-[#facc15]">Help_Line</a></li>
                            <li><a href="/variances/grub/frontoffice/account" className="hover:text-[#facc15]">Eater_Profile</a></li>
                            <li><a href="/variances/grub/frontoffice/checkout" className="hover:text-[#facc15]">Final_Bite</a></li>
                            <li><a href="/variances/grub/frontoffice/policy" className="hover:text-[#facc15]">Laws</a></li>
                            <li><a href="/variances/grub/frontoffice/search" className="hover:text-[#facc15]">Scout_Grub</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-4 border-[#4c1d95] pl-4">Back_Pantry</h4>
                        <ul className="space-y-2 text-sm font-black uppercase transition-all">
                            <li><a href="/variances/grub/backoffice/dashboard" className="hover:text-[#facc15]">Dashboard</a></li>
                            <li><a href="/variances/grub/backoffice/analytics" className="hover:text-[#facc15]">Taste_Stats</a></li>
                            <li><a href="/variances/grub/backoffice/pantry" className="hover:text-[#facc15]">Pantry_Stock</a></li>
                            <li><a href="/variances/grub/backoffice/orders" className="hover:text-[#facc15]">Delivery_Logs</a></li>
                            <li><a href="/variances/grub/backoffice/gatherers" className="hover:text-[#facc15]">Gatherers</a></li>
                            <li><a href="/variances/grub/backoffice/marketing" className="hover:text-[#facc15]">Flavor_Boost</a></li>
                            <li><a href="/variances/grub/backoffice/localization" className="hover:text-[#facc15]">Global_Taste</a></li>
                            <li><a href="/variances/grub/backoffice/settings" className="hover:text-[#facc15]">Kitchen_Config</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
