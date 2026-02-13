"use client";

import React from 'react';

const fridgeItems = [
    { id: 'GR-801', name: 'Honeycrisp Apples', batch: 'FARM-NYC-8', shelf: 'A1', stock: 'High', days_left: 12 },
    { id: 'GR-802', name: 'Atlantic Salmon', batch: 'SEA-LOG-2', shelf: 'REF-2', stock: 'Low', days_left: 2 },
    { id: 'GR-803', name: 'Sourdough Loaf', batch: 'BAKE-A4', shelf: 'B3', stock: 'Medium', days_left: 1 },
];

export default function GrubAdminPantry() {
    return (
        <div className="p-12 space-y-16 bg-[#faf9f6] text-[#2d3a3a] min-h-screen border-l-4 border-[#22c55e]/20">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-[#2d3a3a]/5 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.4em]">Inventory_Cycle // The_Pantry</div>
                    <h1 className="text-7xl font-black tracking-tighter leading-none text-[#2d3a3a]">ORGANIC_STOCK.</h1>
                </div>
                <button className="px-12 py-6 bg-[#22c55e] text-white text-xl font-black uppercase tracking-tighter rounded-[2.5rem] hover:bg-[#2d3a3a] transition-all shadow-2xl">
                    LOG_NEW_HARVEST
                </button>
            </header>

            {/* Pantry Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: 'SPOILAGE_RATE', val: '0.2%', status: 'OPTIMAL' },
                    { label: 'FARM_SYNC', val: '100%', status: 'ACTIVE' },
                    { label: 'ORGANIC_YIELD', val: 'HIGH', status: 'STABLE' },
                    { label: 'WASTE_SAVED', val: '420LB', status: 'GREAT' },
                ].map(stat => (
                    <div key={stat.label} className="p-10 bg-white rounded-[2rem] border-2 border-[#2d3a3a]/5 space-y-4 hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.1)] transition-all cursor-help group">
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#2d3a3a]/40 group-hover:text-[#22c55e]">{stat.label}</div>
                        <div className="flex justify-between items-end text-[#2d3a3a]">
                            <span className="text-5xl font-black tracking-tighter">{stat.val}</span>
                            <span className="text-[9px] font-black text-[#22c55e] uppercase border-b-2 border-[#22c55e]">{stat.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border-2 border-[#2d3a3a]/5 rounded-[3rem] overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                    <thead className="bg-[#2d3a3a] text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        <tr>
                            <th className="p-10">Batch_ID</th>
                            <th className="p-10">Entity_Name</th>
                            <th className="p-10">Fridge_Slot</th>
                            <th className="p-10">Shelf_Life</th>
                            <th className="p-10">Availability</th>
                            <th className="p-10 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-black italic tracking-tighter text-[#2d3a3a]">
                        {fridgeItems.map(item => (
                            <tr key={item.id} className="border-b-2 border-[#2d3a3a]/5 hover:bg-[#22c55e]/5 transition-colors group">
                                <td className="p-10 text-xs font-black text-[#22c55e]/60">{item.id}</td>
                                <td className="p-10 text-3xl group-hover:translate-x-4 transition-transform">{item.name}</td>
                                <td className="p-10 text-sm opacity-40 font-bold">{item.shelf}</td>
                                <td className="p-10 text-sm">
                                    <div className="flex flex-col">
                                        <span className={`${item.days_left < 3 ? 'text-red-500' : 'text-[#22c55e]'} font-black`}>{item.days_left} DAYS LEFT</span>
                                        <div className="h-1 w-20 bg-[#2d3a3a]/5 rounded-full mt-2">
                                            <div className="h-full bg-[#22c55e] rounded-full" style={{ width: `${(item.days_left / 14) * 100}%` }}></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-10">
                                    <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${item.stock === 'High' ? 'bg-[#22c55e]/10 text-[#22c55e]' :
                                            item.stock === 'Low' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'
                                        }`}>
                                        {item.stock}_STOCK
                                    </span>
                                </td>
                                <td className="p-10 text-right">
                                    <button className="text-[10px] font-black text-[#2d3a3a]/20 hover:text-[#22c55e] uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-[#22c55e]">Restock</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
