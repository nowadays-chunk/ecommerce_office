"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function GrubPDP() {
    const params = useParams();

    return (
        <div className="min-h-screen py-24 px-6 lg:px-20 bg-[#faf9f6] text-[#2d3a3a]">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                {/* Fresh View */}
                <div className="relative">
                    <div className="aspect-square bg-white rounded-[4rem] shadow-2xl p-20 flex items-center justify-center overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-700"
                            alt="Organic Fruit"
                        />
                    </div>
                    {/* Badge */}
                    <div className="absolute top-10 left-10 bg-[#22c55e] text-white px-8 py-3 rounded-2xl font-black text-xl transform -rotate-3 shadow-xl">
                        FRESH_PICKED
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="text-xs font-black uppercase tracking-[0.4em] text-[#22c55e]">Harvested // 2 Days Ago</div>
                        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-[#2d3a3a]">ORGANIC <br /> HONEYCRISP.</h1>
                        <p className="text-4xl font-black text-[#2d3a3a]">$8.50 / LB</p>
                    </div>

                    <div className="space-y-10">
                        <p className="text-2xl text-[#2d3a3a]/60 leading-relaxed font-medium italic">
                            Grown in the rolling hills of the Hudson Valley. These apples are extra crisp, perfectly sweet, and 100% pesticide-free.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-6 bg-white rounded-3xl border-2 border-[#2d3a3a]/5 space-y-2">
                                <p className="text-[10px] font-black uppercase text-[#22c55e]">ORIGIN</p>
                                <p className="text-lg font-bold">Hudson Valley, NY</p>
                            </div>
                            <div className="p-6 bg-white rounded-3xl border-2 border-[#2d3a3a]/5 space-y-2">
                                <p className="text-[10px] font-black uppercase text-[#22c55e]">CERTIFIED</p>
                                <p className="text-lg font-bold">USDA_ORGANIC</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t-2 border-[#2d3a3a]/5 space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                                <button className="w-14 h-14 rounded-2xl bg-white border-2 border-[#2d3a3a]/5 text-2xl font-black hover:bg-[#22c55e] hover:text-white transition-all shadow-md">-</button>
                                <span className="text-2xl font-black">1.5 LB</span>
                                <button className="w-14 h-14 rounded-2xl bg-white border-2 border-[#2d3a3a]/5 text-2xl font-black hover:bg-[#22c55e] hover:text-white transition-all shadow-md">+</button>
                            </div>
                        </div>

                        <button className="w-full py-8 bg-[#22c55e] text-white text-3xl font-black uppercase tracking-tighter rounded-[2.5rem] hover:bg-[#2d3a3a] transition-all shadow-2xl">
                            ADD_TO_PANTRY
                        </button>

                        <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-[#2d3a3a]/30">
                            <span>Sustainable_Carton</span>
                            <span>CO2_Neutral_Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
