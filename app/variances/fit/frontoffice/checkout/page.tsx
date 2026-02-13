"use client";

import React from 'react';

export default function FitCheckout() {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-7xl mx-auto space-y-24 bg-white text-black italic">
            <header className="border-b-8 border-black pb-12 flex justify-between items-end">
                <h1 className="text-8xl lg:text-[10rem] font-black tracking-tighter leading-none uppercase">COMMITMENT.</h1>
                <div className="text-right space-y-2">
                    <div className="w-24 h-4 bg-black"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest italic opacity-30">TX_PROTOCOL: FIT-982</p>
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24">
                <div className="space-y-20">
                    {/* Supply Coordination */}
                    <section className="space-y-12">
                        <h2 className="text-4xl font-black uppercase tracking-tighter bg-black text-white px-8 py-4 inline-block transform -rotate-1">SUPPLY_COORDINATES</h2>
                        <div className="grid grid-cols-1 gap-12">
                            {[
                                { label: 'ATHLETE_NAME', p: 'JORDAN_RUN' },
                                { label: 'COMMS_SIGNAL', p: 'JORDAN@PERF.LAB' },
                                { label: 'BASE_STREET', p: '88_VELOCITY_DRIVE' },
                                { label: 'VECTOR_CITY', p: 'BOULDER, CO' },
                            ].map(f => (
                                <div key={f.label} className="space-y-4">
                                    <label className="text-xs font-black uppercase opacity-40 tracking-widest">{f.label}</label>
                                    <input className="w-full bg-[#f1f1f1] border-b-8 border-black p-6 text-2xl font-black uppercase outline-none focus:bg-black focus:text-white transition-all" placeholder={f.p} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Logistics Mode */}
                    <section className="space-y-8 p-12 bg-[#f1f1f1] transform rotate-1 border-4 border-black">
                        <h3 className="text-2xl font-black uppercase tracking-tighter italic">LOGISTICS_STRATEGY</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-4 border-black p-8 bg-black text-white hover:bg-white hover:text-black cursor-pointer transition-all group">
                                <span className="text-3xl font-black uppercase italic">RAPID_DEPLOY</span>
                                <span className="text-xl font-black group-hover:text-black">+$15.00</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Secure Payment Terminal */}
                <aside className="space-y-16">
                    <div className="bg-white border-8 border-black p-12 space-y-12 relative shadow-[40px_40px_0px_0px_rgba(0,0,0,0.05)]">
                        <div className="absolute -top-4 -right-4 bg-black text-white px-6 py-2 text-[10px] font-black italic">ENCRYPTED_SIGNAL_V.2</div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter border-b-4 border-black pb-8 italic">FINANCIAL_COMMITMENT</h3>
                        <div className="space-y-8 text-2xl font-black italic">
                            <div className="flex justify-between items-start opacity-40">
                                <span>APEX_PRO (x1)</span>
                                <span>$160.00</span>
                            </div>
                            <div className="flex justify-between items-start opacity-40">
                                <span>Logistics</span>
                                <span>$15.00</span>
                            </div>
                            <div className="h-4 bg-black/5"></div>
                            <div className="flex justify-between items-end pt-4">
                                <span className="text-[12px] font-black uppercase tracking-widest opacity-30 italic">FINAL_NET_VALUE</span>
                                <span className="text-8xl font-black leading-none">$175.00</span>
                            </div>
                        </div>

                        <div className="space-y-10 pt-12 border-t-4 border-black">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest">CREDIT_TOKEN_GATEWAY</label>
                                <input className="w-full bg-[#f1f1f1] border-4 border-black p-6 text-3xl font-mono tracking-[0.2em] outline-none" placeholder="**** **** **** ****" />
                            </div>
                            <button className="w-full py-16 bg-black text-white text-6xl font-black tracking-tighter hover:bg-[#ff3e3e] transition-all transform hover:-rotate-1 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)]">
                                EXECUTE_KIT
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
