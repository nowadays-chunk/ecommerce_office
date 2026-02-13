"use client";

import React from 'react';

export default function NordicSearch() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] p-12 lg:p-24 space-y-24 font-sans">
            <header className="max-w-4xl space-y-12">
                <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#999]">
                    <span className="w-12 h-[1px] bg-[#999]"></span>
                    <span>The_Simple_Acquisition</span>
                </div>
                <h1 className="text-7xl lg:text-9xl font-light tracking-tighter leading-none text-[#2d2d2d]">NAVIGATE.</h1>
                <div className="relative border-b-2 border-black/5 pb-8">
                    <input
                        type="text"
                        placeholder="Enter_category_or_item..."
                        className="w-full text-5xl font-light italic outline-none bg-transparent placeholder:opacity-5 text-[#2d2d2d]"
                    />
                    <div className="absolute right-0 bottom-8 text-[10px] font-bold uppercase opacity-30 italic">Minimalist_Query: Active</div>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-16 border-r-2 border-black/5 pr-12">
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-black/40">ROOMS</h3>
                        <nav className="flex flex-col space-y-4 text-2xl font-light italic">
                            {['Living Room', 'Dining Space', 'Studio', 'Workshop'].map(cat => (
                                <a key={cat} href="#" className="hover:text-black hover:translate-x-4 transition-all duration-700">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-black/40">MATERIALS</h3>
                        <nav className="flex flex-col space-y-4 text-2xl font-light italic">
                            {['Solid Oak', 'Cast Iron', 'Wool', 'Flax'].map(i => (
                                <a key={i} href="#" className="hover:text-black hover:translate-x-4 transition-all duration-700">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="flex justify-between items-end bg-[#f8f8f8] p-10 border border-black/5">
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Inventory_State: 24_Objects_Available</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest italic">
                            <span className="text-black underline underline-offset-8 decoration-2">Essential</span>
                            <span className="opacity-20">Recent</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-1px bg-black/5 border-px border-black/5">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group bg-white p-12 space-y-10 relative overflow-hidden">
                                <div className="aspect-[4/5] bg-white border-px border-black/5 p-12 relative flex items-center justify-center">
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain grayscale mix-blend-multiply group-hover:scale-105 transition-transform duration-[3s]"
                                        alt="Nordic Object"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-light italic tracking-tight text-[#2d2d2d] leading-none uppercase">Object_{i}</h4>
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-40 italic pt-2">
                                        <span>Crafted_v1.02</span>
                                        <span>$880</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
