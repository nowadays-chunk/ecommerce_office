"use client";

import React from 'react';

const ORDERS = [
    { id: "LX-88210", date: "Oct 12, 2025", total: "$4,200.00", status: "ARCHIVED", items: ["Aura Crystal Vessel", "Obsidian Silk Throw"] },
    { id: "LX-87942", date: "Aug 24, 2025", total: "$1,850.00", status: "TRANSIT", items: ["Pure Marble Incense Kit"] },
    { id: "LX-86501", date: "May 15, 2025", total: "$12,400.00", status: "DELIVERED", items: ["Artisan Oak Desk (Custom)"] }
];

export default function LuxeOrders() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] font-serif p-12 lg:p-24">
            <header className="flex flex-col mb-32 space-y-8">
                <div className="w-12 h-1 bg-black"></div>
                <h1 className="text-6xl lg:text-9xl font-light tracking-tighter uppercase leading-none italic">ACQUISITION_LOGS.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40 italic">Member_History // Archival_Status_v2.0</p>
            </header>

            <div className="space-y-24">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b-2 border-black/5 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
                            <th className="pb-8">Archive_ID</th>
                            <th className="pb-8">Timestamp</th>
                            <th className="pb-8">Valuation</th>
                            <th className="pb-8">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ORDERS.map((order) => (
                            <tr key={order.id} className="border-b-2 border-black/5 group hover:bg-[#f8f8f8] transition-colors">
                                <td className="py-12">
                                    <p className="text-2xl font-light italic mb-2 tracking-tighter">{order.id}</p>
                                    <div className="flex space-x-2">
                                        {order.items.map((item, i) => (
                                            <span key={i} className="text-[10px] uppercase font-black opacity-30 italic">{item}{i < order.items.length - 1 ? " // " : ""}</span>
                                        ))}
                                    </div>
                                </td>
                                <td className="py-12 text-xl font-light italic opacity-60">{order.date}</td>
                                <td className="py-12 text-xl font-light italic tracking-tighter">{order.total}</td>
                                <td className="py-12">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 ${order.status === 'TRANSIT' ? 'bg-[#d4af37] text-white' : 'border border-black/10'}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="grid md:grid-cols-2 gap-24 pt-24 border-t-2 border-black/5">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-light italic uppercase tracking-tight">ARCHIVAL_SUPPORT.</h2>
                        <p className="text-xl font-light italic opacity-60 leading-relaxed">Need assistance with a specific acquisition? Our archival team is available 24/7 for member support and provenance verification.</p>
                        <button className="px-12 py-6 border-2 border-black text-black text-xl font-light uppercase tracking-tighter hover:bg-black hover:text-white transition-all">CONNECT_ARCHIVIST</button>
                    </div>
                    <div className="bg-[#f8f8f8] p-12 border-l-8 border-[#d4af37] flex flex-col justify-center space-y-6">
                        <p className="text-3xl font-light italic tracking-tighter uppercase opacity-30 italic">ELITE_QUOTA_REACHED.</p>
                        <p className="text-lg font-light italic opacity-60">You have successfully logged 12 archival entries. Your tier has been upgraded to "Curator of the Absolute".</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
