"use client";

import React from 'react';

export default function LuxeProfile() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] p-12 lg:p-24 space-y-24 font-serif">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-black/5 pb-16">
                <div className="space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.6em] text-[#d4af37]">Member // The_Archives</div>
                    <h1 className="text-7xl lg:text-9xl font-light tracking-tighter leading-none uppercase italic">ARIEL_VANCE.</h1>
                </div>
                <div className="text-right space-y-4">
                    <div className="bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest">
                        ELITE_TIER_MEMBER
                    </div>
                    <p className="text-[10px] font-bold uppercase opacity-30 italic">Registration_Signal: LX-88202</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24">
                <aside className="space-y-16 border-r-2 border-black/5 pr-12">
                    <nav className="flex flex-col space-y-6 text-3xl font-light italic">
                        {['Overview', 'Order History', 'Curated List', 'Settings', 'Log Out'].map(link => (
                            <a key={link} href="#" className="hover:text-[#d4af37] transition-all hover:translate-x-4 duration-700">{link}</a>
                        ))}
                    </nav>

                    <div className="p-8 bg-[#f8f8f8] border-l-4 border-black space-y-4">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">TIER_REACH</h3>
                        <p className="text-2xl font-light italic">Artisan_Circle</p>
                        <div className="w-full bg-black/5 h-1">
                            <div className="w-3/4 bg-black h-full"></div>
                        </div>
                        <p className="text-[10px] font-bold opacity-30 uppercase">82% TO_ARCHIVE_STATUS</p>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-12 bg-white border-2 border-black/5 space-y-8 hover:border-black transition-colors group">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">RECENT_ACQUISITION</h3>
                            <div className="flex gap-8 items-center">
                                <div className="w-24 h-24 bg-[#f8f8f8] p-4 flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-contain grayscale" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl font-light italic uppercase">Silk_Archive_V1</p>
                                    <p className="text-xs font-bold opacity-40 uppercase">Delivered // Feb 12</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 bg-white border-2 border-black/5 space-y-8 hover:border-black transition-colors group">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">SAVED_AURA</h3>
                            <div className="flex gap-8 items-center">
                                <div className="w-24 h-24 bg-[#f8f8f8] p-4 flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d521?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-contain grayscale" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl font-light italic uppercase">Jewel_Object_42</p>
                                    <p className="text-xs font-bold opacity-40 uppercase">Awaiting_Decision</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-4xl font-light italic tracking-tight uppercase border-b-2 border-black/5 pb-8">LATEST_LOGS.</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map(o => (
                                <div key={o} className="flex justify-between items-center py-8 border-b border-black/5 hover:bg-[#f8f8f8] px-8 transition-colors">
                                    <div className="space-y-1">
                                        <p className="text-xl font-bold uppercase tracking-tight">ORDER_LX_8892{o}</p>
                                        <p className="text-[10px] font-bold opacity-30 uppercase">Signal_Processed // Jan {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-12 text-right">
                                        <p className="text-xl font-light italic">$2,140</p>
                                        <span className="bg-black text-white text-[8px] font-black px-4 py-1 uppercase tracking-widest italic">ARCHIVED</span>
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
