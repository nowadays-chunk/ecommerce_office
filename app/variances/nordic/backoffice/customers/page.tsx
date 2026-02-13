"use client";

import React from 'react';

const residents = [
    { id: 'RES-01', name: 'Soren Lund', location: 'Stockholm', status: 'Member', value: 'Kr 12,400', affinity: 'Furniture' },
    { id: 'RES-02', name: 'Freja Holm', location: 'Copenhagen', status: 'Guest', value: 'Kr 6,200', affinity: 'Lighting' },
    { id: 'RES-03', name: 'Lars Berg', location: 'Oslo', status: 'Member', value: 'Kr 24,000', affinity: 'Seating' },
];

export default function NordicAdminResidents() {
    return (
        <div className="p-12 space-y-16 bg-[#fdfdfd] text-[#1a1a1a] min-h-screen border-l border-gray-100">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-gray-100 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.5em]">Network_Community // Residents</div>
                    <h1 className="text-6xl font-medium tracking-tight text-[#1a1a1a]">Resident Network.</h1>
                </div>
                <button className="px-10 py-5 border border-[#1a1a1a] text-[#1a1a1a] text-xs font-medium uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all">
                    New Resident
                </button>
            </header>

            <div className="bg-white border border-gray-100 shadow-sm rounded-sm p-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-gray-100 pb-12">
                    <div className="space-y-2">
                        <h3 className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Total Community</h3>
                        <p className="text-4xl font-medium text-[#1a1a1a]">8,204</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Design Adoption</h3>
                        <p className="text-4xl font-medium text-[#1a1a1a]">92.4%</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Network Health</h3>
                        <p className="text-4xl font-medium text-green-600/40">Stable</p>
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="text-[10px] font-bold uppercase tracking-widest text-gray-300 border-b border-gray-50">
                        <tr>
                            <th className="pb-8">Resident_ID</th>
                            <th className="pb-8">Bearer</th>
                            <th className="pb-8">Origin</th>
                            <th className="pb-8">Affinity</th>
                            <th className="pb-8">Status</th>
                            <th className="pb-8 text-right">Life_Value</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-medium text-gray-400">
                        {residents.map((r) => (
                            <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="py-8 text-xs text-gray-200 font-bold">{r.id}</td>
                                <td className="py-8 text-lg font-medium text-[#1a1a1a]">{r.name}</td>
                                <td className="py-8 italic">{r.location}</td>
                                <td className="py-8">{r.affinity}</td>
                                <td className="py-8">
                                    <span className={`px-4 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full ${r.status === 'Member' ? 'bg-gray-50 text-[#1a1a1a] border border-gray-100' : 'text-gray-200'
                                        }`}>
                                        {r.status}
                                    </span>
                                </td>
                                <td className="py-8 text-right font-medium text-[#1a1a1a]">{r.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
