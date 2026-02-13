"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function ApexPDP() {
    const params = useParams();

    return (
        <div className="min-h-screen py-24 px-6 lg:px-20 bg-[#050505] text-[#00ff9d] font-mono italic">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                {/* Action View */}
                <div className="relative group">
                    <div className="aspect-square bg-[#0a0a0a] border-4 border-white/5 p-20 flex items-center justify-center relative overflow-hidden skew-x-[-4deg]">
                        <div className="absolute top-4 left-4 text-[10vw] font-black text-white/5 pointer-events-none uppercase">ULTRA</div>
                        <img
                            src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-contain grayscale brightness-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[3000ms]"
                            alt="Elite Gaming Peripheral"
                        />
                    </div>
                    {/* Tech Grid Overlays */}
                    <div className="absolute top-10 right-10 text-right space-y-4">
                        <div className="bg-[#00ff9d]/10 backdrop-blur-xl p-6 border border-[#00ff9d]/40 shadow-2xl space-y-1">
                            <p className="text-[10px] font-black uppercase text-white/60 tracking-widest">SENSOR_LATENCY</p>
                            <p className="text-3xl font-black text-[#00ff9d]">0.1ms</p>
                        </div>
                        <div className="bg-[#00ff9d]/10 backdrop-blur-xl p-6 border border-[#00ff9d]/40 shadow-2xl space-y-1">
                            <p className="text-[10px] font-black uppercase text-white/60 tracking-widest">CORE_HZ</p>
                            <p className="text-3xl font-black text-[#00ff9d]">8000</p>
                        </div>
                    </div>
                </div>

                {/* Performance Dashboard */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 text-[12px] font-black uppercase tracking-[0.4em] text-[#00ff9d]">
                            <span className="w-16 h-1 bg-[#00ff9d]"></span>
                            <span>PRO_SERIES // ELITE_GRADE</span>
                        </div>
                        <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase text-white skew-x-[-12deg]">TITAN <br /> X-GEN <br /> MOUSE.</h1>
                        <div className="flex items-end gap-8">
                            <span className="text-6xl font-black italic text-white">$120.00</span>
                            <span className="text-[10px] font-black uppercase bg-[#00ff9d] text-black px-4 py-1 skew-x-[-10deg]">V.2.0_STABLE</span>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <p className="text-2xl font-black uppercase leading-none border-l-8 border-[#00ff9d] pl-8 italic text-white/60">
                            NEXT-GEN OPTICAL SENSORS. <br />
                            50G ACCELERATION CAPABLE. <br />
                            ULTRA-LIGHTWEIGHT 54G FRAME.
                        </p>

                        <div className="space-y-8">
                            <h3 className="text-xs font-black uppercase tracking-widest text-white underline decoration-[#00ff9d] decoration-4 underline-offset-8">LOADOUT_CFG</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['CARBON_BLACK', 'NEON_GHOST', 'VOLT_STRIKE'].map(s => (
                                    <button key={s} className="py-6 border-2 border-white/10 text-xs font-black hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all transform hover:skew-x-[-6deg] bg-white/5 uppercase italic">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 border-t-4 border-white/10 space-y-8">
                            <button className="w-full py-10 bg-[#00ff9d] text-black text-5xl font-black uppercase tracking-tighter hover:bg-white transition-all transform hover:scale-[1.02] shadow-[20px_20px_0px_0px_rgba(0,255,157,0.1)] skew-x-[-12deg]">
                                ADD_TO_LOADOUT
                            </button>
                            <div className="flex justify-between text-[8px] font-black uppercase italic opacity-40 tracking-widest text-[#00ff9d]">
                                <span>VERIFIED_BY_LAB_X</span>
                                <span>ZERO_LATENCY_LOGISTICS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
