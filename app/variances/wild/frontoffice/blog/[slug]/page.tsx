"use client";

import React from 'react';

export default function WildBlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 text-[18vw] font-black text-[#2d2a22]/5 uppercase italic select-none pointer-events-none -rotate-6">WHISPER</div>
                <div className="w-16 h-16 bg-white border border-[#2d2a22]/10 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-2 h-2 bg-[#2d2a22]"></div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#8b7e66] italic">WHISPER_LOG // CYCLE 88 // v1.0.RAW</p>
                <h1 className="text-7xl lg:text-[10rem] font-light tracking-tighter uppercase leading-none italic text-[#2d2a22] max-w-6xl">THE_DEEP_VALLEY.</h1>
            </header>

            <main className="max-w-4xl mx-auto pb-48 space-y-32 relative z-10">
                <div className="bg-white/40 backdrop-blur-3xl rounded-[4rem] p-6 shadow-2xl border border-[#2d2a22]/5 group overflow-hidden relative transform rotate-1">
                    <div className="absolute top-0 right-0 p-12 text-[10px] font-bold text-[#8b7e66] opacity-40 uppercase italic group-hover:animate-pulse">LISTENING_TO_THE_EARTH...</div>
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80" className="w-full h-[60vh] object-cover rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-[10s]" />
                </div>

                <div className="prose prose-2xl prose-stone italic leading-[1.8] text-[#2d2a22]/80 space-y-12">
                    <p className="first-letter:text-9xl first-letter:font-light first-letter:mr-8 first-letter:float-left first-letter:text-[#8b7e66]">The deep valley is the archive of the earth. In its silence, we find the resonance of cycles that precede the noise of our civilizations. To listen to the whisper is to acknowledge the raw matter of existence.</p>
                    <p>Our study of stone is an attempt to recover the base architecture of our habitat. We don't look for perfection; we look for the truth of the element. A piece of raw stone carries the structural history of the planet, providing a grounding force for any sanctuary.</p>
                    <div className="bg-white/60 p-16 rounded-[4rem] shadow-xl text-center border border-[#8b7e66]/10 transform -rotate-1">
                        <p className="text-4xl font-light italic tracking-tighter text-[#2d2a22] leading-tight">"STILLNESS IS THE PRIMARY FREQUENCY OF THE WILD."</p>
                    </div>
                    <p>Embracing the winter stillness is an act of restoration. As the cycles slow, the core becomes more vibrant. By following the whispers of the deep valley, you align your intent with the natural preserve. Stay silent. Stay grounded. The earth is speaking.</p>
                </div>

                <div className="pt-24 border-t border-[#8b7e66]/10 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">
                    <button className="hover:scale-110 transition-all">PREV_WHISPER</button>
                    <button className="hover:scale-110 transition-all">NEXT_WHISPER</button>
                </div>
            </main>
        </div>
    );
}
