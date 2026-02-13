"use client";

import React from 'react';

export default function ApexLocalization() {
    const missions = [
        { id: 'AP-REG-01', squad: 'Euro_Squad', token: 'EUR_XP', velocity: '99.9%' },
        { id: 'AP-REG-02', squad: 'Dollar_Unit', token: 'USD_XP', velocity: '94.8%' },
        { id: 'AP-REG-03', squad: 'Yen_Division', token: 'JPY_XP', velocity: 'SYNCING' },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black border-r-4 border-[#ff3e3e]/20 p-12 flex flex-col justify-between shadow-[0_0_50px_rgba(255,62,62,0.1)] relative z-20">
                <div className="space-y-12">
                    <div className="w-24 h-4 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] skew-x-[-12deg] shadow-[0_0_30px_#ff3e3e]"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">A_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest">
                        <a href="/variances/apex/backoffice/dashboard" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">MISSION_SYNC</a>
                        <a href="/variances/apex/backoffice/settings" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">SYS_PERMISSIONS</a>
                        <a href="#" className="block text-white border-b-4 border-[#ff3e3e] pb-2">SPECTRAL_REGION</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.5em] italic text-center text-[#ff3e3e]">
                    NEURAL_ENGINE_v8.01.XP
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto relative bg-[#0a0a0f]">
                <header className="flex justify-between items-center border-4 border-[#ff3e3e]/20 p-16 shadow-[0_0_100px_rgba(255,62,62,0.1)] -skew-x-6 transform bg-black">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/60 italic">SPECTRAL_OVERSIGHT // GLOBAL_DEPLOY_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] italic text-white">THE_SPECTRAL_REGION.</h1>
                    </div>
                    <button className="px-16 py-8 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all transform hover:skew-x-12 shadow-[0_0_50px_rgba(255,62,62,0.4)]">DEPLOY_NEW_ZONE</button>
                </header>

                <section className="bg-black border-4 border-[#ff3e3e]/10 p-16 -skew-x-6 shadow-[0_0_100px_rgba(255,62,62,0.05)] space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff3e3e]/40 px-4">
                        <div className="space-x-12">
                            <button className="text-white border-b-4 border-[#ff3e3e] pb-1">MARKET_SPEC</button>
                            <button>TACTICAL_UTF</button>
                            <button>ZONE_LOGS</button>
                        </div>
                        <div className="animate-pulse">DECRYPTING_ZONE_DATA...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff3e3e] border-b-4 border-[#ff3e3e]/20">
                                <th className="pb-8">ZONE_ID</th>
                                <th className="pb-8">SQUAD_LOCUS</th>
                                <th className="pb-8">TECH_TOKEN</th>
                                <th className="pb-8">VEL_SYNC</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase text-white/80">
                            {missions.map((m) => (
                                <tr key={m.id} className="border-b-4 border-[#ff3e3e]/5 hover:bg-[#ff3e3e]/10 transition-colors group cursor-pointer">
                                    <td className="py-10">#{m.id}</td>
                                    <td className="py-10 underline decoration-4 decoration-[#ff3e3e]/10 group-hover:decoration-[#ff3e3e]/40">{m.squad}</td>
                                    <td className="py-10 text-[#ff3e3e]">{m.token}</td>
                                    <td className="py-10 text-[14px] tracking-widest text-[#7c3aed] uppercase">{m.velocity}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-xl bg-white text-black px-8 py-2 -skew-x-12 hover:bg-[#ff3e3e] hover:text-white transition-all">RE_DEPLOY</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-12 -skew-x-12">
                    <div className="bg-black border-4 border-[#ff3e3e]/20 p-12 space-y-6 group hover:border-white transition-colors">
                        <h3 className="text-sm font-black uppercase tracking-widest text-[#ff3e3e]/60">MASTER_TACTICAL_TEXT</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-black text-white">Elite_UTF8_XP</p>
                            <button className="text-[#ff3e3e] text-sm font-black border-b border-[#ff3e3e]">UPGRADE_CODE</button>
                        </div>
                    </div>
                    <div className="bg-black border-4 border-[#ff3e3e]/20 p-12 space-y-6 group hover:border-white transition-colors">
                        <h3 className="text-sm font-black uppercase tracking-widest text-[#ff3e3e]/60">QUANTUM_TOKEN_SYNC</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-black text-white">MAX_FLOW</p>
                            <div className="w-16 h-4 bg-[#ff3e3e] animate-shimmer shadow-[0_0_20px_#ff3e3e]"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
