"use client";

import React from 'react';

export default function FitLocalization() {
    const regions = [
        { id: 'FT-REG-01', squad: 'Euro_Division', token: 'ENG_EUR', velocity: 'MAX' },
        { id: 'FT-REG-02', squad: 'US_Sectors', token: 'ENG_USD', velocity: 'STABLE' },
        { id: 'FT-REG-03', squad: 'Asia_Sync', token: 'ENG_JPY', velocity: 'SYNCING' },
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black text-white border-r-[12px] border-black p-12 flex flex-col justify-between -skew-x-2 transform origin-top h-full">
                <div className="space-y-24">
                    <div className="w-24 h-4 bg-[#ff0000] skew-x-[-12deg] shadow-[0_0_30px_#ff0000]"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">F_ADMIN.</h2>
                    <nav className="space-y-12 text-[14px] font-black uppercase tracking-widest -skew-x-12">
                        <a href="/variances/fit/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">ENGINE_SYNC</a>
                        <a href="/variances/fit/backoffice/settings" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">SYSTEM_LOCK</a>
                        <a href="#" className="block bg-[#ff0000] text-white px-8 py-4 shadow-[10px_10px_0px_#fff]">GLOBAL_VELOCITY</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.8em] italic border-t-8 border-white/10 pt-8">
                    ELITE_ENGINE_v8.01.XP
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto bg-white">
                <header className="flex justify-between items-center border-[12px] border-black p-16 shadow-[20px_20px_0px_rgba(255,0,0,0.15)] -skew-x-6 transform bg-white">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">GLOBAL_OVERSIGHT // VELOCITY_SYNC_LIVE</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">THE_GLOBAL_VELOCITY.</h1>
                    </div>
                    <button className="px-16 py-8 bg-black text-white text-[16px] font-black uppercase tracking-widest hover:scale-110 transition-all transform hover:skew-x-12 shadow-2xl">INITIATE_REGION_DEPLOY</button>
                </header>

                <section className="bg-white border-[12px] border-black p-16 shadow-[20px_20px_0px_rgba(0,0,0,0.05)] space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-black/40 italic px-4 pb-4 border-b-[8px] border-black">
                        <div className="space-x-12">
                            <button className="text-black border-b-[8px] border-[#ff0000]">CURRENCY_ENGINES</button>
                            <button>TACTICAL_DECODES</button>
                            <button>SQUAD_DISTRICTS</button>
                        </div>
                        <div>SCANNING_GLOBAL_SQUADS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[18px] font-black uppercase tracking-widest text-black border-b-[8px] border-black">
                                <th className="pb-8">SQUAD_ID</th>
                                <th className="pb-8">REGION_TAG</th>
                                <th className="pb-8">HARDWARE_TOKEN</th>
                                <th className="pb-8">VELOCITY_SYNC</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase">
                            {regions.map((r) => (
                                <tr key={r.id} className="border-b-[4px] border-black/10 hover:bg-[#ff0000] hover:text-white transition-all transform hover:scale-[1.01] group cursor-pointer">
                                    <td className="py-12">#{r.id}</td>
                                    <td className="py-12 underline decoration-[8px] decoration-black/10 group-hover:decoration-white/20">{r.squad}</td>
                                    <td className="py-12">{r.token}</td>
                                    <td className="py-12 text-sm opacity-40 group-hover:opacity-100">{r.velocity}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-xl bg-black text-white px-8 py-2 -skew-x-12 group-hover:bg-white group-hover:text-black">FORCE_SYNC</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-12 -skew-x-2">
                    <div className="border-[12px] border-black p-12 space-y-8 bg-black text-white group hover:bg-[#ff0000] transition-colors">
                        <h3 className="text-xl font-black uppercase tracking-[0.5em] opacity-60 group-hover:opacity-100">MASTER_TACTICAL_VOICE</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-5xl font-black uppercase italic">Elite_English</p>
                            <button className="text-sm font-black underline decoration-[4px] underline-offset-8">OVERRIDE</button>
                        </div>
                    </div>
                    <div className="border-[12px] border-black p-12 space-y-8 bg-white text-black group hover:bg-black hover:text-white transition-colors">
                        <h3 className="text-xl font-black uppercase tracking-[0.5em] opacity-60 group-hover:opacity-100">QUANTUM_TOKEN_BALANCER</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-5xl font-black uppercase italic">Active_Flow</p>
                            <div className="w-16 h-4 bg-[#ff0000] skew-x-[-12deg] animate-shimmer"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
