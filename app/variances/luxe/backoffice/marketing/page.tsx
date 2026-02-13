"use client";

import React from 'react';

export default function LuxeMarketing() {
    const campaigns = [
        { id: 'LX-MKT-101', code: 'VANDERBILT_ELITE', reward: 'Private_Viewing', status: 'Active' },
        { id: 'LX-MKT-102', code: 'HERITAGE_GIFT', reward: 'Comimentary_Scarf', status: 'Scheduled' },
        { id: 'LX-MKT-103', code: 'ABSOLUTE_ACCESS', reward: 'Priority_Allocation', status: 'Paused' },
    ];

    return (
        <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] font-serif flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-black/5 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <h2 className="text-3xl font-light italic uppercase tracking-tighter">LUXE_ADMIN.</h2>
                    <nav className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
                        <a href="/variances/luxe/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-opacity">01_OVERSIGHT</a>
                        <a href="/variances/luxe/backoffice/products" className="block opacity-40 hover:opacity-100 transition-opacity">02_COLLECTIONS</a>
                        <a href="/variances/luxe/backoffice/orders" className="block opacity-40 hover:opacity-100 transition-opacity">03_ACQUISITIONS</a>
                        <a href="#" className="block text-[#d4af37]">04_PROMOTIONS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">05_ARCHIVE</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-widest italic">
                    V8.01_SECURE_NODE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b border-black/5 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] italic">PROMOTION_OVERSIGHT // {new Date().getFullYear()}</p>
                        <h1 className="text-6xl font-light italic tracking-tighter uppercase leading-none">THE_PRIVATE_INVITATIONS.</h1>
                    </div>
                    <button className="px-12 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#d4af37] transition-all">GENERATE_ELITE_CODE</button>
                </header>

                <section className="bg-white p-16 border border-black/5 space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
                        <div className="space-x-8">
                            <button className="text-black border-b border-black">ALL_CAMPAIGNS</button>
                            <button>ACTIVE_INVITES</button>
                            <button>SCARCITY_LOGS</button>
                        </div>
                        <div>SEARCH_ELITE_CODES.</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b border-black/5">
                                <th className="pb-6">INVITE_ID</th>
                                <th className="pb-6">ACCESS_CODE</th>
                                <th className="pb-6">REWARD_TIER</th>
                                <th className="pb-6">STATUS</th>
                                <th className="pb-6 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic">
                            {campaigns.map((c) => (
                                <tr key={c.id} className="border-b border-black/5 group hover:bg-[#fcfcfc]">
                                    <td className="py-8">#{c.id}</td>
                                    <td className="py-8 font-black tracking-widest uppercase text-[12px]">{c.code}</td>
                                    <td className="py-8 underline decoration-black/10">{c.reward}</td>
                                    <td className="py-8 text-[12px] font-black uppercase tracking-widest text-[#d4af37]">{c.status}</td>
                                    <td className="py-8 text-right space-x-6">
                                        <button className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-6 py-2 hover:bg-black hover:text-white transition-all">EDIT_INVITE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
