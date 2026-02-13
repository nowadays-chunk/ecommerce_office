"use client";

import React from 'react';

export default function HypeSearch() {
    return (
        <div className="min-h-screen bg-black text-white p-12 lg:p-24 space-y-32 font-mono italic">
            <header className="max-w-4xl space-y-12">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-1 bg-white"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">SIGNAL_INTERCEPT://SEARCH</span>
                </div>
                <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] uppercase -skew-x-12">
                    LOCATE <br /> <span className="text-black bg-white px-4">THE_ITEM.</span>
                </h1>
                <div className="relative border-4 border-white p-8 bg-white/5">
                    <input
                        type="text"
                        placeholder="ENTER_HASH..."
                        className="w-full text-4xl lg:text-7xl font-black italic outline-none bg-transparent placeholder:opacity-10 text-white uppercase"
                    />
                    <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-1 text-[8px] font-black italic">TARGET_LOCK_v3.2</div>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-12">
                <aside className="space-y-16 border-l-4 border-white pl-8">
                    <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#999]">SECTORS</h3>
                        <nav className="flex flex-col space-y-6 text-3xl font-black italic">
                            {['OUTERWEAR', 'TECH-KIT', 'HARDWARE', 'ARCHIVES'].map(cat => (
                                <a key={cat} href="#" className="hover:line-through transition-all decoration-4 underline-offset-8 decoration-white">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#999]">STRENGTH</h3>
                        <nav className="flex flex-col space-y-6 text-3xl font-black italic">
                            {['DROP_01', 'RE-RELEASE', 'PROTOTYPE', 'VOID'].map(i => (
                                <a key={i} href="#" className="hover:line-through transition-all decoration-4 underline-offset-8 decoration-white">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="flex justify-between items-end border-b-8 border-white pb-12">
                        <p className="text-sm font-black uppercase tracking-tighter italic">SCAN_RESULTS: 88_ENTITIES_LOCATED</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest">
                            <span className="underline decoration-4">PRIORITY</span>
                            <span className="opacity-20 text-white">RECRUIT_ONLY</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-white border-px border-white">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="group bg-black p-12 space-y-12 relative overflow-hidden hover:bg-white hover:text-black transition-all duration-300">
                                <div className="absolute top-4 right-4 text-[6vw] font-black text-white/5 group-hover:text-black/5 pointer-events-none">X808</div>
                                <div className="aspect-square bg-white border-2 border-white/10 p-12 relative group-hover:rotate-6 transition-transform">
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain grayscale brightness-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[300ms]"
                                        alt="Hype Entity"
                                    />
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="space-y-2">
                                        <h4 className="text-4xl font-black italic uppercase leading-none">ENTITY_{i}</h4>
                                        <p className="text-xs font-bold opacity-40">HASH://100X_{i}</p>
                                    </div>
                                    <p className="text-4xl font-black italic">$880</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
