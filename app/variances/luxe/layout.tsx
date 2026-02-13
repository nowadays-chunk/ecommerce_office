import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxe Heritage - The Pinnacle of Luxury Retail",
    description: "Defining excellence in exclusivity. Shop our curated gallery of masterpieces and high-end luxury goods.",
    keywords: ["luxury", "high-end", "exclusive", "boutique", "premium retail"],
};

export default function LuxeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-serif selection:bg-[#d4af37] selection:text-black">
            <nav className="border-b border-[#d4af37]/20 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-widest uppercase">Luxe.</div>
                    <div className="hidden md:flex items-center space-x-12 text-[10px] items-center space-x-8 text-sm uppercase tracking-[0.3em] font-medium text-[#d4af37]/60">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="hover:text-white transition-colors flex items-center space-x-2">
                                <span>The_Collection</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-black border border-[#d4af37]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
                                <ul className="space-y-3 font-serif italic text-sm">
                                    <li><a href="/variances/luxe/frontoffice" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Luxe_Home</a></li>
                                    <li><a href="/variances/luxe/frontoffice/shop" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">The_Boutique</a></li>
                                    <li><a href="/variances/luxe/frontoffice/product" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Item_Showcase</a></li>
                                    <li><a href="/variances/luxe/frontoffice/blog" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Journal_D_Excellence</a></li>
                                    <li><a href="/variances/luxe/frontoffice/about" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Our_Heritage</a></li>
                                    <li><a href="/variances/luxe/frontoffice/contact" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Concierge_Desk</a></li>
                                    <li><a href="/variances/luxe/frontoffice/account" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Elite_Membership</a></li>
                                    <li><a href="/variances/luxe/frontoffice/search" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Vault_Search</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="hover:text-white transition-colors flex items-center space-x-2">
                                <span>Administration</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-black border border-[#d4af37]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
                                <ul className="space-y-3 font-serif italic text-sm">
                                    <li><a href="/variances/luxe/backoffice/dashboard" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Royal_Dashboard</a></li>
                                    <li><a href="/variances/luxe/backoffice/analytics" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Success_Metrics</a></li>
                                    <li><a href="/variances/luxe/backoffice/products" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Inventory_Vault</a></li>
                                    <li><a href="/variances/luxe/backoffice/orders" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Fulfillment_Logs</a></li>
                                    <li><a href="/variances/luxe/backoffice/marketing" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Campaign_Studio</a></li>
                                    <li><a href="/variances/luxe/backoffice/settings" className="block hover:text-[#d4af37] border-l border-transparent hover:border-[#d4af37] pl-3 transition-all">Estate_Config</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="p-2 hover:bg-[#d4af37]/10 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/1999/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                        <button className="p-2 hover:bg-[#d4af37]/10 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/1999/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
            <footer className="border-t border-[#d4af37]/10 bg-black py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
                    <div>
                        <div className="text-xl font-bold tracking-widest uppercase mb-6">Luxe.</div>
                        <p className="text-[#d4af37]/60 leading-relaxed uppercase tracking-tighter text-[10px]">Defining the pinnacle of luxury commerce. Exclusivity refined for the elite.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider">The_Maison</h4>
                        <ul className="space-y-2 text-[#d4af37]/60 uppercase text-[10px] tracking-widest">
                            <li><a href="/variances/luxe/frontoffice" className="hover:text-[#d4af37] transition-colors">Home_Salon</a></li>
                            <li><a href="/variances/luxe/frontoffice/shop" className="hover:text-[#d4af37] transition-colors">The_Gallery</a></li>
                            <li><a href="/variances/luxe/frontoffice/product" className="hover:text-[#d4af37] transition-colors">Masterpieces</a></li>
                            <li><a href="/variances/luxe/frontoffice/blog" className="hover:text-[#d4af37] transition-colors">The_Journal</a></li>
                            <li><a href="/variances/luxe/frontoffice/about" className="hover:text-[#d4af37] transition-colors">Heritage</a></li>
                            <li><a href="/variances/luxe/frontoffice/contact" className="hover:text-[#d4af37] transition-colors">Concierge</a></li>
                            <li><a href="/variances/luxe/frontoffice/account" className="hover:text-[#d4af37] transition-colors">The_Vault</a></li>
                            <li><a href="/variances/luxe/frontoffice/checkout" className="hover:text-[#d4af37] transition-colors">Acquisition</a></li>
                            <li><a href="/variances/luxe/frontoffice/policy" className="hover:text-[#d4af37] transition-colors">Terms</a></li>
                            <li><a href="/variances/luxe/frontoffice/search" className="hover:text-[#d4af37] transition-colors">Search</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Administration</h4>
                        <ul className="space-y-2 text-[#d4af37]/60 uppercase text-[10px] tracking-widest">
                            <li><a href="/variances/luxe/backoffice/dashboard" className="hover:text-[#d4af37] transition-colors">Dashboard</a></li>
                            <li><a href="/variances/luxe/backoffice/analytics" className="hover:text-[#d4af37] transition-colors">Insights</a></li>
                            <li><a href="/variances/luxe/backoffice/products" className="hover:text-[#d4af37] transition-colors">Inventory</a></li>
                            <li><a href="/variances/luxe/backoffice/orders" className="hover:text-[#d4af37] transition-colors">Orders</a></li>
                            <li><a href="/variances/luxe/backoffice/marketing" className="hover:text-[#d4af37] transition-colors">Campaigns</a></li>
                            <li><a href="/variances/luxe/backoffice/localization" className="hover:text-[#d4af37] transition-colors">Global</a></li>
                            <li><a href="/variances/luxe/backoffice/settings" className="hover:text-[#d4af37] transition-colors">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
