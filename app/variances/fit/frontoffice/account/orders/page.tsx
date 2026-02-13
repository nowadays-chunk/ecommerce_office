"use client";

import React from 'react';

const ORDERS = [
    { id: "FT-440-X", date: "12 OCT 2025", total: "$1,840.00", status: "ENFORCED", items: ["Elite Compression Legging", "Grit-X Training Jacket"] },
    { id: "FT-430-Y", date: "24 AUG 2025", total: "$450.00", status: "VELOCITY", items: ["Impact-Damping Trainers"] },
    { id: "FT-412-Z", date: "15 APR 2025", total: "$12,400.00", status: "ARCHIVED", items: ["Cyber-Power Cage (Elite v1)"] }
];

export default function FitOrders() {
    return (
        <div className="min-h-screen bg-white text-black font-sans italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-black/5 uppercase select-none pointer-events-none -skew-x-12">VELOCITY</div>
                <div className="w-24 h-4 bg-black skew-x-[-12deg] animate-pulse"></div>
                <h1 className="text-7xl lg:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.8] text-black">
                    THE <br /> <span className="bg-black text-white px-8">LOGS.</span>
                </h1>
                <p className="max-w-xl text-[12px] font-black uppercase tracking-[0.5em] opacity-40 leading-loose italic animate-pulse">DEPLOYMENT_HISTORY // v8.01.XP // ELITE_ACCESS_SYNCED.</p>
            </header>

            <div className="max-w-6xl mx-auto space-y-32 relative z-10">
                <div className="grid gap-px bg-black border-[12px] border-black">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-white p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center group hover:bg-black hover:text-white transition-all duration-300">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-8 h-2 bg-black group-hover:bg-white transition-colors"></div>
                                    <p className="text-[12px] font-black uppercase tracking-widest border-l-8 border-black pl-4 group-hover:border-white">DEPLOY_{order.id}</p>
                                </div>
                                <h2 className="text-5xl font-black tracking-tighter italic uppercase -skew-x-12">{order.items.join(" + ")}</h2>
                                <p className="text-xl font-black opacity-40">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-8">
                                <span className={`text-xl font-black uppercase tracking-tighter px-12 py-5 border-[12px] group-hover:border-white transform -rotate-2 ${order.status === 'VELOCITY' ? 'bg-[#ff0000] text-white border-[#ff0000] shadow-[0_0_50px_rgba(255,0,0,0.3)]' : 'border-black/10 text-black/20'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[12px] font-black uppercase tracking-widest border-b-[8px] border-black group-hover:border-white transition-colors pb-2">VIEW_HARDWARE_STATS</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t-[12px] border-black items-center">
                    <div className="space-y-12">
                        <h2 className="text-7xl font-black italic uppercase tracking-tighter -skew-x-12">ENGINE_UPGRADE.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-90 decoration-black decoration-[12px] underline">
                            <p>User output level: ELITE_SYNC. Your 3 successful hardware deployments have optimized your training network by 42%. Priority allocation for Series-X is active.</p>
                        </div>
                    </div>
                    <div className="p-16 border-[12px] border-black bg-black text-white space-y-12 -skew-x-6 transform hover:skew-x-0 transition-transform shadow-[40px_40px_0px_rgba(0,0,0,0.15)] group">
                        <h3 className="text-[12px] font-black uppercase tracking-widest text-white/40 italic">TIER: ELITE_OPERATIVE</h3>
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80" className="w-48 h-48 mx-auto object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[5s] border-8 border-white" />
                        <button className="w-full py-10 bg-white text-black text-4xl font-black uppercase tracking-tighter hover:bg-[#ff0000] hover:text-white transition-all transform hover:skew-x-6">DEPLOY_NEW_GEAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
