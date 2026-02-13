"use client";

import React from 'react';

export default function TechSettings() {
    const nodes = [
        { id: 'TH-ADM-01', identity: 'Core_Prime', role: 'SYSTEM_OVERLORD', level: 'Level_9_Omega' },
        { id: 'TH-ADM-08', identity: 'Data_Ghost', role: 'SILICON_VOICE', level: 'Level_4_Beta' },
        { id: 'TH-ADM-12', identity: 'Neural_Shadow', role: 'MESH_ENVOY', level: 'Level_2_Delta' },
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
                        <a href="/variances/tech/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">PROMO_SYNC</a>
                        <a href="/variances/tech/backoffice/analytics" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">DATA_ANALYTICS</a>
                        <a href="#" className="block text-white border-l-4 border-[#00f2ff] pl-4">SYSTEM_CONFIG</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">CORE_CONFIG // SYSTEM_VAULT_v9.01</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none text-white skew-x-[-12deg]">NODE_CONTROL.</h1>
                    </div>
                    <button className="px-12 py-5 border border-[#00f2ff] text-[#00f2ff] text-xl font-black uppercase tracking-tighter hover:bg-[#00f2ff] hover:text-black transition-all">UPLINK_NEW_CORE</button>
                </header>

                <section className="bg-black/60 border border-[#00f2ff]/20 p-16 space-y-12 shadow-[0_0_100px_rgba(0,242,255,0.05)]">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40">
                        <div className="space-x-12">
                            <button className="text-white border-b border-[#00f2ff] pb-1">ALL_NODES</button>
                            <button className="hover:text-white transition-colors">ACCESS_LEVELS</button>
                            <button className="hover:text-white transition-colors">SECURITY_LOGS</button>
                        </div>
                        <div className="animate-pulse">DECRYPTING_IDENTITY_STREAMS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest text-[#00f2ff]/40 border-b border-[#00f2ff]/10">
                                <th className="pb-8 px-4">NODE_ID</th>
                                <th className="pb-8 px-4">IDENTITY_STRING</th>
                                <th className="pb-8 px-4">NEURAL_ROLE</th>
                                <th className="pb-8 px-4">ACCESS_LEVEL</th>
                                <th className="pb-8 px-4 text-right">SYSTEM_OPS</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black uppercase tracking-tighter text-white/80">
                            {nodes.map((n) => (
                                <tr key={n.id} className="border-b border-[#00f2ff]/5 group hover:bg-[#00f2ff]/5 transition-colors">
                                    <td className="py-10 px-4">#{n.id}</td>
                                    <td className="py-10 px-4 text-[#00f2ff]">{n.identity}</td>
                                    <td className="py-10 px-4 opacity-100 underline decoration-[#00f2ff]/20">{n.role}</td>
                                    <td className="py-10 px-4 text-[14px] tracking-widest text-[#b026ff] animate-shimmer">{n.level}</td>
                                    <td className="py-10 px-4 text-right">
                                        <button className="text-sm font-black border border-[#ff3e3e]/40 text-[#ff3e3e] px-6 py-2 hover:bg-[#ff3e3e] hover:text-black transition-all">DISCONNECT</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="bg-black/80 border-2 border-[#b026ff] p-16 space-y-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b026ff]/5 to-[#00f2ff]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-4xl font-black tracking-tighter uppercase leading-none skew-x-[-12deg] text-white">QUANTUM_SECURITY_ACTIVE.</h3>
                    <p className="text-sm font-black opacity-80 leading-relaxed text-[#b026ff] tracking-widest italic">
                        SYSTEM INTEGRITY IS MAINTAINED BY NEURAL_OS v9.01. ALL ADMINISTRATIVE ACTIONS ARE LOGGED TO THE PERMANENT SILICON LEDGER. ATTEMPTS TO BYPASS ACCESS PROTOCOLS WILL RESULT IN IMMEDIATE NODE TERMINATION AND DATA ENCRYPTION.
                    </p>
                </div>
            </main>
        </div>
    );
}
