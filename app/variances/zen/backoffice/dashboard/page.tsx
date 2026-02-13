"use client";

import React from 'react';

export default function ZenAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#2d3a3a]/5 p-12 flex flex-col justify-between shadow-2xl">
                <div className="space-y-12">
                    <div className="w-12 h-12 bg-[#22c55e]/20 rounded-full mx-auto"></div>
                    <h2 className="text-3xl font-bold tracking-tighter uppercase italic text-center">ZEN_CORE.</h2>
                    <nav className="space-y-8 text-[10px] font-black uppercase tracking-widest">
                        <a href="#" className="block text-[#22c55e]">HARMONY_VIEW</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">GARDEN_STOCK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">SOUL_CYCLES</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">TRIBE_LINK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">STILL_ARCHIVE</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-[0.3em] text-center">
                    NATURAL_VIBRATION // v2.0
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-center bg-white p-12 rounded-[3rem] shadow-xl border-4 border-white">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e]">CYCLE_OVERVIEW // OCT 12, 2025</p>
                        <h1 className="text-5xl font-bold tracking-tighter uppercase leading-none italic">THE_BREATH_METRICS.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#2d3a3a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#22c55e] transition-all shadow-lg">HARVEST_NEW_SEED</button>
                </header>

                <div className="grid grid-cols-3 gap-12">
                    <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-white space-y-6 text-center">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest italic">ENERGY_BALANCE</p>
                        <h3 className="text-6xl font-bold italic">$440K</h3>
                        <div className="w-12 h-1 bg-[#22c55e]/20 mx-auto rounded-full"></div>
                        <p className="text-[12px] font-bold text-[#22c55e]">POSITIVE_FLOW +8%</p>
                    </div>
                    <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-white space-y-6 text-center">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest italic">SOUL_RETENTION</p>
                        <h3 className="text-6xl font-bold italic">94%</h3>
                        <div className="w-12 h-1 bg-[#22c55e]/20 mx-auto rounded-full"></div>
                        <p className="text-[12px] font-bold text-[#22c55e]">HIGH_VIBRATION</p>
                    </div>
                    <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-white space-y-6 text-center">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest italic">TRIBE_GROWTH</p>
                        <h3 className="text-6xl font-bold italic">1.2K</h3>
                        <div className="w-12 h-1 bg-[#22c55e]/20 mx-auto rounded-full"></div>
                        <p className="text-[12px] font-bold text-[#22c55e]">STEADY_BLOOM</p>
                    </div>
                </div>

                <section className="bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-white space-y-12">
                    <h2 className="text-3xl font-bold italic uppercase tracking-tighter text-[#22c55e]">RECENT_VIBRATIONS.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b-4 border-[#faf9f6]">
                                <th className="pb-8">MEMBER</th>
                                <th className="pb-8">HARVEST</th>
                                <th className="pb-8">INTENT</th>
                                <th className="pb-8">STATUS</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-bold italic">
                            <tr className="border-b-4 border-[#faf9f6]">
                                <td className="py-10">D. THORNE</td>
                                <td className="py-10">ASH_WOOD_KIT</td>
                                <td className="py-10">SANCTUARY</td>
                                <td className="py-10 text-[#22c55e]">ROOTED</td>
                            </tr>
                            <tr className="border-b-4 border-[#faf9f6]">
                                <td className="py-10">L. RIVER</td>
                                <td className="py-10">ORGANIC_LINEN</td>
                                <td className="py-10">STILLNESS</td>
                                <td className="py-10 text-[#22c55e]">STREAMS</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
