"use client";

import React from 'react';

export default function NordicBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-8 h-px bg-[#2d2d2d]/20"></div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2d2d2d]/40 italic">MATERIAL_LOG // 12 OCT 2025</p>
                <h1 className="text-6xl lg:text-9xl font-light tracking-tight uppercase leading-none max-w-5xl">THE_WEIGHT_OF_ASH.</h1>
                <div className="w-12 h-px bg-[#2d2d2d]/10"></div>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-24">
                <div className="aspect-[16/9] bg-[#fafafa] mb-24 border border-[#2d2d2d]/5 overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[4s]" />
                </div>

                <div className="prose prose-xl prose-stone leading-relaxed text-[#2d2d2d]/80 space-y-12 italic">
                    <p className="first-letter:text-8xl first-letter:font-light first-letter:mr-6 first-letter:float-left first-letter:text-[#2d2d2d]">Ash wood is defined by its resilience. It is a material that carries the silent strength of the northern forests, offering a structural honesty that is rarely found in the modern world. In this study, we explore the specific gravity of the material and its impact on the longevity of the object.</p>
                    <p>The selection process at the Nordic studio is one of rigorous reduction. We look for pieces of ash that retain their natural soul—the grain must tell a story of endurance, of surviving the harsh winters of the north. This material honesty is what allows a minimalist chair to feel grounded and essential.</p>
                    <div className="p-12 bg-[#fafafa] border border-[#2d2d2d]/10 text-center">
                        <p className="text-2xl font-light uppercase tracking-tight">"Functionality is the highest form of beauty."</p>
                    </div>
                    <p>By respecting the inherent weight and texture of the wood, we create objects that are not merely furniture, but essential studio companions. The Ash Wood Chair is an exercise in utility—every joint and curve is a response to the material's demand for structural integrity. It is utility, refined to its most beautiful state.</p>
                </div>

                <div className="pt-24 border-t border-[#2d2d2d]/10 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40">
                    <button className="hover:text-[#2d2d2d] transition-colors">PREV_LOG</button>
                    <button className="hover:text-[#2d2d2d] transition-colors">NEXT_LOG</button>
                </div>
            </main>
        </div>
    );
}
