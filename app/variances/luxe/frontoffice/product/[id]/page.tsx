"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function LuxePDP() {
    const params = useParams();
    const id = params?.id;

    return (
        <div className="py-24 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
                {/* Gallery */}
                <div className="space-y-4">
                    <div className="aspect-[4/5] bg-[#0a0a0a] border border-white/5 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-cover"
                            alt="Product Full"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square bg-[#0a0a0a] border border-white/5 cursor-pointer hover:border-[#b4945c]/40 transition-colors"></div>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-light tracking-widest text-white leading-tight uppercase">Celestial Halo <br /> Diamond Ring</h1>
                        <p className="text-[10px] font-bold text-[#b4945c] tracking-[0.4em] uppercase">Limited Edition // Fine Jewelry</p>
                    </div>

                    <div className="space-y-8">
                        <p className="text-3xl font-light text-white">$24,000</p>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                            Handcrafted in 18k yellow gold, featuring a central 2.5-carat ethically sourced diamond surrounded by a constellation of smaller, brilliant-cut stones. A testament to celestial beauty and human artistry.
                        </p>
                    </div>

                    <div className="space-y-6 pt-12 border-t border-white/10">
                        <div className="flex items-center space-x-8">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#b4945c]">Size</span>
                            <div className="flex space-x-4">
                                {['6', '7', '8', '9'].map(s => (
                                    <button key={s} className="w-10 h-10 border border-white/10 text-[10px] font-bold hover:bg-[#b4945c] hover:text-black hover:border-[#b4945c] transition-all uppercase">{s}</button>
                                ))}
                            </div>
                        </div>
                        <button className="w-full py-6 bg-[#b4945c] text-black font-black uppercase tracking-[0.3em] hover:bg-white transition-all text-[11px]">
                            Acquire Piece
                        </button>
                        <button className="w-full py-6 border border-white/10 text-white font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all text-[11px]">
                            Concierge Inquiry
                        </button>
                    </div>

                    <div className="pt-12 space-y-6">
                        <div className="flex justify-between items-center py-4 border-b border-white/5 group cursor-pointer hover:border-[#b4945c]/40 transition-colors">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Specifications</span>
                            <span className="text-[#b4945c] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-white/5 group cursor-pointer hover:border-[#b4945c]/40 transition-colors">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Shipping & Returns</span>
                            <span className="text-[#b4945c] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
