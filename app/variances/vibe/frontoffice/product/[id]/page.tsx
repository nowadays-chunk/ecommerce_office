"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function VibePDP() {
    const params = useParams();

    return (
        <div className="min-h-screen py-24 px-6 lg:px-20 bg-[#fffaf0] font-serif text-[#432]">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                {/* Immersive Audio View */}
                <div className="relative group">
                    <div className="aspect-square bg-white shadow-[40px_40px_0px_0px_rgba(251,146,60,0.1)] p-20 flex items-center justify-center overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-cover rounded-full shadow-[0_0_60px_rgba(0,0,0,0.2)] animate-spin-slow group-hover:scale-105 transition-transform duration-[3000ms]"
                            alt="Retro Vinyl"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#fffaf0] rounded-full border-8 border-white"></div>
                    </div>
                    {/* Analog Labels */}
                    <div className="absolute -bottom-10 -left-10 bg-[#fb923c] text-white px-8 py-4 font-black italic text-xl transform rotate-3 shadow-2xl">
                        180G_HEAVY_VINYL
                    </div>
                </div>

                {/* Album Details */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="text-xs font-black uppercase tracking-[0.4em] text-[#fb923c]">Album No. 42 // Stereo Fidelity</div>
                        <h1 className="text-6xl lg:text-8xl font-black italic tracking-tighter leading-none text-[#432]">MIDNIGHT <br /> JAZZ <br /> SESSIONS.</h1>
                        <p className="text-4xl font-black text-[#ec4899]">$45.00</p>
                    </div>

                    <div className="space-y-10">
                        <p className="text-2xl text-[#432]/60 leading-relaxed font-medium">
                            Recorded live at the legendary Blue Room in 1968. Remastered for 2024 using original analog tapes. Warmth that you can feel.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#fb923c]">Tracklist // Side A</h3>
                            <ul className="space-y-4 text-sm font-bold text-[#432]/80 uppercase italic">
                                <li>01. Neon Shadows (5:42)</li>
                                <li>02. Midnight Waltz (4:12)</li>
                                <li>03. Echoes of Yesterday (6:33)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-12 border-t-4 border-[#432]/10 space-y-8">
                        <div className="flex items-center space-x-12">
                            <button className="w-full py-8 bg-[#432] text-white text-2xl font-black italic uppercase tracking-tighter hover:bg-[#fb923c] transition-all transform hover:-rotate-2 shadow-2xl">
                                DROP_THE_NEEDLE
                            </button>
                        </div>

                        <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-[#432]/40">
                            <span>Limited_Pressing_500</span>
                            <span>Eco_Friendly_Cardboard</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
