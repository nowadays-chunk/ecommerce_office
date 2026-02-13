"use client";

import React from 'react';

const products = [
    { id: 'FT-901', name: 'Apex Pro Runner', sku: 'APX-901-B', stock: 420, velocity: '+12%', status: 'ELITE' },
    { id: 'FT-902', name: 'Thermo-Grid Tee', sku: 'THM-002-K', stock: 1204, velocity: '+45%', status: 'STABLE' },
    { id: 'FT-903', name: 'Ultra-Lite Cargo', sku: 'ULC-441-A', stock: 12, velocity: '-2%', status: 'LOW_KIT' },
];

export default function FitAdminPerformance() {
    return (
        <div className="p-12 space-y-16 bg-white text-black italic min-h-screen border-l-8 border-black">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-black pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black bg-black text-white px-4 py-1 inline-block uppercase italic tracking-widest tracking-[0.5em]">Inventory_Cycle // The_Kit</div>
                    <h1 className="text-8xl font-black tracking-tighter leading-none text-black">GEAR_SUPPLY.</h1>
                </div>
                <button className="px-12 py-8 bg-black text-white text-2xl font-black uppercase tracking-tighter hover:bg-[#ff3e3e] transition-all transform hover:-rotate-2">
                    RECRUIT_NEW_GEAR
                </button>
            </header>

            {/* Performance Analytics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-8 border-black">
                {[
                    { label: 'SELL_THRU_RATE', val: '94.2%', trend: 'OPTIMAL' },
                    { label: 'STOCK_VELOCITY', val: 'HIGH', trend: 'FAST' },
                    { label: 'RETURN_INDEX', val: '0.2%', trend: 'MINIMAL' },
                    { label: 'REVENUE_PULSE', val: '$842K', trend: '+12%' },
                ].map(stat => (
                    <div key={stat.label} className="p-10 border-r-8 last:border-r-0 border-black hover:bg-black hover:text-white transition-all cursor-crosshair group">
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 italic">{stat.label}</div>
                        <div className="flex justify-between items-end">
                            <span className="text-5xl font-black italic tracking-tighter">{stat.val}</span>
                            <span className="text-[10px] font-black text-white bg-black px-2 py-1 group-hover:bg-white group-hover:text-black">{stat.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border-8 border-black overflow-hidden relative shadow-[40px_40px_0px_0px_rgba(0,0,0,0.05)]">
                <table className="w-full text-left">
                    <thead className="bg-black text-white text-xs font-black uppercase tracking-widest italic">
                        <tr>
                            <th className="p-10">KIT_HASH</th>
                            <th className="p-10">GEAR_ENTITY</th>
                            <th className="p-10">SERIAL_SKU</th>
                            <th className="p-10">VELOCITY_PULSE</th>
                            <th className="p-10">STATUS_LEVEL</th>
                            <th className="p-10 text-right">QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody className="text-2xl font-black italic uppercase tracking-tighter text-black">
                        {products.map(p => (
                            <tr key={p.id} className="border-b-4 border-black hover:bg-black hover:text-white transition-all group">
                                <td className="p-10 text-xs font-mono opacity-40 font-bold italic">{p.id}</td>
                                <td className="p-10 text-4xl group-hover:translate-x-8 transition-transform duration-500">{p.name}</td>
                                <td className="p-10 opacity-40 font-mono text-sm">{p.sku}</td>
                                <td className="p-10 text-green-500">{p.velocity}</td>
                                <td className="p-10 whitespace-nowrap">
                                    <span className={`px-6 py-2 border-4 border-black inline-block text-[10px] font-black tracking-widest group-hover:border-white ${p.status === 'LOW_KIT' ? 'bg-red-500 text-white' : 'bg-white text-black'
                                        }`}>
                                        {p.status}
                                    </span>
                                </td>
                                <td className="p-10 text-right text-5xl">{p.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
