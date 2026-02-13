"use client";

import React from 'react';

export default function ZenSearch() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] p-12 lg:p-24 space-y-24">
            <header className="max-w-4xl space-y-8">
                <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-[#22c55e] rounded-full"></div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Mindful_Sourcing</span>
                </div>
                <h1 className="text-7xl font-bold tracking-tighter text-[#2d3a3a]">SEARCH_STILLNESS.</h1>
                <div className="relative border-b-2 border-[#2d3a3a]/10 pb-6">
                    <input
                        type="text"
                        placeholder="Find_meaning..."
                        className="w-full text-5xl font-light italic outline-none bg-transparent placeholder:opacity-20 text-[#2d3a3a]"
                    />
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-16">
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">ELEMENTS</h3>
                        <nav className="flex flex-col space-y-4 text-xl font-medium italic">
                            {['Earth', 'Flora', 'Water', 'Air'].map(cat => (
                                <a key={cat} href="#" className="hover:text-[#22c55e] transition-colors">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">IMPACT</h3>
                        <nav className="flex flex-col space-y-4 text-xl font-medium italic">
                            {['Carbon Neutral', 'Biodynamic', 'Zero Waste', 'Crafted'].map(i => (
                                <a key={i} href="#" className="hover:text-[#22c55e] transition-colors">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-20">
                    <div className="flex justify-between items-center bg-white/50 backdrop-blur-md p-8 rounded-[2rem] border border-white">
                        <p className="text-xs font-bold uppercase tracking-widest opacity-40 italic">Found: 42 ESSENCES</p>
                        <div className="flex space-x-6 text-[10px] font-black uppercase tracking-[0.2em]">
                            <span className="text-[#22c55e]">Harmonious</span>
                            <span className="opacity-20">Newest</span>
                            <span className="opacity-20">Value</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group space-y-8">
                                <div className="aspect-square bg-white rounded-[3rem] p-12 relative overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-1000 border border-white">
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-[3s]"
                                        alt="Zen Essence"
                                    />
                                </div>
                                <div className="text-center space-y-2">
                                    <h4 className="text-2xl font-bold tracking-tight text-[#2d3a3a] leading-none uppercase italic">Essence_{i}</h4>
                                    <p className="text-xs font-bold text-[#22c55e] tracking-widest">$42.00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
