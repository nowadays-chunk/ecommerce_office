"use client";

import React from 'react';

const operators = [
    { id: 'UX-001', alias: 'Z-Rex', node: 'Primary_Hub', status: 'Synced', tier: 'Nexus_Elite', uptime: '99.9%' },
    { id: 'UX-002', alias: 'Neon_Pulse', node: 'Secondary_Relay', status: 'De-Synced', tier: 'Standard_User', uptime: '84.2%' },
    { id: 'UX-003', alias: 'Void_Main', node: 'Satellite_Link', status: 'Synced', tier: 'Nexus_Admin', uptime: '100%' },
];

export default function TechAdminOperators() {
    return (
        <div className="p-12 space-y-16 bg-[#080b10] text-[#00f2ff] font-mono min-h-screen border-l border-[#00f2ff]/20">
            <header className="border-b border-[#00f2ff]/20 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="space-y-4">
                    <h1 className="text-7xl font-black italic uppercase tracking-tighter text-white">OPERATOR_NETWORK.</h1>
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em]">Managing connected human-machine nodes</p>
                </div>
                <button className="px-10 py-4 border border-[#00f2ff]/40 text-[#00f2ff] text-[10px] font-black uppercase hover:bg-[#00f2ff] hover:text-black transition-all">
                    BOOT_NEW_OPERATOR
                </button>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-10 border border-[#00f2ff]/10 bg-[#0a0f18] space-y-4">
                    <p className="text-[9px] font-black uppercase opacity-40">ACTIVE_CONNECTIONS</p>
                    <p className="text-5xl font-black text-white italic tracking-tighter">12,042</p>
                </div>
                <div className="p-10 border border-[#00f2ff]/10 bg-[#00f2ff]/5 space-y-4">
                    <p className="text-[9px] font-black uppercase opacity-40 text-[#00f2ff]/60">NETWORK_LATENCY_AVG</p>
                    <p className="text-5xl font-black text-[#00f2ff] italic tracking-tighter">14.2ms</p>
                </div>
                <div className="p-10 border border-[#00f2ff]/10 bg-red-500/5 animate-pulse space-y-4">
                    <p className="text-[9px] font-black uppercase text-red-500">THREAT_NODES</p>
                    <p className="text-5xl font-black text-red-500 italic tracking-tighter">04</p>
                </div>
            </div>

            <div className="bg-[#0a0f18] border border-[#00f2ff]/20 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#00f2ff]/5 text-[10px] font-black uppercase tracking-[0.3em] text-[#00f2ff]/60 border-b border-[#00f2ff]/20">
                        <tr>
                            <th className="p-8">NODE_HASH</th>
                            <th className="p-8">ALIAS_ENTITY</th>
                            <th className="p-8">STATUS</th>
                            <th className="p-8">TIER_CLASS</th>
                            <th className="p-8 text-right">UPTIME_METRIC</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-bold uppercase tracking-[0.1em] text-white/80">
                        {operators.map(op => (
                            <tr key={op.id} className="border-b border-[#00f2ff]/10 hover:bg-[#00f2ff]/5 transition-colors group">
                                <td className="p-8 text-[#00f2ff] opacity-40 text-xs font-mono">{op.id}</td>
                                <td className="p-8 text-lg font-black italic tracking-tighter">{op.alias}</td>
                                <td className="p-8">
                                    <span className={`px-4 py-1 border text-[8px] font-black tracking-widest ${op.status === 'Synced' ? 'border-[#00f2ff] text-[#00f2ff] bg-[#00f2ff]/10' : 'border-red-500 text-red-500 bg-red-500/10'
                                        }`}>
                                        {op.status}
                                    </span>
                                </td>
                                <td className="p-8 italic text-white/40">{op.tier}</td>
                                <td className="p-8 text-right font-mono">{op.uptime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
