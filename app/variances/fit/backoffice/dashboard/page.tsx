"use client";

import React from 'react';

export default function FitAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#ffffff] font-sans flex">
            {/* Sidebar */}
            <aside className="w-80 bg-[#111111] border-r border-white/5 p-12 flex flex-col justify-between">
                <div className="space-y-16">
                    <div className="text-5xl font-black italic tracking-tighter text-[#ccff00] uppercase">Fit_Ctrl</div>
                    <nav className="space-y-6 text-sm font-black uppercase tracking-tighter italic">
                        <a href="#" className="block p-4 bg-[#ccff00] text-black">Arena_Oversight</a>
                        <a href="#" className="block p-4 border border-white/10 hover:border-[#ccff00] transition-colors">Gear_Rack</a>
                        <a href="#" className="block p-4 border border-white/10 hover:border-[#ccff00] transition-colors">Session_Stats</a>
                        <a href="#" className="block p-4 border border-white/10 hover:border-[#ccff00] transition-colors">Roster_List</a>
                        <a href="#" className="block p-4 border border-white/10 hover:border-[#ccff00] transition-colors">Core_Settings</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-[0.5em]">
                    ATHLETE_OS_v8.0.1
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b-2 border-white/10 pb-12">
                    <div className="space-y-4">
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-[#ccff00]">Performance_Log // {new Date().toLocaleDateString()}</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-none italic">Power_Metrics.</h1>
                    </div>
                    <button className="px-16 py-6 bg-white text-black text-2xl font-black uppercase tracking-tighter italic hover:bg-[#ccff00] transition-colors shadow-[0_0_50px_rgba(204,255,0,0.2)]">Initiate_Session</button>
                </header>

                <div className="grid grid-cols-3 gap-12">
                    <div className="bg-[#1a1a1a] p-12 border-l-8 border-[#ccff00] space-y-6 group hover:bg-[#222] transition-colors">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest">Session Revenue</p>
                        <h3 className="text-7xl font-black tracking-tighter">$142.8K</h3>
                        <p className="text-sm font-black text-[#ccff00]">Peak_Power +24%</p>
                    </div>
                    <div className="bg-[#1a1a1a] p-12 border-l-8 border-white space-y-6">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest">Peak Wattage</p>
                        <h3 className="text-7xl font-black tracking-tighter">1.2MW</h3>
                        <p className="text-sm font-black opacity-40">System_Stable</p>
                    </div>
                    <div className="bg-[#1a1a1a] p-12 border-l-8 border-[#ccff00] space-y-6">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest">Athlete Retention</p>
                        <h3 className="text-7xl font-black tracking-tighter">94%</h3>
                        <p className="text-sm font-black text-[#ccff00]">Zone_5_Endurance</p>
                    </div>
                </div>

                <section className="bg-[#111111] p-16 border border-white/5 space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#ccff00]">Live_Arena_Feed.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-xs font-black uppercase tracking-widest text-white/20 border-b border-white/10">
                                <th className="pb-8">Session_ID</th>
                                <th className="pb-8">Athlete</th>
                                <th className="pb-8">Intensity</th>
                                <th className="pb-8">Sync</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-black uppercase italic tracking-tighter">
                            <tr className="border-b border-white/5 group hover:bg-white/5">
                                <td className="py-10 text-white/40">#AT-9908</td>
                                <td className="py-10">L. Hamilton</td>
                                <td className="py-10">Endurance_X</td>
                                <td className="py-10 text-[#ccff00]">Active</td>
                            </tr>
                            <tr className="border-b border-white/5 group hover:bg-white/5">
                                <td className="py-10 text-white/40">#AT-9904</td>
                                <td className="py-10">M. Jordan</td>
                                <td className="py-10">Power_Lift_V2</td>
                                <td className="py-10 text-[#ccff00]">Recovery</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
