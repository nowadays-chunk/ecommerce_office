"use client";

import React from 'react';

export default function TechMarketing() {
    const streams = [
        { id: 'TH-MKT-01', code: 'QUANTUM_SYNC_8', reward: '45% Load Reduction', status: 'Uplink' },
        { id: 'TH-MKT-02', code: 'SILICON_VOICE', reward: 'Free_Mesh_Unit', status: 'Syncing' },
        { id: 'TH-MKT-03', code: 'NEURAL_ELITE', reward: 'Admin_Level_Access', status: 'Encrypted' },
    ];

    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black/40 backdrop-blur-3xl border-r border-[#00f2ff]/20 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-16 h-16 border-2 border-[#00f2ff] relative flex items-center justify-center group overflow-hidden">
                        <div className="absolute inset-0 bg-[#00f2ff]/20 animate-pulse"></div>
                        <span className="relative font-black text-2xl text-white">CORE</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase skew-x-[-12deg] text-white">SYS_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-[0.3em]">
                        <a href="/variances/tech/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">DATA_FEED</a>
                        <a href="/variances/tech/backoffice/products" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">HARDWARE_BANK</a>
                        <a href="/variances/tech/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">STREAM_LOGS</a>
                        <a href="#" className="block text-white border-l-4 border-[#00f2ff] pl-4">PROMO_SYNC</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">SYSTEM_LOGS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-[0.8em] animate-pulse">
                    NEURAL_OS_v9.01_STABLE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24 h-screen overflow-y-auto">
                <header className="flex justify-between items-end border-b border-[#00f2ff]/20 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">CAMPAIGN_OVERSIGHT // GRID_V9.01</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none text-white skew-x-[-12deg]">DATA_PROMO_STREAMS.</h1>
                    </div>
                    <button className="px-12 py-5 bg-black border border-[#00f2ff] text-[#00f2ff] text-xl font-black uppercase tracking-tighter hover:shadow-[0_0_50px_#00f2ff] transition-all">INITIATE_LOAD_SYNC</button>
                </header>

                <section className="bg-black/60 border border-[#00f2ff]/20 p-16 space-y-12 shadow-[0_0_100px_rgba(0,242,255,0.05)]">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40">
                        <div className="space-x-12">
                            <button className="text-white border-b border-[#00f2ff] pb-1">ALL_PROMO_STREAMS</button>
                            <button className="hover:text-white transition-colors">ACTIVE_UPLINKS</button>
                            <button className="hover:text-white transition-colors">ARCHIVE_LOGS</button>
                        </div>
                        <div className="animate-pulse">OPTIMIZING_PROMO_STREAMS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest text-[#00f2ff]/40 border-b border-[#00f2ff]/10">
                                <th className="pb-8 px-4">STREAM_ID</th>
                                <th className="pb-8 px-4">DECRYPT_CODE</th>
                                <th className="pb-8 px-4">REWARD_LOAD</th>
                                <th className="pb-8 px-4">SYNC_STATUS</th>
                                <th className="pb-8 px-4 text-right">SYNC_OPS</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black uppercase tracking-tighter text-white/80">
                            {streams.map((s) => (
                                <tr key={s.id} className="border-b border-[#00f2ff]/5 group hover:bg-[#00f2ff]/5 transition-colors">
                                    <td className="py-10 px-4">#{s.id}</td>
                                    <td className="py-10 px-4 text-[#00f2ff] font-bold tracking-widest uppercase">{s.code}</td>
                                    <td className="py-10 px-4 opacity-100">{s.reward}</td>
                                    <td className="py-10 px-4 text-xs tracking-widest text-[#00f2ff] animate-pulse">{s.status}</td>
                                    <td className="py-10 px-4 text-right">
                                        <button className="text-sm font-black border border-[#00f2ff]/40 px-6 py-2 hover:bg-[#00f2ff] hover:text-black transition-all">DECRYPT</button>
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
