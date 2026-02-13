"use client";

import React from 'react';

export default function NordicSettings() {
    const staff = [
        { id: 'NR-ADM-01', name: 'Lars Sorensen', role: 'Studio_Director', access: 'Total_Utility' },
        { id: 'NR-ADM-08', name: 'Mette Nielsen', role: 'Material_Curator', access: 'Inventory_Vault' },
        { id: 'NR-ADM-12', name: 'Anders Holm', role: 'Craft_Lead', access: 'Order_Flow' },
    ];

    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans flex">
            {/* Sidebar */}
            <aside className="w-80 border-r border-[#2d2d2d]/10 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-8 h-px bg-[#2d2d2d]/40"></div>
                    <h2 className="text-3xl font-light uppercase tracking-tight">STUDIO_OPS.</h2>
                    <nav className="space-y-8 text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 italic">
                        <a href="/variances/nordic/backoffice/dashboard" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">UTILITY_VIEW</a>
                        <a href="/variances/nordic/backoffice/products" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">MATERIAL_STOCK</a>
                        <a href="/variances/nordic/backoffice/orders" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">CRAFT_LOGS</a>
                        <a href="/variances/nordic/backoffice/marketing" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">PROMO_STUDIO</a>
                        <a href="/variances/nordic/backoffice/analytics" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">UTILITY_STATS</a>
                        <a href="#" className="block text-[#2d2d2d]">STUDIO_CONFIG</a>
                    </nav>
                </div>
                <div className="text-[10px] font-bold opacity-20 uppercase tracking-[0.4em] italic">
                    STUDIO_EFFICIENCY_v1.01
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b border-[#2d2d2d]/10 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">CORE_CONFIG // STUDIO_SYNC_LIVE</p>
                        <h1 className="text-6xl font-light uppercase tracking-tight leading-none">THE_STUDIO_CONFIG.</h1>
                    </div>
                    <button className="px-12 py-5 border-2 border-[#2d2d2d] text-[#2d2d2d] text-[10px] font-bold uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-white transition-all">INVITE_MEMBER</button>
                </header>

                <section className="bg-white border border-[#2d2d2d]/10 p-16 space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40">
                        <div className="space-x-12">
                            <button className="text-[#2d2d2d] border-b border-[#2d2d2d] pb-1">ALL_STAFF</button>
                            <button>PERMISSION_LEVELS</button>
                            <button>SECURITY_LOGS</button>
                        </div>
                        <div>SCANNING_STAFF_IDS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-bold uppercase tracking-widest opacity-40 border-b border-[#2d2d2d]/10">
                                <th className="pb-8">STAFF_ID</th>
                                <th className="pb-8">MEMBER_NAME</th>
                                <th className="pb-8">STUDIO_ROLE</th>
                                <th className="pb-8">ACCESS_UTILITY</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light">
                            {staff.map((s) => (
                                <tr key={s.id} className="border-b border-[#2d2d2d]/5 group hover:bg-[#f9f9f9] transition-colors">
                                    <td className="py-10">#{s.id}</td>
                                    <td className="py-10">{s.name}</td>
                                    <td className="py-10 text-[12px] font-bold uppercase italic">{s.role}</td>
                                    <td className="py-10 opacity-40">{s.access}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-[10px] font-bold border border-[#2d2d2d]/20 px-6 py-2 hover:bg-[#2d2d2d] hover:text-white transition-all">REVOKE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="border border-[#2d2d2d]/10 p-16 space-y-8 italic">
                    <h3 className="text-3xl font-light uppercase tracking-tight">FUNCTIONAL_INTEGRITY.</h3>
                    <p className="text-sm font-bold opacity-40 leading-relaxed uppercase tracking-widest">
                        SYSTEM PARAMETERS ARE DESIGNED FOR MAXIMUM UTILITY. ANY MODIFICATIONS TO THE CORE STUDIO ENGINE MUST BE SIGNED OFF BY THE STUDIO DIRECTOR. ALL ACCESS IS MONITORED TO ENSURE PEAK EFFICIENCY.
                    </p>
                </div>
            </main>
        </div>
    );
}
