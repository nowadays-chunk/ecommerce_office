"use client";

import React from 'react';

const harvestItems = [
    { id: 'Z-881', botanical: 'Wild Sage', batch: 'SUM-24-A', origin: 'Oregon Highlands', extractStatus: 'Aging', potency: '98%' },
    { id: 'Z-882', botanical: 'Raw Honey', batch: 'SPR-24-F', origin: 'Local Apiary', extractStatus: 'Ready', potency: '100%' },
    { id: 'Z-883', botanical: 'Sea Buckthorn', batch: 'MAY-24-K', origin: 'Coastal Cliffs', extractStatus: 'Lab Testing', potency: 'N/A' },
];

export default function ZenAdminHarvest() {
    return (
        <div className="p-8 lg:p-16 space-y-16">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b-2 border-[#f3f4ef]">
                <div className="space-y-4">
                    <div className="text-[10px] font-bold text-[#a78b71] uppercase tracking-[0.4em]">Resource_Tracking // Botanical</div>
                    <h1 className="text-4xl font-light text-[#5f634f] lowercase tracking-tighter italic">harvest & extraction.</h1>
                </div>
                <button className="px-10 py-4 bg-[#5f634f] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#a78b71] transition-all">
                    Log New Harvest
                </button>
            </header>

            {/* Extraction Lifecycle */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: 'Active Batch Aging', value: '14', status: 'Optimal' },
                    { label: 'Extraction Yield', value: '94.2%', status: 'Stable' },
                    { label: 'Botanical Stock', value: 'High', status: 'Safe' },
                ].map(stat => (
                    <div key={stat.label} className="bg-white p-10 border border-[#f3f4ef] rounded-2xl space-y-4 hover:border-[#a78b71] transition-all cursor-pointer">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#5f634f]/30">{stat.label}</div>
                        <div className="flex justify-between items-end">
                            <span className="text-4xl font-light text-[#5f634f] tracking-tighter">{stat.value}</span>
                            <span className="text-[9px] font-bold text-[#a78b71] uppercase mb-1">{stat.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-[#f3f4ef] rounded-3xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#f3f4ef]/50 text-[10px] font-bold uppercase tracking-widest text-[#5f634f]/40">
                        <tr>
                            <th className="p-8">Trace_ID</th>
                            <th className="p-8">Botanical_Focus</th>
                            <th className="p-8">Origin_Source</th>
                            <th className="p-8">Lifecycle_Stage</th>
                            <th className="p-8">Potency_Index</th>
                            <th className="p-8">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-[#5f634f]/80">
                        {harvestItems.map((h) => (
                            <tr key={h.id} className="border-b border-[#f3f4ef] hover:bg-[#f3f4ef]/10 transition-colors">
                                <td className="p-8 font-mono text-[10px] text-[#a78b71]">{h.id}</td>
                                <td className="p-8 font-medium lowercase tracking-tight">{h.botanical}</td>
                                <td className="p-8 text-xs italic">{h.origin}</td>
                                <td className="p-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 rounded-full bg-[#a78b71] animate-pulse"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{h.extractStatus}</span>
                                    </div>
                                </td>
                                <td className="p-8 font-black text-[#5f634f]">{h.potency}</td>
                                <td className="p-8">
                                    <button className="text-[10px] font-bold text-[#5f634f]/40 hover:text-[#a78b71] uppercase tracking-widest">Lab Report</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
