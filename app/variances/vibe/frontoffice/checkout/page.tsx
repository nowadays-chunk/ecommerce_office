"use client";

import React from 'react';

export default function VibeCheckout() {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-6xl mx-auto space-y-24 bg-[#fffaf0] text-[#432] font-serif">
            <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b-4 border-[#432] pb-12">
                <h1 className="text-7xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none">ORDER_INFO</h1>
                <div className="text-right space-y-2">
                    <div className="w-16 h-1 w-full bg-[#fb923c] mb-2"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Registry: VB-9921</p>
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24">
                <div className="space-y-20">
                    {/* Shipping Terminal */}
                    <section className="space-y-12">
                        <h2 className="text-3xl font-black italic uppercase tracking-tighter bg-[#fb923c] text-white px-6 py-3 inline-block transform -rotate-2 shadow-xl">WHERE_TO_SHIP?</h2>
                        <div className="grid grid-cols-1 gap-10">
                            {[
                                { label: 'RECEIVER_NAME', p: 'Miles Davis' },
                                { label: 'SOUL_EMAIL', p: 'miles@jazz.fm' },
                                { label: 'STREET_GROOVE', p: '42 Blue Note Ave' },
                                { label: 'CITY_VIBE', p: 'New York, NY' },
                            ].map(f => (
                                <div key={f.label} className="space-y-4">
                                    <label className="text-xs font-black uppercase opacity-40 tracking-widest">{f.label}</label>
                                    <input className="w-full bg-white border-2 border-[#432]/10 p-6 text-xl font-bold italic outline-none focus:border-[#fb923c] transition-all" placeholder={f.p} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Shipping Method */}
                    <section className="space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-widest opacity-40">CARRIER_FLOW</h3>
                        <div className="p-8 bg-white border-2 border-[#fb923c] space-y-2 transform rotate-1 shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-4 font-black italic text-[#ec4899] text-xs underline">FASTER</div>
                            <div className="flex justify-between items-center text-2xl font-black italic uppercase">
                                <span>EXPRESS_AIR</span>
                                <span className="text-[#fb923c]">$12.00</span>
                            </div>
                            <p className="text-sm font-medium opacity-40 italic">2-3 days with extra padding</p>
                        </div>
                    </section>
                </div>

                {/* Secure Payment */}
                <aside className="space-y-16">
                    <div className="bg-white border-4 border-[#432] p-12 space-y-12 relative shadow-[30px_30px_0px_0px_rgba(251,146,60,0.1)]">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-[#432] border-b-2 border-[#432]/10 pb-6">ACQUISITION_TOTAL</h3>
                        <div className="space-y-6 text-xl font-medium italic">
                            <div className="flex justify-between items-start opacity-60">
                                <span>Midnight Jazz (x1)</span>
                                <span>$45.00</span>
                            </div>
                            <div className="flex justify-between items-start opacity-60">
                                <span>Postage</span>
                                <span>$12.00</span>
                            </div>
                            <div className="h-[2px] bg-[#fb923c]/20"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase tracking-widest opacity-40">ORDER_VALUE</span>
                                <span className="text-6xl font-black text-[#ec4899] leading-none">$57.00</span>
                            </div>
                        </div>

                        <div className="space-y-8 pt-12 border-t-2 border-[#432]/10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#fb923c]">CARD_AUTHENTICATOR</label>
                                <input className="w-full bg-[#fffaf0] border-b-4 border-[#432] p-4 font-mono text-2xl tracking-[0.2em] outline-none" placeholder="0000 0000 0000 0000" />
                            </div>
                            <button className="w-full py-10 bg-[#432] text-white text-4xl font-black italic uppercase tracking-tighter hover:bg-[#ec4899] transition-all transform hover:-rotate-3 shadow-2xl">
                                CONFIRM_GROOVE
                            </button>
                        </div>

                        <div className="pt-8 text-center">
                            <p className="text-[9px] font-black text-[#fb923c] uppercase tracking-[0.5em] italic">SECURE_ANALOG_ENCRYPTION_v1.2</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
