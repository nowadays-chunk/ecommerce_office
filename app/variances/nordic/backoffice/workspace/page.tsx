"use client";

import React from 'react';

const inventoryNodes = [
    { id: 'NR-01', design: 'Artek Stool 60', batch: '2024-AUG-A', material: 'Birch Wood', status: 'Ready', count: 124 },
    { id: 'NR-02', design: 'Muuto Pendant', batch: '2024-SEP-F', material: 'Aluminum', status: 'In Production', count: 42 },
    { id: 'NR-03', design: 'Series 7 Chair', batch: '2024-AUG-C', material: 'Oak Veneer', status: 'QC Check', count: 8 },
];

export default function NordicAdminWorkspace() {
    return (
        <div className="p-12 space-y-16 bg-[#fdfdfd] text-[#1a1a1a] font-sans min-h-screen border-l border-gray-100">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-gray-100 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.5em]">Inventory_Cycle // Workspace</div>
                    <h1 className="text-6xl font-medium tracking-tight text-[#1a1a1a]">Icon Inventory.</h1>
                </div>
                <button className="px-10 py-5 bg-[#1a1a1a] text-white text-xs font-medium uppercase tracking-widest hover:bg-gray-800 transition-all shadow-sm">
                    Register New Design
                </button>
            </header>

            {/* Workspace Health Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { label: 'PRODUCTION_EFFICIENCY', val: '94%', trend: 'OPTIMAL' },
                    { label: 'MATERIAL_RESERVES', val: 'High', trend: 'STABLE' },
                    { label: 'QC_PASS_RATE', val: '99.8%', trend: 'STABLE' },
                ].map(stat => (
                    <div key={stat.label} className="p-10 bg-white border border-gray-100 rounded-sm space-y-4 hover:border-gray-300 transition-all cursor-crosshair">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{stat.label}</div>
                        <div className="flex justify-between items-end">
                            <span className="text-4xl font-medium text-[#1a1a1a] tracking-tight">{stat.val}</span>
                            <span className="text-[9px] font-bold text-gray-400 border border-gray-100 px-2 py-0.5">{stat.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-gray-100 overflow-hidden shadow-sm rounded-sm">
                <table className="w-full text-left">
                    <thead className="bg-[#fdfdfd] text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 border-b border-gray-100">
                        <tr>
                            <th className="p-8">Reference</th>
                            <th className="p-8">Design_Entity</th>
                            <th className="p-8">Batch_Code</th>
                            <th className="p-8">Primary_Material</th>
                            <th className="p-8">Status</th>
                            <th className="p-8 text-right">Count</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-medium text-gray-400">
                        {inventoryNodes.map(n => (
                            <tr key={n.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="p-8 text-xs font-bold text-gray-200">{n.id}</td>
                                <td className="p-8 text-lg font-medium text-[#1a1a1a] tracking-tight">{n.design}</td>
                                <td className="p-8 text-xs opacity-60 font-mono tracking-widest">{n.batch}</td>
                                <td className="p-8 italic">{n.material}</td>
                                <td className="p-8">
                                    <span className={`px-4 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full ${n.status === 'Ready' ? 'bg-green-50 text-green-500' : 'bg-yellow-50 text-yellow-600'
                                        }`}>
                                        {n.status}
                                    </span>
                                </td>
                                <td className="p-8 text-right font-medium text-[#1a1a1a]">{n.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
