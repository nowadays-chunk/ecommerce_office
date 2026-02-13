"use client";

import React from 'react';

const ORDERS = [
    { id: "GL-440-X", date: "12 Oct 2025", total: "$1,840.00", status: "LUMINOUS", items: ["Pearl Essence Serum", "Silk Aura Wrap"] },
    { id: "GL-430-Y", date: "24 Aug 2025", total: "$450.00", status: "REFRACTING", items: ["Crystal Muse Mirror"] },
    { id: "GL-412-Z", date: "15 May 2025", total: "$12,400.00", status: "ARCHIVED", items: ["Artisan Vanity (Glint Luxe)"] }
];

export default function GlintOrders() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic p-12 lg:p-24 overflow-hidden">
            <header className="flex flex-col mb-32 items-center text-center space-y-12 relative group">
                <div className="absolute top-0 right-0 text-[15vw] font-black text-[#ff8fa3]/5 uppercase select-none pointer-events-none italic">SHIMMER</div>
                <div className="w-16 h-px bg-[#ff8fa3] shadow-[0_0_20px_#ff8fa3] animate-pulse"></div>
                <h1 className="text-7xl lg:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.8] text-[#4a3a4a]">
                    AURA <br /> <span className="text-[#ff8fa3] underline decoration-px decoration-pink-200 underline-offset-[30px]">LOGS.</span>
                </h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/60 leading-loose italic animate-pulse">RADIANT_HISTORY // v8.0 // LUMEN_SYNC_ACTIVE.</p>
            </header>

            <div className="max-w-6xl mx-auto space-y-32 relative z-10">
                <div className="grid gap-8">
                    {ORDERS.map((order) => (
                        <div key={order.id} className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 shadow-[0_40px_100px_-20px_rgba(255,143,163,0.1)] border border-[#ff8fa3]/10 group hover:-translate-y-4 transition-all duration-700 flex flex-col lg:flex-row justify-between items-center">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                                    <span className="w-3 h-3 bg-[#ff8fa3] rounded-full shadow-[0_0_20px_#ff8fa3]"></span>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]/60 italic uppercase">LUMEN_{order.id}</p>
                                </div>
                                <h2 className="text-4xl font-black tracking-tighter italic uppercase text-[#4a3a4a]">{order.items.join(" + ")}</h2>
                                <p className="text-xl font-light opacity-60 text-[#4a3a4a]/60">{order.date} // {order.total}</p>
                            </div>
                            <div className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-8">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-12 py-5 bg-white text-[#ff8fa3] rounded-full shadow-2xl ${order.status === 'REFRACTING' ? 'shadow-[0_20px_50px_rgba(255,143,163,0.3)] animate-pulse' : 'opacity-40 grayscale'}`}>
                                    {order.status}
                                </span>
                                <button className="text-[10px] font-black uppercase tracking-widest border-b border-[#ff8fa3]/20 pb-1 hover:border-[#ff8fa3] text-[#ff8fa3] transition-all">VIEW_AURA_DATA</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t border-[#ff8fa3]/20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-6xl font-black italic uppercase tracking-tighter text-[#4a3a4a]">LUMEN_SYNC.</h2>
                        <div className="space-y-8 text-2xl font-light leading-tight italic text-[#ff8fa3] uppercase tracking-tighter">
                            <p>Your current aura synchronization: RADIANT. Based on your museum-level acquisitions, your profile is eligible for the Shimmer-Elite early ritual protocol.</p>
                        </div>
                    </div>
                    <div className="p-16 bg-white rounded-[5rem] shadow-2xl border border-[#ff8fa3]/10 text-center space-y-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#ff8fa3]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]/40">TIER: RADIANT_MUSE</p>
                        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" className="w-48 h-48 mx-auto rounded-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-[5s] border border-[#ff8fa3]/10" />
                        <button className="w-full py-10 bg-[#4a3a4a] text-white text-3xl font-black uppercase tracking-tighter rounded-full hover:bg-[#ff8fa3] transition-all transform shadow-2xl">INITIATE_NEW_RITUAL</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
