"use client";

import React from 'react';

const clients = [
    { id: 'CLI-01', name: 'Clara Veil', profile: 'Luminous', items: 42, spent: '$3,240', status: 'Muse' },
    { id: 'CLI-02', name: 'Elara Moon', profile: 'Satin', items: 12, spent: '$840', status: 'Radiant' },
    { id: 'CLI-03', name: 'Lyra Silk', profile: 'Velvet', items: 88, spent: '$5,200', status: 'Icon' },
];

export default function GlintAdminClients() {
    return (
        <div className="p-12 space-y-16 bg-[#fffafd] text-[#4a3a4a] min-h-screen border-l border-[#ff8fa3]/20">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-[#ff8fa3]/10 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black text-[#ff8fa3] uppercase tracking-[0.5em]">The_Collective // Clients</div>
                    <h1 className="text-6xl font-black italic tracking-tighter leading-none text-[#4a3a4a]">CLIENT_NETWORK.</h1>
                </div>
                <button className="px-10 py-5 border border-[#ff8fa3] text-[#ff8fa3] text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#ff8fa3] hover:text-white transition-all shadow-xl">
                    INVITE_NEW_GLOW
                </button>
            </header>

            <div className="bg-white border border-[#ff8fa3]/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#ff8fa3]/5 blur-[100px] rounded-full"></div>
                <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-[#ff8fa3]/5 pb-12 relative z-10">
                    <div className="space-y-4 p-8 bg-[#fffafd] rounded-[2rem] border border-[#ff8fa3]/5">
                        <h3 className="text-[10px] font-black text-[#ff8fa3] uppercase tracking-widest">Active Muses</h3>
                        <p className="text-5xl font-light italic text-[#4a3a4a]">1,204</p>
                    </div>
                    <div className="space-y-4 p-8 bg-[#fffafd] rounded-[2rem] border border-[#ff8fa3]/5">
                        <h3 className="text-[10px] font-black text-[#ff8fa3] uppercase tracking-widest">Aesthetic Mastery</h3>
                        <p className="text-5xl font-light italic text-[#d4af37]">98.4%</p>
                    </div>
                    <div className="space-y-4 p-8 bg-[#fffafd] rounded-[2rem] border border-[#ff8fa3]/5">
                        <h3 className="text-[10px] font-black text-[#ff8fa3] uppercase tracking-widest">Collective Glow</h3>
                        <p className="text-5xl font-black italic text-pink-400/20 italic">VIBRANT</p>
                    </div>
                </div>

                <table className="w-full text-left relative z-10">
                    <thead className="text-[10px] font-black uppercase tracking-widest text-[#4a3a4a]/30 border-b border-[#ff8fa3]/10">
                        <tr>
                            <th className="pb-8">Aura_Hash</th>
                            <th className="pb-8">ENTITY_NAME</th>
                            <th className="pb-8">PROFILE_FINISH</th>
                            <th className="pb-8">ACQUISITIONS</th>
                            <th className="pb-8">STATUS</th>
                            <th className="pb-8 text-right">LIFETIME_GLOW</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-light italic tracking-tighter text-[#4a3a4a]">
                        {clients.map((c) => (
                            <tr key={c.id} className="border-b border-[#ff8fa3]/5 hover:bg-[#fffafd] transition-colors group">
                                <td className="py-10 text-xs font-black text-[#ff8fa3]/60 font-mono">{c.id}</td>
                                <td className="py-10 text-3xl group-hover:text-[#ff8fa3] transition-colors uppercase">{c.name}</td>
                                <td className="py-10 text-sm opacity-60 font-medium italic">{c.profile}</td>
                                <td className="py-10 font-light">{c.items} UNITS</td>
                                <td className="py-10">
                                    <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#ff8fa3]/20 ${c.status === 'Muse' ? 'bg-[#ff8fa3] text-white border-0 shadow-lg' : 'bg-white'
                                        }`}>
                                        {c.status}
                                    </span>
                                </td>
                                <td className="py-10 text-right text-3xl text-[#d4af37]">{c.spent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
