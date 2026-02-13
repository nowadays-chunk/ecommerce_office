"use client";

import React from 'react';

const operators = [
    { id: 'OP-01', alias: 'Z-Rex', clout: 'Level_4', purchases: 12, spent: '$5,240', status: 'VERIFIED' },
    { id: 'OP-02', alias: 'Neon_Pulse', clout: 'Level_1', purchases: 1, spent: '$65', status: 'BANNED' },
    { id: 'OP-03', alias: 'Void_Main', clout: 'Level_9', purchases: 42, spent: '$22,400', status: 'OG_MEMBER' },
];

export default function HypeAdminOperators() {
    return (
        <div className="p-12 space-y-20 bg-[#f1f1f1] min-h-screen border-l-8 border-black">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-black pb-12">
                <div className="space-y-4">
                    <div className="text-xs font-black bg-black text-white px-3 py-1 inline-block uppercase italic tracking-widest">Community_Network // Ops</div>
                    <h1 className="text-7xl font-black italic uppercase tracking-tighter leading-none">OPERATOR_NETWORK</h1>
                </div>
                <button className="px-12 py-8 border-8 border-black text-black text-2xl font-black italic uppercase tracking-tighter hover:bg-black hover:text-white transition-all transform hover:rotate-2">
                    RECRUIT_NEW_OP
                </button>
            </header>

            {/* Brutalist Grid of Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-8 border-black">
                <div className="p-12 space-y-4 bg-white border-r-8 border-black">
                    <p className="text-[10px] font-black uppercase opacity-40 italic">ACTIVE_USER_NODES</p>
                    <p className="text-6xl font-black italic tracking-tighter">1,204,420</p>
                </div>
                <div className="p-12 space-y-4 bg-[#facc15] border-r-8 border-black">
                    <p className="text-[10px] font-black uppercase opacity-40 italic">CLOUT_INDEX_AVG</p>
                    <p className="text-6xl font-black italic tracking-tighter leading-none">HIGH_TIER</p>
                </div>
                <div className="p-12 space-y-4 bg-black text-white">
                    <p className="text-[10px] font-black uppercase opacity-40 italic">BLACKLIST_TOTAL</p>
                    <p className="text-6xl font-black italic tracking-tighter">42,001</p>
                </div>
            </div>

            <div className="bg-white border-8 border-black overflow-hidden relative">
                <table className="w-full text-left">
                    <thead className="bg-black text-[#facc15] text-xs font-black uppercase tracking-widest">
                        <tr>
                            <th className="p-10">OP_HASH</th>
                            <th className="p-10">ALIAS</th>
                            <th className="p-10">CLOUT_TIER</th>
                            <th className="p-10">SUCCESSFUL_DROPS</th>
                            <th className="p-10">LIFETIME_VALUE</th>
                            <th className="p-10 text-right">ACCESS_STATUS</th>
                        </tr>
                    </thead>
                    <tbody className="text-2xl font-black italic uppercase tracking-tighter text-black">
                        {operators.map(op => (
                            <tr key={op.id} className="border-b-8 border-black hover:bg-black hover:text-[#facc15] transition-all group">
                                <td className="p-10 text-xs font-mono opacity-40 font-bold">{op.id}</td>
                                <td className="p-10">{op.alias}</td>
                                <td className="p-10 text-lg">{op.clout}</td>
                                <td className="p-10 font-mono italic">{op.purchases}</td>
                                <td className="p-10 text-[#facc15] group-hover:text-white">{op.spent}</td>
                                <td className="p-10 text-right">
                                    <span className={`px-6 py-2 border-4 border-black text-xs font-black tracking-[0.2em] group-hover:border-white ${op.status === 'BANNED' ? 'bg-red-500 text-white' :
                                            op.status === 'OG_MEMBER' ? 'bg-[#facc15] text-black' : 'bg-white text-black'
                                        }`}>
                                        {op.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
