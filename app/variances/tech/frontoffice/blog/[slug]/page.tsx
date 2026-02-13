"use client";

import React from 'react';

export default function TechBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-8 relative group">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-[#0062ff]/5 uppercase select-none pointer-events-none italic -skew-x-12">DATA</div>
                <div className="w-24 h-[1px] bg-[#00f2ff] shadow-[0_0_15px_#00f2ff] animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">CORE_EVOLUTION // 2025.10.12.04 // v9.01</p>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white skew-x-[-12deg]">
                    NEURAL_LINK_v9.
                </h1>
            </header>

            <main className="max-w-5xl mx-auto pb-48 space-y-32 relative z-10">
                <div className="bg-black/40 backdrop-blur-3xl p-4 border border-[#00f2ff]/20 shadow-[0_0_80px_rgba(0,242,255,0.15)] relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#00f2ff]/40 italic animate-pulse">DECRYPTING_PRIMARY_VISUAL...</div>
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80" className="w-full aspect-video object-cover grayscale brightness-125 group-hover:grayscale-0 transition-all duration-[8s]" />
                </div>

                <div className="grid lg:grid-cols-4 gap-12 items-start mt-24">
                    <div className="lg:col-span-1 space-y-8 sticky top-24">
                        <div className="p-8 border border-[#00f2ff]/10 bg-[#00f2ff]/5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-4">NODE_STATS</p>
                            <ul className="space-y-4 text-sm font-black text-white/60">
                                <li>Uptime: 99.99%</li>
                                <li>Sync_Rate: Elite</li>
                                <li>Data_Flow: Max</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:col-span-3 space-y-16 text-2xl font-black italic leading-[1.6] text-white/80 uppercase">
                        <p className="text-white border-l-8 border-[#00f2ff] pl-8">The integration of the V9 architecture marks a definitive shift in the human-machine interface. We are no longer observing data; we are inhabiting it.</p>
                        <p>The silicon architecture of the new core module facilitates a zero-latency handshake with the neural cortex. This is achieved through a proprietary quantum alignment that synchronizes your cognitive frequencies with the hardware grid.</p>
                        <div className="bg-[#00f2ff]/10 p-12 border border-[#00f2ff] relative">
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00f2ff] rotate-45"></div>
                            <p className="text-4xl text-white leading-tight">"THE UPGRADE IS NOT OPTIONAL. IT IS UNAVOIDABLE."</p>
                        </div>
                        <p>By bypassing the traditional sensory inputs, the V9 interface allows for direct data stream ingestion. This enhances decision-making speeds by 1200% in high-intensity environments. The future is a unified data stream, and your profile is the primary node.</p>
                    </div>
                </div>

                <div className="pt-24 border-t border-[#00f2ff]/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#00f2ff]">
                    <button className="hover:text-white transition-colors border border-transparent px-6 py-2 hover:border-[#00f2ff] transition-all">PREV_STREAM</button>
                    <button className="hover:text-white transition-colors border border-transparent px-6 py-2 hover:border-[#00f2ff] transition-all">NEXT_STREAM</button>
                </div>
            </main>
        </div>
    );
}
