"use client";

import React from 'react';

export default function WildSearch() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] p-12 lg:p-24 space-y-24 font-serif italic">
            <header className="max-w-4xl space-y-12 relative text-center mx-auto">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#344e41]/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-1 h-16 bg-[#344e41]"></div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#344e41]/60">The_Silent_Acquisition</span>
                </div>
                <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-none text-[#2d2a22] uppercase">STILL.</h1>
                <div className="relative border-b-2 border-[#344e41]/10 pb-12 bg-white/20 p-12 rounded-[5rem] backdrop-blur-xl">
                    <input
                        type="text"
                        placeholder="Find_your_way..."
                        className="w-full text-5xl lg:text-7xl font-bold italic outline-none bg-transparent placeholder:opacity-5 text-[#2d2a22] uppercase tracking-tighter text-center"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 text-[8px] font-black uppercase tracking-[0.4em] text-[#344e41] opacity-40">Earth_Log_v1.08_Radiant</div>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-24 border-l-2 border-[#344e41]/10 pl-12">
                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#344e41]">FOREST_ZONES</h3>
                        <nav className="flex flex-col space-y-6 text-3xl font-bold italic">
                            {['Deep_Valley', 'River_Edge', 'North_Slope', 'Moonlight'].map(cat => (
                                <a key={cat} href="#" className="hover:text-[#344e41] hover:translate-x-4 transition-all duration-700 uppercase">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#344e41]">ELEMENTS</h3>
                        <nav className="flex flex-col space-y-6 text-3xl font-bold italic">
                            {['Botanical', 'Mineral', 'Craft', 'Aura'].map(i => (
                                <a key={i} href="#" className="hover:text-[#344e41] hover:translate-x-4 transition-all duration-700 uppercase">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="flex justify-between items-center bg-white/40 p-12 rounded-[4rem] shadow-2xl relative border-2 border-[#344e41]/5">
                        <p className="text-[10px] font-black uppercase tracking-widest italic text-[#344e41]/40">Scan_Results: 124_Souls_Discovered</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest italic text-[#344e41]">
                            <span className="underline decoration-4">Purity_High</span>
                            <span className="opacity-20">Ancient_Cycle</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group space-y-12 relative overflow-hidden bg-white/50 p-12 rounded-[4rem] shadow-sm hover:shadow-2xl transition-all duration-1000 border border-white">
                                <div className="aspect-square bg-white rounded-[3rem] p-12 relative flex items-center justify-center overflow-hidden shadow-inner">
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[3s] sepia-[0.3]"
                                        alt="Wild Entity"
                                    />
                                </div>
                                <div className="space-y-4 text-center">
                                    <h4 className="text-3xl font-black italic tracking-tighter text-[#2d2a22] leading-none uppercase">WILD_ITEM_{i}</h4>
                                    <p className="text-2xl font-bold text-[#344e41] tracking-tighter">$22.00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
