"use client";

import React from 'react';

const ORDERS = [
    { id: "ZN-042", date: "Cycle 88, 2025", total: "1.2 ETH Equivalent", status: "ABSORBED", items: ["Essence of Morning Mist", "Sandalwood Driftwood"] },
    { id: "ZN-039", date: "Cycle 72, 2025", total: "0.8 ETH Equivalent", status: "APPROACHING", items: ["Hand-Woven Moss Rug"] },
    { id: "ZN-012", date: "Cycle 14, 2025", total: "4.5 ETH Equivalent", status: "HARMONIZED", items: ["Ancient Bonsai (Living Archive)"] }
];

export default function ZenOrders() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic p-12 lg:p-24">
            <header className="flex flex-col mb-32 items-center text-center space-y-8">
                <div className="w-1.5 h-16 bg-[#22c55e]/20 rounded-full"></div>
                <h1 className="text-7xl lg:text-[10rem] font-bold tracking-tighter uppercase italic leading-none">VIBRATION_LOGS.</h1>
                <p className="text-sm font-medium uppercase tracking-widest opacity-40 italic">Cyclical_History // Soul_Link_Active</p>
            </header>

            <div className="max-w-6xl mx-auto space-y-32">
                <div className="grid gap-12">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-white rounded-[4rem] p-12 lg:p-16 shadow-2xl border-4 border-white flex flex-col lg:flex-row justify-between items-center group hover:-translate-y-4 transition-all duration-700">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <span className="w-3 h-3 bg-[#22c55e] rounded-full animate-pulse"></span>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] italic">NODE_{order.id}</p>
                                </div>
                                <h2 className="text-4xl font-bold tracking-tighter italic">{order.items.join(" + ")}</h2>
                                <p className="text-xl opacity-40 font-light italic">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-4">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-full ${order.status === 'APPROACHING' ? 'bg-[#22c55e] text-white shadow-2xl' : 'border-2 border-[#2d3a3a]/10 opacity-40 hover:opacity-100 transition-opacity'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[10px] font-black uppercase tracking-tighter underline decoration-[#22c55e] decoration-4 underline-offset-8">VIEW_SYNC_DETAILS</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t-2 border-[#2d3a3a]/5 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-bold italic uppercase tracking-tight text-[#22c55e]">PLANETARY_CONTRIBUTION.</h2>
                        <div className="space-y-8 text-2xl font-light leading-relaxed italic opacity-80 decoration-[#22c55e] decoration-8 underline decoration-skip-ink-none">
                            <p>With every acquisition, you have contributed to the reforestation of 12 hectares in the High Valleys. Your vibrational footprint is now carbon-negative.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-[5rem] p-16 shadow-2xl border-4 border-white text-center space-y-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Soul_Rank: HARMONIZED_MIND</p>
                        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80" className="w-48 h-48 mx-auto rounded-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000" />
                        <button className="w-full py-8 bg-[#2d3a3a] text-white text-2xl font-bold rounded-full hover:bg-[#22c55e] transition-colors">SYNC_NEW_INTENT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
