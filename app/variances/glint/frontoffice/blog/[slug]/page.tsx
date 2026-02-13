"use client";

import React from 'react';

export default function GlintBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative group">
                <div className="w-16 h-px bg-[#ff8fa3] shadow-[0_0_20px_#ff8fa3] animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff8fa3]/60 italic">RADIANT_LOG // OCT 12, 2025 // v8.0</p>
                <h1 className="text-7xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none italic text-[#4a3a4a] max-w-6xl">RITUALS_OF_LUMEN.</h1>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32 relative z-10">
                <div className="bg-white/60 backdrop-blur-3xl rounded-[5rem] p-6 shadow-[0_40px_100px_-20px_rgba(255,143,163,0.1)] border border-[#ff8fa3]/10 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#ff8fa3] opacity-40 uppercase italic group-hover:animate-pulse">DECRYPTING_AURA_DATA...</div>
                    <img src="https://images.unsplash.com/photo-1540555700478-4be289aefcf1?auto=format&fit=crop&w=1200&q=80" className="w-full h-[60vh] object-cover rounded-[4rem] grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[8s]" />
                </div>

                <div className="prose prose-2xl prose-stone italic leading-[1.8] text-[#4a3a4a]/80 space-y-12">
                    <p className="first-letter:text-9xl first-letter:font-black first-letter:mr-8 first-letter:float-left first-letter:text-[#ff8fa3]">Luminescence is not a quality of the surface, but a reflection of the soul's synchronization with the light. In the museum of the ritual, we find the frequencies that allow our aura to refract the world with absolute clarity.</p>
                    <p>A radiant morning sequence begins with the intentional capture of the early cycle light. It is a process of curation—selecting the materials that will carry your shimmer through the day. Every oil, every silk thread, is a tool for aesthetic alignment.</p>
                    <div className="bg-white rounded-[4rem] p-16 text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#ff8fa3]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-4xl font-black italic tracking-tighter text-[#ff8fa3] leading-tight">"THE MUSEUM IS NOT A PLACE, IT IS A STATE OF RADIANCE."</p>
                    </div>
                    <p>By protecting your shimmer through the shorter cycles, you ensure a museum-tier presence in every environment. The ritual is an initiation into the pearl-shell philosophy—growing a layer of refractive beauty that shields the core while illuminating the room. Your aura is the primary acquisition.</p>
                </div>

                <div className="pt-24 border-t border-[#ff8fa3]/10 flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]">
                    <button className="hover:scale-110 transition-transform">PREV_RITUAL</button>
                    <button className="hover:scale-110 transition-transform">NEXT_RITUAL</button>
                </div>
            </main>
        </div>
    );
}
