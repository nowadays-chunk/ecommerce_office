"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function HypePDP() {
    const params = useParams();

    return (
        <div className="min-h-screen pt-20">
            <div className="grid lg:grid-cols-2 border-b-8 border-black">
                {/* Aggressive Image Container */}
                <div className="border-r-8 border-black bg-[#facc15] p-12 lg:p-32 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 p-8 text-[10vw] font-black italic text-black/5 pointer-events-none line-clamp-1">DROP_CERTIFIED</div>
                    <div className="relative z-10 aspect-square w-full bg-black border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:translate-x-4 hover:-translate-y-4 transition-transform cursor-crosshair">
                        <img
                            src="https://images.unsplash.com/photo-1552066344-2464c1135c32?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-cover contrast-200 grayscale brightness-125 mix-blend-screen"
                            alt="Streetwear Product"
                        />
                    </div>
                </div>

                {/* Static Info Block */}
                <div className="p-12 lg:p-32 space-y-20 bg-white">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-2 bg-black text-[#facc15] text-xl font-black italic uppercase skew-x-[-15deg]">SYSTEM_PRIORITY_HI</div>
                        <h1 className="text-[8vw] lg:text-[6rem] font-black italic leading-[0.85] tracking-tighter uppercase">NEON <br /> GHOST <br /> ZIP-UP.</h1>
                        <div className="flex items-end gap-8">
                            <span className="text-6xl font-black">$180.00</span>
                            <span className="text-xs font-black uppercase border-4 border-black p-2 bg-[#facc15]">V01_LIMITED</span>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <p className="text-2xl font-bold uppercase tracking-tighter italic border-l-8 border-black pl-8 leading-none">
                            Heavy-weight brush finish. <br />
                            Industrial zippers. <br />
                            Glow-in-the-dark print tech.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-lg font-black italic uppercase tracking-widest bg-black text-white px-4 py-1 inline-block">CHOOSE_SIZE</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {['S', 'M', 'L', 'XL'].map(s => (
                                    <button key={s} className="py-6 border-4 border-black text-2xl font-black hover:bg-[#facc15] transition-all transform hover:-translate-y-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 space-y-6">
                            <button className="w-full py-10 bg-black text-white text-5xl font-black italic uppercase tracking-tighter hover:bg-[#facc15] hover:text-black transition-all transform hover:scale-[1.02] shadow-[15px_15px_0px_0px_rgba(250,204,21,1)]">
                                ADD_TO_DROP
                            </button>
                            <div className="flex justify-between text-[10px] font-black uppercase italic opacity-40">
                                <span>Authenticity_verified</span>
                                <span>No_Refunds_Accepted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Specifications Grid */}
            <section className="bg-white p-6 grid md:grid-cols-3 gap-0 border-b-8 border-black">
                {[
                    { label: 'FABRIC', value: '400GSM_FLEECE' },
                    { label: 'WASH', value: 'ENZYME_DISTRESS' },
                    { label: 'PRINT', value: 'PHOSPHOR_SILK' },
                ].map(spec => (
                    <div key={spec.label} className="p-12 border-black border-r-8 last:border-r-0 space-y-4 hover:bg-[#f1f1f1] transition-colors">
                        <h4 className="text-xs font-black uppercase opacity-40">{spec.label}</h4>
                        <p className="text-3xl font-black italic tracking-tighter uppercase">{spec.value}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
