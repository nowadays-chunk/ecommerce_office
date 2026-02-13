"use client";

import React from 'react';

export default function HypeContact() {
    return (
        <div className="min-h-screen bg-black text-white font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-8 bg-white text-black font-black flex items-center justify-center uppercase">CON</div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none -skew-x-12">TACT.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">DIRECT_LINE // RESPONSE_NOT_GUARANTEED</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24 relative z-10">
                <section className="space-y-20">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b-8 border-white pb-8 -skew-x-6">TERMINALS.</h2>
                        <div className="space-y-16">
                            <div className="group cursor-crosshair">
                                <p className="text-[10px] font-black uppercase tracking-widest mb-4 inline-block bg-white text-black px-2">STRUCTURAL_COMMS</p>
                                <p className="text-5xl font-black tracking-tighter group-hover:line-through decoration-white decoration-8">01-800-HYPE</p>
                            </div>
                            <div className="group cursor-crosshair">
                                <p className="text-[10px] font-black uppercase tracking-widest mb-4 inline-block bg-white text-black px-2">ENCRYPTED_MAIL</p>
                                <p className="text-5xl font-black tracking-tighter group-hover:bg-white group-hover:text-black px-4 transition-all">OPERATOR@HYPE.CC</p>
                            </div>
                            <div className="pt-8 border-t-4 border-white/20">
                                <p className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-40 italic">PHYSICAL_LOCATION_PENDING</p>
                                <p className="text-3xl font-black italic opacity-60 leading-tight">
                                    Warehouse Sector 772<br />
                                    Industrial Zone B<br />
                                    Neo Tokyo // Grid 001
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 border-8 border-white bg-white text-black space-y-8 -skew-y-2 transform hover:skew-y-0 transition-transform">
                        <p className="text-2xl font-black italic uppercase leading-tight italic">"Communication is friction. We only respond to signals with significant amplitude. If your inquiry doesn't disrupt our standby mode, it will be purged."</p>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-black rounded-none animate-pulse"></div>
                            <p className="text-[10px] font-black uppercase tracking-widest">SIGNAL_STANDBY_v3.0</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-12 border-8 border-white bg-black shadow-[30px_30px_0px_rgba(255,255,255,0.1)]">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter -skew-x-12">TRANSMIT_DATA.</h2>
                        <div className="space-y-8">
                            <div className="relative border-4 border-white/20 p-6 focus-within:border-white transition-all bg-white/5">
                                <label className="absolute -top-3 left-4 bg-black px-2 text-[8px] font-black uppercase tracking-widest">ALIAS_ID</label>
                                <input type="text" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-white uppercase" placeholder="OPERATIVE NAME" />
                            </div>
                            <div className="relative border-4 border-white/20 p-6 focus-within:border-white transition-all bg-white/5">
                                <label className="absolute -top-3 left-4 bg-black px-2 text-[8px] font-black uppercase tracking-widest">HASH_SIGNAL</label>
                                <input type="email" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-white uppercase" placeholder="EMAIL@HYPE.CC" />
                            </div>
                            <div className="relative border-4 border-white/20 p-6 focus-within:border-white transition-all bg-white/5">
                                <label className="absolute -top-3 left-4 bg-black px-2 text-[8px] font-black uppercase tracking-widest">DATA_PAYLOAD</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-2xl font-black italic py-4 resize-none text-white uppercase" placeholder="DESCRIBE THE FRICTION..."></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-10 bg-white text-black text-4xl font-black uppercase tracking-tighter hover:bg-black hover:text-white border-8 border-white transition-all transform hover:rotate-1">
                        EXECUTE_SIGNAL
                    </button>
                </form>
            </main>
        </div>
    );
}
