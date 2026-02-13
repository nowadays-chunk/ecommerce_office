"use client";

import React from 'react';

export default function TechLocalization() {
    const nodes = [
        { id: 'TH-REG-01', locus: 'EURO_NODE_v1', spectral: 'EUR_DATA', stability: '99.9%' },
        { id: 'TH-REG-02', locus: 'US_MEGA_NODE', spectral: 'USD_DATA', stability: '94.2%' },
        { id: 'TH-REG-03', locus: 'ASIA_GRID_X', spectral: 'JPY_DATA', stability: 'SYNCHRONIZING' },
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
                        <a href="/variances/tech/backoffice/settings" className="block opacity-40 hover:opacity-100 hover:text-white transition-all">SYSTEM_CONFIG</a>
                        <a href="#" className="block text-white border-l-4 border-[#00f2ff] pl-4">SPECTRAL_GATEWAY</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">SPECTRAL_OVERSIGHT // QUANTUM_REGION_v1</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none text-white skew-x-[-12deg]">THE_SPECTRAL_SYNC.</h1>
                    </div>
                    <button className="px-12 py-5 border border-[#00f2ff] text-[#00f2ff] text-xl font-black uppercase tracking-tighter hover:shadow-[0_0_50px_#00f2ff] transition-all">CONNECT_NEW_SPECTER</button>
                </header>

                <section className="bg-black/60 border border-[#b026ff]/20 p-16 space-y-12 shadow-[0_0_100px_rgba(176,38,255,0.05)]">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 border-b border-[#00f2ff]/10 pb-4">
                        <div className="space-x-12">
                            <button className="text-white border-b border-[#00f2ff] pb-1">CURRENCY_STREAMS</button>
                            <button className="hover:text-white">LANGUAGE_DECODES</button>
                            <button className="hover:text-white">REGION_LOCKS</button>
                        </div>
                        <div className="animate-pulse">DECRYPTING_SPECTRAL_NODES...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest text-[#00f2ff]/40 border-b border-[#00f2ff]/10">
                                <th className="pb-8 px-4">NODE_ID</th>
                                <th className="pb-8 px-4">REGION_LOCUS</th>
                                <th className="pb-8 px-4">SPECTRAL_TOKEN</th>
                                <th className="pb-8 px-4">VAL_STABILITY</th>
                                <th className="pb-8 px-4 text-right">SYSOPS</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black uppercase tracking-tighter text-white/80">
                            {nodes.map((n) => (
                                <tr key={n.id} className="border-b border-[#00f2ff]/5 group hover:bg-[#00f2ff]/5 transition-colors">
                                    <td className="py-10 px-4">#{n.id}</td>
                                    <td className="py-10 px-4 text-[#00f2ff]">{n.locus}</td>
                                    <td className="py-10 px-4 text-[#b026ff] animate-pulse">{n.spectral}</td>
                                    <td className="py-10 px-4 opacity-40 italic">{n.stability}</td>
                                    <td className="py-10 px-4 text-right">
                                        <button className="text-sm font-black border border-[#00f2ff]/40 text-[#00f2ff] px-6 py-2 hover:bg-[#00f2ff] hover:text-black transition-all">SYNC_NODE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-12 skew-x-[-4deg]">
                    <div className="bg-black/60 border-2 border-[#00f2ff]/40 p-12 space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-[#00f2ff]/60">CORE_SYSTEM_DIALECT</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-black text-white">Spectral_UTF8_XP</p>
                            <button className="text-[#b026ff] text-sm font-black uppercase tracking-tighter hover:text-white transition-colors">PATCH_CODE</button>
                        </div>
                    </div>
                    <div className="bg-black/60 border-2 border-[#b026ff]/40 p-12 space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-[#b026ff]/60">QUANTUM_FX_BALANCER</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-black text-white">STABLE_FLOW</p>
                            <div className="w-16 h-4 bg-[#00f2ff] animate-pulse shadow-[0_0_20px_#00f2ff]"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
