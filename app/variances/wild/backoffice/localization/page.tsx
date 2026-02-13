"use client";

import React from 'react';

export default function WildLocalization() {
    const whispers = [
        { id: 'WL-REG-01', valley: 'Silent_Peaks', Still: 'ETH (Ether)', flow: 'Foraging' },
        { id: 'WL-REG-02', valley: 'Root_Hollow', Still: 'SEED (Seed)', flow: 'Steady' },
        { id: 'WL-REG-03', valley: 'Mist_Forest', Still: 'LEAF (Leaf)', flow: 'Syncing' },
    ];

    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#8b7e66]/10 p-12 flex flex-col justify-between shadow-2xl relative z-20">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-white border border-[#2d2a22]/10 rounded-full flex items-center justify-center shadow-xl">
                        <div className="w-2 h-2 bg-[#2d2a22]"></div>
                    </div>
                    <h2 className="text-4xl font-light tracking-tighter uppercase italic leading-none">W_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-bold uppercase tracking-widest text-[#8b7e66]">
                        <a href="/variances/wild/backoffice/dashboard" className="block opacity-40 hover:text-[#2d2a22] transition-colors">STILL_VIEW</a>
                        <a href="/variances/wild/backoffice/settings" className="block opacity-40 hover:text-[#2d2a22] transition-colors">PLANETARY_CONFIG</a>
                        <a href="#" className="block text-[#2d2a22] border-b border-[#2d2a22] pb-2">ROOT_SYMBOLS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-bold opacity-40 uppercase tracking-[0.8em] italic text-center">
                    STILL_ENGINE_v1.0.RAW
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto relative bg-[#f4f1ea]">
                <header className="flex justify-between items-center bg-white/40 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-[#8b7e66]/10 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#8b7e66]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-2 relative z-10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] italic">ROOT_OVERSIGHT // GLOBAL_STILL_LIVE</p>
                        <h1 className="text-7xl font-light tracking-tighter uppercase leading-none italic text-[#2d2a22]">THE_ROOT_SYMBOLS.</h1>
                    </div>
                    <button className="px-16 py-8 border border-[#2d2a22] text-[#2d2a22] text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-[#2d2a22] hover:text-[#f4f1ea] transition-all relative z-10">INVOKE_NEW_ROOT</button>
                </header>

                <section className="bg-white/40 backdrop-blur-3xl p-20 rounded-[5rem] shadow-2xl border border-[#8b7e66]/20 space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-bold uppercase tracking-widest text-[#8b7e66]/40 px-4">
                        <div className="space-x-12">
                            <button className="text-[#2d2a22] border-b border-[#2d2a22] pb-1">ROOT_TOKENS</button>
                            <button>SILENT_LANGUAGES</button>
                            <button>VALLEY_MAPS</button>
                        </div>
                        <div className="animate-pulse">LISTENING_FOR_GLOBAL_WHISPERS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-bold uppercase tracking-widest opacity-40 border-b border-[#8b7e66]/10">
                                <th className="pb-8">ROOT_ID</th>
                                <th className="pb-8">VALLEY_TAG</th>
                                <th className="pb-8">STILL_TOKEN</th>
                                <th className="pb-8">WHISPER_SYNC</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-light italic uppercase text-[#2d2a22]/80">
                            {whispers.map((w) => (
                                <tr key={w.id} className="border-b border-[#8b7e66]/5 group hover:bg-[#8b7e66]/5 transition-colors cursor-pointer">
                                    <td className="py-10">#{w.id}</td>
                                    <td className="py-10 underline decoration-[#8b7e66]/10">{w.valley}</td>
                                    <td className="py-10 text-[#8b7e66]">{w.Still}</td>
                                    <td className="py-10 text-sm opacity-40">{w.flow}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-sm border border-[#2d2a22] px-6 py-2 rounded-xl hover:bg-[#2d2a22] hover:text-[#f4f1ea] transition-all">RE_WHISPER</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-12 italic">
                    <div className="bg-white/40 backdrop-blur-xl p-12 rounded-[4rem] border border-[#8b7e66]/10 space-y-6">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">DEFAULT_PLANETARY_VOICE</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-light">Natural_English</p>
                            <button className="text-[10px] font-bold uppercase border-b border-[#2d2a22]">CHANGE_ROOT</button>
                        </div>
                    </div>
                    <div className="bg-white/40 backdrop-blur-xl p-12 rounded-[4rem] border border-[#8b7e66]/10 space-y-6">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">ROOT_SYNC_PROTOCOL</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-light">Stable_Resonance</p>
                            <div className="w-12 h-px bg-[#2d2a22]/40 relative">
                                <div className="absolute inset-0 bg-[#2d2a22] animate-ping opacity-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
