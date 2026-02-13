"use client";

import React from 'react';

const gatherers = [
    { id: 'GT-01', name: 'Alex Meadow', impact: '12 Farms Supported', orders: 42, spent: '$1,240', status: 'Top_Gatherer' },
    { id: 'GT-02', name: 'Sienna Wild', impact: '5 Farms Supported', orders: 12, spent: '$420', status: 'New_Seed' },
    { id: 'GT-03', name: 'River Stone', impact: '24 Farms Supported', orders: 88, spent: '$5,200', status: 'Community_Leader' },
];

export default function GrubAdminGatherers() {
    return (
        <div className="p-12 space-y-16 bg-[#faf9f6] text-[#2d3a3a] min-h-screen border-l-4 border-[#22c55e]/20">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-[#2d3a3a]/5 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.5em]">The_Community // Gatherers</div>
                    <h1 className="text-6xl font-black tracking-tighter leading-none text-[#2d3a3a]">GATHERER_NETWORK.</h1>
                </div>
                <button className="px-10 py-5 bg-[#2d3a3a] text-white text-xs font-black uppercase tracking-widest rounded-[2.5rem] hover:bg-[#22c55e] transition-all shadow-2xl">
                    INVITE_GATHERER
                </button>
            </header>

            <div className="bg-white border-2 border-[#2d3a3a]/5 rounded-[3rem] p-8 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-12 mb-12 border-b-2 border-[#2d3a3a]/5 pb-12">
                    <div className="space-y-4 p-8 bg-[#faf9f6] rounded-[2rem] border-2 border-white">
                        <h3 className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest">Active Gatherers</h3>
                        <p className="text-5xl font-black text-[#2d3a3a]">1,204</p>
                    </div>
                    <div className="space-y-4 p-8 bg-[#faf9f6] rounded-[2rem] border-2 border-white">
                        <h3 className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest">Collective Impact</h3>
                        <p className="text-5xl font-black text-[#22c55e]">84_FARMS</p>
                    </div>
                    <div className="space-y-4 p-8 bg-[#faf9f6] rounded-[2rem] border-2 border-white">
                        <h3 className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest">Network_Health</h3>
                        <p className="text-5xl font-black text-green-800/20">THRIVING</p>
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="text-[10px] font-black uppercase tracking-widest text-[#2d3a3a]/30 border-b-2 border-[#2d3a3a]/5">
                        <tr>
                            <th className="pb-8">Hash_ID</th>
                            <th className="pb-8">Gatherer</th>
                            <th className="pb-8">Social_Impact</th>
                            <th className="pb-8">Orders</th>
                            <th className="pb-8">Status</th>
                            <th className="pb-8 text-right">Contribution</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-black italic tracking-tighter text-[#2d3a3a]">
                        {gatherers.map((g) => (
                            <tr key={g.id} className="border-b-2 border-[#2d3a3a]/5 hover:bg-[#faf9f6] transition-colors group">
                                <td className="py-10 text-xs font-black text-[#22c55e]/60 font-mono">{g.id}</td>
                                <td className="py-10 text-3xl group-hover:text-[#22c55e] transition-colors">{g.name}</td>
                                <td className="py-10 text-sm opacity-60 font-medium italic">{g.impact}</td>
                                <td className="py-10 font-black">{g.orders} LOGS</td>
                                <td className="py-10">
                                    <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${g.status === 'Top_Gatherer' ? 'bg-[#22c55e] text-white' : 'bg-[#faf9f6] border-2 border-[#2d3a3a]/5'
                                        }`}>
                                        {g.status}
                                    </span>
                                </td>
                                <td className="py-10 text-right text-3xl text-[#22c55e]">{g.spent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
