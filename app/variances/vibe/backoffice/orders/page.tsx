"use client";

import React from 'react';

export default function VibeOrderManagement() {
    const transitions = [
        { id: 'VB-ORD-8821', tribe: 'Lofi_Lover_99', wave: '$420', status: 'Saturating' },
        { id: 'VB-ORD-8794', tribe: 'Analog_Ace', wave: '$120', status: 'Synced' },
        { id: 'VB-ORD-8750', tribe: 'Sunset_Seeker', wave: '$2,800', status: 'In_Transit' },
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
                        <a href="#" className="block text-[#ff4d6d] underline decoration-4 underline-offset-8">SYNC_HISTORY</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">VIBE_TRIBE</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">SATURATION_LOGS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.4em] italic text-center">
                    SATURED_ENGINE_v4.20
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto">
                <header className="flex justify-between items-center bg-white p-12 rounded-[4rem] shadow-retro border-4 border-[#ff4d6d1a] transform -rotate-1">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">ANALOG_LOGISTICS // WAVE_TRANSIT_LIVE</p>
                        <h1 className="text-6xl font-black tracking-tighter uppercase leading-none italic">THE_SYNC_HISTORY.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#ff4d6d] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:scale-110 transition-all shadow-xl">EXPORT_WAVE_LEDGER</button>
                </header>

                <section className="bg-white p-16 rounded-[5rem] shadow-retro border-4 border-white space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest">
                        <div className="space-x-12">
                            <button className="text-[#ff4d6d] border-b-4 border-[#ff4d6d] pb-1">ALL_SYNC_LOGS</button>
                            <button className="opacity-40 hover:opacity-100">ACTIVE_WAVES</button>
                            <button className="opacity-40 hover:opacity-100">ARCHIVED</button>
                        </div>
                        <div className="opacity-20 italic">TRACKING_ANALOG_TRAFFIC...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest opacity-40 border-b-4 border-[#ffecd1]">
                                <th className="pb-10">SYNC_ID</th>
                                <th className="pb-10">TRIBE_ENTITY</th>
                                <th className="pb-10">WAVE_TOTAL</th>
                                <th className="pb-10">SATURATION_STATUS</th>
                                <th className="pb-10 text-right">MANIFEST</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase text-[#ff4d6d]/80">
                            {transitions.map((t) => (
                                <tr key={t.id} className="border-b-4 border-[#ffecd1] group hover:bg-[#ffecd1]/20 transition-colors">
                                    <td className="py-12">#{t.id}</td>
                                    <td className="py-12">{t.tribe}</td>
                                    <td className="py-12">{t.wave}</td>
                                    <td className="py-12 text-sm">{t.status}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-xl bg-[#ff4d6d] text-white px-8 py-2 rounded-full transform rotate-2">VIEW_WAVE</button>
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
