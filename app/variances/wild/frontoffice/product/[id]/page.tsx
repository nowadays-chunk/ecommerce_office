"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function WildPDP() {
    const params = useParams();

    return (
        <div className="min-h-screen py-24 px-6 lg:px-20 bg-[#f4f1ea] text-[#2d2a22] font-serif">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                {/* Raw View */}
                <div className="relative group">
                    <div className="aspect-square bg-white border-2 border-[#344e41]/5 p-20 flex items-center justify-center relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-[#344e41]/5 opacity-40"></div>
                        <img
                            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms] sepia-[0.1]"
                            alt="Wild Foraged Mineral"
                        />
                    </div>
                    {/* Nature HUD Overlays */}
                    <div className="absolute bottom-10 left-10 text-left space-y-4">
                        <div className="bg-[#344e41] text-[#dad7cd] p-6 shadow-2xl space-y-1">
                            <p className="text-[10px] font-bold uppercase opacity-60 tracking-widest italic">PURITY_LEVEL</p>
                            <p className="text-3xl font-black italic underline decoration-[#a3b18a] decoration-4">RAW</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-6 border border-[#344e41]/10 shadow-2xl space-y-1">
                            <p className="text-[10px] font-bold uppercase text-[#344e41] tracking-widest">IMPACT_SCORE</p>
                            <p className="text-3xl font-black text-[#344e41] italic">+9.4</p>
                        </div>
                    </div>
                </div>

                {/* Wilderness Specs */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 text-[12px] font-bold uppercase tracking-[0.4em] text-[#344e41]">
                            <span className="w-12 h-2 bg-[#344e41]"></span>
                            <span>WILD // FORAGED</span>
                        </div>
                        <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase text-[#2d2a22]">RAW <br /> FOREST <br /> MOSS.</h1>
                        <div className="flex items-end gap-8">
                            <span className="text-6xl font-black text-[#344e41]">$22.00</span>
                            <span className="text-xs font-bold uppercase italic border border-[#344e41]/20 px-4 py-1 text-[#344e41]/60">Batch_Spring_24</span>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <p className="text-2xl font-medium text-[#2d2a22]/60 leading-tight italic max-w-lg">
                            Carefully harvested from the deep Cascades. This moss is preserved in its living state, perfect for terrariums or natural art installations.
                        </p>

                        <div className="space-y-8">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#344e41] bg-[#a3b18a]/20 px-6 py-2 inline-block">FORAGING_LOCATION</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['DEEP_VALLEY', 'MOONLIGHT_COVE', 'RIVER_EDGE'].map(s => (
                                    <button key={s} className="py-6 border-2 border-[#344e41]/10 text-[10px] font-black hover:bg-[#344e41] hover:text-[#dad7cd] transition-all transform hover:-translate-y-2 uppercase italic">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 border-t-2 border-[#344e41]/10 space-y-8">
                            <button className="w-full py-10 bg-[#344e41] text-[#dad7cd] text-3xl font-black uppercase tracking-tighter hover:bg-[#2d2a22] transition-all transform hover:scale-[1.02] shadow-2xl">
                                RETURN_TO_WILD
                            </button>
                            <div className="flex justify-between text-[10px] font-bold uppercase italic opacity-40 tracking-widest text-[#344e41]">
                                <span>Zero_Plastic_Shipping</span>
                                <span>Certified_Foragers_Only</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
