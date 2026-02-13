"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function GlintPDP() {
    const params = useParams();

    return (
        <div className="min-h-screen py-24 px-6 lg:px-20 bg-[#fffafd] text-[#4a3a4a]">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                {/* Ethereal View */}
                <div className="relative group">
                    <div className="aspect-[4/5] bg-white shadow-[0_50px_100px_-20px_rgba(255,143,163,0.1)] p-24 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#fff0f3] to-white/0 opacity-40"></div>
                        <img
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-[3000ms]"
                            alt="Luxury Beauty Product"
                        />
                    </div>
                    {/* Sparkle HUD Overlays */}
                    <div className="absolute top-10 right-10 text-right space-y-4">
                        <div className="bg-white/40 backdrop-blur-xl p-6 border border-white/60 shadow-2xl space-y-1">
                            <p className="text-[10px] font-black uppercase text-[#ff8fa3] tracking-widest">LUMINESCENCE</p>
                            <p className="text-3xl font-light italic">98.4%</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-xl p-6 border border-white/60 shadow-2xl space-y-1">
                            <p className="text-[10px] font-black uppercase text-[#d4af37] tracking-widest">SILK_INDEX</p>
                            <p className="text-3xl font-light italic">HIGH</p>
                        </div>
                    </div>
                </div>

                {/* Product Eloquence */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 text-[12px] font-bold uppercase tracking-[0.5em] text-[#ff8fa3]">
                            <span className="w-12 h-[1px] bg-[#ff8fa3]"></span>
                            <span>AURA // MASTERPIECE</span>
                        </div>
                        <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter leading-[0.8] text-[#4a3a4a] uppercase">LUMINOUS <br /> GLOW <br /> SERUM.</h1>
                        <div className="flex items-end gap-8">
                            <span className="text-6xl font-light italic text-[#d4af37]">$85.00</span>
                            <span className="text-xs font-black uppercase border border-[#ff8fa3]/20 px-4 py-1 text-[#ff8fa3]">LIMITED_EDITION</span>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <p className="text-2xl font-light text-[#4a3a4a]/60 leading-tight italic max-w-lg">
                            Light-reflecting micro-spheres suspended in a nutrient-dense botanical elixir. A multi-dimensional serum that blurs and brightens with every drop.
                        </p>

                        <div className="space-y-8">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#4a3a4a]/40 bg-white/60 px-6 py-2 inline-block">PERFECT_MATCH</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {['Fair', 'Medium', 'Tan', 'Deep'].map(s => (
                                    <button key={s} className="py-6 border border-[#ff8fa3]/20 text-[10px] font-black hover:bg-[#ff8fa3] hover:text-white hover:border-[#ff8fa3] transition-all transform hover:-translate-y-2 shadow-xl uppercase">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 border-t border-[#ff8fa3]/10 space-y-8">
                            <button className="w-full py-10 bg-[#4a3a4a] text-white text-3xl font-black uppercase tracking-widest hover:bg-[#ff8fa3] transition-all transform hover:scale-[1.02] shadow-[20px_20px_60px_-10px_rgba(255,143,163,0.3)]">
                                ADD_TO_VANITY
                            </button>
                            <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.4em] text-[#4a3a4a]/30">
                                <span>Dermatologically_Signet</span>
                                <span>Cruelty_Free_Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
