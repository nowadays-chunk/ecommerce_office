import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Zen Garden - Sustainable Wellness & Ethical Goods",
    description: "Restore the natural balance between soul and nature. Sustainable, ethical, and pure wellness products for your inner peace.",
    keywords: ["wellness", "sustainable", "ethical goods", "zen", "natural living"],
};

export default function ZenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#fdfbf7] text-[#2d3e30] font-sans selection:bg-[#8ca68c] selection:text-white">
            <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-[#8ca68c]/10">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="text-xl font-light tracking-[0.2em] uppercase italic">Zen Garden</div>
                    <div className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-widest font-medium">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-16 flex items-center">
                            <button className="opacity-70 hover:opacity-100 transition-opacity flex items-center space-x-2">
                                <span>The_Store</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[64px] left-0 w-64 bg-white/90 backdrop-blur-xl border border-[#8ca68c]/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_10px_40px_rgba(0,0,0,0.03)] text-[10px]">
                                <ul className="space-y-3">
                                    <li><a href="/variances/zen/frontoffice" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Garden_Home</a></li>
                                    <li><a href="/variances/zen/frontoffice/shop" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Market_Space</a></li>
                                    <li><a href="/variances/zen/frontoffice/product" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Item_Quiet</a></li>
                                    <li><a href="/variances/zen/frontoffice/blog" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Mind_Notes</a></li>
                                    <li><a href="/variances/zen/frontoffice/about" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Essence</a></li>
                                    <li><a href="/variances/zen/frontoffice/contact" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Connection</a></li>
                                    <li><a href="/variances/zen/frontoffice/account" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Soul_ID</a></li>
                                    <li><a href="/variances/zen/frontoffice/search" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Find_Peace</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-16 flex items-center">
                            <button className="opacity-70 hover:opacity-100 transition-opacity flex items-center space-x-2">
                                <span>The_Studio</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[64px] left-0 w-64 bg-white/90 backdrop-blur-xl border border-[#8ca68c]/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_10px_40px_rgba(0,0,0,0.03)] text-[10px]">
                                <ul className="space-y-3">
                                    <li><a href="/variances/zen/backoffice/dashboard" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Center_Flow</a></li>
                                    <li><a href="/variances/zen/backoffice/analytics" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Pattern_Study</a></li>
                                    <li><a href="/variances/zen/backoffice/products" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Storage</a></li>
                                    <li><a href="/variances/zen/backoffice/orders" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Exchange</a></li>
                                    <li><a href="/variances/zen/backoffice/marketing" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Expression</a></li>
                                    <li><a href="/variances/zen/backoffice/settings" className="block opacity-60 hover:opacity-100 hover:text-[#8ca68c] transition-all">Balance_Config</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 opacity-60">
                        <button className="hover:text-[#8ca68c] transition-colors">
                            <svg xmlns="http://www.w3.org/1999/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                        <button className="hover:text-[#8ca68c] transition-colors">
                            <svg xmlns="http://www.w3.org/1999/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
            <footer className="bg-[#f2f2eb] py-20 border-t border-[#8ca68c]/5 font-serif italic">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-16 text-sm">
                    <div className="space-y-6">
                        <div className="text-xl font-light italic uppercase tracking-widest text-[#2d3e30]">Zen Garden</div>
                        <p className="opacity-70 leading-relaxed text-base">"Restore the natural balance between soul and nature. Sustainable, ethical, pure."</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold opacity-30 text-xs uppercase tracking-[0.3em]">The_Front_Gate</h4>
                        <ul className="grid grid-cols-2 gap-4 opacity-70">
                            <li><a href="/variances/zen/frontoffice" className="hover:text-[#8ca68c]">Entrance</a></li>
                            <li><a href="/variances/zen/frontoffice/shop" className="hover:text-[#8ca68c]">The_Market</a></li>
                            <li><a href="/variances/zen/frontoffice/product" className="hover:text-[#8ca68c]">Essence</a></li>
                            <li><a href="/variances/zen/frontoffice/blog" className="hover:text-[#8ca68c]">Scrolls</a></li>
                            <li><a href="/variances/zen/frontoffice/about" className="hover:text-[#8ca68c]">Origins</a></li>
                            <li><a href="/variances/zen/frontoffice/contact" className="hover:text-[#8ca68c]">Whishper</a></li>
                            <li><a href="/variances/zen/frontoffice/account" className="hover:text-[#8ca68c]">Meditator</a></li>
                            <li><a href="/variances/zen/frontoffice/checkout" className="hover:text-[#8ca68c]">Closing</a></li>
                            <li><a href="/variances/zen/frontoffice/policy" className="hover:text-[#8ca68c]">Way</a></li>
                            <li><a href="/variances/zen/frontoffice/search" className="hover:text-[#8ca68c]">Seek</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold opacity-30 text-xs uppercase tracking-[0.3em]">The_Inner_Circle</h4>
                        <ul className="space-y-2 opacity-70">
                            <li><a href="/variances/zen/backoffice/dashboard" className="hover:text-[#8ca68c]">Sanctum</a></li>
                            <li><a href="/variances/zen/backoffice/analytics" className="hover:text-[#8ca68c]">Flow_Stats</a></li>
                            <li><a href="/variances/zen/backoffice/products" className="hover:text-[#8ca68c]">Garden_Inv</a></li>
                            <li><a href="/variances/zen/backoffice/orders" className="hover:text-[#8ca68c]">Manifests</a></li>
                            <li><a href="/variances/zen/backoffice/marketing" className="hover:text-[#8ca68c]">Whispers</a></li>
                            <li><a href="/variances/zen/backoffice/localization" className="hover:text-[#8ca68c]">Global_Zen</a></li>
                            <li><a href="/variances/zen/backoffice/settings" className="hover:text-[#8ca68c]">Balance_Config</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
