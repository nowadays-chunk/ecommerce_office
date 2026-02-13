"use client";

import React from 'react';

export default function ZenOrderManagement() {
    const vibrations = [
        { id: 'ZN-ORD-1102', member: 'David Thorne', energy: '$420', status: 'Rooting' },
        { id: 'ZN-ORD-1098', member: 'Luna River', energy: '$180', status: 'Blooming' },
        { id: 'ZN-ORD-1052', member: 'Silas Ground', energy: '$1,200', status: 'Harvested' },
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
                        <a href="/variances/zen/backoffice/products" className="block opacity-40 hover:opacity-100 transition-opacity">GARDEN_STOCK</a>
                        <a href="#" className="block text-[#22c55e]">SOUL_CYCLES</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e]">SOULY_LOGISTICS // OCT 12, 2025</p>
                        <h1 className="text-5xl font-bold tracking-tighter uppercase leading-none italic">THE_VIBRATION_LOG.</h1>
                    </div>
                    <button className="px-12 py-5 border-4 border-[#faf9f6] text-[#2d3a3a] text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#22c55e] hover:text-white transition-all">SOUL_LEDGER</button>
                </header>

                <section className="bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-white space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40 px-4">
                        <div className="space-x-12">
                            <button className="text-[#22c55e] border-b-4 border-[#22c55e]">ALL_VIBRATIONS</button>
                            <button>ROOTING</button>
                            <button>BLOOMING</button>
                            <button>HARVESTED</button>
                        </div>
                        <div className="italic">SYNCING_WITH_TRIBE...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b-4 border-[#faf9f6]">
                                <th className="pb-8">CYCLE_ID</th>
                                <th className="pb-8">TRIBE_MEMBER</th>
                                <th className="pb-8">ENERGY_TOTAL</th>
                                <th className="pb-8">HARMONY_STATUS</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-bold italic">
                            {vibrations.map((v) => (
                                <tr key={v.id} className="border-b-4 border-[#faf9f6] hover:bg-[#faf9f6]/40 transition-colors">
                                    <td className="py-10">#{v.id}</td>
                                    <td className="py-10">{v.member}</td>
                                    <td className="py-10">{v.energy}</td>
                                    <td className="py-10 text-[#22c55e]">{v.status}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-[10px] font-black text-[#22c55e] border-2 border-[#22c55e] px-6 py-2 rounded-full hover:bg-[#22c55e] hover:text-white transition-all">GARDEN_VIEW</button>
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
