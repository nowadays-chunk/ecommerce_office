"use client";

import React from 'react';

export default function GlintSearch() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] p-12 lg:p-24 space-y-24">
            <header className="max-w-4xl space-y-12 relative">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#ff8fa3]/10 blur-[150px] rounded-full animate-pulse pointer-events-none"></div>
                <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#ff8fa3]">
                    <span className="w-16 h-[1px] bg-[#ff8fa3]"></span>
                    <span>The_Aura_Discovery</span>
                </div>
                <h1 className="text-8xl lg:text-[10rem] font-black italic tracking-tighter leading-[0.85] text-[#4a3a4a] uppercase">SHIMMER.</h1>
                <div className="relative border-b border-[#ff8fa3]/20 pb-12 bg-white/40 backdrop-blur-3xl rounded-[4rem] p-12 shadow-[0_50px_100px_-20px_rgba(255,143,163,0.1)]">
                    <input
                        type="text"
                        placeholder="Find_your_glow..."
                        className="w-full text-4xl lg:text-7xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#4a3a4a] tracking-tighter uppercase"
                    />
                    <div className="absolute right-12 bottom-12 text-[8px] font-black uppercase tracking-[0.6em] text-[#ff8fa3] italic">Encryption_Radiant</div>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-16 border-r border-[#ff8fa3]/10 pr-12">
                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">AURA_REGISTRY</h3>
                        <nav className="flex flex-col space-y-6 text-3xl font-light italic">
                            {['Radiance', 'Satin', 'Velvet', 'Prism'].map(cat => (
                                <a key={cat} href="#" className="hover:text-[#ff8fa3] transition-all hover:translate-x-4 duration-700 uppercase">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">FINISH</h3>
                        <nav className="flex flex-col space-y-6 text-3xl font-light italic">
                            {['Matte', 'Dewy', 'Luminous', 'Glaze'].map(i => (
                                <a key={i} href="#" className="hover:text-[#ff8fa3] transition-all hover:translate-x-4 duration-700 uppercase">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="flex justify-between items-center bg-white p-12 rounded-[4rem] shadow-2xl relative border border-[#ff8fa3]/5">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff8fa3]/5 blur-[60px] rounded-full"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest italic text-[#ff8fa3]">Spectral_Found: 88_Muses_Identified</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest italic text-[#4a3a4a]/40">
                            <span className="text-[#ff8fa3] underline decoration-2 underline-offset-8">Glow_High</span>
                            <span className="opacity-40">Newest_Ritual</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group space-y-10 relative overflow-hidden bg-white p-10 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(255,143,163,0.1)] hover:shadow-2xl transition-all duration-700 border border-[#ff8fa3]/5">
                                <div className="aspect-square bg-[#fffafd] rounded-[2.5rem] p-10 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff8fa3]/10 to-transparent"></div>
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[3s]"
                                        alt="Glint Muse"
                                    />
                                </div>
                                <div className="space-y-4 text-center">
                                    <h4 className="text-2xl font-light italic tracking-tighter text-[#4a3a4a] leading-none uppercase">AURA_MOD_{i}</h4>
                                    <p className="text-xl font-black text-[#d4af37] tracking-widest">$85.00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
