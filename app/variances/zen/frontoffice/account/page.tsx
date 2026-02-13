"use client";

import React from 'react';

export default function ZenProfile() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] p-12 lg:p-24 space-y-24 font-serif">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-[#2d3a3a]/5 pb-16">
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-4 h-4 bg-[#22c55e] rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#22c55e]">Soul // The_Equilibrium</span>
                    </div>
                    <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-none uppercase italic">SIENNA_WILD.</h1>
                </div>
                <div className="text-right space-y-4">
                    <div className="bg-[#2d3a3a] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-full">
                        HARMONY_TIER: PEAK
                    </div>
                    <p className="text-[10px] font-bold uppercase opacity-30 italic">Awakening_Signal: ZN-4492</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-16">
                    <nav className="flex flex-col space-y-6 text-3xl font-light italic">
                        {['Stillness', 'Harvest Logs', 'Saved Essences', 'Mindful Settings', 'Rest'].map(link => (
                            <a key={link} href="#" className="hover:text-[#22c55e] transition-all hover:translate-x-4 duration-700">{link}</a>
                        ))}
                    </nav>

                    <div className="p-12 bg-white rounded-[3rem] border border-[#2d3a3a]/5 shadow-xl space-y-4 text-center">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">ECOLOGICAL_WEIGHT</h3>
                        <p className="text-5xl font-black italic">12.4kg</p>
                        <p className="text-[10px] font-bold opacity-30 uppercase italic">PLASTIC_REMOVED_FROM_OCEAN</p>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-12 bg-white rounded-[4rem] border border-[#2d3a3a]/5 space-y-8 hover:shadow-2xl transition-all group">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">LAST_HARVEST</h3>
                            <div className="flex gap-8 items-center">
                                <div className="w-24 h-24 bg-[#faf9f6] rounded-[2rem] p-4 flex items-center justify-center border border-white">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl font-bold italic uppercase">Essence_V3</p>
                                    <p className="text-xs font-bold opacity-40 uppercase italic">Merged // Feb 12</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 bg-white rounded-[4rem] border border-[#2d3a3a]/5 space-y-8 hover:shadow-2xl transition-all group">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">INTENTION_LIST</h3>
                            <div className="flex gap-8 items-center">
                                <div className="w-24 h-24 bg-[#faf9f6] rounded-[2rem] p-4 flex items-center justify-center border border-white">
                                    <img src="https://images.unsplash.com/photo-1471943311424-646960669fba?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl font-bold italic uppercase">Lavender_Core</p>
                                    <p className="text-xs font-bold opacity-40 uppercase italic">Seeking_Harmony</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold italic tracking-tight uppercase border-b-2 border-[#2d3a3a]/5 pb-8">HARVEST_LOGS.</h2>
                        <div className="space-y-4">
                            {[1, 2].map(o => (
                                <div key={o} className="flex justify-between items-center py-10 border-b border-[#2d3a3a]/5 hover:bg-white rounded-[2rem] px-10 transition-all shadow-sm hover:shadow-xl">
                                    <div className="space-y-1">
                                        <p className="text-xl font-bold uppercase tracking-tight">HARVEST_ZN_8820{o}</p>
                                        <p className="text-[10px] font-bold opacity-30 uppercase italic">Vibration_Matched // Jan {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-12 text-right">
                                        <p className="text-2xl font-bold italic">$42.00</p>
                                        <span className="bg-[#22c55e] text-white text-[8px] font-black px-4 py-2 uppercase tracking-widest italic rounded-full">HARMONIZED</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
