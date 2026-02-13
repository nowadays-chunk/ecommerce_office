"use client";

import React from 'react';

export default function GlintOrderManagement() {
    const rituals = [
        { id: 'GL-ORD-4402', muse: 'Isabella Grace', energy: '$1,240', status: 'Radiating' },
        { id: 'GL-ORD-4389', muse: 'Sophia Moon', energy: '$420', status: 'Synced' },
        { id: 'GL-ORD-4200', muse: 'Ava Light', energy: '$24,000', status: 'Refracted' },
    ];

    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#ff8fa3]/10 p-12 flex flex-col justify-between shadow-2xl relative">
                <div className="space-y-12">
                    <div className="w-16 h-px bg-[#ff8fa3] shadow-[0_0_20px_#ff8fa3] mb-8"></div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none">GL_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]/60">
                        <a href="/variances/glint/backoffice/dashboard" className="block opacity-40 hover:text-[#4a3a4a] transition-all">LUMEN_VIEW</a>
                        <a href="/variances/glint/backoffice/products" className="block opacity-40 hover:text-[#4a3a4a] transition-all">AURA_VAULT</a>
                        <a href="#" className="block text-[#4a3a4a] border-b border-[#ff8fa3] pb-2">RITUAL_LOGS</a>
                        <a href="#" className="block opacity-40 hover:text-[#4a3a4a] transition-all">MEMBER_REFRACTION</a>
                        <a href="#" className="block opacity-40 hover:text-[#4a3a4a] transition-all">SHIMMER_STATS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.8em] italic">
                    LUMEN_SYNC_v8.0
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24 bg-[#fffafd] relative overflow-y-auto h-screen">
                <header className="flex justify-between items-end border-b border-[#ff8fa3]/20 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/60">LOGISTICS_OVERSIGHT // RITUAL_SYNC_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic text-[#4a3a4a]">THE_RITUAL_LOGS.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#4a3a4a] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:bg-[#ff8fa3] transition-all shadow-2xl">LUMEN_MANIFEST</button>
                </header>

                <section className="bg-white/60 backdrop-blur-3xl p-20 rounded-[5rem] shadow-2xl border border-[#ff8fa3]/20 space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]/40">
                        <div className="space-x-12">
                            <button className="text-[#4a3a4a] border-b border-[#ff8fa3] pb-1">ALL_RITUALS</button>
                            <button className="hover:text-[#4a3a4a] transition-colors">RADIATING</button>
                            <button className="hover:text-[#4a3a4a] transition-colors">REFRACTED</button>
                        </div>
                        <div className="animate-pulse italic">SYNCING_LOGISTICS_AURA...</div>
                    </div>

                    <table className="w-full text-left border-collapse border-separate border-spacing-y-6">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest opacity-40">
                                <th className="px-10 pb-6">SYNC_ID</th>
                                <th className="px-10 pb-6">MUSE_ENTITY</th>
                                <th className="px-10 pb-6">LUMEN_ENERGY</th>
                                <th className="px-10 pb-6">AURA_STATUS</th>
                                <th className="px-10 pb-6 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase text-[#4a3a4a]">
                            {rituals.map((r) => (
                                <tr key={r.id} className="bg-white/40 hover:bg-[#ff8fa3]/10 transition-colors cursor-pointer group">
                                    <td className="p-10 rounded-l-[4rem]">#{r.id}</td>
                                    <td className="p-10">{r.muse}</td>
                                    <td className="p-10">{r.energy}</td>
                                    <td className="p-10 text-[#ff8fa3] group-hover:animate-pulse">{r.status}</td>
                                    <td className="p-10 rounded-r-[4rem] text-right">
                                        <button className="text-xl border border-[#ff8fa3] px-8 py-2 rounded-full hover:bg-[#ff8fa3] hover:text-white transition-all">VIEW_AURA</button>
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
