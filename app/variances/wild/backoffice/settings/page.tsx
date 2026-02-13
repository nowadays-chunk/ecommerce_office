"use client";

import React from 'react';

export default function WildSettings() {
    const whisps = [
        { id: 'WL-ADM-01', name: 'Forest_Wanderer', role: 'ROOT_GUARDIAN', focus: 'Total_Stillness' },
        { id: 'WL-ADM-08', name: 'Silent_Shade', role: 'WHISPER_SCOUT', focus: 'Forage_Logs' },
        { id: 'WL-ADM-12', name: 'Echo_Stream', role: 'VALLEY_LEAD', focus: 'Tribe_Growth' },
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
                        <a href="/variances/wild/backoffice/products" className="block opacity-40 hover:text-[#2d2a22] transition-colors">RAW_INVENTORY</a>
                        <a href="/variances/wild/backoffice/orders" className="block opacity-40 hover:text-[#2d2a22] transition-colors">WHISPER_LOGS</a>
                        <a href="/variances/wild/backoffice/marketing" className="block opacity-40 hover:text-[#2d2a22] transition-colors">TRIBAL_NODES</a>
                        <a href="/variances/wild/backoffice/analytics" className="block opacity-40 hover:text-[#2d2a22] transition-colors">ROOT_METRICS</a>
                        <a href="#" className="block text-[#2d2a22] border-b border-[#2d2a22] pb-2">PLANETARY_CONFIG</a>
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
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] italic">ROOT_CONTROL // PLANETARY_SYNC_LIVE</p>
                        <h1 className="text-7xl font-light tracking-tighter uppercase leading-none italic text-[#2d2a22]">THE_PLANETARY_CONFIG.</h1>
                    </div>
                    <button className="px-16 py-8 border border-[#2d2a22] text-[#2d2a22] text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-[#2d2a22] hover:text-[#f4f1ea] transition-all relative z-10">INVOKE_ENTITY</button>
                </header>

                <section className="bg-white/40 backdrop-blur-3xl p-20 rounded-[5rem] shadow-2xl border border-[#8b7e66]/20 space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-bold uppercase tracking-widest text-[#8b7e66]/40 px-4">
                        <div className="space-x-12">
                            <button className="text-[#2d2a22] border-b border-[#2d2a22] pb-1">ALL_ENTITIES</button>
                            <button>ROOT_LEVELS</button>
                            <button>WHISPER_LOGS</button>
                        </div>
                        <div className="animate-pulse">LISTENING_FOR_ROOT_VOICES...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-bold uppercase tracking-widest opacity-40 border-b border-[#8b7e66]/10">
                                <th className="pb-8">ENTITY_ID</th>
                                <th className="pb-8">NAME_STRING</th>
                                <th className="pb-8">ROOT_ROLE</th>
                                <th className="pb-8">STILL_FOCUS</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-light italic uppercase text-[#2d2a22]/80">
                            {whisps.map((w) => (
                                <tr key={w.id} className="border-b border-[#8b7e66]/5 group hover:bg-[#8b7e66]/5 transition-colors cursor-pointer">
                                    <td className="py-10">#{w.id}</td>
                                    <td className="py-10 underline decoration-[#8b7e66]/10">{w.name}</td>
                                    <td className="py-10 text-[#8b7e66]">{w.role}</td>
                                    <td className="py-10 text-sm opacity-40">{w.focus}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-sm border border-[#2d2a22] px-6 py-2 rounded-xl hover:bg-[#2d2a22] hover:text-[#f4f1ea] transition-all">RELEASE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="bg-white/40 backdrop-blur-xl p-16 rounded-[4rem] border border-[#8b7e66]/10 space-y-8 shadow-inner italic">
                    <h3 className="text-4xl font-light tracking-tighter uppercase text-[#2d2a22]">STILLNESS_INTEGRITY.</h3>
                    <p className="text-sm font-bold opacity-40 leading-relaxed uppercase tracking-[0.4em]">
                        THE PLANETARY ENGINE IS GROUNDED IN STILLNESS. ANY MANIPULATION OF THE ROOT PARAMETERS REQUIRES THE SILENT WHISPER OF THE ROOT GUARDIAN. ALL ACTIONS ARE PRESERVED IN THE EARTH LEDGER.
                    </p>
                </div>
            </main>
        </div>
    );
}
