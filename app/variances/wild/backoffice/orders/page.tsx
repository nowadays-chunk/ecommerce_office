"use client";

import React from 'react';

export default function WildOrderManagement() {
    const whispers = [
        { id: 'WL-ORD-4402', entity: 'Forest_Wanderer', still: '1.4 ETH', status: 'Foraging' },
        { id: 'WL-ORD-4389', entity: 'Silent_Step', still: '0.8 ETH', status: 'Stillness' },
        { id: 'WL-ORD-4100', entity: 'Earth_Guardian', still: '4.2 ETH', status: 'Restored' },
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
                        <a href="#" className="block text-[#2d2a22] border-b border-[#2d2a22] pb-2">WHISPER_LOGS</a>
                        <a href="#" className="block hover:text-[#2d2a22] transition-colors">TRIBAL_NODES</a>
                        <a href="#" className="block hover:text-[#2d2a22] transition-colors">ROOT_METRICS</a>
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
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] italic">WHISPER_LOGISTICS // STILL_SYNC_LIVE</p>
                        <h1 className="text-7xl font-light tracking-tighter uppercase leading-none italic text-[#2d2a22]">THE_WHISPER_LOGS.</h1>
                    </div>
                    <button className="px-16 py-8 border border-[#2d2a22] text-[#2d2a22] text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-[#2d2a22] hover:text-[#f4f1ea] transition-all relative z-10">STILL_LEDGER</button>
                </header>

                <section className="bg-white/40 backdrop-blur-3xl p-20 rounded-[5rem] shadow-2xl border border-[#8b7e66]/20 space-y-16 relative overflow-hidden group">
                    <div className="flex justify-between items-center text-[12px] font-bold uppercase tracking-widest text-[#8b7e66]/40">
                        <div className="space-x-12">
                            <button className="text-[#2d2a22] border-b border-[#2d2a22] pb-1">ALL_WHISPERS</button>
                            <button className="hover:text-[#2d2a22] transition-colors">ACTIVE_FORAGE</button>
                            <button className="hover:text-[#2d2a22] transition-colors">ARCHIVED</button>
                        </div>
                        <div className="animate-pulse italic">LISTENING_FOR_LOGISTICS_WHISPERS...</div>
                    </div>

                    <table className="w-full text-left border-collapse border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-[12px] font-bold uppercase tracking-widest opacity-40 text-[#8b7e66]">
                                <th className="px-10 pb-6">SYNC_ID</th>
                                <th className="px-10 pb-6">TRIBAL_ENTITY</th>
                                <th className="px-10 pb-6">STILL_VALUE</th>
                                <th className="px-10 pb-6">NATURAL_STATUS</th>
                                <th className="px-10 pb-6 text-right">MANIFEST</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-light italic uppercase text-[#2d2a22]/80">
                            {whispers.map((w) => (
                                <tr key={w.id} className="bg-white/40 hover:bg-[#8b7e66]/10 transition-colors cursor-pointer group">
                                    <td className="p-10 rounded-l-[4rem] border-l-4 border-[#2d2a22]">#{w.id}</td>
                                    <td className="p-10">{w.entity}</td>
                                    <td className="p-10">{w.still}</td>
                                    <td className="p-10 text-[#8b7e66] group-hover:animate-pulse">{w.status}</td>
                                    <td className="p-10 rounded-r-[4rem] text-right">
                                        <button className="text-xl bg-[#2d2a22] text-[#f4f1ea] px-8 py-2 rounded-2xl transform rotate-1">VIEW_STILLNESS</button>
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
