"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function ZenPDP() {
    const params = useParams();

    return (
        <div className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                {/* Soft Gallery */}
                <div className="relative group">
                    <div className="aspect-[4/5] bg-[#f9faf6] p-20 flex items-center justify-center overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-contain mix-blend-multiply transition-all duration-[3000ms] group-hover:scale-105"
                            alt="Zen Product"
                        />
                    </div>
                    <div className="absolute top-0 right-0 p-8 h-full flex flex-col justify-center space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/60 cursor-pointer hover:bg-white transition-all"></div>
                        ))}
                    </div>
                </div>

                {/* Holistic Details */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#a78b71]">seasonal release // summer 24</div>
                        <h1 className="text-6xl font-light text-[#5f634f] lowercase tracking-tighter leading-none">hibiscus glow serum.</h1>
                        <p className="text-4xl font-light text-[#5f634f]/60">$85</p>
                    </div>

                    <div className="space-y-8 max-w-lg">
                        <p className="text-lg text-[#5f634f]/80 leading-relaxed font-medium">
                            A potent blend of cold-pressed hibiscus petals and wild-harvested sea buckthorn. Designed to restore natural radiance while respecting your skin's biological rhythm.
                        </p>

                        <div className="grid grid-cols-2 gap-8 text-[10px] font-black uppercase tracking-widest text-[#5f634f]/40">
                            <div className="flex items-center space-x-3">
                                <span className="w-1 h-1 bg-[#a78b71] rounded-full"></span>
                                <span>No Synthetic Fragrance</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="w-1 h-1 bg-[#a78b71] rounded-full"></span>
                                <span>Cold-Pressed Extraction</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-[#f3f4ef] space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button className="w-12 h-12 flex items-center justify-center bg-[#f3f4ef] text-[#5f634f] font-bold hover:bg-[#5f634f] hover:text-white transition-all">-</button>
                                <span className="w-4 text-center font-bold text-[#5f634f]">1</span>
                                <button className="w-12 h-12 flex items-center justify-center bg-[#f3f4ef] text-[#5f634f] font-bold hover:bg-[#5f634f] hover:text-white transition-all">+</button>
                            </div>
                            <span className="text-[10px] uppercase font-bold text-[#5f634f]/20">60ml / 2.0 fl.oz</span>
                        </div>

                        <button className="w-full py-6 bg-[#5f634f] text-white font-bold uppercase tracking-widest hover:bg-[#a78b71] transition-all text-sm">
                            Add to Basket
                        </button>

                        <p className="text-center text-[10px] italic text-[#5f634f]/40">Every unit purchased funds 1m² of reforestation.</p>
                    </div>

                    {/* Composition Reveal */}
                    <div className="bg-[#f3f4ef]/50 p-8 space-y-4 rounded-xl border border-white">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#5f634f]">Composition Details</h4>
                        <p className="text-xs text-[#5f634f]/60 leading-relaxed italic">
                            Organic Aloe Barbadensis Leaf Juice, Hibiscus Sabdariffa Flower Extract, Sodium Hyaluronate, Panthenol...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
