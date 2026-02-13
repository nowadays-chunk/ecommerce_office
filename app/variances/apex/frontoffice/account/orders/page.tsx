"use client";

import React from 'react';

const ORDERS = [
    { id: "AP-88210", date: "OCT 12, 2025", total: "$4,200.00", status: "SYNCED", items: ["Neural Trigger v8", "Heavy Combat Suit"] },
    { id: "AP-87942", date: "AUG 24, 2025", total: "$1,850.00", status: "TRANSMIT", items: ["Squad Comms Pack"] },
    { id: "AP-86501", date: "MAY 15, 2025", total: "$12,400.00", status: "ARCHIVED", items: ["Apex Command Center"] }
];

export default function ApexOrders() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[18vw] font-black text-[#ff3e3e]/5 uppercase select-none pointer-events-none -skew-x-12">LEGEND</div>
                <div className="w-24 h-4 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] skew-x-[-12deg] shadow-[0_0_30px_#ff3e3e]"></div>
                <h1 className="text-7xl lg:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white">
                    SQUAD <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed]">LOGS.</span>
                </h1>
                <p className="max-w-xl text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/40 leading-loose italic animate-pulse">DEPLOYMENT_HISTORY // v8.01.XP // NEURAL_SYNC_ACTIVE.</p>
            </header>

            <div className="max-w-6xl mx-auto space-y-32 relative z-10">
                <div className="grid gap-8">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-black p-12 lg:p-16 border-4 border-[#ff3e3e]/10 hover:border-[#ff3e3e] transition-all duration-500 group relative overflow-hidden flex flex-col lg:flex-row justify-between items-center -skew-x-6 hover:skew-x-0">
                            <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#ff3e3e]/40 italic group-hover:animate-pulse">DECRYPTING_LOG...</div>
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-3 h-3 border border-[#ff3e3e] rounded-none group-hover:bg-[#ff3e3e] transition-colors"></div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40">DEPLOYMENT_{order.id}</p>
                                </div>
                                <h2 className="text-4xl font-black tracking-tighter italic uppercase text-white leading-none">{order.items.join(" <SYNC> ")}</h2>
                                <p className="text-xl font-black text-[#ff3e3e]/60">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-8">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-10 py-5 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white shadow-[0_0_30px_rgba(255,62,62,0.4)] relative ${order.status !== 'TRANSMIT' ? 'opacity-20 grayscale brightness-50' : 'animate-pulse'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[10px] font-black uppercase tracking-widest border border-[#ff3e3e]/20 px-6 py-2 hover:bg-[#ff3e3e] hover:text-white transition-all">VIEW_MISSION_DATA</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t-8 border-[#ff3e3e]/20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white -skew-x-12">NEURAL_UPGRADE.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic text-[#ff3e3e]/80 uppercase">
                            <p>Squad rank: ELITE_SYNC. Based on your deployment frequency, you are eligibility for the Neural Trigger v9.0 early handshake protocol. Deploy in sector 88 to initiate.</p>
                        </div>
                    </div>
                    <div className="p-16 border-8 border-[#ff3e3e]/10 bg-black text-center space-y-12 relative overflow-hidden group shadow-[0_0_100px_rgba(255,62,62,0.1)] -skew-x-12 transform hover:skew-x-0 transition-transform">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3e3e]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40">TIER: SQUAD_OPERATIVE</p>
                        <div className="w-32 h-32 mx-auto border-4 border-[#ff3e3e] rounded-none rotate-45 flex items-center justify-center p-4 shadow-[0_0_30px_#ff3e3e]">
                            <div className="w-full h-full bg-[#ff3e3e] animate-pulse"></div>
                        </div>
                        <button className="w-full py-10 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-3xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform shadow-[0_0_50px_rgba(255,62,62,0.45)]">INITIATE_UPGRADE_SYNC</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
