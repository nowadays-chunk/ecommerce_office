"use client";

import React from 'react';

export default function NordicMarketing() {
    const invites = [
        { id: 'NR-MKT-101', code: 'STUDIO_LAUNCH_10', reward: '10% Studio Discount', status: 'Active' },
        { id: 'NR-MKT-102', code: 'MATERIAL_OPEN', reward: 'Early_Material_Access', status: 'Scheduled' },
        { id: 'NR-MKT-103', code: 'LOCAL_CRAFT', reward: 'Free_Shipping_Local', status: 'Paused' },
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
                        <a href="#" className="block text-[#2d2d2d]">PROMO_STUDIO</a>
                        <a href="#" className="block hover:text-[#2d2d2d] transition-colors">LOG_ARCHIVE</a>
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
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">PROMOTION_VAULT // STUDIO_SYNC_LIVE</p>
                        <h1 className="text-6xl font-light uppercase tracking-tight leading-none">THE_PROMO_LEDGER.</h1>
                    </div>
                    <button className="px-12 py-5 border-2 border-[#2d2d2d] text-[#2d2d2d] text-[10px] font-bold uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-white transition-all">GENERATE_STUDIO_CODE</button>
                </header>

                <section className="space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-40 px-4">
                        <div className="space-x-12">
                            <button className="text-[#2d2d2d] border-b border-[#2d2d2d]">ALL_INVENTORY</button>
                            <button>FURNITURE</button>
                            <button>STUDIO_GOODS</button>
                            <button>MATERIALS</button>
                        </div>
                        <div className="italic">FILTER_BY_CAMPAIGN...</div>
                    </div>

                    <table className="w-full text-left border-collapse border border-[#2d2d2d]/10">
                        <thead>
                            <tr className="text-[10px] font-bold uppercase tracking-widest opacity-40 bg-[#fafafa] border-b border-[#2d2d2d]/10">
                                <th className="p-8">PROMO_ID</th>
                                <th className="p-8">ACCESS_CODE</th>
                                <th className="p-8">STUDIO_REWARD</th>
                                <th className="p-8">STATUS_SYNC</th>
                                <th className="p-8 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic">
                            {invites.map((i) => (
                                <tr key={i.id} className="border-b border-[#2d2d2d]/10 hover:bg-[#fafafa] transition-colors">
                                    <td className="p-8 uppercase">#{i.id}</td>
                                    <td className="p-8 font-bold text-[14px] tracking-widest">{i.code}</td>
                                    <td className="p-8 uppercase">{i.reward}</td>
                                    <td className="p-8 uppercase opacity-40 text-sm">{i.status}</td>
                                    <td className="p-8 text-right">
                                        <button className="text-[10px] font-bold uppercase tracking-widest hover:underline">REFINE</button>
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
