"use client";

import React from 'react';

export default function HypeProfile() {
    return (
        <div className="min-h-screen bg-black text-white p-12 lg:p-24 space-y-32 font-mono italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-white pb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-white/5 -skew-y-12 select-none pointer-events-none">X808</div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-1 bg-white"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Operative // Sector_01</span>
                    </div>
                    <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] uppercase italic -skew-x-12">VANCE_OPER.</h1>
                </div>
                <div className="text-right space-y-8 relative z-10">
                    <div className="bg-white text-black px-12 py-6 text-4xl font-black uppercase tracking-tight -skew-x-12">
                        ELITE_COMMAND
                    </div>
                    <p className="text-[10px] font-black uppercase opacity-40 italic mt-8 tracking-[0.5em]">SIGNAL_HASH: HY-8821-X</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24 font-mono">
                <aside className="space-y-20 border-l-8 border-white pl-12 h-fit">
                    <nav className="flex flex-col space-y-10 text-4xl font-black italic">
                        {['Overview', 'Mission logs', 'Saved_Tech', 'Command', 'Abort'].map(link => (
                            <a key={link} href="#" className="hover:line-through decoration-8 transition-all hover:translate-x-4 duration-500 uppercase">{link}</a>
                        ))}
                    </nav>

                    <div className="p-10 bg-white text-black space-y-6 -skew-x-12 transform hover:skew-x-0 transition-transform cursor-crosshair">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#999]">SYNC_STRENGTH</h3>
                        <p className="text-7xl font-black italic uppercase leading-none">99.4%</p>
                        <div className="w-full bg-black/10 h-4 border-2 border-black">
                            <div className="w-[99.4%] bg-black h-full"></div>
                        </div>
                        <p className="text-[10px] font-black opacity-60 uppercase italic">SYSTEMS_NOMINAL</p>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-12 border-4 border-white bg-white text-black space-y-12 relative overflow-hidden group hover:bg-black hover:text-white transition-all">
                            <div className="absolute -bottom-10 -right-10 text-[10vw] font-black opacity-5 group-hover:opacity-10">LATEST</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest italic">LATEST_DEPLOYMENT</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-32 h-32 bg-black/5 p-4 flex items-center justify-center border-4 border-black group-hover:border-white group-hover:bg-white/10">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain grayscale invert group-hover:invert-0" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-4xl font-black italic uppercase leading-none">ENTITY_9921</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4">Deployed // ID: 88-X</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 border-4 border-white space-y-12 relative overflow-hidden group hover:bg-white hover:text-black transition-all">
                            <div className="absolute -bottom-10 -right-10 text-[10vw] font-black opacity-5 group-hover:opacity-10">SAVED</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest italic">TARGET_LOCK</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-32 h-32 bg-white/5 p-4 flex items-center justify-center border-4 border-white/20 group-hover:border-black/20">
                                    <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain grayscale brightness-200" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-4xl font-black italic uppercase leading-none">HARDWARE_82</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4">Awaiting_Command</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <h2 className="text-6xl font-black italic tracking-tighter uppercase border-b-8 border-white pb-12">MISSION_LOGS.</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map(o => (
                                <div key={o} className="flex justify-between items-center py-12 border-b-4 border-white/5 hover:bg-white hover:text-black hover:skew-x-[-2deg] px-12 transition-all group">
                                    <div className="space-y-2">
                                        <p className="text-3xl font-black uppercase tracking-tight italic">ENCRYPT_ID_X88{o}</p>
                                        <p className="text-[10px] font-black opacity-30 uppercase italic group-hover:opacity-100">LOG_PROCESSED // JAN {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-24 text-right">
                                        <p className="text-4xl font-black italic">$1,880</p>
                                        <span className="bg-white text-black text-[10px] font-black px-8 py-2 uppercase tracking-widest italic group-hover:bg-black group-hover:text-white border-2 border-white">COMPLETE</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
