"use client";

import React from 'react';

export default function FitSearch() {
    return (
        <div className="min-h-screen bg-white text-black p-12 lg:p-24 space-y-32 font-sans italic">
            <header className="max-w-4xl space-y-12 relative">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-black/5 -skew-x-12 select-none pointer-events-none"></div>
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-2 bg-black"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">SYSTEM_SCAN: ACTIVE</span>
                </div>
                <h1 className="text-9xl lg:text-[14rem] font-black tracking-tighter leading-[0.8] uppercase text-black italic">
                    FIND <br /> <span className="text-transparent border-t-8 lg:border-t-12 border-black text-black">KIT.</span>
                </h1>
                <div className="relative border-b-8 border-black pb-12">
                    <input
                        type="text"
                        placeholder="INPUT_GEAR_TYPE..."
                        className="w-full text-5xl lg:text-9xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-black uppercase tracking-tighter"
                    />
                    <div className="absolute right-0 bottom-12 text-[10px] font-black uppercase opacity-30 italic">Target_Acquisition_Mode</div>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-12">
                <aside className="space-y-24 border-l-8 border-black pl-12">
                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">PERFORMANCE_ROOMS</h3>
                        <nav className="flex flex-col space-y-8 text-4xl font-black italic">
                            {['Cardio', 'Power', 'Flow', 'Recovery'].map(cat => (
                                <a key={cat} href="#" className="hover:translate-x-8 transition-transform duration-500 uppercase">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">LEVEL</h3>
                        <nav className="flex flex-col space-y-8 text-4xl font-black italic">
                            {['Pro_Elite', 'Challenger', 'Base_OPS'].map(i => (
                                <a key={i} href="#" className="hover:translate-x-8 transition-transform duration-500 uppercase">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="flex justify-between items-center border-8 border-black p-12 bg-black text-white relative">
                        <div className="absolute -top-8 -right-8 bg-red-600 text-white px-6 py-2 text-xl font-black">X-SCAN</div>
                        <p className="text-[10px] font-black uppercase tracking-widest italic opacity-60">Results: 842_Units_Sync_Ready</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest italic">
                            <span className="underline decoration-4">Velocity_High</span>
                            <span className="opacity-40">New_Drop</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-black border-px border-black">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="group bg-white p-20 space-y-12 relative overflow-hidden hover:bg-black hover:text-white transition-all duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[8px] font-black uppercase tracking-widest italic uppercase">Verified_Gear</span>
                                </div>
                                <div className="aspect-square bg-[#f1f1f1] border-4 border-black/5 p-16 relative group-hover:skew-x-2 transition-transform">
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                                        alt="Fit Gear"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-5xl font-black italic tracking-tighter uppercase leading-[0.8]">GEAR_MOD_{i}</h4>
                                    <div className="flex justify-between items-end pt-8 border-t-4 border-black/10 group-hover:border-white/20">
                                        <p className="text-4xl font-black italic tracking-tighter">$160.00</p>
                                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-4 border-black group-hover:bg-white group-hover:text-black transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
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
