"use client";

import React from 'react';

export default function ZenBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-1.5 h-12 bg-[#22c55e]/20 rounded-full"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e] italic">MINDFULNESS_LOG // CYCLE 88</p>
                <h1 className="text-6xl lg:text-[10rem] font-bold tracking-tighter uppercase leading-none italic max-w-6xl">MORNING_STILLNESS.</h1>
                <div className="flex items-center space-x-6 opacity-40">
                    <div className="w-8 h-px bg-[#2d3a3a]"></div>
                    <p className="text-sm font-medium uppercase tracking-widest text-center italic">The Silent Space</p>
                    <div className="w-8 h-px bg-[#2d3a3a]"></div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <div className="aspect-[16/9] bg-white rounded-[4rem] shadow-2xl p-4 overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-[5s]" />
                </div>

                <div className="prose prose-2xl prose-stone italic leading-[1.8] text-[#2d3a3a]/80 space-y-12">
                    <p className="first-letter:text-9xl first-letter:font-bold first-letter:mr-8 first-letter:float-left first-letter:text-[#22c55e]">The transition from night to day is a sacred bridge, a threshold where the potential of the soul is most vibrant. In the silence of the dawn, we find the answers that were obscured by the noise of the previous cycle.</p>
                    <p>To cultivate morning stillness is not to force the mind into silence, but to provide it with a garden in which to rest. It begins with the physical—the arrangement of your sanctuary, the scent of the morning wood, the weight of the organic linen against your skin.</p>
                    <div className="bg-white rounded-[3rem] p-12 text-center border-4 border-[#22c55e]/5 shadow-sm">
                        <p className="text-3xl font-bold italic leading-tight text-[#22c55e]">"Silence is not the absence of sound, but the presence of everything."</p>
                    </div>
                    <p>As you move through your morning ritual, notice the ripple of your intent. Every action, no matter how small, is an energy transfer. By honoring the stillness of the morning, you synchronize your vibration with the natural rhythm of the earth, entering the cycle of the day with a harmonized mind.</p>
                </div>

                <div className="pt-24 border-t-2 border-[#2d3a3a]/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#22c55e]">
                    <button className="hover:scale-110 transition-transform">PREV_CYCLE</button>
                    <button className="hover:scale-110 transition-transform">NEXT_CYCLE</button>
                </div>
            </main>
        </div>
    );
}
