"use client";

import React from 'react';

export default function ApexSearch() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#00ff9d] p-12 lg:p-24 space-y-32 font-mono italic">
            <header className="max-w-4xl space-y-12 relative">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00ff9d]/5 blur-[150px] rounded-full animate-pulse-slow pointer-events-none"></div>
                <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#00ff9d]">
                    <span className="w-16 h-1 bg-[#00ff9d]"></span>
                    <span>Neural_Link_Query://Active</span>
                </div>
                <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] text-white italic skew-x-[-12deg]">
                    READY <br /> <span className="text-transparent border-t-8 border-[#00ff9d] text-[#00ff9d]">PLAYER.</span>
                </h1>
                <div className="relative border-2 border-white/10 p-10 bg-[#0a0a0a] skew-x-[-4deg]">
                    <input
                        type="text"
                        placeholder="INPUT_HARDWARE_CODE..."
                        className="w-full text-4xl lg:text-7xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase tracking-tighter"
                    />
                    <div className="absolute top-2 right-2 text-[8px] font-bold text-white/20">SYSTEM_ID: APX-9942</div>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-12 relative z-10">
                <aside className="space-y-24 border-l-4 border-[#00ff9d]/20 pl-12">
                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00ff9d]/40">HARDWARE_NODES</h3>
                        <nav className="flex flex-col space-y-8 text-4xl font-black italic">
                            {['Mice', 'Keys', 'Audio', 'Nexus'].map(cat => (
                                <a key={cat} href="#" className="hover:text-white hover:translate-x-8 transition-all duration-500 uppercase">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00ff9d]/40">LOADOUT</h3>
                        <nav className="flex flex-col space-y-8 text-4xl font-black italic">
                            {['Pro_Grade', 'Stealth', 'Hyper_Light', 'Custom'].map(i => (
                                <a key={i} href="#" className="hover:text-white hover:translate-x-8 transition-all duration-500 uppercase">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="flex justify-between items-center border-4 border-white/5 p-12 bg-[#0a0a0a] skew-x-[-2deg]">
                        <p className="text-[10px] font-black uppercase tracking-widest italic text-[#00ff9d]">Scan_Results: 88_Hardware_Linked</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest italic">
                            <span className="text-[#00ff9d] underline decoration-4 underline-offset-8">Low_Latency</span>
                            <span className="opacity-20 text-white">Market_Velocity</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group relative bg-[#0a0a0a] border-2 border-white/5 p-8 space-y-8 hover:border-[#00ff9d] transition-all duration-300 transform hover:translate-y-[-8px] -skew-x-2">
                                <div className="aspect-square bg-white/5 border border-white/10 p-8 relative overflow-hidden group-hover:bg-[#00ff9d]/5 transition-colors">
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain grayscale brightness-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        alt="Apex Gear"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-3xl font-black italic tracking-tighter text-white uppercase leading-none">GEAR_MOD_{i}</h4>
                                    <div className="flex justify-between items-end pt-4 border-t border-white/5 group-hover:border-[#00ff9d]/30">
                                        <p className="text-4xl font-black text-[#00ff9d] italic">$120</p>
                                        <div className="w-10 h-10 border border-[#00ff9d] flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-[#00ff9d] group-hover:text-black transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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
