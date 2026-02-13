"use client";

import React from 'react';

const ORDERS = [
    { id: "HP-992-K", date: "20.10.2025", total: "$1,490.00", status: "STRUCTURAL", items: ["Industrial Core Hoodie", "Steel-Toe Boots v2"] },
    { id: "HP-981-L", date: "15.08.2025", total: "$850.00", status: "VELOCITY", items: ["Raw Denim Manifesto Jacket"] },
    { id: "HP-950-R", date: "02.04.2025", total: "$3,200.00", status: "ARCHIVED", items: ["Disruptor Concrete Table (Small)"] }
];

export default function HypeOrders() {
    return (
        <div className="min-h-screen bg-black text-white font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 space-y-12 relative">
                <div className="absolute -top-24 -left-12 text-[15vw] font-black text-white/5 uppercase -rotate-6 select-none pointer-events-none">DROPS</div>
                <div className="w-32 h-16 bg-white text-black font-black flex items-center justify-center text-4xl -skew-x-12">LOGS</div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none -skew-x-12">SYSTEM_LOGS.</h1>
                <p className="text-xs font-black uppercase tracking-[0.5em] opacity-40 italic">Industrial_History // structural_integrity_ACTIVE</p>
            </header>

            <div className="space-y-24 relative z-10">
                <div className="grid gap-2 outline-8 outline-white p-2 bg-white">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-black p-12 flex flex-col lg:flex-row justify-between items-center group hover:bg-white hover:text-black transition-all duration-300 -skew-y-1 hover:skew-y-0">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-4 h-4 bg-white group-hover:bg-black transition-colors"></div>
                                    <p className="text-[12px] font-black uppercase tracking-widest bg-white text-black px-2 group-hover:bg-black group-hover:text-white">ORDER_{order.id}</p>
                                </div>
                                <h2 className="text-5xl font-black tracking-tighter italic uppercase -skew-x-6">{order.items.join(" + ")}</h2>
                                <p className="text-xl font-black opacity-40">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-8">
                                <span className={`text-xl font-black uppercase tracking-tighter px-10 py-4 border-8 group-hover:border-black transform rotate-3 ${order.status === 'VELOCITY' ? 'bg-white text-black border-white' : 'border-white/20'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[10px] font-black uppercase tracking-widest border-b-4 border-white group-hover:border-black pb-2">VIEW_STRUCTURAL_DATA</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t-8 border-white items-center">
                    <div className="space-y-12">
                        <h2 className="text-6xl font-black italic uppercase tracking-tighter -skew-x-12">OPERATIVE_GROWTH.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-90 underline decoration-white decoration-8">
                            <p>Your acquisition frequency is at 88%. You have successfully integrated 3 structural drops into your grid. Priority access for Drop v9.0 is now unlocked.</p>
                        </div>
                    </div>
                    <div className="p-16 border-8 border-white bg-white text-black space-y-12 -rotate-2 transform hover:rotate-0 transition-transform shadow-[30px_30px_0px_rgba(255,255,255,0.2)]">
                        <h3 className="text-[12px] font-black uppercase tracking-widest bg-black text-white px-4 py-2 inline-block">TIER_1_STATUS</h3>
                        <p className="text-3xl font-black italic uppercase leading-tight italic">"History is built one drop at a time. Your grid is expanding at maximum velocity. No compromise. No apologies."</p>
                        <button className="w-full py-10 bg-black text-white text-4xl font-black uppercase tracking-tighter hover:bg-white hover:text-black border-8 border-black transition-all">RECRUIT_NEW_DROP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
