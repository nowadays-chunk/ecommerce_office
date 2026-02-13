"use client";

import React from 'react';

export default function HypeBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-black text-white font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 space-y-12 relative items-center text-center">
                <div className="absolute -top-24 -left-12 text-[15vw] font-black text-white/5 uppercase -rotate-6 select-none pointer-events-none">MANIFESTO</div>
                <div className="w-32 h-16 bg-white text-black font-black flex items-center justify-center text-3xl -skew-x-12">DATA_LOG</div>
                <p className="text-xs font-black uppercase tracking-[0.5em] text-white/40 italic">DROP_INTEL // 20.10.2025 // v3.02</p>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none -skew-x-12 max-w-6xl">INDUSTRIAL_CORE.</h1>
            </header>

            <main className="max-w-5xl mx-auto pb-48 space-y-24 relative z-10">
                <div className="outline-8 outline-white p-2 bg-white -rotate-1">
                    <div className="bg-black aspect-video overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale brightness-125 group-hover:grayscale-0 transition-all duration-[3s]" />
                    </div>
                </div>

                <div className="space-y-16 text-2xl font-black italic leading-[1.4] uppercase">
                    <p className="bg-white text-black px-6 py-2 inline-block -skew-x-6">The status quo is a structural defect. The transition toward the industrial core is not a choice; it is a mechanical necessity for survival in the urban grid.</p>
                    <p className="opacity-60 decoration-white decoration-8 underline decoration-skip-ink-none">We dismantle the traditional architecture of fashion to build something prioritized. Every seam is a weld. Every fabric is a structural component. This is not aesthetics; it is fabrication for high-intensity living.</p>
                    <div className="p-16 border-8 border-white bg-white text-black transform rotate-2">
                        <p className="text-5xl leading-none">"COMMITMENT IS THE ONLY METRIC THAT MATTERS."</p>
                    </div>
                    <p className="opacity-60">Operatives must synchronize with the grid. The modern machine demands a uniform of absolute resilience. By integrating the industrial core, you are optimized for disruption. No compromise. No apologies. Just structural execution.</p>
                </div>

                <div className="pt-24 border-t-8 border-white flex justify-between items-center text-2xl font-black uppercase tracking-tighter">
                    <button className="hover:bg-white hover:text-black px-8 py-2 transition-all -skew-x-6">PREV_DROP</button>
                    <button className="hover:bg-white hover:text-black px-8 py-2 transition-all -skew-x-6">NEXT_DROP</button>
                </div>
            </main>
        </div>
    );
}
