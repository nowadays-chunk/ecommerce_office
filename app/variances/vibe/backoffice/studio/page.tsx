"use client";

import React from 'react';

const recordings = [
    { id: 'VB-801', title: 'Midnight Jazz', master: 'Original Tape', status: 'Pressing', stock: 124, condition: 'Mint' },
    { id: 'VB-802', title: 'Neon Disco', master: 'Digital File', status: 'Sold Out', stock: 0, condition: 'VG+' },
    { id: 'VB-803', title: 'Summer Soul', master: 'Remaster V2', status: 'In Stock', stock: 42, condition: 'New' },
];

export default function VibeAdminStudio() {
    return (
        <div className="p-12 space-y-16 bg-[#fffaf0] text-[#432] font-serif min-h-screen border-l-4 border-[#432]">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-4 border-[#432] pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black text-[#fb923c] uppercase tracking-[0.4em]">Inventory_Cycle // The_Studio</div>
                    <h1 className="text-7xl font-black italic tracking-tighter leading-none text-[#432]">STUDIO_LOGS.</h1>
                </div>
                <button className="px-12 py-6 bg-[#fb923c] text-white text-xl font-black italic uppercase tracking-tighter hover:bg-[#432] transition-all transform hover:rotate-2 shadow-2xl">
                    RECORD_NEW_ENTITY
                </button>
            </header>

            {/* Studio Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: 'PRESS_SUCCESS_RATE', val: '98%', status: 'WARM' },
                    { label: 'MASTER_QUALITY', val: '100%', status: 'ANALOG' },
                    { label: 'VIBRATION_INDEX', val: 'HIGH', status: 'GOOD' },
                    { label: 'LOST_TAPES', val: '00', status: 'SAFE' },
                ].map(stat => (
                    <div key={stat.label} className="p-10 bg-white border-2 border-[#432] space-y-4 hover:shadow-[15px_15px_0px_0px_rgba(251,146,60,0.1)] transition-all cursor-crosshair">
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#432]/40">{stat.label}</div>
                        <div className="flex justify-between items-end text-[#432]">
                            <span className="text-4xl font-black italic tracking-tighter">{stat.val}</span>
                            <span className="text-[9px] font-black text-[#fb923c] uppercase border-b-2 border-[#fb923c]">{stat.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border-4 border-[#432] overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                    <thead className="bg-[#432] text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        <tr>
                            <th className="p-8">Tape_ID</th>
                            <th className="p-8">Entity_Title</th>
                            <th className="p-8">Master_Source</th>
                            <th className="p-8">Condition</th>
                            <th className="p-8">Status</th>
                            <th className="p-8 text-right">Qty</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg font-black italic uppercase tracking-tighter text-[#432]">
                        {recordings.map(r => (
                            <tr key={r.id} className="border-b-2 border-[#432]/10 hover:bg-[#fffaf0] transition-colors group">
                                <td className="p-8 text-xs font-bold text-[#fb923c] opacity-40">{r.id}</td>
                                <td className="p-8 text-2xl group-hover:text-[#ec4899] transition-colors">{r.title}</td>
                                <td className="p-8 text-sm opacity-60 font-medium">{r.master}</td>
                                <td className="p-8 italic text-sm">{r.condition}</td>
                                <td className="p-8">
                                    <span className={`px-4 py-1 text-[10px] font-black border-2 border-[#432] ${r.status === 'Sold Out' ? 'bg-[#ec4899] text-white' : 'bg-[#fb923c] text-white'
                                        }`}>
                                        {r.status}
                                    </span>
                                </td>
                                <td className="p-8 text-right text-3xl">{r.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
