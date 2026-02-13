"use client";

import React from 'react';

const foragingLogs = [
    { id: 'WD-901', name: 'Raw Forest Moss', location: 'Deep Valley', status: 'Drying', shelf: 'Tier_3', qty: 42 },
    { id: 'WD-902', name: 'Cedar Bowls', location: 'North Slope', status: 'Ready', shelf: 'Rack_A', qty: 12 },
    { id: 'WD-903', name: 'Wild Lavender', location: 'River Edge', status: 'Fresh', shelf: 'Cooler_1', qty: 88 },
];

export default function WildAdminPantry() {
    return (
        <div className="p-12 space-y-16 bg-[#f4f1ea] text-[#2d2a22] min-h-screen border-l border-[#344e41]/20 font-serif">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-[#344e41]/10 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-bold text-[#344e41] uppercase tracking-[0.5em]">Inventory_Cycle // The_Pantry</div>
                    <h1 className="text-7xl font-black italic tracking-tighter leading-none text-[#2d2a22]">FORAGED_STOCK.</h1>
                </div>
                <button className="px-12 py-6 bg-[#344e41] text-[#dad7cd] text-xl font-black italic uppercase tracking-tighter hover:bg-[#2d2a22] transition-all transform hover:rotate-1 shadow-2xl">
                    LOG_NEW_FIND
                </button>
            </header>

            {/* Pantry Analytics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: 'PURITY_INDEX', val: '99.8%', status: 'RAW' },
                    { label: 'RENEW_RATE', val: '100%', status: 'STABLE' },
                    { label: 'ECO_CONTRIBUTION', val: '+12.4K', status: 'PEAK' },
                    { label: 'FORAGE_EFFICIENCY', val: 'HIGH', status: 'ACTIVE' },
                ].map(stat => (
                    <div key={stat.label} className="p-10 bg-white/60 border border-[#344e41]/10 space-y-4 hover:shadow-2xl transition-all cursor-help group">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#344e41]/40 group-hover:text-[#344e41]">{stat.label}</div>
                        <div className="flex justify-between items-end text-[#2d2a22]">
                            <span className="text-5xl font-black italic tracking-tighter">{stat.val}</span>
                            <span className="text-[9px] font-bold text-[#dad7cd] bg-[#344e41] px-2 py-1 uppercase">{stat.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border-2 border-[#344e41]/10 overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#a3b18a]/5 blur-[120px] rounded-full"></div>
                <table className="w-full text-left relative z-10">
                    <thead className="bg-[#344e41] text-[#dad7cd] text-[10px] font-bold uppercase tracking-[0.4em]">
                        <tr>
                            <th className="p-10">Hash_ID</th>
                            <th className="p-10">Entity_Title</th>
                            <th className="p-10">Origin_Zone</th>
                            <th className="p-10">State</th>
                            <th className="p-10">Shelf_Node</th>
                            <th className="p-10 text-right">Qty</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-bold italic tracking-tighter text-[#2d2a22]">
                        {foragingLogs.map(log => (
                            <tr key={log.id} className="border-b border-[#344e41]/5 hover:bg-[#a3b18a]/5 transition-colors group">
                                <td className="p-10 text-xs font-bold text-[#344e41]/60 font-mono">{log.id}</td>
                                <td className="p-10 text-3xl group-hover:translate-x-4 transition-transform duration-700">{log.name}</td>
                                <td className="p-10 text-sm opacity-40 font-bold">{log.location}</td>
                                <td className="p-10 italic text-[#344e41]">{log.status}</td>
                                <td className="p-10 opacity-40 font-mono text-sm">{log.shelf}</td>
                                <td className="p-10 text-right text-4xl text-[#344e41]">{log.qty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
