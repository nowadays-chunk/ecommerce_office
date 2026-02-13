"use client";

import React from 'react';

const players = [
    { id: 'PLR-01', alias: 'Z-REX_PRO', rank: 'Apex_Legend', kits: 42, spent: '$12,400', status: 'Online' },
    { id: 'PLR-02', alias: 'NEON_PULSE', rank: 'Diamond', kits: 12, spent: '$420', status: 'Away' },
    { id: 'PLR-03', alias: 'VOID_MAIN', rank: 'Master', kits: 88, spent: '$5,200', status: 'Online' },
];

export default function ApexAdminPlayers() {
    return (
        <div className="p-12 space-y-16 bg-[#050505] text-[#00ff9d] min-h-screen border-l-4 border-[#00ff9d]/20 font-mono italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-4 border-white/5 pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black text-[#00ff9d] uppercase tracking-[0.5em]">The_Grid // Players</div>
                    <h1 className="text-7xl font-black italic tracking-tighter leading-none text-white skew-x-[-12deg]">PLAYER_NETWORK.</h1>
                </div>
                <button className="px-10 py-5 bg-[#00ff9d] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all transform hover:-rotate-1 shadow-2xl skew-x-[-12deg]">
                    INVITE_RECRUIT
                </button>
            </header>

            <div className="bg-[#0a0a0a] border-4 border-white/5 p-8 shadow-2xl relative overflow-hidden skew-x-[-2deg]">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#00ff9d]/5 blur-[100px] rounded-full"></div>
                <div className="grid md:grid-cols-3 gap-12 mb-12 border-b-2 border-white/5 pb-12 relative z-10">
                    <div className="space-y-4 p-8 bg-black/40 border border-[#00ff9d]/10">
                        <h3 className="text-[10px] font-black text-[#00ff9d] uppercase tracking-widest">Active Players</h3>
                        <p className="text-5xl font-black text-white italic">12,042</p>
                    </div>
                    <div className="space-y-4 p-8 bg-black/40 border border-[#00ff9d]/10">
                        <h3 className="text-[10px] font-black text-[#00ff9d] uppercase tracking-widest">Hardware Sync</h3>
                        <p className="text-5xl font-black text-[#00ff9d] italic">99.4%</p>
                    </div>
                    <div className="space-y-4 p-8 bg-black/40 border border-[#00ff9d]/10">
                        <h3 className="text-[10px] font-black text-[#00ff9d] uppercase tracking-widest">Global Status</h3>
                        <p className="text-5xl font-black italic text-white/20 uppercase">DOMINATING</p>
                    </div>
                </div>

                <table className="w-full text-left relative z-10">
                    <thead className="text-[10px] font-black uppercase tracking-widest text-[#00ff9d]/20 border-b-2 border-white/5">
                        <tr>
                            <th className="pb-8">Node_ID</th>
                            <th className="pb-8">Bearer</th>
                            <th className="pb-8">Combat_Rank</th>
                            <th className="pb-8">Loadouts</th>
                            <th className="pb-8">Status</th>
                            <th className="pb-8 text-right">Investment</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-black italic tracking-tighter text-white">
                        {players.map((p) => (
                            <tr key={p.id} className="border-b-2 border-white/5 hover:bg-[#00ff9d]/5 transition-colors group">
                                <td className="py-10 text-xs font-black text-[#00ff9d]/60 font-mono uppercase">{p.id}</td>
                                <td className="py-10 text-3xl group-hover:text-[#00ff9d] transition-colors uppercase italic">{p.alias}</td>
                                <td className="py-10 text-sm opacity-40 font-bold uppercase">{p.rank}</td>
                                <td className="py-10 font-light">{p.kits} Units</td>
                                <td className="py-10">
                                    <span className={`px-4 py-1 border-2 border-[#00ff9d]/20 text-[10px] font-black italic uppercase skew-x-[-12deg] ${p.status === 'Online' ? 'bg-[#00ff9d] text-black border-0' : 'bg-transparent text-white opacity-40'
                                        }`}>
                                        {p.status}
                                    </span>
                                </td>
                                <td className="py-10 text-right text-3xl text-[#00ff9d]">{p.spent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
