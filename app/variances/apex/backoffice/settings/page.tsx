"use client";

import React from 'react';

export default function ApexSettings() {
    const ops = [
        { id: 'AP-ADM-01', name: 'Squad_Alpha', role: 'MISSION_COMMANDER', level: 'Level_9_Omega' },
        { id: 'AP-ADM-08', name: 'Squad_Delta', role: 'TECH_OPERATIVE', level: 'Level_5_Gamma' },
        { id: 'AP-ADM-12', name: 'Squad_Sigma', role: 'RECON_AGENT', level: 'Level_2_Beta' },
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
                        <a href="/variances/apex/backoffice/products" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">HARDWARE_VAULT</a>
                        <a href="/variances/apex/backoffice/orders" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">DEPLOY_LOGS</a>
                        <a href="/variances/apex/backoffice/marketing" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">SQUAD_NETWORK</a>
                        <a href="/variances/apex/backoffice/analytics" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">SYNC_METRICS</a>
                        <a href="#" className="block text-white border-b-4 border-[#ff3e3e] pb-2">SYS_PERMISSIONS</a>
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
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/60 italic">SECURITY_OVERSIGHT // SYNC_LOCK_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] italic text-white">THE_SYS_PERMISSIONS.</h1>
                    </div>
                    <button className="px-16 py-8 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all transform hover:skew-x-12 shadow-[0_0_50px_rgba(255,62,62,0.4)]">DEPLOY_NEW_AGENT</button>
                </header>

                <section className="bg-black border-4 border-[#ff3e3e]/10 p-16 -skew-x-6 shadow-[0_0_100px_rgba(255,62,62,0.05)] space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff3e3e]/40 px-4">
                        <div className="space-x-12">
                            <button className="text-white border-b-4 border-[#ff3e3e] pb-1">ALL_OPERATIVES</button>
                            <button>MISSION_DEPTHS</button>
                            <button>CORE_LOGS</button>
                        </div>
                        <div className="animate-pulse">DECRYPTING_AGENT_IDS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff3e3e] border-b-4 border-[#ff3e3e]/20">
                                <th className="pb-8">AGENT_ID</th>
                                <th className="pb-8">SQUAD_NAME</th>
                                <th className="pb-8">MISSION_ROLE</th>
                                <th className="pb-8">NEURAL_LEVEL</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase text-white/80">
                            {ops.map((o) => (
                                <tr key={o.id} className="border-b-4 border-[#ff3e3e]/5 hover:bg-[#ff3e3e]/10 transition-colors group cursor-pointer">
                                    <td className="py-10">#{o.id}</td>
                                    <td className="py-10 underline decoration-4 decoration-[#ff3e3e]/10 group-hover:decoration-[#ff3e3e]/40">{o.name}</td>
                                    <td className="py-10 text-[#ff3e3e]">{o.role}</td>
                                    <td className="py-10 text-[14px] tracking-widest text-[#7c3aed] uppercase">{o.level}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-xl bg-white text-black px-8 py-2 -skew-x-12 hover:bg-[#ff3e3e] hover:text-white transition-all">TERMINATE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="border-4 border-[#ff3e3e] p-16 space-y-12 bg-black shadow-[20px_20px_0px_rgba(255,62,62,0.2)] -skew-x-12">
                    <h3 className="text-5xl font-black tracking-tighter uppercase italic text-white animate-pulse">NEURAL_BLOCK_ACTIVE.</h3>
                    <p className="text-lg font-black opacity-80 leading-relaxed uppercase tracking-widest text-[#ff3e3e]">
                        SYSTEM INTEGRITY IS PROTECTED BY NEURAL_XP SECURITY. ANY SESSION ANOMALIES WILL TRIGGER AN IMMEDIATE GLOBAL LOCKDOWN. MISSION COMMANDER CLEARANCE REQUIRED FOR ALL CORE TRANSACTIONS.
                    </p>
                </div>
            </main>
        </div>
    );
}
