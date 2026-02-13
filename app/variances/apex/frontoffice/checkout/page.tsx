"use client";

import React from 'react';

export default function ApexCheckout() {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-7xl mx-auto space-y-24 bg-[#050505] text-[#00ff9d] font-mono italic overflow-hidden">
            <header className="border-b-4 border-white/10 pb-12 flex justify-between items-end relative">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00ff9d]/5 blur-[120px] rounded-full"></div>
                <h1 className="text-8xl lg:text-[10rem] font-black tracking-tighter leading-none uppercase text-white skew-x-[-12deg]">READY_PROMPT</h1>
                <div className="text-right space-y-2 relative z-10">
                    <div className="w-16 h-2 bg-[#00ff9d] ml-auto"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest italic opacity-30 text-white">SYSTEM_ID: APX-9942</p>
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24 relative z-10">
                <div className="space-y-20">
                    {/* Deployment Vector */}
                    <section className="space-y-12">
                        <h2 className="text-4xl font-black uppercase tracking-tighter bg-[#00ff9d] text-black px-8 py-4 inline-block transform -rotate-1 skew-x-[-12deg]">DEPO_VECTOR</h2>
                        <div className="grid grid-cols-1 gap-12">
                            {[
                                { label: 'PLAYER_ALIAS', p: 'Z-REX_PRO' },
                                { label: 'COMMS_SIGNAL', p: 'ZREX@APEX.NET' },
                                { label: 'BASE_STREET', p: '88_NEON_GRID_LATENCY' },
                                { label: 'ZONE_CITY', p: 'SEATTLE, WA' },
                            ].map(f => (
                                <div key={f.label} className="space-y-4">
                                    <label className="text-xs font-black uppercase opacity-40 tracking-widest text-[#00ff9d]/60">{f.label}</label>
                                    <input className="w-full bg-[#0a0a0a] border-b-2 border-[#00ff9d]/40 p-6 text-2xl font-black uppercase outline-none focus:border-[#00ff9d] transition-all text-white placeholder:opacity-10" placeholder={f.p} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Logistics Logic */}
                    <section className="space-y-8 p-12 bg-[#0a0a0a] border-2 border-white/5 skew-x-[-4deg]">
                        <h3 className="text-2xl font-black uppercase tracking-tighter italic text-white underline decoration-[#00ff9d] decoration-4">LOGISTICS_STRAT</h3>
                        <div className="space-y-6 pt-6">
                            <div className="flex justify-between items-center border border-[#00ff9d]/20 p-8 hover:bg-[#00ff9d]/10 cursor-pointer transition-all group">
                                <span className="text-3xl font-black uppercase italic text-white group-hover:text-[#00ff9d]">WARP_SPEED_v2</span>
                                <span className="text-xl font-black text-[#00ff9d]">FREE</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Secure Transact Node */}
                <aside className="space-y-16">
                    <div className="bg-[#0a0a0a] border-4 border-white/5 p-12 space-y-12 relative shadow-[40px_40px_100px_rgba(0,0,255,157,0.05)] skew-x-[-2deg]">
                        <div className="absolute -top-4 -right-4 bg-[#00ff9d] text-black px-6 py-2 text-[10px] font-black italic animate-pulse">ENCRYPTED_SIGNAL</div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter border-b-2 border-white/10 pb-8 italic text-white">REQUISITION_SUM</h3>
                        <div className="space-y-8 text-2xl font-black italic">
                            <div className="flex justify-between items-start opacity-40">
                                <span>Titan X-Gen (x1)</span>
                                <span>$120.00</span>
                            </div>
                            <div className="flex justify-between items-start opacity-40">
                                <span>Warp_Logistics</span>
                                <span>$0.00</span>
                            </div>
                            <div className="h-2 bg-[#00ff9d]/10"></div>
                            <div className="flex justify-between items-end pt-4">
                                <span className="text-[12px] font-black uppercase tracking-widest opacity-30 italic text-white">TOTAL_NET_CREDITS</span>
                                <span className="text-8xl font-black leading-none text-[#00ff9d]">$120.00</span>
                            </div>
                        </div>

                        <div className="space-y-10 pt-12 border-t border-white/10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">CREDIT_TOKEN_AUTH</label>
                                <input className="w-full bg-[#111] border-2 border-[#00ff9d]/20 p-6 text-3xl font-mono tracking-[0.2em] outline-none text-white focus:border-[#00ff9d]" placeholder="**** **** **** ****" />
                            </div>
                            <button className="w-full py-12 bg-[#00ff9d] text-black text-5xl font-black italic uppercase tracking-tighter hover:bg-white transition-all transform hover:scale-[1.02] shadow-[20px_20px_60px_-10px_rgba(0,255,157,0.3)] skew-x-[-12deg]">
                                EXECUTE_KIT
                            </button>
                        </div>

                        <div className="pt-8 text-center">
                            <p className="text-[9px] font-black text-[#00ff9d] uppercase tracking-[0.6em] italic opacity-40">APEX_SECURE_PAY_PROTOCOL_v4.2</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
