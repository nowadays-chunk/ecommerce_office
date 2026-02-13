"use client";

import React from 'react';

const ORDERS = [
    { id: "GRB-210", date: "Harvest Oct, 2025", total: "$240.00", status: "SPROUTED", items: ["Community Root Box", "Fresh Foraged Herbs"] },
    { id: "GRB-198", date: "Harvest Aug, 2025", total: "$85.00", status: "ROOTING", items: ["Organic Soil Starter"] },
    { id: "GRB-150", date: "Harvest Apr, 2025", total: "$1,200.00", status: "HARVESTED", items: ["Custom Greenhouse Kit (Small)"] }
];

export default function GrubOrders() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-black italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12">
                <div className="w-16 h-16 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_30px_rgba(34,197,94,0.4)]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-none">HARVEST_LOGS.</h1>
                <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Tribe_History // Fresh_Status_v2.01_RAW</p>
            </header>

            <div className="max-w-6xl mx-auto space-y-32 relative z-10">
                <div className="grid gap-12">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-white rounded-[4rem] p-12 lg:p-16 shadow-2xl border-8 border-white group hover:rotate-1 transition-all duration-700 flex flex-col lg:flex-row justify-between items-center">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <span className="w-4 h-4 bg-[#22c55e] rounded-full shadow-[0_0_20px_#22c55e]"></span>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">LOG_{order.id}</p>
                                </div>
                                <h2 className="text-4xl font-black tracking-tighter italic uppercase underline decoration-[#22c55e] decoration-8 underline-offset-8 decoration-skip-ink-none">{order.items.join(" <SPROUT> ")}</h2>
                                <p className="text-xl font-black opacity-40">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-6">
                                <span className={`text-[12px] font-black uppercase tracking-widest px-12 py-5 bg-[#2d3a3a] text-white rounded-full shadow-2xl ${order.status === 'ROOTING' ? 'animate-bounce shadow-[0_20px_50px_rgba(34,197,94,0.3)]' : 'opacity-40 grayscale'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[10px] font-black uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-[#22c55e] transition-all">VIEW_FARM_INTEL</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t-8 border-[#22c55e]/10 items-center">
                    <div className="space-y-12">
                        <h2 className="text-6xl font-black italic uppercase tracking-tighter bg-white text-[#22c55e] px-8 py-4 inline-block rounded-full shadow-2xl border-4 border-white">SOIL_IMPACT.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-90 underline decoration-[#22c55e] decoration-4 underline-offset-12">
                            <p>Your current tribal impact: 3 successful harvests. You have directly supported 2 local farms and 1 independent forager. The soil is grateful.</p>
                        </div>
                    </div>
                    <div className="p-16 bg-white rounded-[5rem] shadow-2xl border-8 border-[#22c55e]/5 text-center space-y-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">RANK: CHIEF_GATHERER</p>
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80" className="w-40 h-40 mx-auto rounded-[3rem] object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[5s]" />
                        <button className="w-full py-10 bg-[#2d3a3a] text-white text-3xl font-black uppercase tracking-tighter rounded-[3rem] hover:bg-[#22c55e] transition-all shadow-xl">PLANT_NEW_SEED</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
