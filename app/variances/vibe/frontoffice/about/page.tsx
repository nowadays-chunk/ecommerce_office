"use client";

import React from 'react';

export default function VibeAbout() {
    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-32 h-16 bg-[#ff4d6d] text-[#ffecd1] font-black flex items-center justify-center text-4xl transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">INFO</div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none text-shadow-retro">THE_GLOW.</h1>
                <p className="max-w-xl text-xs font-black uppercase tracking-[0.4em] opacity-60 leading-loose italic">Since the First Tape // Catch the wave // Saturated living // Lo-fi essentials.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48 relative overflow-hidden">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12 relative">
                        <div className="absolute -top-12 -left-12 text-[10vw] font-black text-white/40 uppercase -rotate-12 select-none pointer-events-none">RAW</div>
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter bg-white text-[#ff4d6d] px-6 py-4 inline-block shadow-[10px_10px_0px_#ff4d6d]">OUR_GROOVE.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-90">
                            <p>Vibe isn't something you buy. It's something you tune into. We started in a garage with a stack of VHS tapes and a desire to bring back the warmth of the analog age.</p>
                            <p>Every item in our shop is a frequency filter, designed to saturate your daily experience with the perfect amount of nostalgic grain and saturated color.</p>
                        </div>
                    </div>
                    <div className="aspect-square bg-white p-8 rounded-[4rem] shadow-[20px_20px_0px_rgba(255,77,109,0.2)] transform rotate-3 hover:rotate-0 transition-transform duration-700">
                        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-[3rem] grayscale brightness-110 contrast-125 hover:grayscale-0 transition-all duration-1000" />
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-6xl font-black italic tracking-tighter uppercase italic text-shadow-retro">ANALOG_PILLARS.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40 italic">Tape_Deck_v4.20_Saturate</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Warm_Frequency", desc: "We only source materials that feel human. Natural fibers, organic textures, and colors that pop like a summer dusk." },
                            { title: "Lo-Fi_Logic", desc: "Perfection is boring. We celebrate the glitch, the scratch, and the unique patina of a life lived at full volume." },
                            { title: "Neon_Nostalgia", desc: "A commitment to the aesthetics of the future-past. Bridging the gap between 1988 and 2088." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-12 bg-white rounded-[3rem] shadow-xl border-4 border-[#ff4d6d]/10 space-y-8 hover:-translate-y-4 transition-all duration-500 group">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white bg-[#ff4d6d] px-4 py-2 inline-block rounded-full group-hover:px-8 transition-all">{item.title}</h3>
                                <p className="text-xl font-black italic leading-tight text-[#ff4d6d]/80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 bg-[#ff4d6d] text-[#ffecd1] rounded-[5rem] text-center space-y-12 shadow-[40px_40px_0px_rgba(255,77,109,0.3)]">
                    <h2 className="text-6xl font-black italic tracking-tighter uppercase">JOIN_THE_WAVE.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-black italic">The signal is strong. Are you ready to saturate? Subscribe to the frequency and get the latest drops directly to your inbox.</p>
                    <button className="px-20 py-10 bg-[#ffecd1] text-[#ff4d6d] text-4xl font-black uppercase tracking-tighter rounded-full hover:scale-110 transition-all transform active:scale-90 shadow-2xl">
                        TUNE_IN_NOW
                    </button>
                </section>
            </main>
        </div>
    );
}
