"use client";

import React from 'react';

export default function GrubProductManagement() {
    const seeds = [
        { id: 'GR-4402', name: 'Root Box 01', price: '$45', stock: 124, soil: 'Upper Valley' },
        { id: 'GR-4389', name: 'Wild Seeds Mix', price: '$12', stock: 850, soil: 'Deep Woods' },
        { id: 'GR-4100', name: 'Organic Honey Batch', price: '$22', stock: 45, soil: 'Hive Core' },
    ];

    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-black italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r-8 border-white p-12 flex flex-col justify-between shadow-2xl relative z-20">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-[#22c55e] rounded-full shadow-[0_0_30px_#22c55e44] animate-pulse"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">G_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest">
                        <a href="/variances/grub/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">FIELD_SYNC</a>
                        <a href="#" className="block text-[#22c55e] underline decoration-8 underline-offset-8">HARVEST_INVENTORY</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">SOIL_LOGS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">TRIBE_NETWORK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">ROOT_METRICS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.6em] italic text-center text-[#22c55e]">
                    FRESH_ENGINE_v2.01
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto relative bg-[#faf9f6]">
                <header className="flex justify-between items-center bg-white p-16 rounded-[5rem] shadow-2xl border-8 border-white group relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-2 relative z-10">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e] italic">FIELD_INVENTORY // HARVEST_SYNC_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic">THE_FIELD_LOGS.</h1>
                    </div>
                    <button className="px-16 py-8 bg-[#2d3a3a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#22c55e] transition-all shadow-2xl relative z-10">PLANT_NEW_SEED</button>
                </header>

                <section className="bg-white p-20 rounded-[6rem] shadow-2xl border-8 border-white space-y-16 relative overflow-hidden">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#2d3a3a]/40">
                        <div className="space-x-12">
                            <button className="text-[#22c55e] border-b-8 border-[#22c55e] pb-1">ALL_HARVEST</button>
                            <button className="hover:text-[#2d3a3a] transition-colors">SPROUTS</button>
                            <button className="hover:text-[#2d3a3a] transition-colors">ROOTS</button>
                            <button className="hover:text-[#2d3a3a] transition-colors">SEEDS</button>
                        </div>
                        <div className="italic">GATHERING_SEARCH_WISDOM...</div>
                    </div>

                    <table className="w-full text-left border-collapse border-separate border-spacing-y-8">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest opacity-40">
                                <th className="px-10 pb-6">HARVEST_ID</th>
                                <th className="px-10 pb-6">ELEMENT_DESIGNATION</th>
                                <th className="px-10 pb-6">ENERGY_VALUE</th>
                                <th className="px-10 pb-6">TRIBE_STOCK</th>
                                <th className="px-10 pb-6">SOIL_ORGIN</th>
                                <th className="px-10 pb-6 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase text-[#2d3a3a]">
                            {seeds.map((seed) => (
                                <tr key={seed.id} className="bg-[#faf9f6]/40 hover:bg-[#22c55e]/5 transition-colors group">
                                    <td className="p-10 rounded-l-[4rem]">#{seed.id}</td>
                                    <td className="p-10 underline decoration-8 decoration-[#22c55e]/10 group-hover:decoration-[#22c55e]/40">{seed.name}</td>
                                    <td className="p-10">{seed.price}</td>
                                    <td className="p-10">{seed.stock}</td>
                                    <td className="p-10 opacity-40 text-sm tracking-widest">{seed.soil}</td>
                                    <td className="p-10 rounded-r-[4rem] text-right space-x-12">
                                        <button className="text-xl text-[#22c55e] hover:scale-110 transition-transform">NURTURE</button>
                                        <button className="text-xl text-red-400/40 hover:text-red-400 hover:scale-110 transition-transform">RELEASE</button>
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
