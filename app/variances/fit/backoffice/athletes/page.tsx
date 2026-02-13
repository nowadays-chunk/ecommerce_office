"use client";

import React from 'react';

const athletes = [
    { id: 'ATH-01', alias: 'Jordan_Run', tier: 'Pro_Elite', activity: 'Active', kits: 12, spent: '$5,240' },
    { id: 'ATH-02', alias: 'Sarah_Sprint', tier: 'Challenger', activity: 'Idle', kits: 2, spent: '$420' },
    { id: 'ATH-03', alias: 'Mike_Power', tier: 'Legend', activity: 'Active', kits: 42, spent: '$22,400' },
];

export default function FitAdminAthletes() {
    return (
        <div className="p-12 space-y-16 bg-white text-black italic min-h-screen border-l-8 border-black">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-black pb-12">
                <div className="space-y-4">
                    <div className="text-[10px] font-black bg-black text-white px-4 py-1 inline-block uppercase italic tracking-[0.5em]">Network_Ops // Performance</div>
                    <h1 className="text-7xl font-black tracking-tighter leading-none text-black">ATHLETE_ROSTER.</h1>
                </div>
                <button className="px-10 py-5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-[#ff3e3e] transition-all transform hover:-rotate-2 shadow-2xl">
                    ONBOARD_NEW_PRO
                </button>
            </header>

            <div className="grid md:grid-cols-3 gap-0 border-8 border-black">
                <div className="space-y-4 p-12 hover:bg-black hover:text-white transition-all cursor-crosshair group">
                    <h3 className="text-[10px] font-black uppercase opacity-40 group-hover:opacity-100">Total Personnel</h3>
                    <p className="text-6xl font-black italic tracking-tighter">1,204</p>
                </div>
                <div className="space-y-4 p-12 bg-black text-white hover:bg-white hover:text-black transition-all cursor-crosshair group">
                    <h3 className="text-[10px] font-black uppercase opacity-40 group-hover:opacity-100 italic">Global Readiness</h3>
                    <p className="text-6xl font-black italic tracking-tighter">98.2%</p>
                </div>
                <div className="space-y-4 p-12 hover:bg-black hover:text-white transition-all cursor-crosshair group">
                    <h3 className="text-[10px] font-black uppercase opacity-40 group-hover:opacity-100">Sync Strength</h3>
                    <p className="text-6xl font-black italic tracking-tighter text-red-600">PEAK</p>
                </div>
            </div>

            <div className="bg-white border-8 border-black shadow-[40px_40px_0px_0px_rgba(0,0,0,0.05)] overflow-hidden p-8">
                <table className="w-full text-left">
                    <thead className="text-[10px] font-black uppercase tracking-widest border-b-4 border-black">
                        <tr>
                            <th className="pb-8">Athlete_Hash</th>
                            <th className="pb-8">Alias_Entity</th>
                            <th className="pb-8">Performance_Tier</th>
                            <th className="pb-8">Kit_Count</th>
                            <th className="pb-8">Vitality</th>
                            <th className="pb-8 text-right">Life_Contribution</th>
                        </tr>
                    </thead>
                    <tbody className="text-2xl font-black italic uppercase tracking-tighter text-black">
                        {athletes.map((a) => (
                            <tr key={a.id} className="border-b-4 border-black hover:bg-black hover:text-white transition-all group">
                                <td className="py-10 text-xs font-mono opacity-40 font-bold">{a.id}</td>
                                <td className="py-10 text-4xl group-hover:translate-x-8 transition-transform duration-500">{a.alias}</td>
                                <td className="py-10 text-lg opacity-60 italic">{a.tier}</td>
                                <td className="py-10 font-black">{a.kits} DEPLOYS</td>
                                <td className="py-10">
                                    <span className={`px-4 py-1 border-4 border-black text-[10px] font-black group-hover:border-white ${a.activity === 'Active' ? 'bg-[#ff3e3e] text-white' : 'bg-white text-black'
                                        }`}>
                                        {a.activity}
                                    </span>
                                </td>
                                <td className="py-10 text-right text-4xl">{a.spent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
