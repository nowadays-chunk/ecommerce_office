"use client";

import React from 'react';

export default function LuxeSearch() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] p-12 lg:p-24 space-y-24">
            <header className="max-w-4xl space-y-8">
                <h1 className="text-6xl lg:text-8xl font-serif tracking-tight leading-none">DISCOVERY.</h1>
                <div className="relative border-b-2 border-black/10 pb-4">
                    <input
                        type="text"
                        placeholder="SEARCH_CATALOGUE"
                        className="w-full text-4xl lg:text-6xl font-serif outline-none bg-transparent placeholder:opacity-10 uppercase tracking-tighter"
                    />
                    <div className="absolute right-0 bottom-4 text-xs font-bold uppercase tracking-widest opacity-40 italic">Query_Mode: Active</div>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-12 border-r-2 border-black/5 pr-12">
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black/40">COLLECTIONS</h3>
                        <nav className="flex flex-col space-y-4 text-2xl font-serif italic">
                            {['Ready-to-Wear', 'Accessories', 'High Jewelry', 'Objects'].map(cat => (
                                <a key={cat} href="#" className="hover:text-[#d4af37] transition-colors">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black/40">CURATION</h3>
                        <nav className="flex flex-col space-y-4 text-2xl font-serif italic">
                            {['The Icons', 'New Arrivals', 'Artisan Picks', 'Archives'].map(cur => (
                                <a key={cur} href="#" className="hover:text-[#d4af37] transition-colors">{cur}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-16">
                    <div className="flex justify-between items-end border-b-2 border-black/5 pb-8">
                        <p className="text-sm font-bold uppercase tracking-widest opacity-40 italic">Results: 124 ITEMS_FOUND</p>
                        <div className="flex space-x-8 text-xs font-black uppercase tracking-widest">
                            <button className="underline decoration-2 underline-offset-8">Featured</button>
                            <button className="opacity-40">Price_High</button>
                            <button className="opacity-40">Price_Low</button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group space-y-6">
                                <div className="aspect-[3/4] bg-[#f8f8f8] relative overflow-hidden flex items-center justify-center p-12">
                                    <div className="w-1 h-full bg-black/5 absolute left-0 top-0"></div>
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                                        alt="Luxe Product"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-serif italic uppercase tracking-tight">LUXE_ITEM_{i}</h4>
                                    <p className="text-sm font-black opacity-40">$1,240</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
