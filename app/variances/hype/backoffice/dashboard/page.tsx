"use client";

import React from 'react';

export default function HypeAdminDashboard() {
    return (
        <div className="min-h-screen bg-black text-white font-mono italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-black border-r-8 border-white p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-white text-black font-black flex items-center justify-center text-4xl -skew-x-12">H_A</div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase -skew-x-12">GRID_CONTROL.</h2>
                    <nav className="space-y-8 text-xl font-black uppercase tracking-tighter">
                        <a href="#" className="block bg-white text-black px-4 py-1 -skew-x-6">01_METRICS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">02_INVENTORY</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">03_DISPATCH</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">04_OPERATIVES</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">05_LOGS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.5em] -rotate-90 origin-left translate-y-24 translate-x-4">
                    DISRUPTIVE_ENGINE_v3.02
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32">
                <header className="flex justify-between items-start border-b-8 border-white pb-12">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">CORE_OVERSIGHT // GRID_SYNC_LIVE</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-none -skew-x-12">THE_MACHINE_STATS.</h1>
                    </div>
                    <button className="px-16 py-6 bg-white text-black text-4xl font-black uppercase tracking-tighter -skew-x-12 hover:scale-110 transition-transform">ADD_DROP</button>
                </header>

                <div className="grid grid-cols-4 gap-8">
                    <div className="bg-white text-black p-12 -skew-y-1 shadow-[20px_20px_0px_rgba(255,255,255,0.2)]">
                        <p className="text-[12px] font-black uppercase tracking-widest bg-black text-white px-4 py-1 inline-block mb-8">GRID_REVENUE</p>
                        <h3 className="text-7xl font-black tracking-tighter">$840K</h3>
                        <p className="text-xl font-black mt-4">+22%_UP</p>
                    </div>
                    <div className="bg-black text-white p-12 border-4 border-white transform rotate-1">
                        <p className="text-[12px] font-black uppercase tracking-widest opacity-40 mb-8">DROP_EFFICIENCY</p>
                        <h3 className="text-7xl font-black tracking-tighter">98%</h3>
                        <p className="text-xl font-black mt-4">SYNC_MAX</p>
                    </div>
                    <div className="bg-white text-black p-12 -rotate-1">
                        <p className="text-[12px] font-black uppercase tracking-widest bg-black text-white px-4 py-1 inline-block mb-8">ACTIVE_OPERATIVES</p>
                        <h3 className="text-7xl font-black tracking-tighter">8.2K</h3>
                        <p className="text-xl font-black mt-4">JOIN_GRID</p>
                    </div>
                    <div className="bg-black text-white p-12 border-4 border-white -skew-x-6">
                        <p className="text-[12px] font-black uppercase tracking-widest opacity-40 mb-8">SYSTEM_STRESS</p>
                        <h3 className="text-7xl font-black tracking-tighter">LOW</h3>
                        <p className="text-xl font-black mt-4">STABLE_FLOW</p>
                    </div>
                </div>

                <section className="border-8 border-white p-16 space-y-16">
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter -skew-x-6">PRIMARY_LOGS.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-2xl font-black uppercase tracking-tighter border-b-8 border-white">
                                <th className="pb-8">OP_ID</th>
                                <th className="pb-8">DROP</th>
                                <th className="pb-8">LOCATION</th>
                                <th className="pb-8">SATURATION</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase">
                            <tr className="border-b-4 border-white/10 group hover:bg-white hover:text-black transition-colors">
                                <td className="py-10">#OP-9902</td>
                                <td className="py-10">STEEL_SQUAD_01</td>
                                <td className="py-10">BERLIN_GRID</td>
                                <td className="py-10">CONFIRMED</td>
                            </tr>
                            <tr className="border-b-4 border-white/10 group hover:bg-white hover:text-black transition-colors">
                                <td className="py-10">#OP-9884</td>
                                <td className="py-10">TECH_CHASSIS_V8</td>
                                <td className="py-10">NYC_CORE</td>
                                <td className="py-10">TRANSMIT</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
