"use client";

import React from 'react';

export default function VibeSettings() {
    const tribe = [
        { id: 'VB-ADM-01', name: 'Analog_Ace', role: 'WAVE_MASTER', level: 'MAX_SATURATION' },
        { id: 'VB-ADM-08', name: 'Lofi_Lover', role: 'TAPE_KEEPER', level: 'MID_RANGE' },
        { id: 'VB-ADM-12', name: 'Retro_Rider', role: 'VIBE_CHECKER', level: 'LOW_PASS' },
    ];

    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r-8 border-[#ff4d6d1a] p-12 flex flex-col justify-between shadow-2xl relative">
                <div className="absolute top-0 right-0 w-8 h-full bg-[#ff4d6d]/5 animate-pulse"></div>
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-[#ff4d6d] rounded-full shadow-retro"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">V_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest">
                        <a href="/variances/vibe/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">WAVE_SYNC</a>
                        <a href="/variances/vibe/backoffice/products" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">TAPE_STOCK</a>
                        <a href="/variances/vibe/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">SYNC_HISTORY</a>
                        <a href="/variances/vibe/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">VIBE_CAMPAIGNS</a>
                        <a href="/variances/vibe/backoffice/analytics" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">WAVE_METRICS</a>
                        <a href="#" className="block text-[#ff4d6d] underline decoration-4 underline-offset-8">WAVE_CONFIG</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.4em] italic text-center">
                    SATURED_ENGINE_v4.20
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto bg-[#ffecd1]">
                <header className="flex justify-between items-center bg-white p-12 rounded-[4rem] shadow-retro border-4 border-[#ff4d6d1a] transform -rotate-1">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">ANALOG_OVERSIGHT // WAVE_SYNC_LIVE</p>
                        <h1 className="text-6xl font-black tracking-tighter uppercase leading-none italic">THE_WAVE_CONFIG.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#ff4d6d] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:scale-110 transition-all shadow-xl">ADD_TRIBE_MEMBER</button>
                </header>

                <section className="bg-white p-16 rounded-[4rem] shadow-retro border-4 border-white space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/40 italic px-4">
                        <div className="space-x-12">
                            <button className="text-[#ff4d6d] border-b-4 border-[#ff4d6d]">ALL_TRIBE</button>
                            <button>WAVE_LEVELS</button>
                            <button>SYNC_LOGS</button>
                        </div>
                        <div>LISTENING_FOR_SIGNALS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff4d6d] border-b-4 border-[#ffecd1]">
                                <th className="pb-8">MEMBER_ID</th>
                                <th className="pb-8">TRIBE_NAME</th>
                                <th className="pb-8">WAVE_ROLE</th>
                                <th className="pb-8">SAT_LEVEL</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black italic uppercase">
                            {tribe.map((m) => (
                                <tr key={m.id} className="border-b-4 border-[#ffecd1] hover:bg-[#ffecd1]/20 transition-all transform hover:scale-[1.01] group cursor-pointer">
                                    <td className="py-12">#{m.id}</td>
                                    <td className="py-12 underline decoration-4 decoration-[#ff4d6d1a] group-hover:decoration-[#ff4d6d33]">{m.name}</td>
                                    <td className="py-12 text-[#ff4d6d] group-hover:bg-[#ff4d6d] group-hover:text-white transition-colors px-4 rounded-xl">{m.role}</td>
                                    <td className="py-12 text-sm text-[#ff4d6d44]">{m.level}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-sm bg-white border-4 border-[#ff4d6d1a] px-6 py-2 rounded-full hover:bg-[#ff4d6d] hover:text-white transition-all">DROP</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="bg-white p-16 rounded-[5rem] shadow-retro border-4 border-[#ff4d6d1a] space-y-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d6d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-4xl font-black tracking-tighter uppercase italic leading-none">SATURATION_LOCK.</h3>
                    <p className="text-sm font-black opacity-60 leading-relaxed italic uppercase tracking-widest">
                        THE ANALOG WAVE IS PROTECTED BY SATURATED SECURITY. ANY CHANGES TO THE CORE VIBE ENGINE MUST BE SYNCED WITH THE WAVE_MASTER. UNAUTHORIZED FREQUENCIES WILL BE FILTERED IMMEDIATELY. STAY NOSTALGIC. STAY SATURATED.
                    </p>
                </div>
            </main>
        </div>
    );
}
