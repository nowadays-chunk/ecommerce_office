"use client";

import React from 'react';

export default function WildAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#fcfbf7] text-[#3d3d3d] font-sans flex">
            {/* Sidebar */}
            <aside className="w-80 bg-[#2d3a1f] text-white p-12 flex flex-col justify-between">
                <div className="space-y-16">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#a3b18a] rounded-[1rem] flex items-center justify-center text-2xl font-black">W</div>
                        <h2 className="text-2xl font-black tracking-tight italic">Wild_Watch</h2>
                    </div>
                    <nav className="space-y-6 text-sm font-bold uppercase tracking-widest italic">
                        <a href="#" className="block p-4 bg-[#a3b18a] text-[#2d3a1f] rounded-2xl">01_Base_Camp</a>
                        <a href="#" className="block p-4 border border-white/10 hover:border-[#a3b18a] transition-colors rounded-2xl">02_Equip_Stock</a>
                        <a href="#" className="block p-4 border border-white/10 hover:border-[#a3b18a] transition-colors rounded-2xl">03_Trail_Log</a>
                        <a href="#" className="block p-4 border border-white/10 hover:border-[#a3b18a] transition-colors rounded-2xl">04_Ranger_Net</a>
                        <a href="#" className="block p-4 border border-white/10 hover:border-[#a3b18a] transition-colors rounded-2xl">05_Eco_Protocol</a>
                    </nav>
                </div>
                <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.4em] flex flex-col items-center">
                    <span>TERRAIN_OS_v4.2</span>
                    <span className="mt-1">STABLE_OAK</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-start border-b-2 border-[#2d3a1f]/10 pb-12">
                    <div className="space-y-4">
                        <p className="text-xs font-black uppercase tracking-[0.5em] text-[#588157]">Expedition_Oversight // {new Date().toLocaleDateString()}</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic text-[#2d3a1f]">Field_Metrics.</h1>
                    </div>
                    <button className="px-16 py-6 bg-[#3a5a40] text-white text-xl font-bold uppercase tracking-tighter rounded-[2rem] hover:bg-[#a3b18a] hover:text-[#2d3a1f] transition-all shadow-xl">New_Expedition</button>
                </header>

                <div className="grid grid-cols-3 gap-12">
                    <div className="bg-white p-12 rounded-[3rem] shadow-xl border-l-[12px] border-[#a3b18a] space-y-6">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest">Expedition Revenue</p>
                        <h3 className="text-6xl font-black tracking-tighter text-[#2d3a1f]">$94.2K</h3>
                        <p className="text-sm font-bold text-[#588157]">+14.2% Ascent</p>
                    </div>
                    <div className="bg-white p-12 rounded-[3rem] shadow-xl border-l-[12px] border-[#344e41] space-y-6">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest">Trail Coverage</p>
                        <h3 className="text-6xl font-black tracking-tighter text-[#2d3a1f]">842km</h3>
                        <p className="text-sm font-bold text-[#3a5a40]">ACTIVE_EXPLORATION</p>
                    </div>
                    <div className="bg-white p-12 rounded-[3rem] shadow-xl border-l-[12px] border-[#dad7cd] space-y-6">
                        <p className="text-xs font-black opacity-40 uppercase tracking-widest">Ranger Activity</p>
                        <h3 className="text-6xl font-black tracking-tighter text-[#2d3a1f]">18</h3>
                        <p className="text-sm font-bold text-[#3d3d3d]/60">FULL_SQUAD_DEPLOYED</p>
                    </div>
                </div>

                <section className="bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-[#a3b18a]/10 space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#2d3a1f]">Recent_Sightings_&_Drops.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-xs font-black uppercase tracking-widest text-[#2d3a1f]/20 border-b-2 border-[#2d3a1f]/10">
                                <th className="pb-8">Log_ID</th>
                                <th className="pb-8">Explorer</th>
                                <th className="pb-8">Terrain</th>
                                <th className="pb-8">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-2xl font-bold uppercase italic tracking-tighter">
                            <tr className="border-b border-[#2d3a1f]/5 group hover:bg-[#a3b18a]/10 transition-colors">
                                <td className="py-10 text-[#588157]">#WD-8802</td>
                                <td className="py-10">B. Grylls</td>
                                <td className="py-10">Obsidian_Pass</td>
                                <td className="py-10 text-[#3a5a40]">Secured</td>
                            </tr>
                            <tr className="border-b border-[#2d3a1f]/5 group hover:bg-[#a3b18a]/10 transition-colors">
                                <td className="py-10 text-[#588157]">#WD-8794</td>
                                <td className="py-10">A. Honnold</td>
                                <td className="py-10">Granite_Wall_V8</td>
                                <td className="py-10 text-[#3a5a40]">In_Field</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
