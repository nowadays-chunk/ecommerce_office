"use client";

import React from 'react';

export default function NordicProfile() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] p-12 lg:p-24 space-y-24 font-sans">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-black/5 pb-16">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#999]">
                        <span className="w-12 h-[1px] bg-[#999]"></span>
                        <span>Artisan // The_Workshop</span>
                    </div>
                    <h1 className="text-7xl lg:text-9xl font-light tracking-tighter leading-none uppercase italic">ERIK_SOREN.</h1>
                </div>
                <div className="text-right space-y-6">
                    <div className="bg-[#2d2d2d] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest">
                        ESSENTIAL_LEVEL: SENIOR
                    </div>
                    <p className="text-[10px] font-bold uppercase opacity-30 italic">Registry_Signal: NR-88210</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-16 border-r-2 border-black/5 pr-12 h-fit">
                    <nav className="flex flex-col space-y-6 text-2xl font-light italic">
                        {['Overview', 'Object Logs', 'Saved Materials', 'Settings', 'Log Out'].map(link => (
                            <a key={link} href="#" className="hover:text-black transition-all hover:translate-x-4 duration-700 uppercase">{link}</a>
                        ))}
                    </nav>

                    <div className="p-8 bg-[#f8f8f8] border border-black/5 space-y-4">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">CRAFT_IMPACT</h3>
                        <p className="text-4xl font-light italic uppercase leading-none">Sustainable</p>
                        <div className="w-full bg-black/5 h-1">
                            <div className="w-4/5 bg-black h-full"></div>
                        </div>
                        <p className="text-[10px] font-bold opacity-30 uppercase italic">80% CARBON_REDUCED</p>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-12 border-2 border-black/5 bg-white space-y-8 hover:border-black transition-colors group">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#999]">LATEST_OBJECT</h3>
                            <div className="flex gap-8 items-center">
                                <div className="w-24 h-24 bg-[#f8f8f8] p-4 flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-contain grayscale mix-blend-multiply" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl font-light italic uppercase">Solid_Oak_v1</p>
                                    <p className="text-xs font-bold opacity-40 uppercase italic">Delivered // Feb 12</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 border-2 border-black/5 bg-white space-y-8 hover:border-black transition-colors group">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#999]">SAVED_ESSENTIAL</h3>
                            <div className="flex gap-8 items-center">
                                <div className="w-24 h-24 bg-[#f8f8f8] p-4 flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1554034483-04fac1678918?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-contain grayscale mix-blend-multiply" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl font-light italic uppercase">Linen_Core</p>
                                    <p className="text-xs font-bold opacity-40 uppercase italic">Awaiting_Action</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <h2 className="text-4xl font-light italic tracking-tight uppercase border-b-2 border-black/5 pb-8">OBJECT_LOGS.</h2>
                        <div className="space-y-4">
                            {[1, 2].map(o => (o % 2 === 0 ? (
                                <div key={o} className="flex justify-between items-center py-8 border-b border-black/5 hover:bg-[#f8f8f8] px-8 transition-colors">
                                    <div className="space-y-1">
                                        <p className="text-xl font-bold uppercase tracking-tight">OBJECT_NR_8820{o}</p>
                                        <p className="text-[10px] font-bold opacity-30 uppercase italic">Log_Processed // Jan {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-12 text-right">
                                        <p className="text-2xl font-light italic">$880</p>
                                        <span className="bg-[#2d2d2d] text-white text-[8px] font-black px-4 py-1 uppercase tracking-widest italic">CRAFTED</span>
                                    </div>
                                </div>
                            ) : (
                                <div key={o} className="flex justify-between items-center py-8 border-b border-black/5 hover:bg-[#999]/5 px-8 transition-colors">
                                    <div className="space-y-1">
                                        <p className="text-xl font-bold uppercase tracking-tight">LOG_IDENT_X88{o}</p>
                                        <p className="text-[10px] font-bold opacity-30 uppercase italic">In_Build // Delivery_Feb 18</p>
                                    </div>
                                    <div className="flex items-center gap-12 text-right">
                                        <p className="text-2xl font-light italic">$1,240</p>
                                        <span className="border border-black/20 text-black/40 text-[8px] font-black px-4 py-1 uppercase tracking-widest italic">PENDING</span>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
