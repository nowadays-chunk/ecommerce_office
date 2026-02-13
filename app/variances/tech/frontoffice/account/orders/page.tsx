"use client";

import React from 'react';

const ORDERS = [
    { id: "TCH-FF8A", date: "2025.10.12.04", total: "1,420.00 Credits", status: "SYNCED", items: ["Neural Link v8.01", "Silicon Shell (Matte Black)"] },
    { id: "TCH-B021", date: "2025.08.24.11", total: "850.00 Credits", status: "DATA_STREAM", items: ["Quantum Core Heat Sink"] },
    { id: "TCH-A900", date: "2025.05.15.08", total: "12,400.00 Credits", status: "DECOMMISSIONED", items: ["Neural Server Cluster (Home)"] }
];

export default function TechOrders() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-8 relative group">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0062ff]/10 blur-[150px] rounded-full group-hover:bg-[#00f2ff]/20 transition-all duration-[2s]"></div>
                <div className="w-24 h-[1px] bg-[#00f2ff] shadow-[0_0_15px_#00f2ff]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white skew-x-[-12deg]">
                    DATA <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#0062ff]">SHREDS.</span>
                </h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40 leading-loose italic animate-pulse">BOOT_HISTORY_INIT // v9.01 // NEURAL_ACQUISITION_LOG.</p>
            </header>

            <div className="max-w-6xl mx-auto space-y-32 relative z-10">
                <div className="grid gap-6">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-black/40 backdrop-blur-3xl p-12 lg:p-16 border border-[#00f2ff]/10 hover:border-[#00f2ff] transition-all duration-500 group relative overflow-hidden flex flex-col lg:flex-row justify-between items-center">
                            <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#00f2ff]/40 italic group-hover:animate-pulse">DECRYPTING_LOG...</div>
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-3 h-3 border border-[#00f2ff] rounded-none group-hover:bg-[#00f2ff] transition-all"></div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40">EVENT_{order.id}</p>
                                </div>
                                <h2 className="text-4xl font-black tracking-tighter italic uppercase text-white skew-x-[-6deg]">{order.items.join(" <SYNC> ")}</h2>
                                <p className="text-xl font-black text-[#00f2ff]/60">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-8">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-10 py-5 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] text-black shadow-[0_0_30px_rgba(0,242,255,0.4)] relative ${order.status !== 'DATA_STREAM' ? 'opacity-20 grayscale brightness-50' : 'animate-pulse'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[10px] font-black uppercase tracking-widest border border-[#00f2ff]/20 px-6 py-2 hover:bg-[#00f2ff] hover:text-black transition-all">DOWNLOAD_SCHEMATICS</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t border-[#00f2ff]/20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white skew-x-[-6deg]">NEURAL_UPGRADE_PATH.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic text-[#00f2ff]/80 uppercase">
                            <p>User integration level: 8.8. Based on your acquisition logs, you are eligible for the Neural Core v9.0 early handshake protocol. Sync with core to initiate upgrade sequence.</p>
                        </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-3xl p-16 border border-[#00f2ff]/20 text-center space-y-12 relative overflow-hidden group shadow-[0_0_50px_rgba(0,242,255,0.05)]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]">NODE_ADMIN_STATUS: LEVEL_ELITE</p>
                        <div className="w-32 h-32 mx-auto border-4 border-[#00f2ff] rounded-none rotate-45 flex items-center justify-center p-4">
                            <div className="w-full h-full bg-[#00f2ff] animate-pulse"></div>
                        </div>
                        <button className="w-full py-10 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] text-black text-3xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform shadow-[0_0_50px_rgba(0,242,255,0.4)]">INITIATE_UPGRADE_SYNC</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
