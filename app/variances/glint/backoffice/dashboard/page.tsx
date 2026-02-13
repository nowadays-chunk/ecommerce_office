"use client";

import React from 'react';

export default function GlintAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#fffcf9] text-[#1a1a1a] font-serif flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#d4af37]/20 p-12 flex flex-col justify-between shadow-sm">
                <div className="space-y-16">
                    <div className="text-4xl font-light tracking-[0.2em] text-[#d4af37] uppercase">Glint.</div>
                    <nav className="space-y-10 text-[10px] font-black uppercase tracking-[0.4em]">
                        <a href="#" className="block text-[#d4af37] border-l-2 border-[#d4af37] pl-6">The_Radiance</a>
                        <a href="#" className="block opacity-30 hover:opacity-100 hover:text-[#d4af37] transition-all">Vault_Stock</a>
                        <a href="#" className="block opacity-30 hover:opacity-100 hover:text-[#d4af37] transition-all">Gem_Circulation</a>
                        <a href="#" className="block opacity-30 hover:opacity-100 hover:text-[#d4af37] transition-all">Elite_Circle</a>
                        <a href="#" className="block opacity-30 hover:opacity-100 hover:text-[#d4af37] transition-all">System_Polishing</a>
                    </nav>
                </div>
                <div className="text-[10px] font-medium opacity-20 uppercase tracking-[0.8em] italic">
                    MAISON_v9.0_CORE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-center border-b border-[#d4af37]/10 pb-16">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#d4af37]">Maison Oversight // {new Date().toLocaleDateString()}</p>
                        <h1 className="text-6xl font-light tracking-tighter uppercase leading-none italic">Lustre_Metrics.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#1a1a1a] text-[#d4af37] text-xs font-black uppercase tracking-[0.3em] hover:bg-[#d4af37] hover:text-white transition-all shadow-2xl">Unveil_Collection</button>
                </header>

                <div className="grid grid-cols-3 gap-12">
                    <div className="bg-white p-12 border border-[#d4af37]/10 space-y-8 relative group overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full -translate-x-8 -translate-y-8"></div>
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Gem Revenue</p>
                        <h3 className="text-5xl font-light tracking-widest italic text-[#1a1a1a]">€2.8M</h3>
                        <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">+18.5% Net Brilliance</p>
                    </div>
                    <div className="bg-white p-12 border border-[#d4af37]/10 space-y-8 shadow-sm">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Carat Volume</p>
                        <h3 className="text-5xl font-light tracking-widest italic text-[#1a1a1a]">840.2</h3>
                        <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">Certified Selection</p>
                    </div>
                    <div className="bg-white p-12 border border-[#d4af37]/10 space-y-8 shadow-sm">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">VIP Conversions</p>
                        <h3 className="text-5xl font-light tracking-widest italic text-[#1a1a1a]">92%</h3>
                        <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">The Elite Tier</p>
                    </div>
                </div>

                <section className="bg-white p-20 border border-[#d4af37]/10 space-y-16 shadow-2xl">
                    <h2 className="text-3xl font-light italic uppercase tracking-widest text-[#d4af37]">Recent_Luxury_Sales.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1a1a1a]/40 border-b border-[#d4af37]/10">
                                <th className="pb-8">Maison_ID</th>
                                <th className="pb-8">Client</th>
                                <th className="pb-8">Collection</th>
                                <th className="pb-8">Brilliance_Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic tracking-tight">
                            <tr className="border-b border-[#d4af37]/5 group hover:bg-[#d4af37]/5 transition-colors">
                                <td className="py-10 text-[#d4af37]">#GL-9902</td>
                                <td className="py-10">Lady Catherine D.</td>
                                <td className="py-10 uppercase tracking-widest text-sm font-bold">Moonlight_Tear_Pearl</td>
                                <td className="py-10"><span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-4 py-2">Acquired</span></td>
                            </tr>
                            <tr className="border-b border-[#d4af37]/5 group hover:bg-[#d4af37]/5 transition-colors">
                                <td className="py-10 text-[#d4af37]">#GL-9884</td>
                                <td className="py-10">Marquis de L.</td>
                                <td className="py-10 uppercase tracking-widest text-sm font-bold">Solar_Eclipse_Diamond</td>
                                <td className="py-10"><span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-4 py-2">In_Transit</span></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
