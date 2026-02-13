import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Glint Boutique - Radiant Beauty & Wellness",
    description: "Discover your inner glow with Glint. Premium beauty formulas and ethical wellness products for the modern soul.",
    keywords: ["beauty", "wellness", "skincare", "luxury boutique", "radiance"],
};

export default function GlintLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#fffafa] text-[#5c4033] font-serif selection:bg-[#fbcfe8] selection:text-[#5c4033]">
            <nav className="bg-white/60 backdrop-blur-xl sticky top-0 z-50 border-b border-[#fbcfe8]/20">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-3xl font-light tracking-[0.2em] uppercase italic text-[#fb7185]">Glint.</div>
                    <div className="hidden lg:flex items-center space-x-12 text-[10px] uppercase tracking-[0.3em] font-medium text-[#5c4033]/60">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="hover:text-[#fb7185] transition-colors flex items-center space-x-2">
                                <span>The_Boutique</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-white/80 backdrop-blur-xl border border-[#fb7185]/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_20px_40px_rgba(251,113,133,0.1)]">
                                <ul className="space-y-3">
                                    <li><a href="/variances/glint/frontoffice" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Maison_Home</a></li>
                                    <li><a href="/variances/glint/frontoffice/shop" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Collections</a></li>
                                    <li><a href="/variances/glint/frontoffice/product" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Essence_Detail</a></li>
                                    <li><a href="/variances/glint/frontoffice/blog" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">The_Glint_Edit</a></li>
                                    <li><a href="/variances/glint/frontoffice/about" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Our_Story</a></li>
                                    <li><a href="/variances/glint/frontoffice/contact" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Boutique_Care</a></li>
                                    <li><a href="/variances/glint/frontoffice/account" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Member_ID</a></li>
                                    <li><a href="/variances/glint/frontoffice/search" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Discover</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-20 flex items-center">
                            <button className="hover:text-[#fb7185] transition-colors flex items-center space-x-2">
                                <span>Atelier_Admin</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[80px] left-0 w-64 bg-white/80 backdrop-blur-xl border border-[#fb7185]/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_20px_40px_rgba(251,113,133,0.1)]">
                                <ul className="space-y-3">
                                    <li><a href="/variances/glint/backoffice/dashboard" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Insights</a></li>
                                    <li><a href="/variances/glint/backoffice/analytics" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Beauty_Metrics</a></li>
                                    <li><a href="/variances/glint/backoffice/products" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Vault_Registry</a></li>
                                    <li><a href="/variances/glint/backoffice/orders" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Client_Logs</a></li>
                                    <li><a href="/variances/glint/backoffice/marketing" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Aura_Campaigns</a></li>
                                    <li><a href="/variances/glint/backoffice/settings" className="block hover:text-[#fb7185] border-l border-transparent hover:border-[#fb7185] pl-3 transition-all">Maison_Config</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#fb7185] transition-colors">Rituals</a>
                    </div>
                    <div className="flex items-center space-x-8">
                        <button className="text-[#fb7185] hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                        <button className="text-[#fb7185] hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <main className="max-w-6xl mx-auto px-6">{children}</main>
            <footer className="bg-white py-32 border-t border-[#fbcfe8]/20 mt-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-16 text-sm font-light italic">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <h2 className="text-5xl font-light tracking-tighter text-[#fb7185]">GLOW <br /> FROM <br /> WITHIN.</h2>
                        <p className="text-lg opacity-60 max-w-sm">Premium formulas, ethical sourcing, and the science of radiance. Redefining high-end beauty for the modern soul.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[#fb7185] font-bold uppercase text-[10px] tracking-[0.3em]">The_Atelier</h4>
                        <ul className="space-y-2 opacity-70">
                            <li><a href="/variances/glint/frontoffice" className="hover:text-[#fb7185]">Maison_Glint</a></li>
                            <li><a href="/variances/glint/frontoffice/shop" className="hover:text-[#fb7185]">The_Collection</a></li>
                            <li><a href="/variances/glint/frontoffice/product" className="hover:text-[#fb7185]">L’Art_de_Vivre</a></li>
                            <li><a href="/variances/glint/frontoffice/blog" className="hover:text-[#fb7185]">Radiance_Chronicle</a></li>
                            <li><a href="/variances/glint/frontoffice/about" className="hover:text-[#fb7185]">Philosophy</a></li>
                            <li><a href="/variances/glint/frontoffice/contact" className="hover:text-[#fb7185]">Concierge</a></li>
                            <li><a href="/variances/glint/frontoffice/account" className="hover:text-[#fb7185]">Private_Cabinet</a></li>
                            <li><a href="/variances/glint/frontoffice/checkout" className="hover:text-[#fb7185]">Final_Selection</a></li>
                            <li><a href="/variances/glint/frontoffice/policy" className="hover:text-[#fb7185]">Ethics</a></li>
                            <li><a href="/variances/glint/frontoffice/search" className="hover:text-[#fb7185]">Discover</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[#fb7185] font-bold uppercase text-[10px] tracking-[0.3em]">Management</h4>
                        <ul className="space-y-2 opacity-70">
                            <li><a href="/variances/glint/backoffice/dashboard" className="hover:text-[#fb7185]">Terminal</a></li>
                            <li><a href="/variances/glint/backoffice/analytics" className="hover:text-[#fb7185]">Aesthetics_Data</a></li>
                            <li><a href="/variances/glint/backoffice/boutique" className="hover:text-[#fb7185]">Boutique_Inv</a></li>
                            <li><a href="/variances/glint/backoffice/orders" className="hover:text-[#fb7185]">Orders</a></li>
                            <li><a href="/variances/glint/backoffice/clients" className="hover:text-[#fb7185]">V.I.P_Access</a></li>
                            <li><a href="/variances/glint/backoffice/marketing" className="hover:text-[#fb7185]">Elegance_Engine</a></li>
                            <li><a href="/variances/glint/backoffice/localization" className="hover:text-[#fb7185]">World_Presence</a></li>
                            <li><a href="/variances/glint/backoffice/settings" className="hover:text-[#fb7185]">System_Mode</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
