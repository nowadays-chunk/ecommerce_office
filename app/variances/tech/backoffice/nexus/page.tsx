"use client";

import React from 'react';

const hardwareNodes = [
    { id: 'N-401', entity: 'Neural_Link_V2', sku: 'NX-8821-A', health: 'Optimal', sync: '100%', stock: 42, temp: '32°C' },
    { id: 'N-402', entity: 'Cryo_Cool_Core', sku: 'CX-4402-B', health: 'Degraded', sync: '92%', stock: 12, temp: '48°C' },
    { id: 'N-403', entity: 'Data_Shield_Pro', sku: 'SX-1002-K', health: 'Critical', sync: '14%', stock: 2, temp: '54°C' },
];

export default function TechAdminNexus() {
    return (
        <div className="p-12 space-y-16 bg-[#080b10] text-[#00f2ff] font-mono min-h-screen border-l border-[#00f2ff]/20">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-[#00f2ff]/20 pb-12">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">
                        <span className="w-2 h-2 bg-[#00f2ff] animate-ping"></span>
                        <span>Nexus_Admin_Status: Live</span>
                    </div>
                    <h1 className="text-7xl font-black italic uppercase tracking-tighter leading-none text-white">NEXUS_INVENTORY.</h1>
                </div>
                <button className="px-12 py-6 bg-[#00f2ff] text-black text-xl font-black uppercase tracking-tighter hover:bg-white transition-all shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                    DEPLOY_NEW_NODE
                </button>
            </header>

            {/* Grid of System Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: 'GLOBAL_SYNC_RATE', val: '98.4%', trend: 'OPTIMAL' },
                    { label: 'NODE_UPTIME', val: '99.99%', trend: 'STABLE' },
                    { label: 'SYSTEM_LOAD', val: '12%', trend: 'LOW' },
                    { label: 'BUFFER_STATUS', val: 'CLEAR', trend: 'STABLE' },
                ].map(stat => (
                    <div key={stat.label} className="p-10 border border-[#00f2ff]/20 bg-[#0a0f18] space-y-4 hover:border-[#00f2ff] transition-all cursor-crosshair group">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#00f2ff]/40 group-hover:text-[#00f2ff]">{stat.label}</div>
                        <div className="flex justify-between items-end">
                            <span className="text-4xl font-black text-white italic tracking-tighter">{stat.val}</span>
                            <span className="text-[8px] font-bold text-[#00f2ff] bg-[#00f2ff]/10 px-2 py-0.5 border border-[#00f2ff]/40">{stat.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#0a0f18] border border-[#00f2ff]/20 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#00f2ff_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <table className="w-full text-left relative z-10">
                    <thead className="bg-[#00f2ff]/5 text-[10px] font-black uppercase tracking-[0.3em] text-[#00f2ff]/60 border-b border-[#00f2ff]/20">
                        <tr>
                            <th className="p-8">NODE_TAG</th>
                            <th className="p-8">HARDWARE_ENTITY</th>
                            <th className="p-8">SKU_HASH</th>
                            <th className="p-8">HEALTH_STATE</th>
                            <th className="p-8">SYNC_METRIC</th>
                            <th className="p-8">TEMP</th>
                            <th className="p-8 text-right">PROTOCOL</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-bold uppercase tracking-[0.1em] text-white/80">
                        {hardwareNodes.map(n => (
                            <tr key={n.id} className="border-b border-[#00f2ff]/10 hover:bg-[#00f2ff]/5 transition-colors">
                                <td className="p-8 text-[#00f2ff] opacity-40 text-xs">{n.id}</td>
                                <td className="p-8 text-lg font-black italic tracking-tighter">{n.entity}</td>
                                <td className="p-8 opacity-40 font-mono text-xs">{n.sku}</td>
                                <td className="p-8">
                                    <span className={`px-4 py-1 text-[8px] border font-black uppercase tracking-widest ${n.health === 'Optimal' ? 'border-green-500 text-green-500 bg-green-500/10' :
                                            n.health === 'Degraded' ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10' : 'border-red-500 text-red-500 bg-red-500/10'
                                        }`}>
                                        {n.health}
                                    </span>
                                </td>
                                <td className="p-8 text-[#00f2ff]">{n.sync}</td>
                                <td className="p-8 italic">{n.temp}</td>
                                <td className="p-8 text-right space-x-6">
                                    <button className="text-[10px] font-black hover:text-[#00f2ff] transition-colors border-b border-transparent hover:border-[#00f2ff]">REBOOT</button>
                                    <button className="text-[10px] font-black hover:text-white transition-colors border-b border-transparent hover:border-white">PATCH</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
