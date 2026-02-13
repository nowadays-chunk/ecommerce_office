"use client";

import React from 'react';

export default function GrubBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-black italic p-12 lg:p-24 overflow-hidden">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-16 bg-[#22c55e] rounded-full opacity-20 animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e] italic">FIELD_LOG // HARVEST OCT 2025 // v2.01</p>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic max-w-6xl">THE_FORAGERS_GUIDE.</h1>
            </header>

            <main className="max-w-5xl mx-auto pb-48 space-y-32 relative z-10">
                <div className="bg-white rounded-[5rem] p-6 shadow-2xl border-8 border-white group overflow-hidden relative transform rotate-1">
                    <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#22c55e] opacity-40 uppercase italic group-hover:animate-pulse">DECODING_HARVEST_DATA...</div>
                    <img src="https://images.unsplash.com/photo-1501676491272-7bbd3e71f7e1?auto=format&fit=crop&w=1200&q=80" className="w-full aspect-video object-cover rounded-[4rem] grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[6s]" />
                </div>

                <div className="space-y-16 text-3xl font-black italic leading-[1.4] text-[#2d3a3a]/80 uppercase">
                    <p className="bg-white text-[#2d3a3a] px-8 py-4 inline-block rounded-full shadow-2xl border-4 border-white">Foraging is the first language of the community. It is a return to the silent dialogue with the soil, where every root found is a promise kept.</p>
                    <p className="opacity-60 underline decoration-[#22c55e] decoration-8 underline-offset-12 decoration-skip-ink-none">In the winter cycle, the harvest moves deep. We look for the hidden resilience of the earth—the roots that have absorbed the minerals of the seasons. This is how we feed the tribe with the essential nutrients of the wild.</p>
                    <div className="bg-[#2d3a3a] text-white p-20 rounded-[8rem] shadow-2xl relative overflow-hidden group text-center">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-6xl leading-tight">"TRUTH_GROWS_IN_THE_DEEP_SOIL."</p>
                    </div>
                    <p className="opacity-60">Respect the cycle. Take only what is given, and always leave the soil better than you found it. The forager's path is one of stewardship. By following the guide, you become an essential link in the communal food network. The harvest is ready.</p>
                </div>

                <div className="pt-24 border-t-8 border-[#22c55e]/10 flex justify-between items-center text-4xl font-black uppercase tracking-tighter text-[#2d3a3a]">
                    <button className="hover:text-[#22c55e] transition-colors">PREV_HARVEST</button>
                    <button className="hover:text-[#22c55e] transition-colors">NEXT_HARVEST</button>
                </div>
            </main>
        </div>
    );
}
