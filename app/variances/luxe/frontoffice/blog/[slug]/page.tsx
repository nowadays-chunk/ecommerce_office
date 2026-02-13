"use client";

import React from 'react';

export default function LuxeBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] font-serif">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-px h-16 bg-black/10"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4af37] italic">HERITAGE_LOG // OCT 12, 2025</p>
                <h1 className="text-6xl lg:text-9xl font-light tracking-tighter uppercase leading-none italic max-w-5xl">THE_ART_OF_ETERNAL_CRAFT.</h1>
                <div className="w-32 h-px bg-black/10"></div>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-24">
                <div className="aspect-[16/9] bg-[#f8f8f8] mb-24 grayscale brightness-110">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" />
                </div>

                <div className="prose prose-2xl prose-stone italic leading-[1.8] text-[#1a1a1a]/80 space-y-12">
                    <p className="first-letter:text-9xl first-letter:font-light first-letter:mr-8 first-letter:float-left first-letter:text-[#d4af37]">Craftsmanship is the silent dialogue between the artisan and the element. It is a process devoid of haste, where every second is measured by the resonance of the material. In the pursuit of the Absolute, we find that time is our most valuable raw material.</p>
                    <p>The journey of a single Luxe vessel begins long before the first tool is drawn. It starts in the silence of the archive, where the blueprints of our heritage are guarded with religious fervor. Every curve is a reflection of a century-old standard, refined through the lens of modern exclusivity.</p>
                    <blockquote className="border-l-8 border-[#d4af37] pl-12 py-8 text-4xl font-light italic leading-tight text-black">
                        "To create something eternal, one must first master the art of the ephemeral."
                    </blockquote>
                    <p>Our artisans undergo a decade of integration before they are permitted to forge the Absolute Collection. This ensures that every acquisition is not merely an object, but a piece of structural history, a testament to the unyielding standards of the Luxe archive.</p>
                </div>

                <div className="pt-24 border-t-2 border-black/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <button className="hover:text-[#d4af37] transition-colors">PREV_ARCHIVE</button>
                    <button className="hover:text-[#d4af37] transition-colors">NEXT_ARCHIVE</button>
                </div>
            </main>
        </div>
    );
}
