"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function TechPDP() {
    const params = useParams();

    return (
        <div className="min-h-screen py-24 px-6 lg:px-12 bg-[#080b10] text-[#00f2ff] font-mono">
            <div className="grid lg:grid-cols-2 gap-24">
                {/* Diagnostic View */}
                <div className="space-y-8 relative">
                    <div className="aspect-square bg-[#0a0f18] border border-[#00f2ff]/30 p-20 relative overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f2ff_0%,transparent_70%)] opacity-5 animate-pulse"></div>
                        <div className="absolute top-4 left-4 text-[8px] font-bold opacity-40 uppercase tracking-widest">Diagnostic_Stream_Active</div>
                        <div className="relative z-10 w-full h-full border border-[#00f2ff]/10 animate-border-pulse p-4">
                            <img
                                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80"
                                className="w-full h-full object-contain brightness-150 contrast-125 mix-blend-screen opacity-60 group-hover:opacity-100 transition-opacity"
                                alt="Tech Component"
                            />
                        </div>
                        {/* HUD Elements */}
                        <div className="absolute bottom-10 right-10 text-right space-y-2">
                            <div className="text-[10px] font-black text-white px-2 py-1 bg-[#00f2ff]/20 border border-[#00f2ff]/40">CORE_TEMP: 32°C</div>
                            <div className="text-[10px] font-black text-white px-2 py-1 bg-[#00f2ff]/20 border border-[#00f2ff]/40">INTEGRITY: 100%</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square border border-[#00f2ff]/20 bg-[#0a0f18] hover:border-[#00f2ff] cursor-pointer transition-colors p-2 overflow-hidden">
                                <div className="w-full h-full bg-[#00f2ff]/5 animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Configuration Module */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="inline-flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/60">
                            <span className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-ping"></span>
                            <span>New_Nexus_Detected</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black italic tracking-tighter leading-none text-white uppercase italic">NEURAL_LINK <br /> V2.0 PREMIUM</h1>
                        <div className="flex items-end gap-8">
                            <span className="text-5xl font-black text-[#00f2ff]">Ξ 0.42</span>
                            <span className="text-xs font-bold opacity-40 uppercase border border-[#00f2ff]/20 px-3 py-1">Gas_Optimized</span>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="p-8 border-l-4 border-[#00f2ff] bg-[#00f2ff]/5 space-y-4">
                            <h3 className="text-xs font-black uppercase text-white tracking-widest">Protocol_Summary</h3>
                            <p className="text-sm leading-relaxed opacity-60 max-w-md">
                                Next-generation neural interface with ultra-low latency bio-feedback. Seamlessly integrates with CORE_TECH ecosystems and legacy hardware stacks.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40">Configure_Parameters</h3>
                            <div className="flex flex-wrap gap-4">
                                {['256GB_SYNC', '1TB_NEXUS', '4TB_VOID'].map(p => (
                                    <button key={p} className="px-6 py-3 border border-[#00f2ff]/20 text-[10px] font-black hover:border-[#00f2ff] hover:bg-[#00f2ff]/10 transition-all uppercase">{p}</button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 border-t border-[#00f2ff]/10 space-y-6">
                            <button className="w-full py-8 bg-[#00f2ff] text-black font-black uppercase text-lg tracking-[0.4em] hover:bg-white transition-all shadow-[0_0_50px_rgba(0,242,255,0.2)]">
                                INITIALIZE_ORDER
                            </button>
                            <button className="w-full py-4 border border-[#00f2ff]/40 text-[#00f2ff] font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#00f2ff]/5 transition-all">
                                VIEW_WHITE_PAPER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
