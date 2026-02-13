"use client";

import React from 'react';

export default function ZenLocalization() {
    const exchanges = [
        { id: 'ZN-REG-01', circle: 'Northern_Tribe', energy: 'SOL (Soul)', flow: 'Steady' },
        { id: 'ZN-REG-02', circle: 'Southern_Valleys', energy: 'SEED (Seed)', flow: 'Blowing' },
        { id: 'ZN-REG-03', circle: 'Western_Rivers', energy: 'ECO (Eco)', flow: 'Resting' },
    ];

    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#2d3a3a]/5 p-12 flex flex-col justify-between shadow-2xl">
                <div className="space-y-12">
                    <div className="w-12 h-12 bg-[#22c55e]/20 rounded-full mx-auto"></div>
                    <h2 className="text-3xl font-bold tracking-tighter uppercase italic text-center">ZEN_CORE.</h2>
                    <nav className="space-y-8 text-[10px] font-black uppercase tracking-widest">
                        <a href="/variances/zen/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-opacity">HARMONY_VIEW</a>
                        <a href="/variances/zen/backoffice/settings" className="block opacity-40 hover:opacity-100 transition-opacity">TRIBE_CONFIG</a>
                        <a href="#" className="block text-[#22c55e]">ENERGY_SYNC</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e]">ENERGY_FLOW_CONTROL // OCT 12, 2025</p>
                        <h1 className="text-5xl font-bold tracking-tighter uppercase leading-none italic">THE_ENERGY_SYNC.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#22c55e] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#2d3a3a] transition-all shadow-lg">CREATE_NEW_CIRCLE</button>
                </header>

                <section className="bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-white space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40 px-4">
                        <div className="space-x-12">
                            <button className="text-[#22c55e] border-b-4 border-[#22c55e]">ENERGY_SYMBOLS</button>
                            <button>SOUL_DIALECTS</button>
                            <button>CIRCLE_FLOWS</button>
                        </div>
                        <div className="italic">NURTURING_GLOBAL_ENERGY...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b-4 border-[#faf9f6]">
                                <th className="pb-8">CIRCLE_ID</th>
                                <th className="pb-8">CIRCLE_DESCRIPTOR</th>
                                <th className="pb-8">ENERGY_TOKEN</th>
                                <th className="pb-8">FLOW_RATE</th>
                                <th className="pb-8 text-right">MANIFEST</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-bold italic">
                            {exchanges.map((e) => (
                                <tr key={e.id} className="border-b-4 border-[#faf9f6] hover:bg-[#faf9f6]/40 transition-colors">
                                    <td className="py-10">#{e.id}</td>
                                    <td className="py-10">{e.circle}</td>
                                    <td className="py-10 text-[12px] font-black uppercase tracking-widest text-[#22c55e]">{e.energy}</td>
                                    <td className="py-10 opacity-40">{e.flow}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-[10px] font-black text-[#22c55e] border-2 border-[#22c55e] px-6 py-2 rounded-full hover:bg-[#22c55e] hover:text-white transition-all">HARMONIZE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-16">
                    <div className="bg-white p-12 rounded-[3rem] border-4 border-white shadow-xl space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">PRIMARY_SOUL_DIALECT</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold italic">Silence (Pure)</p>
                            <button className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest">TRANSLATE_VIBE</button>
                        </div>
                    </div>
                    <div className="bg-white p-12 rounded-[3rem] border-4 border-white shadow-xl space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">NATURAL_EXCHANGE_SYNC</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold italic">Flowing (Rooted)</p>
                            <div className="w-12 h-6 bg-[#22c55e]/20 rounded-full relative">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-[#22c55e] rounded-full shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
