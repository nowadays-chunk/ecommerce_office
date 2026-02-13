"use client";

import React from 'react';

export default function ZenProductManagement() {
    const seeds = [
        { id: 'ZN-1102', name: 'Ash Wood Sanctuary Kit', price: '$420', stock: 24, category: 'Sanctuary' },
        { id: 'ZN-1098', name: 'Organic Linen Throw', price: '$180', stock: 88, category: 'Comfort' },
        { id: 'ZN-1052', name: 'Morning Wood Incense', price: '$45', stock: 420, category: 'Aura' },
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
                        <a href="#" className="block text-[#22c55e]">GARDEN_STOCK</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e]">GARDEN_OVERSIGHT // OCT 12, 2025</p>
                        <h1 className="text-5xl font-bold tracking-tighter uppercase leading-none italic">THE_SEED_INVENTORY.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#22c55e] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#2d3a3a] transition-all shadow-lg">PLANT_NEW_SEED</button>
                </header>

                <section className="bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-white space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40 px-4">
                        <div className="space-x-12">
                            <button className="text-[#22c55e] border-b-4 border-[#22c55e]">ALL_SEEDS</button>
                            <button>SANCTUARY</button>
                            <button>COMFORT</button>
                            <button>AURA</button>
                        </div>
                        <div className="italic">SEARCHING_FOR_WISDOM...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b-4 border-[#faf9f6]">
                                <th className="pb-8">SEED_ID</th>
                                <th className="pb-8">ELEMENT_NAME</th>
                                <th className="pb-8">ENERGY_VALUE</th>
                                <th className="pb-8">GROWTH_LEVEL</th>
                                <th className="pb-8">CATEGORY</th>
                                <th className="pb-8">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-bold italic">
                            {seeds.map((seed) => (
                                <tr key={seed.id} className="border-b-4 border-[#faf9f6] hover:bg-[#faf9f6]/40 transition-colors">
                                    <td className="py-10">#{seed.id}</td>
                                    <td className="py-10 text-[#22c55e]">{seed.name}</td>
                                    <td className="py-10">{seed.price}</td>
                                    <td className="py-10">{seed.stock}</td>
                                    <td className="py-10 uppercase tracking-widest text-[10px] opacity-40">{seed.category}</td>
                                    <td className="py-10 space-x-8">
                                        <button className="text-[10px] font-black text-[#22c55e] hover:scale-110 transition-transform">NURTURE</button>
                                        <button className="text-[10px] font-black text-red-400 hover:scale-110 transition-transform">RELEASE</button>
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
