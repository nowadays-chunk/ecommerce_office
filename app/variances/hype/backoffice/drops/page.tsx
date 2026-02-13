"use client";

import React from 'react';

const activeDrops = [
    { id: 'DP-01', name: 'Neon Ghost Zip', stock: 12, sellThru: '92%', status: 'Active', pulse: 'High' },
    { id: 'DP-02', name: 'Brutalist Cargo', stock: 154, sellThru: '45%', status: 'Staged', pulse: 'Low' },
    { id: 'DP-03', name: 'Cyber Tee', stock: 0, sellThru: '100%', status: 'End', pulse: 'Dead' },
];

export default function HypeAdminDrops() {
    return (
        <div className="p-12 space-y-20 bg-[#f1f1f1] min-h-screen border-l-8 border-black">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-black pb-12">
                <div className="space-y-4">
                    <div className="text-xs font-black bg-black text-white px-3 py-1 inline-block uppercase italic tracking-widest">System_Ops // Deployment</div>
                    <h1 className="text-7xl font-black italic uppercase tracking-tighter leading-none">DROP_CONTROL_CENTER</h1>
                </div>
                <button className="px-12 py-8 bg-black text-[#facc15] text-2xl font-black italic uppercase tracking-tighter hover:bg-[#facc15] hover:text-black transition-all transform hover:-rotate-2">
                    AUTHORIZE_DROP
                </button>
            </header>

            {/* Grid of Command Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-8 border-black">
                {[
                    { label: 'TOTAL_VOLUME', val: '$842K', color: 'bg-white' },
                    { label: 'SELL_THRU_AVG', val: '88%', color: 'bg-[#facc15]' },
                    { label: 'UNIQUE_DROPS', val: '12', color: 'bg-white' },
                    { label: 'FRAUD_BLOCKS', val: '1,204', color: 'bg-black text-white' },
                ].map(stat => (
                    <div key={stat.label} className={`p-12 space-y-4 border-r-8 last:border-r-0 border-black ${stat.color} hover:invert transition-all cursor-help`}>
                        <p className="text-[10px] font-black uppercase opacity-40">{stat.label}</p>
                        <p className="text-5xl font-black italic tracking-tighter italic">{stat.val}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white border-8 border-black overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 animate-pulse">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-black text-[#facc15] text-xs font-black uppercase tracking-widest">
                        <tr>
                            <th className="p-8">DROP_HASH</th>
                            <th className="p-8">ENTITY_NAME</th>
                            <th className="p-8">STOCK_LEVEL</th>
                            <th className="p-8">SELL_THRU</th>
                            <th className="p-8">VITALITY</th>
                            <th className="p-8 text-right">EXECUTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-black italic uppercase tracking-tighter text-black">
                        {activeDrops.map(d => (
                            <tr key={d.id} className="border-b-4 border-black hover:bg-[#facc15] transition-colors group">
                                <td className="p-8 opacity-40 font-mono text-sm">{d.id}</td>
                                <td className="p-8">{d.name}</td>
                                <td className="p-8 font-mono">{d.stock}</td>
                                <td className="p-8">{d.sellThru}</td>
                                <td className="p-8 whitespace-nowrap">
                                    <span className={`px-4 py-2 border-2 border-black inline-block text-xs font-black tracking-widest ${d.status === 'Active' ? 'bg-green-500' : d.status === 'Staged' ? 'bg-blue-500' : 'bg-red-500'
                                        }`}>
                                        {d.status}
                                    </span>
                                </td>
                                <td className="p-8 text-right space-x-4">
                                    <button className="text-xs font-black border-b-2 border-black group-hover:bg-black group-hover:text-white transition-all">RE-STOCK</button>
                                    <button className="text-xs font-black border-b-2 border-black group-hover:bg-white transition-all">KILL</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
