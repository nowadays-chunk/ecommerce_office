"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function FitPDP() {
    const params = useParams();

    return (
        <div className="min-h-screen py-24 px-6 lg:px-20 bg-white text-black italic font-sans italic">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                {/* Action View */}
                <div className="relative group">
                    <div className="aspect-square bg-[#f1f1f1] p-20 flex items-center justify-center relative overflow-hidden transform -rotate-1 skew-x-1">
                        <div className="absolute top-4 left-4 text-[10vw] font-black text-black/5 pointer-events-none uppercase">SPEED</div>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                            alt="Performance Shoe"
                        />
                    </div>
                    {/* Tech Grid Overlays */}
                    <div className="absolute bottom-10 right-10 flex gap-4">
                        <div className="bg-black text-white p-6 shadow-2xl space-y-1">
                            <p className="text-[10px] font-black uppercase opacity-60 italic">CARBON_STIFF</p>
                            <p className="text-2xl font-black">9.8</p>
                        </div>
                        <div className="bg-black text-white p-6 shadow-2xl space-y-1">
                            <p className="text-[10px] font-black uppercase opacity-60 italic">WEIGHT_RATIO</p>
                            <p className="text-2xl font-black">100%</p>
                        </div>
                    </div>
                </div>

                {/* Performance Dashboard */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 text-[12px] font-black uppercase tracking-[0.4em] text-black">
                            <span className="w-16 h-2 bg-black"></span>
                            <span>PRO_SERIES // ELITE</span>
                        </div>
                        <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase">APEX PRO <br /> RUNNER V2.</h1>
                        <div className="flex items-end gap-8">
                            <span className="text-6xl font-black italic">$160.00</span>
                            <span className="text-xs font-black uppercase bg-black text-white px-3 py-1 skew-x-[-10deg]">LIMITED_BATCH</span>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <p className="text-2xl font-black uppercase leading-none border-l-8 border-black pl-8 italic">
                            Engineered for the fastest 1%. <br />
                            Nitrogen-infused foam core. <br />
                            3D-printed stability web.
                        </p>

                        <div className="space-y-8">
                            <h3 className="text-xl font-black uppercase tracking-tighter italic bg-black text-white px-6 py-2 inline-block">CHOOSE_YOUR_WEAPON</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {['US8', 'US9', 'US10', 'US11'].map(s => (
                                    <button key={s} className="py-6 border-4 border-black text-xl font-black hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] ">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 border-t-8 border-black space-y-6">
                            <button className="w-full py-10 bg-black text-white text-5xl font-black uppercase tracking-tighter hover:bg-[#ff3e3e] transition-all transform hover:scale-[1.02] shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)]">
                                ADD_TO_KIT
                            </button>
                            <div className="flex justify-between text-[10px] font-black uppercase italic opacity-40 tracking-widest">
                                <span>VERIFIED_BY_LAB_88</span>
                                <span>FREE_LOGISTICS_OVER_$100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
