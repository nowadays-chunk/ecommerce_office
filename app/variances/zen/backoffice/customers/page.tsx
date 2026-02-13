"use client";

import React from 'react';

const souls = [
    { id: 'S-772', name: 'Sienna Wild', energy: 'Radiant', contribution: '$420', affinity: 'Botanicals', impact: '120m²' },
    { id: 'S-773', name: 'River Stone', energy: 'Calm', contribution: '$840', affinity: 'Rituals', impact: '240m²' },
    { id: 'S-774', name: 'Autumn Leaf', energy: 'Vibrant', contribution: '$1,200', affinity: 'Fragrance', impact: '350m²' },
];

export default function ZenAdminSouls() {
    return (
        <div className="p-8 lg:p-16 space-y-16">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b-2 border-[#f3f4ef]">
                <div className="space-y-4">
                    <div className="text-[10px] font-bold text-[#a78b71] uppercase tracking-[0.4em]">Community_Flow // Souls</div>
                    <h1 className="text-4xl font-light text-[#5f634f] lowercase tracking-tighter italic">our connected garden.</h1>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-4 border border-[#f3f4ef] text-[#5f634f] text-[10px] uppercase tracking-widest hover:bg-[#f3f4ef] transition-all">Send Blessing</button>
                    <button className="px-8 py-4 bg-[#5f634f] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#a78b71] transition-all">New Soul</button>
                </div>
            </header>

            <div className="bg-white border border-[#f3f4ef] rounded-3xl overflow-hidden p-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4 bg-[#fcfdfa] p-8 rounded-2xl border border-white">
                        <h3 className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Total Connection</h3>
                        <p className="text-4xl font-light text-[#5f634f]">12,402</p>
                    </div>
                    <div className="space-y-4 bg-[#fcfdfa] p-8 rounded-2xl border border-white">
                        <h3 className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Collective Impact</h3>
                        <p className="text-4xl font-light text-[#a78b71]">1.2H_Reforested</p>
                    </div>
                    <div className="space-y-4 bg-[#fcfdfa] p-8 rounded-2xl border border-white">
                        <h3 className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Energy Harmony</h3>
                        <p className="text-4xl font-light text-green-800/40">98.2%</p>
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="text-[10px] font-bold uppercase tracking-widest text-[#5f634f]/30 border-b border-[#f3f4ef]">
                        <tr>
                            <th className="pb-8">Soul_Hash</th>
                            <th className="pb-8">Bearer</th>
                            <th className="pb-8">Energy_State</th>
                            <th className="pb-8">Affinity</th>
                            <th className="pb-8">Legacy_Impact</th>
                            <th className="pb-8 text-right">Contribution</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-[#5f634f]/80">
                        {souls.map((s) => (
                            <tr key={s.id} className="border-b border-[#f3f4ef] hover:bg-[#fcfdfa] transition-colors group">
                                <td className="py-8 font-mono text-[10px] text-[#a78b71]">{s.id}</td>
                                <td className="py-8 font-medium lowercase italic text-lg">{s.name}</td>
                                <td className="py-8 uppercase tracking-widest text-[9px] font-bold text-[#5f634f]/40">{s.energy}</td>
                                <td className="py-8 italic opacity-60">{s.affinity}</td>
                                <td className="py-8 font-black text-green-800/40 uppercase tracking-widest text-[10px]">{s.impact}</td>
                                <td className="py-8 text-right font-light text-xl text-[#5f634f]">{s.contribution}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
