"use client";

import React from 'react';

export default function VibeLocalization() {
    const waves = [
        { id: 'VB-REG-01', tribe: 'FM_Radio_Hills', wave: 'TAPE_SOL', status: 'Saturating' },
        { id: 'VB-REG-02', tribe: 'Analog_Islands', wave: 'WAVE_USD', status: 'Peaking' },
        { id: 'VB-REG-03', tribe: 'Saturate_City', wave: 'VIBE_YEN', status: 'Synced' },
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
                        <a href="/variances/vibe/backoffice/settings" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">WAVE_CONFIG</a>
                        <a href="#" className="block text-[#ff4d6d] underline decoration-4 underline-offset-8">GLOBAL_CHANNELS</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">ANALOG_REGIONS // WAVE_CHANNELS_LIVE</p>
                        <h1 className="text-6xl font-black tracking-tighter uppercase leading-none italic">THE_GLOBAL_CHANNELS.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#ff4d6d] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:scale-110 transition-all shadow-xl">TUNE_NEW_TRIBE</button>
                </header>

                <section className="bg-white p-16 rounded-[4rem] shadow-retro border-4 border-white space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/40 italic px-4">
                        <div className="space-x-12">
                            <button className="text-[#ff4d6d] border-b-4 border-[#ff4d6d]">WAVE_SYMBOLS</button>
                            <button>TAPE_DIALECTS</button>
                            <button>TRIBE_MAPS</button>
                        </div>
                        <div>RECORDING_GLOBAL_VIBES...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff4d6d] border-b-4 border-[#ffecd1]">
                                <th className="pb-8">TRIBE_ID</th>
                                <th className="pb-8">TRIBE_REGION</th>
                                <th className="pb-8">ENERGY_TOKEN</th>
                                <th className="pb-8">SYNC_LEVEL</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black italic uppercase">
                            {waves.map((w) => (
                                <tr key={w.id} className="border-b-4 border-[#ffecd1] hover:bg-[#ffecd1]/20 transition-all transform hover:scale-[1.01] group cursor-pointer">
                                    <td className="py-12">#{w.id}</td>
                                    <td className="py-12">{w.tribe}</td>
                                    <td className="py-12 text-[#ff4d6d]">{w.wave}</td>
                                    <td className="py-12 text-sm text-[#ff4d6d44]">{w.status}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-sm bg-[#ffecd1] border-4 border-[#ff4d6d1a] px-6 py-2 rounded-full hover:bg-[#ff4d6d] hover:text-white transition-all">RE_SYNC</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-16 -rotate-1">
                    <div className="bg-white p-12 rounded-[3rem] shadow-retro border-4 border-[#ff4d6d1a] space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">PRIMARY_NOSTALGIC_VOICE</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-black uppercase tracking-tighter">Retro_English</p>
                            <button className="text-[#ff4d6d44] hover:text-[#ff4d6d] transition-colors">SWAP_TAPE</button>
                        </div>
                    </div>
                    <div className="bg-white p-12 rounded-[3rem] shadow-retro border-4 border-[#ff4d6d1a] space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">LIVE_WAVE_ADJUSTER</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-black uppercase tracking-tighter">Automatic</p>
                            <div className="w-12 h-12 bg-[#ff4d6d] rounded-full animate-ping opacity-20"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
