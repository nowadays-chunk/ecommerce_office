"use client";

import React from 'react';

const techNodes = [
    { id: 'AX-901', name: 'Titan X-Gen', sku: 'TTN-901-M', stock: 42, velocity: '+12%', latency: '0.1ms' },
    { id: 'AX-902', name: 'Quantum Mech', sku: 'QNT-002-K', stock: 154, velocity: '+45%', latency: '1.0ms' },
    { id: 'AX-903', name: 'Nexus Pad', sku: 'NXS-441-A', stock: 12, velocity: '-2%', latency: '0.0ms' },
];

export default function ApexAdminInventory() {
    return (
        <div className="p-12 space-y-16 bg-[#050505] text-[#00ff9d] italic min-h-screen border-l-4 border-[#00ff9d]/20 font-mono">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-4 border-white/5 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black bg-[#00ff9d] text-black px-4 py-1 inline-block uppercase italic tracking-[0.5em]">Inventory_Cycle // The_Armory</div>
                    <h1 className="text-8xl font-black italic tracking-tighter leading-none text-white skew-x-[-12deg]">GEAR_HUB.</h1>
                </div>
                <button className="px-12 py-6 bg-[#00ff9d] text-black text-2xl font-black italic uppercase tracking-tighter hover:bg-white transition-all transform hover:-rotate-2 skew-x-[-12deg] shadow-2xl">
                    DEPLOY_NEW_GEAR
                </button>
            </header>

            {/* Armory Analytics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'MARKET_SELL_RATE', val: '98.4%', status: 'ELITE' },
                    { label: 'SYNC_UPTIME', val: '100%', status: 'ACTIVE' },
                    { label: 'LATENCY_AVG', val: '0.42ms', status: 'PEAK' },
                    { label: 'REVENUE_PULSE', val: '$2.4M', status: 'HIGH' },
                ].map(stat => (
                    <div key={stat.label} className="p-10 bg-[#0a0a0a] border-2 border-white/5 space-y-4 hover:border-[#00ff9d] transition-all cursor-crosshair group skew-x-[-4deg]">
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-[#00ff9d]">{stat.label}</div>
                        <div className="flex justify-between items-end text-white">
                            <span className="text-5xl font-black italic tracking-tighter">{stat.val}</span>
                            <span className="text-[9px] font-black text-black bg-[#00ff9d] px-2 py-1 uppercase">{stat.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#0a0a0a] border-4 border-white/5 overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#00ff9d]/5 blur-[120px] rounded-full"></div>
                <table className="w-full text-left relative z-10">
                    <thead className="bg-[#111] text-[#00ff9d] text-[10px] font-black uppercase tracking-[0.4em]">
                        <tr>
                            <th className="p-10">Gear_Hash</th>
                            <th className="p-10">Product_Model</th>
                            <th className="p-10">Serial_ID</th>
                            <th className="p-10">Market_Pulse</th>
                            <th className="p-10">Perf_Latency</th>
                            <th className="p-10 text-right">Qty</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-black italic uppercase tracking-tighter text-white">
                        {techNodes.map(node => (
                            <tr key={node.id} className="border-b-2 border-white/5 hover:bg-[#00ff9d]/5 transition-colors group">
                                <td className="p-10 text-xs font-black text-[#00ff9d]/60">{node.id}</td>
                                <td className="p-10 text-3xl group-hover:text-[#00ff9d] transition-colors">{node.name}</td>
                                <td className="p-10 text-sm opacity-40 font-bold">{node.sku}</td>
                                <td className="p-10 text-green-500">{node.velocity}</td>
                                <td className="p-10 text-[#00ff9d]/40">{node.latency}</td>
                                <td className="p-10 text-right text-4xl text-[#00ff9d]">{node.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
