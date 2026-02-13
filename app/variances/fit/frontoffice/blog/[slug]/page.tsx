"use client";

import React from 'react';

export default function FitBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-white text-black font-sans italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-black/5 uppercase select-none pointer-events-none -skew-x-12">PEAK</div>
                <div className="w-24 h-4 bg-black skew-x-[-12deg] animate-pulse"></div>
                <p className="text-xs font-black uppercase tracking-[0.5em] text-black/40 italic">ENGINE_LOG // 12 OCT 2025 // v8.01.XP</p>
                <h1 className="text-7xl lg:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.8] text-black">
                    MAX_VELOCITY.
                </h1>
            </header>

            <main className="max-w-5xl mx-auto pb-48 space-y-32 relative z-10">
                <div className="bg-black p-4 border-[12px] border-black shadow-[30px_30px_0px_rgba(0,0,0,0.15)] relative group overflow-hidden transform -skew-x-6 hover:skew-x-0 transition-transform">
                    <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-white italic animate-pulse">OPTIMIZING_OUTPUT_SYNC...</div>
                    <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80" className="w-full aspect-video object-cover grayscale brightness-125 group-hover:grayscale-0 transition-all duration-[6s]" />
                </div>

                <div className="space-y-16 text-3xl font-black italic leading-[1.2] text-black uppercase">
                    <p className="bg-black text-white px-8 py-4 inline-block -skew-x-12">Performance is not a state; it is a calculation. To achieve maximum velocity, the human engine must be synchronized with elite-tier hardware specs.</p>
                    <p className="opacity-60 underline decoration-black decoration-[12px] underline-offset-[16px]">Optimizing your output requires a definitive data loop. Every movement is a metric. Every rep is a structural synchronization event. The transition to elite performance begins with the hardware grid interface.</p>
                    <div className="bg-black text-white p-20 -skew-x-12 shadow-[0_0_80px_rgba(0,0,0,0.2)] text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#ff0000]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-6xl leading-tight">"ELITE_SYNC_IS_THE_ONLY_METRIC."</p>
                    </div>
                    <p className="opacity-60">Initiate the protocol. The Series-X architecture Facilitates a zero-friction data transfer between intention and execution. High-intensity environments demands high-velocity responses. Your engine is now optimized. Deploy for results.</p>
                </div>

                <div className="pt-24 border-t-[12px] border-black flex justify-between items-center text-4xl font-black uppercase tracking-tighter text-black">
                    <button className="hover:bg-black hover:text-white px-12 py-4 transition-all -skew-x-12">PREV_ENGINE</button>
                    <button className="hover:bg-black hover:text-white px-12 py-4 transition-all -skew-x-12">NEXT_ENGINE</button>
                </div>
            </main>
        </div>
    );
}
