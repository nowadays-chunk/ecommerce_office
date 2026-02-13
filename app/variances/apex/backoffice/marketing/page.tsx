"use client";

import React from 'react';

export default function ApexMarketing() {
    const missions = [
        { id: 'AP-MKT-101', code: 'SQUAD_SYNC_30', reward: '30% Neural Discount', status: 'Live_Drop' },
        { id: 'AP-MKT-102', code: 'ELITE_HARDWARE', reward: 'Free_Trigger_V9', status: 'Syncing' },
        { id: 'AP-MKT-103', code: 'TACTICAL_PASS', reward: 'Squad_Alpha_Entry', status: 'Locked' },
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
                        <a href="#" className="block text-white border-b-4 border-[#ff3e3e] pb-2">SQUAD_NETWORK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all transform hover:skew-x-12">SYNC_METRICS</a>
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
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/60 italic">MISSION_PROMOTION // SQUAD_TOTAL_SYNC</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] italic text-white">THE_MISSION_REWARDS.</h1>
                    </div>
                    <button className="px-16 py-8 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all transform hover:skew-x-12 shadow-[0_0_50px_rgba(255,62,62,0.4)]">GENERATE_TECH_CODE</button>
                </header>

                <section className="bg-black p-20 -skew-x-6 shadow-[0_0_150px_rgba(255,62,62,0.15)] space-y-24 border-4 border-[#ff3e3e]/10 relative overflow-hidden group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff3e3e]/40">
                        <div className="space-x-12">
                            <button className="text-white border-b-4 border-[#ff3e3e] pb-1">ALL_REWARDS</button>
                            <button className="hover:text-white transition-all">SQUAD_DEPLOYS</button>
                            <button className="hover:text-white transition-all">ARCHIVED</button>
                        </div>
                        <div className="animate-pulse">DECRYPTING_MISSION_CODES...</div>
                    </div>

                    <table className="w-full text-left border-collapse border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff3e3e]">
                                <th className="px-8 pb-8">DROP_ID</th>
                                <th className="px-8 pb-8">NEURAL_CODE</th>
                                <th className="px-8 pb-8">TECH_REWARD</th>
                                <th className="px-8 pb-8">SYNC_STATUS</th>
                                <th className="px-8 pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase text-white/80">
                            {missions.map((m) => (
                                <tr key={m.id} className="bg-white/5 hover:bg-[#ff3e3e]/20 transition-all hover:scale-[1.02] group cursor-pointer">
                                    <td className="p-10 border-l-[12px] border-[#ff3e3e]">#{m.id}</td>
                                    <td className="p-10 font-black tracking-widest uppercase text-[20px] text-white">{m.code}</td>
                                    <td className="p-10 underline decoration-[#ff3e3e]/20">{m.reward}</td>
                                    <td className="p-10 text-[#ff3e3e]">{m.status}</td>
                                    <td className="p-10 text-right">
                                        <button className="text-xl bg-white text-black px-8 py-2 -skew-x-12 hover:bg-[#ff3e3e] hover:text-white transition-all">UPGRADE_CODE</button>
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
