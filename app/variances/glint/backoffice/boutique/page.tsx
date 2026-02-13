"use client";

import React from 'react';

const beautyNodes = [
    { id: 'GL-901', name: 'Luminous Glow', sku: 'AUR-9921-X', stock: 42, health: 'Optimal', glimmer: 'High' },
    { id: 'GL-902', name: 'Prism Silk Lip', sku: 'PRS-1102-K', stock: 154, health: 'Restock', glimmer: 'Vivid' },
    { id: 'GL-903', name: 'Velvet Cloud', sku: 'VEL-441-A', stock: 12, health: 'Critical', glimmer: 'Soft' },
];

export default function GlintAdminBoutique() {
    return (
        <div className="p-12 space-y-16 bg-[#fffafd] text-[#4a3a4a] min-h-screen border-l border-[#ff8fa3]/20">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-[#ff8fa3]/10 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black text-[#ff8fa3] uppercase tracking-[0.5em]">Inventory_Lifecycle // The_Boutique</div>
                    <h1 className="text-7xl font-black italic tracking-tighter leading-none text-[#4a3a4a]">AURA_INVENTORY.</h1>
                </div>
                <button className="px-12 py-6 bg-gradient-to-r from-[#ff8fa3] to-[#d4af37] text-white text-xl font-black uppercase tracking-tighter rounded-[2.5rem] hover:scale-105 transition-all shadow-2xl">
                    DEPLOY_NEW_GLOW
                </button>
            </header>

            {/* Boutique Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: 'GLIMMER_INDEX', val: '99.4%', status: 'RADIANT' },
                    { label: 'VANITY_TRAFFIC', val: '842K', status: 'ACTIVE' },
                    { label: 'SHELF_HEALTH', val: 'GOOD', status: 'STABLE' },
                    { label: 'AURA_REVENUE', val: '$1.2M', status: 'PEAK' },
                ].map(stat => (
                    <div key={stat.label} className="p-10 bg-white rounded-[3rem] border border-[#ff8fa3]/10 space-y-4 hover:shadow-[0_30px_60px_-15px_rgba(255,143,163,0.2)] transition-all cursor-help group">
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#4a3a4a]/40 group-hover:text-[#ff8fa3]">{stat.label}</div>
                        <div className="flex justify-between items-end text-[#4a3a4a]">
                            <span className="text-5xl font-light italic tracking-tighter">{stat.val}</span>
                            <span className="text-[9px] font-black text-[#ff8fa3] uppercase border-b-2 border-[#ff8fa3]">{stat.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-[#ff8fa3]/10 rounded-[4rem] overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff8fa3]/5 blur-[80px] rounded-full"></div>
                <table className="w-full text-left relative z-10">
                    <thead className="bg-[#4a3a4a] text-white text-[10px] font-black uppercase tracking-[0.4em]">
                        <tr>
                            <th className="p-10">Entity_Hash</th>
                            <th className="p-10">Product_Title</th>
                            <th className="p-10">SKU_Registry</th>
                            <th className="p-10">Glimmer_Level</th>
                            <th className="p-10">State</th>
                            <th className="p-10 text-right">Inv</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-light italic tracking-tighter text-[#4a3a4a]">
                        {beautyNodes.map(node => (
                            <tr key={node.id} className="border-b border-[#ff8fa3]/5 hover:bg-[#ff8fa3]/5 transition-colors group">
                                <td className="p-10 text-xs font-black text-[#ff8fa3]/60 font-mono">{node.id}</td>
                                <td className="p-10 text-3xl group-hover:translate-x-4 transition-transform duration-700">{node.name}</td>
                                <td className="p-10 text-sm opacity-40 font-bold">{node.sku}</td>
                                <td className="p-10 text-[#d4af37]">{node.glimmer}</td>
                                <td className="p-10">
                                    <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${node.health === 'Optimal' ? 'bg-[#22c55e]/10 text-green-600' :
                                            node.health === 'Restock' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-red-500/10 text-red-600'
                                        }`}>
                                        {node.health}
                                    </span>
                                </td>
                                <td className="p-10 text-right text-4xl">{node.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
