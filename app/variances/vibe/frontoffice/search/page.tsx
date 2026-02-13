"use client";

import React from 'react';

export default function VibeSearch() {
    return (
        <div className="min-h-screen bg-[#fff5e6] text-[#ff4d6d] p-12 lg:p-24 space-y-24 font-serif italic">
            <header className="max-w-4xl space-y-12 relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#ff4d6d]/5 blur-[80px] rounded-full animate-pulse pointer-events-none"></div>
                <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#ff4d6d]/60">
                    <span className="w-12 h-[2px] bg-[#ff4d6d]"></span>
                    <span>The_Analog_Search</span>
                </div>
                <h1 className="text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase">TUNE_IN.</h1>
                <div className="relative border-b-4 border-[#ff4d6d] pb-8 bg-white/30 backdrop-blur-md rounded-t-[3rem] p-8">
                    <input
                        type="text"
                        placeholder="Search_the_groove..."
                        className="w-full text-4xl lg:text-7xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-[#ff4d6d] uppercase tracking-tighter"
                    />
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-16 border-l-4 border-[#ff4d6d]/20 pl-8">
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/40">GENRES</h3>
                        <nav className="flex flex-col space-y-4 text-3xl font-black italic">
                            {['Vaporwave', 'City Pop', 'Lo-Fi', 'Disco'].map(cat => (
                                <a key={cat} href="#" className="hover:text-black hover:translate-x-4 transition-all duration-700">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/40">FORMATS</h3>
                        <nav className="flex flex-col space-y-4 text-3xl font-black italic">
                            {['Vinyl', 'Cassette', 'Reel', 'Zine'].map(i => (
                                <a key={i} href="#" className="hover:text-black hover:translate-x-4 transition-all duration-700">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="flex justify-between items-end bg-white/40 p-10 border-b-4 border-[#ff4d6d]/10">
                        <p className="text-[10px] font-black uppercase tracking-widest italic opacity-40">Rotation_Count: 88_Records_Spun</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest italic">
                            <span className="text-[#ff4d6d] underline decoration-4 underline-offset-8">Wavy_Picks</span>
                            <span className="opacity-20">New_Pressing</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group space-y-10 relative overflow-hidden text-center">
                                <div className="aspect-square bg-white rounded-full border-8 border-[#ff4d6d]/5 p-20 relative flex items-center justify-center shadow-xl group-hover:rotate-[360deg] transition-transform duration-[5s]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d]/5 to-transparent"></div>
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[3s]"
                                        alt="Vibe Disc"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-3xl font-black italic tracking-tighter text-[#ff4d6d] leading-none uppercase">VIBE_LOG_{i}</h4>
                                    <p className="text-xl font-bold opacity-30">$32.00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
