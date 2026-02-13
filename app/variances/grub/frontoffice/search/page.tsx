"use client";

import React from 'react';

export default function GrubSearch() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] p-12 lg:p-24 space-y-24 font-black">
            <header className="max-w-4xl space-y-12 relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#22c55e]/5 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#22c55e]">
                    <span className="w-12 h-2 bg-[#2d3a3a]"></span>
                    <span>The_Fresh_Acquisition</span>
                </div>
                <h1 className="text-8xl lg:text-9xl font-black tracking-tighter leading-none text-[#2d3a3a] italic uppercase">FORAGE.</h1>
                <div className="relative border-4 border-[#2d3a3a]/5 pb-8 bg-white p-10 rounded-[4rem] shadow-2xl">
                    <input
                        type="text"
                        placeholder="Search_the_harvest..."
                        className="w-full text-4xl lg:text-6xl font-black outline-none bg-transparent placeholder:opacity-5 text-[#2d3a3a] uppercase tracking-tighter"
                    />
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-16 border-r-4 border-[#2d3a3a]/5 pr-12">
                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">PANTRY_LOGS</h3>
                        <nav className="flex flex-col space-y-6 text-2xl font-black italic">
                            {['Roots', 'Leafy_Greens', 'Fermented', 'Grains'].map(cat => (
                                <a key={cat} href="#" className="hover:text-[#22c55e] transition-all hover:scale-110 origin-left duration-300">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">ORIGIN</h3>
                        <nav className="flex flex-col space-y-6 text-2xl font-black italic">
                            {['Local_Farms', 'Wild_Foraged', 'Permaculture', 'Indoor'].map(i => (
                                <a key={i} href="#" className="hover:text-[#22c55e] transition-all hover:scale-110 origin-left duration-300">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="flex justify-between items-end bg-[#2d3a3a] text-white p-12 rounded-[3.5rem] shadow-2xl">
                        <p className="text-[10px] font-black uppercase tracking-widest italic opacity-60">Harvest_Scan: 124_Items_Found</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest italic">
                            <span className="text-[#22c55e] underline underline-offset-8 decoration-4">Peak_Freshness</span>
                            <span className="opacity-40">Recent_Pick</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group space-y-10 relative overflow-hidden bg-white p-12 rounded-[3rem] border-4 border-[#2d3a3a]/5 hover:border-[#22c55e]/20 transition-all shadow-sm hover:shadow-2xl">
                                <div className="aspect-square bg-[#faf9f6] rounded-[2rem] p-12 relative flex items-center justify-center">
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]"
                                        alt="Grub Item"
                                    />
                                </div>
                                <div className="space-y-4 text-center">
                                    <h4 className="text-3xl font-black italic tracking-tighter text-[#2d3a3a] leading-none uppercase">GRUB_LOG_{i}</h4>
                                    <p className="text-2xl font-black text-[#22c55e] tracking-tighter">$12.50</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
