"use client";

import React from 'react';

const ORDERS = [
    { id: "VB-882", date: "OCT 20, 2025", total: "$420.00", status: "SATURATED", items: ["Neon Nights T-Shirt", "Retro VHS Pack"] },
    { id: "VB-871", date: "AUG 15, 2025", total: "$125.00", status: "TUNING", items: ["Analog Grain Filter Cap"] },
    { id: "VB-840", date: "APR 02, 2025", total: "$1,200.00", status: "ARCHIVED", items: ["Vintage Synth Hub (Lo-Fi)"] }
];

export default function VibeOrders() {
    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-8 relative">
                <div className="w-16 h-16 bg-[#ff4d6d] rounded-full animate-bounce shadow-2xl"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none text-shadow-retro">TAPE_LOGS.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40 italic">Analog_History // Saturated_Sync_v4.20_LIVE</p>
            </header>

            <div className="max-w-6xl mx-auto space-y-32">
                <div className="grid gap-8">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-white rounded-[3rem] p-12 lg:p-16 shadow-[20px_20px_0px_rgba(255,77,109,0.1)] border-4 border-[#ff4d6d]/5 flex flex-col lg:flex-row justify-between items-center group hover:-translate-y-2 transition-all duration-500">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <div className="w-4 h-4 bg-[#ff4d6d] rounded-full animate-ping"></div>
                                    <p className="text-[10px] font-black uppercase tracking-widest bg-[#ff4d6d] text-white px-4 py-1 rounded-full group-hover:px-8 transition-all">DROP_{order.id}</p>
                                </div>
                                <h2 className="text-4xl font-black tracking-tighter italic uppercase">{order.items.join(" + ")}</h2>
                                <p className="text-xl font-black opacity-40">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-6">
                                <span className={`text-[12px] font-black uppercase tracking-widest px-10 py-4 bg-[#ffecd1] rounded-full transform rotate-3 ${order.status === 'TUNING' ? 'shadow-[10px_10px_0px_#ff4d6d] border-2 border-[#ff4d6d]' : 'opacity-40'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[10px] font-black uppercase tracking-widest underline decoration-[#ff4d6d] decoration-Wavy underline-offset-8">VIEW_TAPE_DATA</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t-8 border-[#ff4d6d]/20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-6xl font-black italic uppercase tracking-tighter text-shadow-retro transform -rotate-2">VIBE_SATURATION.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-90 decoration-[#ff4d6d] decoration-8 underline">
                            <p>Your current saturation level is at 77%. You have successfully integrated 3 analog drops into your lifestyle. Keep the wave high.</p>
                        </div>
                    </div>
                    <div className="p-12 bg-white rounded-[4rem] shadow-2xl border-4 border-[#ff4d6d]/10 text-center space-y-8 transform rotate-1 group">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]">TIER: LO-FI_MASTER</p>
                        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80" className="w-40 h-40 mx-auto rounded-[2rem] object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000" />
                        <button className="w-full py-10 bg-[#ff4d6d] text-white text-3xl font-black uppercase tracking-tighter rounded-full hover:scale-105 transition-all shadow-xl">CATCH_NEW_WAVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
