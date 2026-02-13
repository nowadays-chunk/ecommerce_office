"use client";

import React from 'react';

export default function TechProductManagement() {
    const hardware = [
        { id: 'TH-001', name: 'Neural Link v9 Core', price: '$12,400', stock: 42, status: 'STABLE' },
        { id: 'TH-088', name: 'Silicon Mesh Chassis', price: '$4,200', stock: 124, status: 'UPLINK' },
        { id: 'TH-124', name: 'Quantum Sync Module', price: '$45,000', stock: 12, status: 'ENCRYPTED' },
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
                        <a href="#" className="block text-white border-l-4 border-[#00f2ff] pl-4">HARDWARE_BANK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">STREAM_LOGS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">NODE_CONFIG</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">HARDWARE_VAULT_OVERSIGHT // GRID_V3</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none text-white skew-x-[-12deg]">SILICON_INVENTORY.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#00f2ff] text-black text-xl font-black uppercase tracking-tighter hover:shadow-[0_0_50px_#00f2ff] transition-all">UPLOAD_NEW_SPEC</button>
                </header>

                <section className="bg-black/60 border border-[#00f2ff]/20 p-16 space-y-12 shadow-[0_0_100px_rgba(0,242,255,0.05)]">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40">
                        <div className="space-x-12">
                            <button className="text-white border-b border-[#00f2ff] pb-1">ALL_HARDWARE</button>
                            <button className="hover:text-white transition-colors">ACTIVE_NODES</button>
                            <button className="hover:text-white transition-colors">ARCHIVE_STREAM</button>
                        </div>
                        <div className="animate-pulse">DECRYPTING_SEARCH_PARAM...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest text-[#00f2ff]/40 border-b border-[#00f2ff]/10">
                                <th className="pb-8 px-4">SPEC_ID</th>
                                <th className="pb-8 px-4">HARDWARE_DESIGNATION</th>
                                <th className="pb-8 px-4">VALUATION</th>
                                <th className="pb-8 px-4">STOCK_COUNT</th>
                                <th className="pb-8 px-4">STATUS</th>
                                <th className="pb-8 px-4 text-right">SYNC_OPS</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black uppercase tracking-tighter text-white/80">
                            {hardware.map((item) => (
                                <tr key={item.id} className="border-b border-[#00f2ff]/5 group hover:bg-[#00f2ff]/5 transition-colors">
                                    <td className="py-10 px-4">#{item.id}</td>
                                    <td className="py-10 px-4 text-[#00f2ff]">{item.name}</td>
                                    <td className="py-10 px-4 opacity-100">{item.price}</td>
                                    <td className="py-10 px-4">{item.stock}</td>
                                    <td className="py-10 px-4 text-xs tracking-widest opacity-40">{item.status}</td>
                                    <td className="py-10 px-4 text-right space-x-8">
                                        <button className="text-sm font-black border border-[#00f2ff]/30 px-6 py-2 hover:bg-[#00f2ff] hover:text-black transition-all">UPGRADE</button>
                                        <button className="text-sm font-black border border-red-900/40 text-red-900 px-6 py-2 hover:bg-red-900 hover:text-white transition-all">TERMINATE</button>
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
