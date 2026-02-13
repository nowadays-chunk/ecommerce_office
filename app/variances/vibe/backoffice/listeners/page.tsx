"use client";

import React from 'react';

const listeners = [
    { id: 'LIS-01', name: 'Miles Davis', genre: 'Jazz Fusion', collection: 42, spent: '$2,400', status: 'Audiophile' },
    { id: 'LIS-02', name: 'John Coltrane', genre: 'Free Jazz', collection: 12, spent: '$840', status: 'Seeker' },
    { id: 'LIS-03', name: 'Nina Simone', genre: 'Soul/Vocal', collection: 88, spent: '$5,200', status: 'OG_Collector' },
];

export default function VibeAdminListeners() {
    return (
        <div className="p-12 space-y-16 bg-[#fffaf0] text-[#432] font-serif min-h-screen border-l-4 border-[#432]">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-4 border-[#432] pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black text-[#fb923c] uppercase tracking-[0.5em]">The_Community // Listeners</div>
                    <h1 className="text-6xl font-black italic tracking-tighter leading-none text-[#432]">LISTENER_NETWORK.</h1>
                </div>
                <button className="px-10 py-5 bg-[#432] text-white text-xs font-black uppercase tracking-widest hover:bg-[#fb923c] transition-all transform hover:-rotate-2 shadow-2xl">
                    INVITE_SOUL
                </button>
            </header>

            <div className="grid md:grid-cols-3 gap-12 mb-12 border-b-2 border-[#432]/10 pb-12">
                <div className="space-y-2 p-8 bg-white border-2 border-[#432] shadow-xl transform rotate-1">
                    <h3 className="text-[10px] font-black text-[#fb923c] uppercase tracking-widest">Total Listeners</h3>
                    <p className="text-5xl font-black italic tracking-tighter text-[#432]">12,402</p>
                </div>
                <div className="space-y-2 p-8 bg-white border-2 border-[#432] shadow-xl transform -rotate-1">
                    <h3 className="text-[10px] font-black text-[#fb923c] uppercase tracking-widest">Disc_Adoption</h3>
                    <p className="text-5xl font-black italic tracking-tighter text-[#ec4899]">98.2%</p>
                </div>
                <div className="space-y-2 p-8 bg-white border-2 border-[#432] shadow-xl rotate-0">
                    <h3 className="text-[10px] font-black text-[#fb923c] uppercase tracking-widest">Signal_Strength</h3>
                    <p className="text-5xl font-black italic tracking-tighter text-green-600/40">HI_FI</p>
                </div>
            </div>

            <div className="bg-white border-4 border-[#432] shadow-2xl overflow-hidden p-8">
                <table className="w-full text-left">
                    <thead className="text-[10px] font-black uppercase tracking-widest text-[#432]/30 border-b-2 border-[#432]/10">
                        <tr>
                            <th className="pb-8">Soul_Hash</th>
                            <th className="pb-8">Bearer</th>
                            <th className="pb-8">Affinity</th>
                            <th className="pb-8">Collection</th>
                            <th className="pb-8">Status</th>
                            <th className="pb-8 text-right">Life_Invest</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-black italic uppercase tracking-tighter text-[#432]">
                        {listeners.map((l) => (
                            <tr key={l.id} className="border-b-2 border-[#432]/5 hover:bg-[#fffaf0] transition-colors group">
                                <td className="py-8 font-mono text-xs text-[#fb923c]/60">{l.id}</td>
                                <td className="py-8 text-xl group-hover:text-[#ec4899] transition-colors">{l.name}</td>
                                <td className="py-8 opacity-60 italic">{l.genre}</td>
                                <td className="py-8 font-bold">{l.collection} Units</td>
                                <td className="py-8">
                                    <span className={`px-4 py-1 border-2 border-[#432] text-[10px] font-black ${l.status === 'Audiophile' ? 'bg-[#fb923c] text-white' : 'bg-white text-[#432]'
                                        }`}>
                                        {l.status}
                                    </span>
                                </td>
                                <td className="py-8 text-right text-2xl text-[#ec4899]">{l.spent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
