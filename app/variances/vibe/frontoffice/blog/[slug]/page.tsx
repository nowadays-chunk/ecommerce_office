"use client";

import React from 'react';

export default function VibeBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative group">
                <div className="absolute -top-20 -left-12 text-[15vw] font-black text-[#ff4d6d]/5 uppercase select-none pointer-events-none italic">LO-FI</div>
                <div className="w-16 h-16 bg-[#ff4d6d] rounded-full animate-bounce shadow-xl"></div>
                <p className="text-xs font-black uppercase tracking-[0.5em] text-[#ff4d6d]/40 italic">TAPE_LOG // OCT 20, 2025 // v4.20</p>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none text-shadow-retro max-w-6xl">LOFI_BEATS.</h1>
            </header>

            <main className="max-w-5xl mx-auto pb-48 space-y-24 relative z-10">
                <div className="bg-white rounded-[4rem] p-4 shadow-[20px_20px_0px_rgba(255,77,109,0.1)] border-4 border-[#ff4d6d]/10 transform -rotate-1 group overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1514525253361-b83f85f127c0?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover rounded-[3rem] grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[6s]" />
                </div>

                <div className="space-y-16 text-2xl font-black italic leading-[1.6] text-[#ff4d6d]/80 uppercase">
                    <p className="bg-white text-[#ff4d6d] px-6 py-2 inline-block shadow-[10px_10px_0px_#ff4d6d]">The frequency of the afternoon is a direct response to the saturation of the soul. We don't just listen to music; we inhabit the grain of the sound.</p>
                    <p className="opacity-60 underline decoration-[#ff4d6d] decoration-8 underline-offset-12">Lofi beats are the structural foundation of the analog lifestyle. It's about finding the beauty in the hiss, the warmth in the imperfection. A saturated afternoon requires a saturated frequency.</p>
                    <div className="p-16 bg-[#ff4d6d] text-white rounded-[5rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-5xl leading-none text-center">"SATURATION_IS_A_STATE_OF_MIND."</p>
                    </div>
                    <p className="opacity-60">As you sync with the wave, notice how the urban horizon begins to glow. This is the effect of the analog grain. Keep the volume high, the frequency low, and the vibe saturated. See you on the B-side.</p>
                </div>

                <div className="pt-24 border-t-8 border-[#ff4d6d]/20 flex justify-between items-center text-2xl font-black uppercase tracking-tighter text-[#ff4d6d]">
                    <button className="hover:scale-110 transition-transform origin-left">PREV_WAVE</button>
                    <button className="hover:scale-110 transition-transform origin-right">NEXT_WAVE</button>
                </div>
            </main>
        </div>
    );
}
