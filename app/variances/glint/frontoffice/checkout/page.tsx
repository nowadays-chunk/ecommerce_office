"use client";

import React from 'react';

export default function GlintCheckout() {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-6xl mx-auto space-y-24 bg-[#fffafd] text-[#4a3a4a]">
            <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#ff8fa3]/10 pb-12">
                <h1 className="text-8xl lg:text-9xl font-black italic tracking-tighter text-[#4a3a4a] leading-none uppercase">ACQUIRING.</h1>
                <div className="text-right space-y-2">
                    <div className="w-24 h-1 bg-gradient-to-r from-[#ff8fa3] to-[#d4af37] mb-2"></div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#ff8fa3] italic opacity-40">TX_SIGNAL: GL-8802</p>
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24">
                <div className="space-y-20">
                    {/* Beauty Destination */}
                    <section className="space-y-12">
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#4a3a4a] bg-white px-8 py-4 rounded-full border border-[#ff8fa3]/10 inline-block shadow-xl">DELIVERY_CHAMBER</h2>
                        <div className="grid grid-cols-1 gap-10">
                            {[
                                { label: 'BEARER_NAME', p: 'Clara Veil' },
                                { label: 'SIGNAL_ENDPOINT', p: 'clara@aura.com' },
                                { label: 'VANITY_STREET', p: '88 Radiance Blvd' },
                                { label: 'CITY_PRECINCT', p: 'Paris, FR' },
                            ].map(f => (
                                <div key={f.label} className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-[#ff8fa3] tracking-widest">{f.label}</label>
                                    <input className="w-full bg-white border border-[#ff8fa3]/10 p-6 rounded-3xl text-xl font-light italic outline-none focus:border-[#ff8fa3] transition-all shadow-sm" placeholder={f.p} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Transmission Mode */}
                    <section className="space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#4a3a4a]/40">TRANSMISSION_SPEED</h3>
                        <div className="p-8 bg-gradient-to-r from-[#ff8fa3] to-[#ffafbd] text-white rounded-[3rem] space-y-2 shadow-2xl relative cursor-pointer group hover:scale-[1.02] transition-transform">
                            <div className="flex justify-between items-center text-2xl font-black uppercase italic">
                                <span>ELITE_COURIER</span>
                                <span className="text-white">FREE</span>
                            </div>
                            <p className="text-sm font-medium opacity-80 italic italic">48HR_HAND_DELIVERED_PREMIUM</p>
                        </div>
                    </section>
                </div>

                {/* Secure Payment Terminal */}
                <aside className="space-y-16">
                    <div className="bg-white border border-[#ff8fa3]/10 p-12 space-y-12 relative shadow-[50px_50px_100px_-20px_rgba(255,143,163,0.1)] rounded-[4rem]">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-[#4a3a4a] border-b border-[#ff8fa3]/10 pb-8">VANITY_TOTAL</h3>
                        <div className="space-y-8 text-xl font-light italic">
                            <div className="flex justify-between items-start opacity-40">
                                <span>Luminous Glow (x1)</span>
                                <span>$85.00</span>
                            </div>
                            <div className="flex justify-between items-start opacity-40">
                                <span>Elite_Delivery</span>
                                <span>$0.00</span>
                            </div>
                            <div className="h-[1px] bg-[#ff8fa3]/10"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">TOTAL_ACQUISITION</span>
                                <span className="text-7xl font-light text-[#4a3a4a] leading-none">$85.00</span>
                            </div>
                        </div>

                        <div className="space-y-10 pt-12 border-t border-[#ff8fa3]/10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase text-[#ff8fa3]">FINANCIAL_DECRYPTOR</label>
                                <input className="w-full bg-[#fffafd] border-b border-[#ff8fa3] p-6 text-2xl tracking-[0.3em] outline-none font-mono rounded-2xl" placeholder="**** **** **** ****" />
                            </div>
                            <button className="w-full py-12 bg-[#4a3a4a] text-white text-4xl font-black uppercase tracking-widest rounded-[3rem] hover:bg-[#ff8fa3] transition-all shadow-2xl">
                                FINALIZE_GLOW
                            </button>
                        </div>

                        <div className="pt-8 text-center">
                            <p className="text-[9px] font-black text-[#ff8fa3] uppercase tracking-[0.6em] italic animate-pulse">ENCRYPTION_v1.08_RADIANT</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
