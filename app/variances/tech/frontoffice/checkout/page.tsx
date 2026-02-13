"use client";

import React from 'react';

export default function TechCheckout() {
    return (
        <div className="py-24 px-6 lg:px-12 max-w-6xl mx-auto space-y-24 bg-[#080b10] text-[#00f2ff] font-mono">
            <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#00f2ff]/20 pb-12">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">
                        <span className="w-2 h-2 bg-[#00f2ff] animate-pulse"></span>
                        <span>Signal_Secure</span>
                    </div>
                    <h1 className="text-6xl font-black italic tracking-tighter text-white uppercase italic">ACQUISITION_TX.</h1>
                </div>
                <div className="text-right space-y-2">
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest italic">Node_ID: 0x882...FF</p>
                    <div className="h-1 w-32 bg-[#00f2ff]/10 overflow-hidden">
                        <div className="h-full bg-[#00f2ff] w-[65%] animate-pulse"></div>
                    </div>
                </div>
            </header>

            <div className="grid lg:grid-cols-2 gap-24">
                <div className="space-y-20">
                    {/* Supply Destination */}
                    <section className="space-y-12">
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#00f2ff] bg-[#00f2ff]/5 p-4 border-l-4 border-[#00f2ff]">Supply_Coordinates</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {[
                                { label: 'OPERATOR_ALIAS', p: 'SYSTEM_ADMIN' },
                                { label: 'DATA_ENDPOINT', p: 'ADMIN@CORE.PROTO' },
                                { label: 'PHYSICAL_LOC', p: 'VECTOR_22_NEXUS' },
                                { label: 'SECTOR_CODE', p: 'SC-88' },
                            ].map(f => (
                                <div key={f.label} className="space-y-3">
                                    <label className="text-[10px] font-black uppercase opacity-40 tracking-widest">{f.label}</label>
                                    <input className="w-full bg-black border border-[#00f2ff]/20 p-5 text-sm text-[#00f2ff] outline-none focus:border-[#00f2ff] transition-all placeholder:opacity-10" placeholder={f.p} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Transmission Mode */}
                    <section className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40">Transmission_Protocol</h3>
                        <div className="p-8 border border-[#00f2ff]/30 bg-[#00f2ff]/5 space-y-2 hover:bg-[#00f2ff]/10 cursor-pointer transition-all">
                            <div className="flex justify-between items-center text-white">
                                <span className="font-bold tracking-widest">QUANTUM_RELAY</span>
                                <span className="text-[#00f2ff]">Ξ 0.002</span>
                            </div>
                            <p className="text-[10px] opacity-40">INSTANTANEOUS_SYNC_99.9%_UPTIME</p>
                        </div>
                    </section>
                </div>

                <aside className="space-y-12">
                    <div className="p-12 border border-[#00f2ff]/20 bg-[#0a0f18] space-y-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/5 blur-[60px] group-hover:bg-[#00f2ff]/10"></div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#00f2ff]">TX_Manifest</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-start text-[11px] opacity-60 italic">
                                <span>Neural_Link_V2</span>
                                <span>Ξ 0.42</span>
                            </div>
                            <div className="flex justify-between items-start text-[11px] opacity-60 italic">
                                <span>Relay_Gas</span>
                                <span>Ξ 0.002</span>
                            </div>
                            <div className="h-[1px] bg-[#00f2ff]/10"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Total_Network_Value</span>
                                <span className="text-5xl font-black text-[#00f2ff] tracking-tighter">Ξ 0.422</span>
                            </div>
                        </div>

                        <button className="w-full py-10 bg-white text-black font-black uppercase text-xl leading-none tracking-tighter shadow-xl hover:bg-[#00f2ff] transition-all">
                            BROADCAST_TRANSACTION
                        </button>

                        <div className="pt-8 text-center space-y-4">
                            <p className="text-[8px] font-bold opacity-30 uppercase tracking-[0.4em]">Transaction_Immutable_On_Finalize</p>
                            <div className="flex justify-center space-x-2 text-[10px]">
                                {['BTC', 'ETH', 'USDT'].map(c => (
                                    <span key={c} className="px-2 py-1 bg-white/5 border border-white/10 text-white/40">{c}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
