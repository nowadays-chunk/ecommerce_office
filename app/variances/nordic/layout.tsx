import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nörd - Minimalist Scandinavian Design & Furniture",
    description: "Honest design for better living. Minimalist furniture and home goods crafted with precision and soul in Stockholm.",
    keywords: ["nordic design", "minimalist furniture", "scandinavian style", "interior design", "home goods"],
};

export default function NordicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#fafafa] text-[#2c2c2c] font-sans selection:bg-[#2c2c2c] selection:text-white">
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
                    <div className="text-xl font-medium tracking-tight">Nörd.</div>
                    <div className="hidden md:flex items-center space-x-12 text-[10px] items-center space-x-12 text-sm font-medium tracking-wide">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="text-black/40 hover:text-black transition-colors flex items-center space-x-2">
                                <span>Catalog</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-white border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                                <ul className="space-y-3 text-xs tracking-wide">
                                    <li><a href="/variances/nordic/frontoffice" className="block text-black/40 hover:text-black transition-all">At_Home</a></li>
                                    <li><a href="/variances/nordic/frontoffice/shop" className="block text-black/40 hover:text-black transition-all">Store_View</a></li>
                                    <li><a href="/variances/nordic/frontoffice/product" className="block text-black/40 hover:text-black transition-all">Product_Specs</a></li>
                                    <li><a href="/variances/nordic/frontoffice/blog" className="block text-black/40 hover:text-black transition-all">Stories</a></li>
                                    <li><a href="/variances/nordic/frontoffice/about" className="block text-black/40 hover:text-black transition-all">Philosophy</a></li>
                                    <li><a href="/variances/nordic/frontoffice/contact" className="block text-black/40 hover:text-black transition-all">Relations</a></li>
                                    <li><a href="/variances/nordic/frontoffice/account" className="block text-black/40 hover:text-black transition-all">Profile</a></li>
                                    <li><a href="/variances/nordic/frontoffice/search" className="block text-black/40 hover:text-black transition-all">Locate</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="text-black/40 hover:text-black transition-colors flex items-center space-x-2">
                                <span>Workspace</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-white border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                                <ul className="space-y-3 text-xs tracking-wide">
                                    <li><a href="/variances/nordic/backoffice/dashboard" className="block text-black/40 hover:text-black transition-all">Overview</a></li>
                                    <li><a href="/variances/nordic/backoffice/analytics" className="block text-black/40 hover:text-black transition-all">Metrics</a></li>
                                    <li><a href="/variances/nordic/backoffice/products" className="block text-black/40 hover:text-black transition-all">Inventory</a></li>
                                    <li><a href="/variances/nordic/backoffice/orders" className="block text-black/40 hover:text-black transition-all">Fulfillment</a></li>
                                    <li><a href="/variances/nordic/backoffice/marketing" className="block text-black/40 hover:text-black transition-all">Campaigns</a></li>
                                    <li><a href="/variances/nordic/backoffice/settings" className="block text-black/40 hover:text-black transition-all">Interface</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="text-black/40 hover:text-black transition-colors">About</a>
                    </div>
                    <div className="flex items-center space-x-8">
                        <button className="text-black/40 hover:text-black transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                        <button className="text-black/40 hover:text-black transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <main className="max-w-6xl mx-auto px-8">{children}</main>
            <footer className="border-t border-gray-100 py-24 mt-20 bg-white">
                <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-12 text-sm font-medium">
                    <div className="space-y-6 col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold tracking-tighter">Nörd.</div>
                        <p className="text-black/40 max-w-xs leading-relaxed">Honest design for better living. Minimalist furniture crafted with precision and soul in Stockholm.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-black/20 font-bold">The_Catalog</h4>
                        <ul className="space-y-2 text-black/60">
                            <li><a href="/variances/nordic/frontoffice" className="hover:text-black">Home</a></li>
                            <li><a href="/variances/nordic/frontoffice/shop" className="hover:text-black">Shop_All</a></li>
                            <li><a href="/variances/nordic/frontoffice/product" className="hover:text-black">Spec_Sheet</a></li>
                            <li><a href="/variances/nordic/frontoffice/blog" className="hover:text-black">Stories</a></li>
                            <li><a href="/variances/nordic/frontoffice/about" className="hover:text-black">About</a></li>
                            <li><a href="/variances/nordic/frontoffice/contact" className="hover:text-black">Contact</a></li>
                            <li><a href="/variances/nordic/frontoffice/account" className="hover:text-black">Account</a></li>
                            <li><a href="/variances/nordic/frontoffice/checkout" className="hover:text-black">Checkout</a></li>
                            <li><a href="/variances/nordic/frontoffice/policy" className="hover:text-black">Policy</a></li>
                            <li><a href="/variances/nordic/frontoffice/search" className="hover:text-black">Search</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-black/20 font-bold">The_Workspace</h4>
                        <ul className="space-y-2 text-black/60">
                            <li><a href="/variances/nordic/backoffice/dashboard" className="hover:text-black">Dashboard</a></li>
                            <li><a href="/variances/nordic/backoffice/analytics" className="hover:text-black">Analytics</a></li>
                            <li><a href="/variances/nordic/backoffice/products" className="hover:text-black">Inventory</a></li>
                            <li><a href="/variances/nordic/backoffice/orders" className="hover:text-black">Orders</a></li>
                            <li><a href="/variances/nordic/backoffice/marketing" className="hover:text-black">Marketing</a></li>
                            <li><a href="/variances/nordic/backoffice/localization" className="hover:text-black">Localization</a></li>
                            <li><a href="/variances/nordic/backoffice/settings" className="hover:text-black">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
