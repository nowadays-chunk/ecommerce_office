"use client";

import React from 'react';

const ORDERS = [
    { id: "NRD-4402", date: "12 Oct 2025", total: "€540.00", status: "DELIVERED", items: ["Ash Wood Chair", "Linen Throw"] },
    { id: "NRD-4389", date: "24 Aug 2025", total: "€120.00", status: "TRANSIT", items: ["Organic Soy Candle"] },
    { id: "NRD-4201", date: "15 May 2025", total: "€2,100.00", status: "DELIVERED", items: ["Cold-Rolled Steel Desk"] }
];

export default function NordicOrders() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans p-12 lg:p-24">
            <header className="flex flex-col mb-32 space-y-8">
                <div className="w-8 h-px bg-[#2d2d2d]/40"></div>
                <h1 className="text-6xl lg:text-9xl font-light tracking-tight uppercase leading-none">STUDIO_LOGS.</h1>
                <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-40 italic">Historical_Acquisitions // Studio_Efficiency_v1.01</p>
            </header>

            <div className="max-w-6xl mx-auto space-y-24">
                <div className="grid gap-px bg-[#2d2d2d]/10 border border-[#2d2d2d]/10">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-white p-12 flex flex-col lg:flex-row justify-between items-center group hover:bg-[#fafafa] transition-colors">
                            <div className="space-y-4 text-center lg:text-left">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 italic">ID_{order.id}</p>
                                <h2 className="text-3xl font-light tracking-tight uppercase">{order.items.join(" + ")}</h2>
                                <p className="text-lg font-light opacity-60 italic">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-8 lg:mt-0 flex flex-col items-center lg:items-end space-y-4">
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-6 py-3 ${order.status === 'TRANSIT' ? 'bg-[#2d2d2d] text-white' : 'border border-[#2d2d2d]/10 opacity-40'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[10px] font-bold uppercase tracking-widest border-b border-[#2d2d2d]/20 pb-1 hover:border-[#2d2d2d] transition-colors">VIEW_STUDIO_NOTES</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t border-[#2d2d2d]/10 mt-24">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-light uppercase tracking-tight">MATERIAL_TRANSPARENCY.</h2>
                        <p className="text-xl font-light opacity-60 leading-relaxed italic">Every log entry above represents a commitment to material honesty. Your studio works are built to endure, reducing waste and honoring the craft.</p>
                    </div>
                    <div className="p-12 bg-[#fafafa] border border-[#2d2d2d]/10 space-y-6">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">STUDIO_TIER_v2</h3>
                        <p className="text-2xl font-light leading-tight">"You have curated 3 essential studio pieces. Your status as a 'Material Observer' is confirmed."</p>
                        <button className="w-full py-6 border-2 border-[#2d2d2d] text-[#2d2d2d] text-lg font-bold uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-white transition-all">NEW_CURATION</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
