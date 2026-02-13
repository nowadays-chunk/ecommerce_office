"use client";

import React from 'react';

export default function GrubCheckout() {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-6xl mx-auto space-y-24 bg-[#faf9f6] text-[#2d3a3a]">
            <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b-2 border-[#2d3a3a]/5 pb-12">
                <h1 className="text-6xl lg:text-9xl font-black tracking-tighter leading-none">ORDER_HUB</h1>
                <div className="text-right space-y-2">
                    <div className="w-16 h-2 w-full bg-[#22c55e] rounded-full mb-2"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#2d3a3a]/40 italic">SESSION_ID: GR-0042</p>
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24">
                <div className="space-y-20">
                    {/* Shipping Terminal */}
                    <section className="space-y-12">
                        <h2 className="text-3xl font-black uppercase tracking-tighter bg-white text-[#2d3a3a] px-8 py-4 rounded-[2rem] inline-block shadow-xl border-2 border-[#22c55e]/10">DROP_OFF_POINT</h2>
                        <div className="grid grid-cols-1 gap-10">
                            {[
                                { label: 'DELIVERY_CAPTAIN', p: 'Alex Meadow' },
                                { label: 'LOG_EMAIL', p: 'alex@garden.net' },
                                { label: 'COORDINATES_STREET', p: '88 Orchard Road' },
                                { label: 'CITY_NODE', p: 'Portland, OR' },
                            ].map(f => (
                                <div key={f.label} className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-[#22c55e] tracking-widest">{f.label}</label>
                                    <input className="w-full bg-white border-2 border-[#2d3a3a]/5 p-6 rounded-[2rem] text-xl font-bold outline-none focus:border-[#22c55e] transition-all shadow-sm" placeholder={f.p} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Logistics Block */}
                    <section className="space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#2d3a3a]/40">DELIVERY_SPEED</h3>
                        <div className="p-8 bg-[#22c55e] text-white rounded-[3rem] space-y-2 shadow-2xl relative cursor-pointer hover:scale-[1.02] transition-transform">
                            <div className="flex justify-between items-center text-2xl font-black uppercase italic">
                                <span>LOCAL_EXPRESS</span>
                                <span className="text-white">FREE</span>
                            </div>
                            <p className="text-sm font-medium opacity-80 italic italic">Arriving within 24 hours via EV</p>
                        </div>
                    </section>
                </div>

                {/* Secure Payment */}
                <aside className="space-y-16">
                    <div className="bg-white border-2 border-[#2d3a3a]/5 p-12 space-y-12 relative shadow-[40px_40px_80px_-20px_rgba(0,0,0,0.05)] rounded-[4rem]">
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-[#2d3a3a] border-b-2 border-[#2d3a3a]/5 pb-8">PANTRY_TOTAL</h3>
                        <div className="space-y-8 text-xl font-bold italic">
                            <div className="flex justify-between items-start opacity-40">
                                <span>Honeycrisp (1.5 LB)</span>
                                <span>$12.75</span>
                            </div>
                            <div className="flex justify-between items-start opacity-40">
                                <span>Delivery_Fee</span>
                                <span>$0.00</span>
                            </div>
                            <div className="h-[2px] bg-[#22c55e]/10"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase tracking-widest text-[#22c55e]">GRAND_TOTAL</span>
                                <span className="text-7xl font-black text-[#2d3a3a] leading-none">$12.75</span>
                            </div>
                        </div>

                        <div className="space-y-10 pt-12 border-t-2 border-[#2d3a3a]/5">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase text-[#22c55e]">SECURE_PAY_NODE</label>
                                <input className="w-full bg-[#faf9f6] border-b-4 border-[#22c55e] p-6 text-2xl tracking-[0.2em] outline-none font-mono rounded-2xl" placeholder="0000 0000 0000 0000" />
                            </div>
                            <button className="w-full py-12 bg-[#2d3a3a] text-white text-4xl font-black uppercase tracking-tighter rounded-[3rem] hover:bg-[#22c55e] transition-all shadow-2xl">
                                FULFILL_ORDER
                            </button>
                        </div>

                        <div className="pt-8 text-center">
                            <p className="text-[9px] font-black text-[#22c55e] uppercase tracking-[0.5em] italic">ECO_SECURE_PAY_PROTOCOL_v4</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
