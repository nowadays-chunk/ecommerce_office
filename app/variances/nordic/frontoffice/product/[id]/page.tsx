"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function NordicPDP() {
    const params = useParams();

    return (
        <div className="min-h-screen py-24 px-6 lg:px-24 bg-white text-[#1a1a1a]">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
                {/* Focused Gallery */}
                <div className="space-y-6">
                    <div className="aspect-[4/5] bg-[#f7f7f7] p-24 flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1567538096630-e0c55bd63b48?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-contain mix-blend-multiply transition-all duration-1000"
                            alt="Crafted Stool"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="aspect-square bg-[#f7f7f7] border border-transparent hover:border-gray-200 cursor-pointer transition-all"></div>
                        ))}
                    </div>
                </div>

                {/* Minimal Info Block */}
                <div className="space-y-16 pt-12 lg:pt-0">
                    <div className="space-y-6">
                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">Design History // 1933</div>
                        <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-[#1a1a1a] leading-tight">Artek Stool 60.</h1>
                        <p className="text-2xl font-medium text-gray-400">Kr 2,400</p>
                    </div>

                    <div className="space-y-10 max-w-lg">
                        <p className="text-lg text-gray-500 leading-relaxed font-light">
                            Designed by Alvar Aalto, the Stool 60 represents the pinnacle of wood-bending technology. A simple yet revolutionary piece that functions as a seat, table, or storage unit.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">Finish</h3>
                            <div className="flex flex-wrap gap-4">
                                {['Natural Birch', 'Honey Stain', 'Black Lacquer', 'White Laminate'].map(f => (
                                    <button key={f} className="px-6 py-3 border border-gray-100 text-[10px] font-bold hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all uppercase">{f}</button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-gray-100 space-y-8">
                        <div className="flex items-center space-x-12">
                            <div className="flex items-center space-x-6">
                                <button className="text-2xl font-light hover:text-gray-400 transition-colors">-</button>
                                <span className="text-lg font-medium">1</span>
                                <button className="text-2xl font-light hover:text-gray-400 transition-colors">+</button>
                            </div>
                            <button className="flex-1 py-6 bg-[#1a1a1a] text-white font-medium uppercase tracking-[0.2em] hover:bg-gray-800 transition-all text-sm">
                                Add to Collection
                            </button>
                        </div>

                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-300">
                            <span>Ethically Sourced Birch</span>
                            <span>50 Year Warranty</span>
                        </div>
                    </div>

                    {/* Transparency Data */}
                    <div className="p-8 bg-[#fdfdfd] border border-gray-100 space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">Sustainability Log</h4>
                        <div className="flex justify-between items-center text-xs italic text-gray-400">
                            <span>Carbon footprint: 12.4kg CO2e</span>
                            <span>Made in Finland</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
