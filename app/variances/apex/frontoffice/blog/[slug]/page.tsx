"use client";

import React from 'react';

export default function ApexBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[18vw] font-black text-[#ff3e3e]/5 uppercase select-none pointer-events-none -skew-x-12">LEGEND</div>
                <div className="w-24 h-4 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] skew-x-[-12deg] shadow-[0_0_30px_#ff3e3e]"></div>
                <p className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/40 italic">TACTICAL_LOG // OCT 12, 2025 // v8.01.XP</p>
                <h1 className="text-7xl lg:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white">
                    NEURAL_PEAK.
                </h1>
            </header>

            <main className="max-w-5xl mx-auto pb-48 space-y-32 relative z-10">
                <div className="bg-black p-4 border-4 border-[#ff3e3e]/20 shadow-[0_0_100px_rgba(255,62,62,0.15)] relative group overflow-hidden -skew-x-6 hover:skew-x-0 transition-transform">
                    <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#ff3e3e] italic group-hover:animate-pulse">DECRYPTING_MISSION_OVERLAY...</div>
                    <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80" className="w-full h-[50vh] object-cover grayscale brightness-125 group-hover:grayscale-0 transition-all duration-[6s]" />
                </div>

                <div className="space-y-16 text-3xl font-black italic leading-[1.2] text-white/80 uppercase">
                    <p className="bg-[#ff3e3e] text-black px-8 py-4 inline-block -skew-x-12">The divide between the legend and the operative is 1ms. It is a cognitive threshold where the neural link becomes the primary interface for execution.</p>
                    <p className="text-[#ff3e3e]/80 border-l-8 border-[#ff3e3e] pl-8">Analyzing the tactical ripple of a high-amplitude trigger event reveals the necessity for absolute squad synchronization. You don't just act in a vacuum; you act as a node in the squad's neural network.</p>
                    <div className="bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white p-20 -skew-x-12 shadow-[0_0_100px_rgba(255,62,62,0.4)] text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-6xl leading-tight">"AMPLITUDE_IS_THE_ONLY_METRIC."</p>
                    </div>
                    <p className="opacity-60">Initiate recruitment. The legend arc is not a narrative; it is a structural progression through the tiers of neural synchronization. By adopting the v8.01 protocol, you are optimized for sector 88 deployment. Results are the only transmission we accept.</p>
                </div>

                <div className="pt-24 border-t-8 border-[#ff3e3e]/20 flex justify-between items-center text-4xl font-black uppercase tracking-tighter text-[#ff3e3e]">
                    <button className="hover:scale-110 transition-all -skew-x-12 px-8 border border-transparent hover:border-[#ff3e3e]">PREV_MISSION</button>
                    <button className="hover:scale-110 transition-all -skew-x-12 px-8 border border-transparent hover:border-[#ff3e3e]">NEXT_MISSION</button>
                </div>
            </main>
        </div>
    );
}
