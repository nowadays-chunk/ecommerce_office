"use client";

import React from 'react';

const tribes = [
    { id: 'TRB-01', name: 'Clara Fern', affinity: 'Botanicals', impact: '1.2hA Preserved', orders: 42, spent: '$1,240' },
    { id: 'TRB-02', name: 'Soren Wild', affinity: 'Minerals', impact: '0.4hA Preserved', orders: 12, spent: '$420' },
    { id: 'TRB-03', name: 'Elara Moon', affinity: 'Craft', impact: '5.2hA Preserved', orders: 88, spent: '$5,200' },
];

export default function WildAdminTribes() {
    return (
        <div className="p-12 space-y-16 bg-[#f4f1ea] text-[#2d2a22] min-h-screen border-l border-[#344e41]/20 font-serif">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-[#344e41]/10 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-bold text-[#344e41] uppercase tracking-[0.5em]">The_Community // Tribes</div>
                    <h1 className="text-6xl font-black italic tracking-tighter leading-none text-[#2d2a22]">TRIBE_NETWORK.</h1>
                </div>
                <button className="px-10 py-5 border-2 border-[#344e41] text-[#344e41] text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#344e41] hover:text-[#dad7cd] transition-all shadow-xl">
                    INVITE_NEW_SOUL
                </button>
            </header>

            <div className="bg-white/60 border border-[#344e41]/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#a3b18a]/5 blur-[100px] rounded-full"></div>
                <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-[#344e41]/5 pb-12 relative z-10">
                    <div className="space-y-4 p-8 bg-[#f4f1ea] rounded-[2rem] border border-[#344e41]/5 shadow-inner">
                        <h3 className="text-[10px] font-bold text-[#344e41] uppercase tracking-widest">Active Souls</h3>
                        <p className="text-5xl font-black italic text-[#2d2a22]">1,204</p>
                    </div>
                    <div className="space-y-4 p-8 bg-[#f4f1ea] rounded-[2rem] border border-[#344e41]/5 shadow-inner">
                        <h3 className="text-[10px] font-bold text-[#344e41] uppercase tracking-widest">Green Coverage</h3>
                        <p className="text-5xl font-black italic text-[#344e41]">12.4hA</p>
                    </div>
                    <div className="space-y-4 p-8 bg-[#f4f1ea] rounded-[2rem] border border-[#344e41]/5 shadow-inner">
                        <h3 className="text-[10px] font-bold text-[#344e41] uppercase tracking-widest">Community Sync</h3>
                        <p className="text-5xl font-black italic text-[#a3b18a]">THRIVING</p>
                    </div>
                </div>

                <table className="w-full text-left relative z-10">
                    <thead className="text-[10px] font-bold uppercase tracking-widest text-[#2d2a22]/30 border-b border-[#344e41]/10">
                        <tr>
                            <th className="pb-8">Soul_ID</th>
                            <th className="pb-8">Bearer</th>
                            <th className="pb-8">Affinity</th>
                            <th className="pb-8">Impact</th>
                            <th className="pb-8">Orders</th>
                            <th className="pb-8 text-right">Contribution</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-bold italic tracking-tighter text-[#2d2a22]">
                        {tribes.map((t) => (
                            <tr key={t.id} className="border-b border-[#344e41]/5 hover:bg-[#a3b18a]/5 transition-colors group">
                                <td className="py-10 text-xs font-bold text-[#344e41]/60 font-mono">{t.id}</td>
                                <td className="py-10 text-3xl group-hover:text-[#344e41] transition-colors">{t.name}</td>
                                <td className="py-10 text-sm opacity-60 font-medium italic">{t.affinity}</td>
                                <td className="py-10 text-sm font-black text-[#a3b18a]">{t.impact}</td>
                                <td className="py-10 font-black">{t.orders} LOGS</td>
                                <td className="py-10 text-right text-3xl text-[#344e41]">{t.spent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
